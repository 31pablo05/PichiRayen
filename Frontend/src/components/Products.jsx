import React, { useState } from 'react';

const productosData = [
  {
    id: 1,
    nombre: 'Huevos',
    descripcion: 'Huevos frescos de campo, ricos en nutrientes y sabor.',
    imagenes: ['/assets/productswebp/19.webp', '/assets/productswebp/huevos2.webp'],
  },
  {
    id: 2,
    nombre: 'Verduras',
    descripcion: 'Verduras frescas, cultivadas de manera orgánica.',
    imagenes: [
      '/assets/productswebp/20.webp',
      '/assets/productswebp/26.webp',
      '/assets/productswebp/7.webp',
      '/assets/productswebp/8.webp',
      '/assets/productswebp/verd1.webp',
      '/assets/productswebp/verd3.webp',
      '/assets/productswebp/verd4.webp',
      '/assets/productswebp/verd5.webp',
      '/assets/productswebp/verd6.webp',
    ],
  },
  {
    id: 3,
    nombre: 'Visitas Guiadas',
    descripcion: 'Disfruta de una experiencia educativa para escuelas primarias.',
    imagenes: ['/assets/productswebp/9.webp', '/assets/productswebp/10.webp', '/assets/productswebp/visita.webp'],
  },
];

const Products = () => {
  return (
    <section id="productos" className="py-16 px-4 md:px-10 bg-transparent relative">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-20 py-4 bg-gradient-to-r from-[#b5cf2c] via-[#22c55e] to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-2xl tracking-tight animate-pulse text-center">
        Nuestros Productos
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {productosData.map((producto) => (
          <div
            key={producto.id}
            className="w-full max-w-[370px] relative overflow-hidden rounded-3xl shadow-2xl bg-white/80 backdrop-blur-md border border-[#b5cf2c]/30 hover:border-[#22c55e] transition-all duration-300 hover:scale-105 hover:shadow-green-200 group"
          >
            <div className="relative">
              <CarruselImagenes imagenes={producto.imagenes} />
              <span className="absolute top-3 left-3 bg-gradient-to-r from-[#b5cf2c] to-[#22c55e] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md opacity-90 group-hover:scale-110 transition-transform">{producto.nombre}</span>
            </div>
            <div className="p-5 text-center flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-[#22c55e] group-hover:text-[#0ea5e9] transition-colors duration-300 mb-1 drop-shadow-lg">{producto.nombre}</h3>
              <p className="text-base text-gray-700 font-medium mb-2 drop-shadow-sm">{producto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Efecto decorativo de fondo */}
      {/*
      <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-b from-[#b5cf2c]/30 to-transparent pointer-events-none blur-2xl opacity-60"></div>
      <div className="absolute -bottom-20 right-0 w-full h-40 bg-gradient-to-t from-[#0ea5e9]/30 to-transparent pointer-events-none blur-2xl opacity-60"></div>
      */}
    </section>
  );
};

const CarruselImagenes = ({ imagenes }) => {
  const [imagenActual, setImagenActual] = useState(0);

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev + 1) % imagenes.length);
  };

  const imagenAnterior = () => {
    setImagenActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden h-[180px] md:h-[220px] lg:h-[260px] bg-gradient-to-br from-[#e5f9e0] via-[#f7ffe0] to-[#e0f7fa] group">
      <button
        className="absolute top-1/2 -translate-y-1/2 left-2.5 bg-[#22c55e]/80 text-white p-2 text-2xl z-10 rounded-full shadow-lg opacity-80 hover:opacity-100 hover:scale-125 transition-all duration-300 border-2 border-white"
        onClick={imagenAnterior}
        aria-label="Anterior"
      >
        ❮
      </button>
      <img
        src={imagenes[imagenActual]}
        alt="Producto"
        className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-[#b5cf2c]/30 group-hover:border-[#22c55e] transition-all duration-300"
      />
      <button
        className="absolute top-1/2 -translate-y-1/2 right-2.5 bg-[#22c55e]/80 text-white p-2 text-2xl z-10 rounded-full shadow-lg opacity-80 hover:opacity-100 hover:scale-125 transition-all duration-300 border-2 border-white"
        onClick={siguienteImagen}
        aria-label="Siguiente"
      >
        ❯
      </button>
      {/* Indicadores de slide */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {imagenes.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === imagenActual ? 'bg-[#22c55e] scale-125 shadow-lg' : 'bg-gray-300/60'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
