import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaWhatsapp, 
  FaFacebook, 
  FaInstagram, 
  FaMap 
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contacto" className="py-10 px-5 flex justify-center items-center min-h-[60vh]">
      <div className="bg-white/60 backdrop-blur-md shadow-lg rounded-md p-5 md:p-10 w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-[#b5cf2c] mb-6 text-center">Contacto</h2>

        {/* Información de contacto */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-[#b5cf2c] text-xl mt-1" />
            <p className="text-left">Dirección: Alejandro Maiz, Trelew, Chubut, Argentina</p>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-[#b5cf2c] text-xl mt-1" />
            <a href="mailto:contacto@chacra.com" className="text-black no-underline hover:underline">
              Envíanos un email
            </a>
          </div>

          <div className="flex items-start gap-3">
            <FaWhatsapp className="text-[#b5cf2c] text-xl mt-1" />
            <a 
              href="https://wa.me/+5492804644505" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black no-underline hover:underline"
            >
              Contáctanos por WhatsApp
            </a>
          </div>

          <div className="flex items-start gap-3">
            <FaMap className="text-[#b5cf2c] text-xl mt-1" />
            <a 
              href="https://maps.app.goo.gl/cKfZwjSxcsocDyJGA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black no-underline hover:underline"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://wa.me/+5492804644505"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b5cf2c] text-white py-3 px-6 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#a3bd29] hover:scale-105"
          >
            ¡Escríbenos por WhatsApp!
          </a>
          <a 
            href="mailto:contacto@chacra.com"
            className="bg-[#b5cf2c] text-white py-3 px-6 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#a3bd29] hover:scale-105"
          >
            ¡Envíanos un correo!
          </a>
        </div>

        {/* Redes Sociales */}
        <div className="mt-8 text-center">
          <h3 className="mb-4 text-xl font-semibold">Síguenos en redes</h3>
          <div className="flex justify-center gap-5">
            <a href="https://www.facebook.com/share/mYpKNYH33M1t79Ym/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[50px] sm:text-[60px] transition-transform duration-300 hover:scale-110 text-[#1877f2]" />
            </a>
            <a href="https://www.instagram.com/chacra.pichirayen?igsh=OW96c2Q4d3FtOHJz" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[50px] sm:text-[60px] transition-transform duration-300 hover:scale-110 text-[#e1306c]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
