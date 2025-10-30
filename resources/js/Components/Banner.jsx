import React from "react";
import { motion } from "framer-motion";

export default function Banner({
  title = "Título de ejemplo",
  description = "Descripción de ejemplo",
  breadcrumb = [],
  imageUrl = "https://res.cloudinary.com/dnbklbswg/image/upload/v1761087411/Operaciones_aqua_wqhiz1.jpg",
  className = "",
}) {
  return (
    <section
      className={`w-full relative overflow-hidden ${className}`}
      aria-label="Banner principal"
      style={{ height: "min(35vh, 400px)" }}
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url('${imageUrl}')` }}
        aria-hidden="true"
      />

      {/* Capa de degradado para legibilidad */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"
        aria-hidden="true"
      />

      {/* Contenido principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">

        {/* Título animado */}
        <motion.h1
          className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md mb-2"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        {/* Descripción */}
        {description && (
          <motion.p
            className="mt-2 text-white text-sm sm:text-base md:text-lg opacity-90 max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            {description}
          </motion.p>
        )}

        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <motion.div className="text-gray-200 text-sm md:text-base mb-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            {breadcrumb.map((item, index) => (
              <span key={index}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-white font-semibold">
                    {item.label}
                  </span>
                )}
                {index < breadcrumb.length - 1 && (
                  <span className="mx-2 text-gray-400">/</span>
                )}
              </span>
            ))}
          </motion.div>
        )}
      </div>

      {/* Borde inferior decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-20" />
    </section>
  );
}
