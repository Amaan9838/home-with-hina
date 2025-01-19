'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const PropertyCard = ({ title, description, image }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-3xl shadow-[2px_2px_0px_0px_rgb(0,0,0)] border border-black overflow-hidden"
    >
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

const FeaturedProperties = () => {
  const properties = [
    {
      title: "Modern 1BHK Flat",
      description: "This 1BHK flat offers a contemporary design with high-end finishes, making it ideal for singles or couples seeking a stylish urban retreat.",
      image: "https://10web-site.ai/265/wp-content/uploads/sites/277/2025/01/tenweb_media_u7smnPCE.webp"
    },
    {
      title: "Spacious 2BHK Apartment",
      description: "Experience the perfect blend of space and luxury in this 2BHK apartment, complete with modern amenities and a serene environment.",
      image: "https://10web-site.ai/265/wp-content/uploads/sites/277/2025/01/tenweb_media_i5bsZIlL.webp"
    },
    {
      title: "Elegant 3BHK Flat",
      description: "This 3BHK flat is designed for families who value luxury and comfort, offering ample space and top-notch facilities.",
      image: "https://10web-site.ai/265/wp-content/uploads/sites/277/2025/01/tenweb_media_BMPRLwJ5.webp"
    
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" mb-12 flex  items-center justify-between md:gap-10"
      >
        <h2 className="text-4xl font-bold mb-4">Explore Our Premium Property Listings</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover a curated selection of luxurious 1BHK, 2BHK, and 3BHK flats designed to meet your lifestyle needs. 
          Each property offers unique features and amenities, ensuring a perfect blend of comfort and elegance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;