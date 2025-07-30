import React, { lazy, Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { useImagePreloader } from './hooks/useNavigation';

// Lazy loading de componentes para mejor performance
const Banner = lazy(() => import('./components/Banner'));
const Carrusel = lazy(() => import('./components/Carrusel'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const Products = lazy(() => import('./components/Products'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  // Precargar imágenes importantes
  useImagePreloader([
    '/assets/fondoPagina.webp',
    '/assets/logopichirayen.webp',
    '/assets/Banner.webp'
  ]);
  // Configurar metadatos para SEO
  useEffect(() => {
    document.title = 'Pichi Rayen - Productos Orgánicos';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Pichi Rayen - Productos orgánicos frescos y naturales. Agricultura sustentable y responsable con el medio ambiente.'
    );
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{
          backgroundImage: 'url(/assets/fondoPagina.webp)',
        }}
      >
        {/* Skip to content para accesibilidad */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50">
          Saltar al contenido principal
        </a>
        
        <Navbar />
        
        <main id="main-content" className="scroll-smooth" role="main">
          <Suspense fallback={<LoadingSpinner message="Cargando inicio..." />}>
            <section 
              id="inicio" 
              className="min-h-screen"
              aria-label="Sección de inicio"
            >
              <Banner />
            </section>
          </Suspense>
          
          
          
          <Suspense fallback={<LoadingSpinner message="Cargando información..." />}>
            <section 
              id="quienes-somos" 
              className="min-h-screen -mt-36 sm:-mt-12 md:-mt-16 lg:-mt-20"
              aria-label="Sección sobre nosotros"
            >
              <AboutMe />
            </section>
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner message="Cargando productos..." />}>
            <section 
              id="productos" 
              className="min-h-screen pt-4 sm:pt-8 md:pt-12 lg:pt-16"
              aria-label="Sección de productos"
            >
              <Products />
            </section>
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner message="Cargando contacto..." />}>
            <section 
              id="contact" 
              className="pt-4 sm:pt-8 md:pt-12 lg:pt-16"
              aria-label="Sección de contacto"
            >
              <Contact />
            </section>
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Footer />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
