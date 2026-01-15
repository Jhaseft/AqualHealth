import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

export default function ValoresCarousel({ values = [] }) {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0); // 🔹 Para controlar animación al cambiar de slide

    // Variantes de animación para el texto
    const textVariants = {
        hidden: { opacity: 0, y: -80 },
        visible: {
            opacity: 2,
            y: 0,
            transition: { duration: 1.2, ease: "easeOut" },
        },
    };

    return (
        <div className="w-full max-w-3xl mx-auto py-12 px-4 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Nuestros Valores
            </h2>

            <Swiper
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // 🔹 Detectar cambio de slide
                modules={[Navigation]}
                navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn",
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                effect="slide" //  efecto de desplazamiento suave (por defecto)
                speed={1500} //  duración del desplazamiento (ms)
            >
                {values.map((valor, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative flex items-center justify-center min-h-[350px] md:min-h-[450px] lg:min-h-[500px] px-4 rounded-lg overflow-hidden"
                            style={{
                                backgroundImage: `url(${valor.bgImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <motion.p
                                key={activeIndex} //  fuerza la reanimación cada vez que cambia el slide
                                className="text-center text-xl md:text-7xl font-semibold text-black"
                                initial="hidden"
                                animate="visible"
                                variants={textVariants}
                            >
                                {valor.text}
                            </motion.p>

                           
                            <button
                                className="prev-btn left-2 absolute top-1/2 -translate-y-1/2 text-2xl bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 z-10"
                                style={{
                                    borderImage:
                                        "linear-gradient(to right, #06b6d4, #3b82f6) 1", //  Borde degradado
                                }}
                                onClick={() => swiperInstance?.slidePrev()}
                            >
                                &#8249;
                            </button>
                            <button
                                className="next-btn right-2 absolute top-1/2 -translate-y-1/2 text-2xl bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 z-10"
                                style={{
                                    borderImage:
                                        "linear-gradient(to left, #06b6d4, #3b82f6) 1",
                                }}
                                onClick={() => swiperInstance?.slideNext()}
                            >
                                &#8250;
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
