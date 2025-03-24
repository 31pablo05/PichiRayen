import React from 'react';
import Carrusel from './Carrusel';

const Banner = () => {
  return (
    <section id="home" className="w-full pt-16">
      {/* Imagen principal de la chacra */}
      <div className="w-full h-[300px] md:h-[700px] overflow-hidden relative">
        <img
          src="/assets/Banner.png"
          alt="Imagen principal de la chacra"
          className="w-full h-full object-contain md:object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>

      {/* Carrusel con video e imágenes */}
      <Carrusel />
    </section>
  );
};

export default Banner;
