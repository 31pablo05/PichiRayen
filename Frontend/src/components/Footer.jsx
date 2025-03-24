import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-gray-800 text-white">
      <p>© {new Date().getFullYear()} Mi Chacra. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
