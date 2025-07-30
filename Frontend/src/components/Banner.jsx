import React from 'react';
import Carrusel from './Carrusel';
const Banner = () => {
  return (
    <section id="inicio" className="w-full pt-0 md:pt-1 pb-0 relative flex flex-col items-center justify-start">
      {/* Imagen principal de la chacra */}
      <img
        src="/assets/Bannertransp.svg"
        alt="Imagen principal de la chacra"
        className="max-w-[900px] w-full h-auto object-contain transition-opacity duration-1000 ease-in-out bg-transparent mt-0 mb-0"
        style={{ background: 'transparent' }}
      />
      <div className="-mt-42 sm:-mt-32 md:-mt-40 lg:-mt-8">
                  <Carrusel />
                </div>
    </section>
  );
};

export default Banner;
