'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

export default function InteractiveFloorPlan() {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Mobile-optimized hotspots
  const mobileHotspots = [
    {
      id: 1,
      title: "Master Suite",
      details: "18' x 14' | South Facing",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80",
      features: ["Walk-in Wardrobe", "En-suite Bathroom", "Floor-to-ceiling Windows"],
      mobilePosition: { x: 20, y: 25 }
    },
    // Add more mobile-optimized hotspots
  ];

  return (
    <section className="relative md:min-h-screen bg-navy">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 bg-navy/95 backdrop-blur-lg border-b border-white/10">
        <div className="px-4 py-3">
          <h2 className="text-2xl font-serif text-white">Floor Plan Explorer</h2>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Desktop Title - Hidden on Mobile */}
        <h2 className="hidden lg:block text-5xl font-serif text-white text-center mb-16">
          Explore Your Future Home
        </h2>

        {/* Mobile Floor Plan Navigation */}
        <div className="lg:hidden mb-6 overflow-x-auto">
          <div className="flex gap-3 p-2">
            {mobileHotspots.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                className="flex-shrink-0 px-4 py-2 rounded-full bg-white/10 text-white text-sm"
              >
                {spot.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Floor Plan */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div className="relative aspect-[4/3] md:aspect-[16/9] rounded-xl md:rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80
"
              alt="Luxury Floor Plan"
              fill
              className="object-contain"
              priority
            />

            {/* Mobile-optimized Hotspots */}
            {!isMobile && mobileHotspots.map((hotspot) => (
              <motion.button
                key={hotspot.id}
                className="absolute w-8 h-8 md:w-12 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${hotspot.mobilePosition.x}%`,
                  top: `${hotspot.mobilePosition.y}%`
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveHotspot(hotspot)}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full bg-gold/30 backdrop-blur-sm" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gold/20"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Feature Details */}
          <AnimatePresence>
            {activeHotspot && (
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                className={`
                  fixed inset-x-0 bottom-0 z-50 
                  lg:absolute lg:w-96 lg:bottom-auto lg:right-0 lg:top-0
                  bg-white/10 backdrop-blur-xl rounded-t-3xl lg:rounded-3xl
                  shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)]
                `}
              >
                {/* Mobile Drag Handle */}
                <div className="lg:hidden w-12 h-1 mx-auto mt-3 bg-white/20 rounded-full" />

                <div className="p-6">
                  <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={activeHotspot.image}
                      alt={activeHotspot.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-light text-white mb-2">
                    {activeHotspot.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-6">
                    {activeHotspot.details}
                  </p>

                  <ul className="space-y-3">
                    {activeHotspot.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-white/70 text-sm flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Mobile Close Button */}
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="mt-6 w-full py-3 rounded-xl bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors lg:hidden"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
