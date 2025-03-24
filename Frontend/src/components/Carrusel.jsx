import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

const slides = [
  { type: 'video', src: '/assets/videeos/videochacra.mp4', alt: 'Video de presentación' },
  { type: 'image', src: '/assets/img webp/1.webp', alt: 'Imagen 1' },
  { type: 'image', src: '/assets/img webp/2.webp', alt: 'Imagen 2' },
  { type: 'image', src: '/assets/img webp/3.webp', alt: 'Imagen 3' },
  { type: 'image', src: '/assets/img webp/4.webp', alt: 'Imagen 4' },
  { type: 'image', src: '/assets/img webp/5.webp', alt: 'Imagen 5' },
  { type: 'image', src: '/assets/img webp/6.webp', alt: 'Imagen 6' },
  { type: 'image', src: '/assets/img webp/16.webp', alt: 'Imagen 16' },
  { type: 'image', src: '/assets/img webp/18.webp', alt: 'Imagen 18' },
];

const Carrusel = () => {
  useEffect(() => {
    new Splide('.splide', {
      type: 'fade',
      heightRatio: 0.7,
      arrows: true,
      pagination: false,
      cover: true,
      rewind: true,
    }).mount();
  }, []);

  return (
    <div className="splide mx-auto my-8 max-w-6xl rounded-lg overflow-hidden shadow-lg ">
      <div className="splide__track">
        <div className="splide__list">
          {slides.map((slide, index) => (
            <div className="splide__slide flex justify-center items-center" key={index}>
              {slide.type === 'video' ? (
                <video
                  className="w-full h-full object-cover rounded-lg"
                  src={slide.src}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  alt={slide.alt}
                />
              ) : (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={slide.src}
                  alt={slide.alt}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
