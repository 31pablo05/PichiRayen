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
    <section id="about" className="py-10 px-5 text-center bg-transparent">
      <h2 className="text-4xl font-bold mb-8 py-2 bg-gradient-to-r from-[#b5cf2c] to-[#22c55e] bg-clip-text text-transparent drop-shadow-md">
        Quienes Somos
      </h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {personas.map((persona) => (
          <div
            key={persona.id}
            className="flex flex-col sm:flex-row items-center sm:items-start w-full sm:w-[45%] bg-black/30 rounded-md p-5 shadow-md min-w-[300px] transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden flex items-center justify-center border-2 border-green-500 bg-white transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src={persona.foto}
                alt={persona.nombre}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-black text-center sm:text-left mt-4 sm:mt-0">
              <h3 className="text-2xl font-bold mb-2 text-white bg-green-500 py-2 px-3 rounded shadow-md transition-colors duration-300 hover:bg-green-700 hover:text-green-100">
                {persona.nombre}
              </h3>
              <p className="text-lg font-medium leading-relaxed whitespace-normal text-black">
                {persona.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
