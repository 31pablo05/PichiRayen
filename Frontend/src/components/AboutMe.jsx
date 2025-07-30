import React from 'react';

const personas = [
  {
    id: 1,
    nombre: 'Luis Ñancucheo',
    foto: '/assets/img webp/LuisÑancucheo13.webp',
    descripcion:
      'Luis Ñancucheo es el Técnico en Producción Agropecuaria encargado de la logística y organización de los sistemas productivos en nuestra chacra...',
  },
  {
    id: 2,
    nombre: 'Camila Ñancucheo',
    foto: '/assets/img webp/CamilaÑancucheo15.webp',
    descripcion:
      'Camila Ñancucheo es la Técnica en Turismo responsable de la organización, planificación y ventas de nuestra chacra...',
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="pt-8 pb-20 px-5 bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-lime-400 rounded-full blur-lg"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título principal con animación */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
            Quiénes Somos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Conoce al equipo apasionado que hace posible nuestra chacra sustentable
          </p>
        </div>

        {/* Grid de personas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {personas.map((persona, index) => (
            <div
              key={persona.id}
              className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-green-100 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-white ${
                index % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'
              }`}
            >
              {/* Decoración de esquina */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-bl-3xl rounded-tr-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                {/* Imagen con efectos mejorados */}
                <div className="relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-green-400 to-emerald-500 shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <img
                      src={persona.foto}
                      alt={persona.nombre}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                    />
                  </div>
                  {/* Anillo decorativo */}
                  <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-pulse opacity-40"></div>
                </div>

                {/* Contenido con mejor tipografía */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                      {persona.nombre}
                    </h3>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full shadow-lg">
                      {persona.id === 1 ? 'Técnico en Producción' : 'Técnica en Turismo'}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {persona.descripcion}
                  </p>

                  {/* Botón de contacto */}
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <span>Conocer más</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Línea decorativa inferior */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Estadísticas adicionales */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center group">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl font-bold text-white">15+</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Años de Experiencia</h4>
            <p className="text-gray-600 text-sm">Dedicados a la agricultura sustentable</p>
          </div>
          
          <div className="text-center group">
            <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl font-bold text-white">100%</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Productos Orgánicos</h4>
            <p className="text-gray-600 text-sm">Sin químicos ni pesticidas</p>
          </div>
          
          <div className="text-center group">
            <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl font-bold text-white">♻️</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Compromiso Ambiental</h4>
            <p className="text-gray-600 text-sm">Cuidando nuestro planeta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
