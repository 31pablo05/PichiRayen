import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUserFriends, FaLeaf, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

  // Detecta el scroll para ajustar el fondo y sombra del navbar
  const handleScroll = useCallback(() => {
    setScrolling(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll]);

  // Elementos del menú SPA
  const menuItems = [
    { id: 'inicio', icon: <FaHome />, label: 'Inicio', offset: -70 },
    { id: 'quienes-somos', icon: <FaUserFriends />, label: 'Quiénes Somos', offset: -70 },
    { id: 'servicios', icon: <FaLeaf />, label: 'Servicios', offset: -70 },
    { id: 'contacto', icon: <FaEnvelope />, label: 'Contacto', offset: -70 }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling
          ? 'bg-white/90 shadow-lg backdrop-blur-md py-1 border-b border-green-200'
          : 'bg-gradient-to-r from-[#b5cf2c] to-[#22c55e] py-3'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo SVG y nombre alineados a la izquierda */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 cursor-pointer focus:outline-none"
            aria-label="Ir al inicio"
          >
            <img
              src="/assets/logoSvgNew.svg"
              alt="Logo Pichi Rayen"
              className="w-28 h-28 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              style={{ filter: 'drop-shadow(0 2px 6px #b5cf2c)' }}
            />
            
          </button>

          {/* Botón menú hamburguesa (visible en móviles) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-green-800 focus:outline-none ml-auto"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <div className="w-8 h-8 flex flex-col justify-between items-center">
              <span className={`block h-1 w-8 bg-green-800 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-1 w-8 bg-green-800 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-1 w-8 bg-green-800 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Menú de navegación alineado a la derecha */}
          <nav className="hidden lg:flex flex-1 justify-end">
            <ul className="flex flex-row items-center gap-2 lg:gap-6">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={item.offset}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-base font-semibold text-green-900 hover:bg-green-100 hover:text-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menú móvil desplegable */}
          {isOpen && !isLargeScreen && (
            <div className="absolute left-0 right-0 top-24 bg-white/95 shadow-2xl z-50 flex flex-col items-center justify-start pt-6 pb-6 animate-fade-in border-b border-green-200">
              <ul className="flex flex-col gap-4 w-full max-w-xs mx-auto">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={item.offset}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-6 py-4 rounded-2xl text-lg font-bold text-green-900 hover:bg-green-100 hover:text-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 w-full justify-center shadow-sm hover:shadow-md"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
