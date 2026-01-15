import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function CarruselFotos({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fadeCenter = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full relative">
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
            <div className="relative w-full h-[50vh] sm:h-[30vh] md:h-[50vh] lg:h-[80vh] overflow-hidden">

              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${img.secure_url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(40px)',
                  transform: 'scale(1.1)',
                  opacity: 0.4
                }}
              />

             
              <motion.img
                src={img.secure_url}
                alt={img.public_id || `slide-${index}`}
                initial="hidden"
                animate={index === currentIndex ? "visible" : "hidden"}
                variants={fadeIn}
                className="
                  absolute inset-0
                  w-full
                  h-full
                  object-contain
                  z-10
                "
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 pointer-events-none" />

           
              <motion.div
                variants={fadeCenter}
                initial="hidden"
                animate={index === currentIndex ? "visible" : "hidden"}
                className="
                  absolute inset-0 z-30
                  flex flex-col justify-end 
                  pb-16 sm:pb-20 md:pb-24 lg:pb-28
                  text-center text-white
                  px-4 md:px-8 lg:px-12
                "
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 md:mb-4 lg:mb-6 leading-tight">
                  {img.title}
                </h2>

                {img.description && (
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto leading-relaxed font-light">
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