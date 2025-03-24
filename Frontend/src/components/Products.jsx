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
    <section id="productos" className="py-10 px-5 text-center bg-white/10">
      <h2 className="text-4xl font-bold mb-32 py-2 bg-gradient-to-r from-[#b5cf2c] to-[#22c55e] bg-clip-text text-transparent drop-shadow-md">
        Nuestros Productos
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        {productosData.map((producto) => (
          <div
            key={producto.id}
            className="w-full max-w-[350px] relative overflow-hidden rounded-lg shadow-lg bg-white/60 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <CarruselImagenes imagenes={producto.imagenes} />
            </div>
            <div className="p-2 text-center">
              <h3 className="text-lg mb-2">{producto.nombre}</h3>
              <p className="text-sm">{producto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
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
    <div className="relative flex items-center justify-center overflow-hidden h-[120px] md:h-[150px] lg:h-[200px]">
      <button
        className="absolute top-1/2 -translate-y-1/2 left-2.5 bg-black/50 text-white p-2 text-xl z-10 transition-transform duration-300 hover:scale-110"
        onClick={imagenAnterior}
      >
        ❮
      </button>
      <img
        src={imagenes[imagenActual]}
        alt="Producto"
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      <button
        className="absolute top-1/2 -translate-y-1/2 right-2.5 bg-black/50 text-white p-2 text-xl z-10 transition-transform duration-300 hover:scale-110"
        onClick={siguienteImagen}
      >
        ❯
      </button>
    </div>
  );
};

export default Products;
