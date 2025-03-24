import React from 'react';


const personas = [
  {
    id: 1,
    nombre: 'Luis Ñancucheo',
    foto: '/assets/13.webp',
    descripcion:
      'Luis Ñancucheo es el Técnico en Producción Agropecuaria encargado de la logística y organización de los sistemas productivos en nuestra chacra...',
  },
  {
    id: 2,
    nombre: 'Camila Ñancucheo',
    foto: '/assets/15.webp',
    descripcion:
      'Camila Ñancucheo es la Técnica en Turismo responsable de la organización, planificación y ventas de nuestra chacra...',
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-10 px-5 text-center bg-transparent">
      <div className="text-center mt-16 mb-5">
       
      </div>
      <h2 className="text-4xl font-bold mb-8 py-2 bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent drop-shadow-md">
        Sobre Nosotros
      </h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {personas.map((persona) => (
          <div
            key={persona.id}
            className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start w-full sm:w-[45%] bg-black/20 rounded-md p-5 shadow-md min-w-[300px]"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden flex items-center justify-center border-2 border-green-500 bg-white mb-5 sm:mb-0 sm:mr-5 transition-transform duration-300 ease-in-out hover:scale-[2.2]">
              <img
                src={persona.foto}
                alt={persona.nombre}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="flex-1 text-black text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2 text-white bg-green-500 py-2 px-3 rounded shadow-md transition-colors duration-300 hover:bg-green-700 hover:text-green-100">
                {persona.nombre}
              </h3>
              <p className="text-lg font-medium leading-relaxed whitespace-normal">
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
