import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-12 px-6 overflow-hidden">
      {/* Efectos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#b5cf2c] via-[#22c55e] to-[#0ea5e9]"></div>
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#b5cf2c]/20 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#22c55e]/20 rounded-full blur-2xl opacity-60"></div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#b5cf2c] to-[#22c55e] bg-clip-text text-transparent mb-3">
              Pichi Rayen
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Productos frescos de campo, cultivados con amor y dedicación en Trelew, Chubut.
            </p>
          </div>
          
          {/* Enlaces rápidos */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-[#22c55e] mb-3">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="text-gray-300 hover:text-[#b5cf2c] transition-colors duration-300">Inicio</a></li>
              <li><a href="#productos" className="text-gray-300 hover:text-[#b5cf2c] transition-colors duration-300">Productos</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#b5cf2c] transition-colors duration-300">Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-[#b5cf2c] transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>
          
          {/* Información de contacto */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-[#22c55e] mb-3">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Alejandro Maiz, Trelew</p>
              <p>Chubut, Argentina</p>
              <p className="text-[#b5cf2c]">+54 9 280 464-4505</p>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria con efecto gradiente */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#b5cf2c]/50 to-transparent mb-6"></div>
        
        {/* Copyright y desarrollador */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-2 md:mb-0">
            <p>© {new Date().getFullYear()} Pichi Rayen. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-2">
            <span>Desarrollado con</span>
            <span className="text-red-500 text-lg animate-pulse">♥</span>
            <span>por</span>
            <span className="text-[#b5cf2c] font-semibold hover:text-[#22c55e] transition-colors duration-300 cursor-pointer">
              Pablo Proboste
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
