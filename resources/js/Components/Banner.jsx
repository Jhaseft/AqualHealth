// Banner.jsx
// Componente React (Tailwind) que recibe `title` y `description` y muestra
// una imagen de fondo a pantalla completa en ancho, altura moderada.
// Uso: <Banner title="Mi título" description="Mi descripción" />

import React from 'react';

export default function Banner({
  title = 'Título de ejemplo',
  description = 'Descripción de ejemplo',
  imageUrl = 'https://res.cloudinary.com/dnbklbswg/image/upload/v1761087411/Operaciones_aqua_wqhiz1.jpg',
  className = ''
}) {
  return (
    <section
      className={`w-full relative overflow-hidden ${className}`}
      aria-label="Banner principal"
      style={{ height: 'min(28vh, 360px)' }}
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url('${imageUrl}')` }}
        aria-hidden="true"
      />

      {/* Capa de degradado para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/50" aria-hidden="true" />

      {/* Contenido centrado */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-sm">
            {title}
          </h1>
          <p className="mt-3 text-white text-sm sm:text-base md:text-lg opacity-95">
            {description}
          </p>
        </div>
      </div>

      {/* Borde sutil inferior (opcional, estético) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-10" />
    </section>
  );
}
