import { motion } from "framer-motion";
// card motion for casos de exito section
export default function CasosExito({ imgSrc, descripcion, bgColor = "bg-gray-100", imgLeft = true }) {
  return (
    <motion.div
      className={`${bgColor} w-full flex flex-col md:flex-row my-10 rounded-xl shadow-lg overflow-hidden`}
      initial={{ opacity: 0, x: imgLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {imgLeft && (
        <div className="w-full md:w-1/2 flex-shrink-0 max-h-96">
          <img src={imgSrc} alt="caso de éxito" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <p className="text-lg text-center md:text-left">{descripcion}</p>
      </div>

      {!imgLeft && (
        <div className="w-full md:w-1/2 flex-shrink-0 max-h-96">
          <img src={imgSrc} alt="caso de éxito" className="w-full h-full object-cover" />
        </div>
      )}
    </motion.div>
  );
}
