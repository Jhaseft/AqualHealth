import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function CardInfoChemical({ data, imageScale = 1 }) {
  const {
    title,
    paragraphs = [],
    logo,
    imageLeft = false,
    bgColor = "bg-white",
  } = data;

  // 🔹 Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sideVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  });

  // 🔹 Componente interno para la imagen
  const ImageSection = ({ direction }) => (
    <motion.div
      className="w-full md:w-1/2 flex items-center justify-center overflow-hidden"
      style={{
        transform: `scale(${imageScale})`,
        transformOrigin: "center",
        transition: "transform 0.3s ease-in-out",
      }}
      variants={sideVariants(direction)}
    >
      {logo && (
        <motion.div className="w-full h-full flex items-center justify-center">
          {logo.href ? (
            <Link href={logo.href} className="w-full h-full">
              <motion.img
                src={logo.src}
                alt={logo.alt || "Imagen"}
                className="w-full h-full object-cover"
                whileHover={{
                  scale: logo.hoverScale || 1.05,
                  filter: `brightness(${logo.hoverBrightness || 1.05})`,
                }}
                transition={{
                  duration: logo.transitionDuration || 0.3,
                  ease: "easeInOut",
                }}
              />
            </Link>
          ) : (
            <motion.img
              src={logo.src}
              alt={logo.alt || "Imagen"}
              className="w-full h-full object-cover"
              whileHover={{
                scale: logo.hoverScale || 1.05,
                filter: `brightness(${logo.hoverBrightness || 1.05})`,
              }}
              transition={{
                duration: logo.transitionDuration || 0.3,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      )}
    </motion.div>
  );

  // 🔹 Componente interno para el texto
  const TextSection = () => (
    <motion.div
      className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 gap-4"
      variants={sideVariants(imageLeft ? "right" : "left")}
    >
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      <div className="text-gray-600 space-y-3">
        {paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="text-justify leading-relaxed"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className={`w-full flex flex-col md:flex-row items-stretch overflow-hidden rounded-xl shadow-lg ${bgColor} mb-8`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {imageLeft ? (
        <>
          <ImageSection direction="left" />
          <TextSection />
        </>
      ) : (
        <>
          <TextSection />
          <ImageSection direction="right" />
        </>
      )}
    </motion.div>
  );
}
