import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Linea() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      year: 2004,
      image:
        "https://res.cloudinary.com/dnbklbswg/image/upload/v1761134394/Integridad_y_%C3%89tica_kjkyf5.jpg",
      description:
        "La historia de la empresa inicia en 2004 como parte de una iniciativa familiar de los hermanos Aramayo Rodríguez para conformar un grupo empresarial que centralice los esfuerzos de distintos emprendimientos. Así nace 'AR Business Group', con la finalidad de capitalizar el patrimonio familiar y brindar estabilidad a las generaciones futuras.",
    },
    {
      year: 2005,
      image:
        "https://res.cloudinary.com/dnbklbswg/image/upload/v1761134394/Atenci%C3%B3n_y_Asesor%C3%ADa_Personalizada_oy0sfw.jpg",
      description:
        "En los primeros años, el grupo comienza a impulsar proyectos de inversión y servicios, sentando las bases para lo que más adelante sería una empresa sólida y diversificada.",
    },
    {
      year: 2017,
      image:
        "https://res.cloudinary.com/dnbklbswg/image/upload/v1759791758/Logo_AH_con_HTW_wzxlez.jpg",
      description:
        "El Ing. Grover Aramayo decide refundar AQUA Boutique bajo el nombre de AQUA HEALTH BOLIVIA, legalmente constituida como empresa unipersonal. Desde entonces, los esfuerzos constantes han permitido desarrollar 5 líneas de negocio principales.",
    },
    {
      year: 2025,
      image:
        "https://res.cloudinary.com/dnbklbswg/image/upload/v1761152394/Aqua_portada_sitio_web_1_ecgfdp.jpg",
      description:
        "Actualmente, AQUA HEALTH BOLIVIA consolida su presencia en el mercado nacional, combinando innovación, sostenibilidad y compromiso con el desarrollo del país.",
    },
  ];


  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-10 py-10">
      {/* Línea de tiempo */}
      <div className="relative flex items-center justify-center mb-10 w-full max-w-4xl">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex-1 flex justify-between items-center mx-4">
          {data.map((item, index) => (
            <div
              key={item.year}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  index <= activeIndex
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-300"
                }`}
              ></div>
              <span
                className={`mt-2 text-sm font-medium ${
                  index === activeIndex ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {item.year}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Contenido principal */}
      <motion.div
        key={data[activeIndex].year}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {data[activeIndex].year}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
          <img
            src={data[activeIndex].image}
            alt={data[activeIndex].year}
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <p className="text-gray-600 text-lg md:text-xl text-justify">
            {data[activeIndex].description}
          </p>
        </div>

        {/* Indicadores inferiores */}
        <div className="flex justify-center gap-2 mt-6">
          {data.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === activeIndex ? "bg-gray-700" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
