import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Meu Blog</h1>
      </header>
      <main className="flex-1 p-4">
        {children}
      </main>
      <footer className="bg-gray-200 text-center py-4">
        &copy; {new Date().getFullYear()} Meu Blog. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Layout;