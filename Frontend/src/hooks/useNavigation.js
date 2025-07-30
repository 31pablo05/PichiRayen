import { useEffect, useCallback } from 'react';

/**
 * Hook personalizado para manejar navegación suave y estados de scroll
 */
export const useScrollNavigation = () => {
  // Función para navegar suavemente a una sección
  const scrollToSection = useCallback((sectionId, offset = -70) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Función para detectar la sección activa
  const getActiveSection = useCallback(() => {
    const sections = ['inicio', 'quienes-somos', 'productos', 'contact'];
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = scrollY + rect.top;
        const elementBottom = elementTop + rect.height;
        
        // Considera una sección como activa si está en el viewport
        if (scrollY >= elementTop - windowHeight / 3 && scrollY < elementBottom - windowHeight / 3) {
          return sectionId;
        }
      }
    }
    return 'inicio'; // Por defecto
  }, []);

  // Optimización del scroll listener
  const createThrottledScrollListener = useCallback((callback, delay = 16) => {
    let lastCall = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        callback(...args);
      }
    };
  }, []);

  return {
    scrollToSection,
    getActiveSection,
    createThrottledScrollListener
  };
};

/**
 * Hook para manejar intersection observer (lazy loading, animaciones)
 */
export const useIntersectionObserver = (
  ref, 
  options = { threshold: 0.1, rootMargin: '50px' }
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);
};

/**
 * Hook para precargar imágenes importantes
 */
export const useImagePreloader = (imageSources = []) => {
  useEffect(() => {
    const preloadImages = imageSources.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      // Cleanup si es necesario
      preloadImages.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageSources]);
};
