import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // Detecta el scroll para ajustar el padding y sombra del navbar
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

  // Elementos del menú
  const menuItems = [
    { id: 'inicio', icon: <FaHome />, label: 'Inicio', offset: -70 },
    { id: 'quienes-somos', icon: <FaUser />, label: 'Quiénes Somos', offset: -70 },
    { id: 'productos', icon: <FaBriefcase />, label: 'Productos', offset: -70 },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contacto', offset: -70 }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling 
          ? 'bg-gradient-to-r from-[#b5cf2c] to-[#22c55e] py-2 shadow-md'
          : 'bg-gradient-to-r from-[#b5cf2c] to-[#22c55e] py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo con efecto de zoom al pasar el cursor */}
          <motion.button
            onClick={scrollToTop}
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src="/assets/logopichirayen.webp"
              alt="Logo"
              className="w-24 h-24 rounded-[10px] shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
            />
          </motion.button>

          {/* Botón menú hamburguesa (visible en móviles) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-black focus:outline-none"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-black transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-black transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>

          {/* Menú de navegación */}
          <AnimatePresence>
            {(isLargeScreen || isOpen) && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`${isLargeScreen 
                    ? 'flex' 
                    : 'absolute top-full left-0 w-full bg-gradient-to-r from-[#b5cf2c] to-[#22c55e]'
                  } lg:relative lg:w-auto lg:bg-transparent lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0`}
              >
                {menuItems.map((item) => (
                  <motion.li
                    key={item.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={item.offset}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 text-black hover:text-gray-800 transition-colors cursor-pointer"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
