import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

const slides = [
  { type: 'video', src: '/assets/videeos/videochacra.mp4', alt: 'Video de presentación' },
  { type: 'image', src: '/assets/1.png', alt: 'Imagen 1' },
  { type: 'image', src: '/assets/2.png', alt: 'Imagen 2' },
  { type: 'image', src: '/assets/3.png', alt: 'Imagen 3' },
  { type: 'image', src: '/assets/4.png', alt: 'Imagen 4' },
  { type: 'image', src: '/assets/5.png', alt: 'Imagen 5' },
  { type: 'image', src: '/assets/6.png', alt: 'Imagen 6' },
  { type: 'image', src: '/assets/18.png', alt: 'Imagen 8' },
  { type: 'image', src: '/assets/14.png', alt: 'Imagen 14' },
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
    <div className="splide mx-auto my-8 max-w-6xl rounded-lg overflow-hidden shadow-lg">
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
