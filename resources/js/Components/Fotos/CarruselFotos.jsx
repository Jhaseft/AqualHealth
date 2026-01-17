import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function CarruselFotos({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

 // Animaciones elegantes
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 2} },
};



const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } },
};
  return (
    <div className="w-full relative md:pr-3 md:pl-3">
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
            <div className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden flex justify-center items-center">
              
              <motion.img
                src={img.secure_url}
                alt={img.public_id || `slide-${index}`}
                initial="hidden"
                animate={index === currentIndex ? "visible" : "hidden"}
                variants={fadeIn}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
 
              <div className="absolute inset-0 bg-black bg-opacity-40" />

              {img.topText && (
                <motion.div
                  variants={fadeDown}
                  initial="hidden"
                  animate={index === currentIndex ? "visible" : "hidden"}
                  className="absolute top-28 w-full text-center text-white px-4"
                >
                  <h2 className="text-6xl md:text-8xl font-extrabold drop-shadow-lg">
                    {img.topText}
                  </h2>
                </motion.div>
              )}

   
              {img.bottomLeft && (
                <motion.div
                  variants={fadeLeft}
                  initial="hidden"
                  animate={index === currentIndex ? "visible" : "hidden"}
                  className="absolute bottom-24 left-8 md:left-16 text-white"
                >
                  <p className="text-4xl md:text-6xl text-center font-semibold drop-shadow-lg">
                    {img.bottomLeft}
                  </p>
                </motion.div>
              )}

           
              {img.bottomRight && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate={index === currentIndex ? "visible" : "hidden"}
                  className="absolute bottom-20 right-8 md:right-16 text-right text-white"
                >
                  <p className="text-4xl md:text-5xl  font-semibold drop-shadow-lg">
                    {img.bottomRight}
                  </p>
                </motion.div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
