'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PropertyGallery() {
  return (
    <section className="py-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-12 gap-4 h-[80vh]">
          <motion.div 
            className="col-span-8 relative rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Luxury Property"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-3xl font-bold text-white">Luxury Penthouses</h3>
            </div>
          </motion.div>
          
          <div className="col-span-4 grid grid-rows-2 gap-4">
            {/* Add more gallery items */}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
