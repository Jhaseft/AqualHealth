import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function CarruselFotos({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animaciones suaves
  const fadeCenter = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <div className="w-full relative md:px-3">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[75vh] md:h-[90vh] flex justify-center items-center overflow-hidden">
              {/* Imagen de fondo */}
              <motion.img
                src={img.secure_url}
                alt={img.public_id || `slide-${index}`}
                initial="hidden"
                animate={index === currentIndex ? "visible" : "hidden"}
                variants={fadeIn}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Capa oscura */}
              <div className="absolute inset-0 bg-black bg-opacity-45" />

              {/* Contenido centrado */}
              <motion.div
                variants={fadeCenter}
                initial="hidden"
                animate={index === currentIndex ? "visible" : "hidden"}
                className="relative text-center text-white px-4"
              >
                <h2 className="text-5xl md:text-7xl font-extrabold drop-shadow-xl mb-4  md:mt-20 mt-40">
                  {img.title}
                </h2>
                {img.description && (
                  <p className="text-lg md:text-2xl font-medium max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                    {img.description}
                  </p>
                )}
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
