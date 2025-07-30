import React from 'react';

/**
 * Componente de loading mejorado con animaciones
 */
const LoadingSpinner = ({ size = 'md', message = 'Cargando...' }) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <div className="flex flex-col justify-center items-center h-32 space-y-4">
      <div className="relative">
        {/* Spinner principal */}
        <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-green-600 rounded-full animate-spin`}></div>
        
        {/* Spinner secundario para efecto visual */}
        <div className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-b-green-400 rounded-full animate-pulse`}></div>
      </div>
      
      {message && (
        <p className="text-green-700 font-medium text-sm">
          {message}
        </p>
      )}
    </div>
  );
};

/**
 * Skeleton loader para componentes específicos
 */
export const SkeletonLoader = ({ type = 'card' }) => {
  if (type === 'card') {
    return (
      <div className="animate-pulse">
        <div className="bg-gray-200 rounded-lg h-48 w-full mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (type === 'banner') {
    return (
      <div className="animate-pulse min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
        </div>
      </div>
    );
  }

  return <LoadingSpinner />;
};

export default LoadingSpinner;
