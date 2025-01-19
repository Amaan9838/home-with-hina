'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const roomStyles = [
  {
    id: 'modern',
    name: 'Modern Contemporary',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
  },
  {
    id: 'traditional',
    name: 'Traditional Elegant',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
  },
];

export default function VirtualStaging() {
  const [selectedStyle, setSelectedStyle] = useState(roomStyles[0]);
  const [isComparing, setIsComparing] = useState(false);

  return (
    <section className="py-24 bg-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Visualize Your Future Home
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <motion.div 
            className="relative aspect-video rounded-xl overflow-hidden"
            layoutId="stageContainer"
          >
            <Image
              src={selectedStyle.image}
              alt={selectedStyle.name}
              fill
              className="object-cover"
            />
            
            {isComparing && (
              <motion.div 
                className="absolute inset-0 w-1/2 overflow-hidden"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
              >
                <Image
                  src="/empty-room.jpg"
                  alt="Empty Room"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-y-0 right-0 w-1 bg-gold cursor-ew-resize" />
              </motion.div>
            )}
          </motion.div>

          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={() => setIsComparing(!isComparing)}
              className="bg-gold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
            >
              {isComparing ? 'Hide Original' : 'Compare Original'}
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {roomStyles.map((style) => (
              <motion.button
                key={style.id}
                onClick={() => setSelectedStyle(style)}
                className={`relative h-24 rounded-lg overflow-hidden ${
                  selectedStyle.id === style.id ? 'ring-2 ring-gold' : ''
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-sm font-medium">{style.name}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
