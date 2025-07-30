import React, { useEffect, useRef } from 'react';
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
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      new Splide(splideRef.current, {
        type: 'fade',
        height: '100vh',
        heightRatio: 1,
        arrows: true,
        pagination: true,
        cover: true,
        rewind: true,
        speed: 900,
        interval: 5000,
        autoplay: true,
        pauseOnHover: true,
        breakpoints: {
          640: { height: '60vw', heightRatio: 0.6 }, // Menos alto en mobile
          768: { height: '70vw', heightRatio: 0.7 },
          1024: { height: '90vh', heightRatio: 0.9 },
        },
      }).mount();
    }
  }, []);

  return (
    <div
      ref={splideRef}
      className="splide w-screen relative rounded-none overflow-hidden border-0 sm:shadow-2xl h-[60vw] sm:h-[60vw] md:h-[70vw] lg:h-screen mt-0"
      style={{ minWidth: '100vw' }}
      aria-label="Galería de la chacra"
    >
      {/* Ajuste de posición de flechas y paginación para mobile */}
      <style>{`
        .splide__arrow {
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 50 !important;
        }
        .splide__pagination {
          display: none !important;
        }
        @media (max-width: 640px) {
          .splide__arrow {
            position: absolute !important;
            top: 30% !important;
            bottom: unset !important;
            transform: translateY(-50%) !important;
            z-index: 50 !important;
          }
          .splide__arrow--prev {
            left: 1rem !important;
            right: unset !important;
          }
          .splide__arrow--next {
            right: 1rem !important;
            left: unset !important;
          }
          .splide__track {
            position: relative !important;
            margin: 0 !important;
            padding: 0 !important;
            height: 60vw !important;
          }
          .splide__pagination {
            display: none !important;
          }
          .splide {
            padding: 0 !important;
            margin: 0 !important;
            height: 60vw !important;
            box-shadow: none !important;
          }
          .splide__slide {
            height: 60vw !important;
          }
        }
        @media (min-width: 641px) {
          .splide__arrow {
            top: 50% !important;
            transform: translateY(-50%) !important;
          }
        }
      `}</style>
      <div className="splide__track">
        <div className="splide__list">
          {slides.map((slide, index) => (
            <div
              className="splide__slide flex justify-center items-center w-screen h-full"
              key={index}
            >
              {slide.type === 'video' ? (
                <video
                  className="object-cover border-none w-full h-full sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full max-h-[100vh] max-w-[100vw] sm:max-h-[60vw] sm:max-w-full rounded-none"
                  src={slide.src}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  alt={slide.alt}
                  style={{ background: '#e5f9e0' }}
                />
              ) : (
                <img
                  className="object-cover border-none w-full h-full sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full max-h-[100vh] max-w-[100vw] sm:max-h-[60vw] sm:max-w-full rounded-none"
                  src={slide.src}
                  alt={slide.alt}
                  style={{ background: '#e5f9e0' }}
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
