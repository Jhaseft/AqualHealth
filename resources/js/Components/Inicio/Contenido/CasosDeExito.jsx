import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CasosDeExito() {
  const casos = [
    {
      titulo: "PLANTA INDUSTRIALIZADORA DE LA QUINUA",
      descripcion:
        "La termoeléctrica requiere un alto caudal de agua para su operación cuya alternativa inicial era obtenerla de pozos subterráneos o fuentes superficiales.",
      imagen:
        "https://res.cloudinary.com/dnbklbswg/image/upload/v1761090251/Captura_de_pantalla_2025-10-21_194348_udykwa.png",
    },
    {
      titulo: "PLANTA PROCESADORA DE LÁCTEOS IVIRGARZAMA",
      descripcion:
        "En la estación Acacias se generan altos volúmenes de lodos aceitosos con importantes concentraciones de crudo cuyo costo de transporte es elevado.",
      imagen:
        "https://res.cloudinary.com/dnbklbswg/image/upload/v1761090289/Captura_de_pantalla_2025-10-21_194440_liltxd.png",
    },
    {
      titulo: "PLANTA PROCESADORA DE LÁCTEOS SAN ANDRÉS",
      descripcion:
        "La reducción del uso de fuentes de agua en la industria mejora la sostenibilidad y genera un reto tecnológico importante para nosotros.",
      imagen:
        "https://res.cloudinary.com/dnbklbswg/image/upload/v1761090310/Captura_de_pantalla_2025-10-21_194501_easbgu.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12">
        CASOS DE EXITO
      </h2>

      {/* 🧩 Contenedor grid responsivo */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {casos.map((caso, index) => (
          <motion.div
  key={index}
  whileHover={{
    y: -8,
    scale: 1.03,
    rotateX: 4,
  }}
  transition={{ type: "spring", stiffness: 250, damping: 18 }}
  className="group cursor-pointer flex flex-col items-center"
>
  {/* Imagen principal */}
  <div className="overflow-hidden rounded-2xl shadow-md w-full">
    <motion.img
      src={caso.imagen}
      alt={caso.titulo}
      className="w-full h-64 object-cover group-hover:scale-110 duration-700 ease-out"
    />
  </div>

  {/* Card de contenido con borde gradiente al hacer hover */}
  <motion.div
    className="relative z-10 bg-white rounded-2xl shadow-xl p-6 -mt-6 w-[95%] sm:w-[90%] 
               border-2 border-transparent group-hover:border-[length:2px] 
               group-hover:border-black/50 
               duration-500 
              "
    whileHover={{
      borderImageSlice: 1,
    }}
  >
    {/* Título */}
    <motion.h3
      initial={{ color: "#111827" }}
      whileHover={{ color: "#1e40af" }}
      transition={{ duration: 0.3 }}
      className="text-lg md:text-xl font-bold mb-3 group-hover:tracking-wide duration-500 text-center md:text-left"
    >
      {caso.titulo}
    </motion.h3>

    <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base text-center md:text-left">
      {caso.descripcion}
    </p>

    {/* Enlace con flecha animada */}
    <motion.a
      href="#"
      className="flex items-center justify-center md:justify-start gap-2 text-blue-800 font-semibold relative z-10 group/link"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.3 }}
    >
      VER PROYECTO
      <motion.span
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowRight className="w-4 h-4 group-hover/link:text-blue-900 transition-colors" />
      </motion.span>

      {/* Barra inferior animada */}
      <motion.span
        className="absolute left-0 -bottom-1 h-[2px] bg-blue-800"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.a>
  </motion.div>
</motion.div>

        ))}
      </div>
    </section>
  );
}
