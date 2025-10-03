import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CarruselFotos({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false} // cambia a true si quieres flechas
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-screen flex justify-center items-center bg-gray-200 relative">
              <img
                src={img.secure_url}
                alt={img.public_id || `slide-${index}`}
                loading="eager"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/1920x1080?text=Imagen+no+disponible";
                }}
                className="w-full h-full object-cover object-center"
              />
              {img.caption && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-md text-lg">
                  {img.caption}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
