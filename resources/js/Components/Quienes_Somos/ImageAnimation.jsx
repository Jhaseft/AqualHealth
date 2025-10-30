import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function ImageAnimation({
  href = "",           // destino al hacer clic
  src,
  alt = "Imagen",
  height = "h-auto", // clases Tailwind para altura
  className = "",
  hoverScale = 1.05,   // factor de zoom al hacer hover
  hoverBrightness = 1.05, // brillo al hover
  transitionDuration = 0.3, // duración de la animación
}) {
  return (
    <div className={` h-full flex items-center justify-center ${className}`}>
      {href ? (
        <Link href={href} className="flex items-center">
          <motion.img
            src={src}
            alt={alt}
            className={`${height} w-auto rounded-xl shadow-md`}
            whileHover={{
              scale: hoverScale,
              filter: `brightness(${hoverBrightness})`,
            }}
            transition={{ duration: transitionDuration, ease: "easeInOut" }}
          />
        </Link>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          className={`${height} rounded-xl shadow-md`}
          whileHover={{
            scale: hoverScale,
            filter: `brightness(${hoverBrightness})`,
          }}
          transition={{ duration: transitionDuration, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
