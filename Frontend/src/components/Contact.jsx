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
    <section
      id="contacto"
      className="py-10 px-5 bg-transparent flex justify-center items-center min-h-[60vh]"
    >
      <div className="bg-white/60 shadow-lg rounded-md p-5 md:p-10 w-11/12 max-w-[1200px] text-center">
        <div className="flex flex-col items-center text-sm md:text-base">
          <h2 className="text-4xl font-bold text-green-500 mb-5">Contacto</h2>

          {/* Dirección */}
          <div className="mb-4 flex flex-col md:flex-row items-center justify-center">
            <FaMapMarkerAlt className="mb-2 md:mb-0 md:mr-2 text-green-500" />
            <p>Dirección: Alejandro Maiz, Trelew, Chubut, Argentina</p>
          </div>

          {/* Enlace de Email */}
          <div className="mb-4 flex flex-col md:flex-row items-center justify-center">
            <FaEnvelope className="mb-2 md:mb-0 md:mr-2 text-green-500" />
            <a
              href="mailto:contacto@chacra.com"
              className="text-black no-underline hover:underline"
            >
              Envíanos un email
            </a>
          </div>

          {/* Contacto por WhatsApp */}
          <div className="mb-4 flex flex-col md:flex-row items-center justify-center">
            <FaWhatsapp className="mb-2 md:mb-0 md:mr-2 text-green-500" />
            <a
              href="https://wa.me/+5492804644505"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black no-underline hover:underline"
            >
              Contáctanos por WhatsApp
            </a>
          </div>

          {/* Ver en Google Maps */}
          <div className="mb-4 flex flex-col md:flex-row items-center justify-center">
            <FaMap className="mb-2 md:mb-0 md:mr-2 text-green-500" />
            <a
              href="https://maps.app.goo.gl/cKfZwjSxcsocDyJGA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black no-underline hover:underline"
            >
              Ver en Google Maps
            </a>
          </div>

          {/* Botones de acción */}
          <div className="mt-5 flex justify-center gap-5">
            <a
              href="https://wa.me/+5492804644505"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 text-white py-3 px-6 rounded-full font-bold text-lg flex items-center justify-center transition-all duration-300 hover:bg-[#835b04] hover:scale-105"
            >
              ¡Escríbenos por WhatsApp!
            </a>
            <a
              href="mailto:contacto@chacra.com"
              className="bg-gray-300 text-white py-3 px-6 rounded-full font-bold text-lg flex items-center justify-center transition-all duration-300 hover:bg-[#835b04] hover:scale-105"
            >
              ¡Envíanos un correo!
            </a>
          </div>

          {/* Redes Sociales */}
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold">Síguenos en redes</h3>
            <div className="flex justify-center gap-5">
              <a
                href="https://www.facebook.com/share/mYpKNYH33M1t79Ym/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-[70px] transition-transform duration-300 hover:scale-[1.2] text-[#1877f2]" />
              </a>
              <a
                href="https://www.instagram.com/chacra.pichirayen?igsh=OW96c2Q4d3FtOHJz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-[70px] transition-transform duration-300 hover:scale-[1.2] text-[#e1306c]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
