import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Novo estado para erro

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const { data, error: supabaseError } = await supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (supabaseError) {
          setError(supabaseError.message);
        } else {
          setPosts(data);
        }
      } catch (err) {
        setError('Falha ao conectar com o servidor.');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p>Carregando posts...</p>;
  
  // Se houver erro, ele aparecerá aqui
  if (error) return (
    <div style={{ color: 'red', padding: '20px', border: '1px solid red' }}>
      <h3>⚠️ Erro ao carregar posts:</h3>
      <p>{error}</p>
    </div>
  );

  return (
    <div>
      {posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;