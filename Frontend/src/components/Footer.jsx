import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-gradient-to-r from-[#b5cf2c] to-[#22c55e] text-white">
      <p>© {new Date().getFullYear()} Pichi Rayen. Todos los derechos reservados.</p>
      <p className="text-sm mt-2">Desarrollado por Pablo Proboste</p>
    </footer>
  );
};

export default Footer;
