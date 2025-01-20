'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroCarousel = ({ images, title, location, approvals }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const words = title.split(' ');

  return (
    <section className="relative h-screen overflow-hidden touch-pan-y">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect={'slide'}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' custom-bullet"></span>';
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
        touchEventsTarget="container"
        touchRatio={1.5}
        touchAngle={45}
        grabCursor={true}
      >
        {images.map((image, index) => (
          <SwiperSlide 
            key={index} 
            className="relative touch-pan-y"
          >
            <div className="h-full w-full">
              <Image
                src={image}
                fill
                className="object-cover select-none"
                alt={`Property View ${index + 1}`}
                priority={index === 0}
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay - Now with one-time animation */}
      <motion.div 
        className="absolute inset-0 z-10 flex items-center justify-center text-center text-white pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-6 px-4">
          {/* Title with one-time word animation */}
          <motion.h1 
            className="text-3xl md:text-7xl font-serif mb-4 flex flex-wrap justify-center gap-x-4"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                  delay: index * 0.1,
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          {/* Location with one-time animation */}
          <motion.p 
            className="text-xl hidden md:block font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {location}
          </motion.p>

          {/* Approvals with one-time animation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {approvals.map((approval, idx) => (
              <motion.span 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm"
              >
                {approval}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Styles remain the same */}
      <style jsx global>{`
        .swiper {
          touch-action: pan-y;
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: black !important;
          background: transparent;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          transition: all 0.3s ease;
          border: 2px solid rgba(0, 0, 0, 0.5);
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px !important;
        }

        .swiper-pagination {
          bottom: 30px !important;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: white;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
          
          .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
          }
          
          .swiper-pagination-bullet-active {
            width: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;