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
    <section id="contacto" className="py-16 px-4 flex justify-center items-center min-h-[70vh] bg-transparent relative">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-6 md:p-12 border border-[#b5cf2c]/30 hover:shadow-green-200 transition-all duration-300">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-10 py-2 bg-gradient-to-r from-[#b5cf2c] via-[#22c55e] to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-2xl tracking-tight text-center animate-pulse">
          Contacto
        </h2>

        {/* Información de contacto */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-4 text-lg">
            <FaMapMarkerAlt className="text-[#b5cf2c] text-2xl" />
            <span className="text-gray-700 font-medium">Alejandro Maiz, Trelew, Chubut, Argentina</span>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <FaEnvelope className="text-[#22c55e] text-2xl" />
            <a href="mailto:contacto@chacra.com" className="text-[#0ea5e9] font-medium hover:underline transition-colors">contacto@chacra.com</a>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <FaWhatsapp className="text-[#22c55e] text-2xl" />
            <a href="https://wa.me/+5492804644505" target="_blank" rel="noopener noreferrer" className="text-[#22c55e] font-medium hover:underline transition-colors">+54 9 280 464-4505</a>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <FaMap className="text-[#0ea5e9] text-2xl" />
            <a href="https://maps.app.goo.gl/cKfZwjSxcsocDyJGA" target="_blank" rel="noopener noreferrer" className="text-[#0ea5e9] font-medium hover:underline transition-colors">Ver en Google Maps</a>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <a 
            href="https://wa.me/+5492804644505"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#22c55e] to-[#b5cf2c] text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-green-200 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <FaWhatsapp className="text-2xl" /> WhatsApp
          </a>
          <a 
            href="mailto:contacto@chacra.com"
            className="bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-blue-200 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <FaEnvelope className="text-2xl" /> Correo
          </a>
        </div>

        {/* Redes Sociales */}
        <div className="mt-6 text-center">
          <h3 className="mb-4 text-2xl font-semibold text-[#22c55e] tracking-wide">Síguenos en redes</h3>
          <div className="flex justify-center gap-8">
            <a href="https://www.facebook.com/share/mYpKNYH33M1t79Ym/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[48px] sm:text-[60px] transition-transform duration-300 hover:scale-125 text-[#1877f2] drop-shadow-lg" />
            </a>
            <a href="https://www.instagram.com/chacra.pichirayen?igsh=OW96c2Q4d3FtOHJz" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[48px] sm:text-[60px] transition-transform duration-300 hover:scale-125 text-[#e1306c] drop-shadow-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
