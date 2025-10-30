// components/SobreNosotrosSection.jsx
import React from "react";
import ImageAnimation from "./ImageAnimation";
import { motion } from "framer-motion";

export default function CardInfoSection({ data , imageScale = 1}) {
    const {
        title,
        paragraphs = [],
        logo ,
        imageLeft=false,
        bgColor="bg-white"
    } = data;
    //data va almacenar los arreglos
    // imageLeft = true → imagen a la izquierda
    // imageLeft = false → imagen a la derecha (por defecto)
     // 🔹 Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: imageLeft ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: imageLeft ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };
//w-full flex flex-col md:flex-row my-10 rounded-xl shadow-lg overflow-hidden
    return (
    <motion.div
      className={`flex flex-col md:flex-row w-full overflow-hidden items-stretch gap-6 p-6 md:p-8 rounded-lg shadow-lg ${bgColor} mb-8`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // 👈 solo anima cuando entra al viewport
    >
      {/* Columna del logo */}
      {logo && (
        <motion.div
          className={`w-full md:w-2/5 flex justify-center items-start
             order-last md:${imageLeft ? "order-first" : "order-last"}`}
          style={{
            transform: `scale(${imageScale})`,
            transformOrigin: "center",
            transition: "transform 0.3s ease-in-out",
          }}
          variants={imageVariants}
        >
          <ImageAnimation
            href={logo.href}
            src={logo.src}
            alt={logo.alt}
            height={logo.height}
            hoverScale={logo.hoverScale}
            hoverBrightness={logo.hoverBrightness}
          />
        </motion.div>
      )}

      {/* Columna de texto */}
      <motion.div 
      className="w-full md:w-3/5 flex flex-col gap-4"
      variants={textVariants}
      >
        {title && <h2 className="text-2xl font-bold">{title}</h2>}

        <div className="text-gray-600 space-y-3">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-justify leading-relaxed"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}