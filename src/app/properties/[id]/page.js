'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Phone, MapPin, Calendar, ArrowLeft, ArrowRight, Check, Heart, Share2, Maximize2, Gem, Crown, Shield, GraduationCap, Stethoscope, BedDouble, Bath, Square, Cctv } from 'lucide-react';
import { propertyDetails } from '@/app/lib/propertyData';

export default function PropertyDetailPage({ params }) {
    const [property, setProperty] = useState(propertyDetails);
  const [currentImage, setCurrentImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Parallax scroll effect for images
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-[90vh] overflow-hidden">
        <motion.div 
          className="relative h-full"
          style={{ y: scrollY * 0.5 }}
        >
          <Image
            src={property?.images[currentImage]}
            fill
            className="object-cover"
            alt="Property Hero"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
        </motion.div>

        {/* Floating Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLiked(!isLiked)}
            className="p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all"
          >
            <Heart className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all"
          >
            <Share2 className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowGallery(true)}
            className="p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all"
          >
            <Cctv className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Property Quick Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto"
          >
            <h1 className="text-5xl font-serif mb-4">{property?.title}</h1>
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {property.location.address}  // Use the address string here
              </p>
              <span className="text-3xl font-light">•</span>
              <p className="text-2xl font-medium">₹{property?.price}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Continue with the rest of your sections... */}

     
      {/* Immersive Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 overflow-hidden"
          >
            <div className="absolute top-4 right-4 flex gap-4">
              <button 
                onClick={() => setShowGallery(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <Maximize2 className="w-6 h-6" />
              </button>
            </div>
            
            <div className="h-full flex items-center">
              <motion.div 
                className="relative w-full h-[80vh]"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              >
                <Image
                  src={property?.images[currentImage]}
                  fill
                  className="object-contain"
                  alt="Gallery View"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Property Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Features */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif mb-8">Property Features</h2>
                <div className="grid grid-cols-2 gap-8">
                  {property?.keyFeatures.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
                    >
                      <span className="block text-sm text-gray-500 mb-2">{feature.label}</span>
                      <span className="text-2xl font-medium">{feature.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Virtual Tour Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src="/virtual-tour-placeholder.jpg"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Virtual Tour"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="bg-white/90 backdrop-blur-sm text-black px-8 py-4 rounded-full hover:bg-white transition-colors flex items-center gap-3">
                    <Cctv className="w-5 h-5" />
                    Start Virtual Tour
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:sticky lg:top-8 h-fit">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-2xl border"
              >
                {/* Booking form content here */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with more sections... */}

      {/* Amenities Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif mb-16 text-center"
          >
            Luxury Amenities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenitiesData.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#378b29]/10 flex items-center justify-center mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-3 text-gray-600">
                      <Check className="w-5 h-5 text-[#378b29]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-serif"
              >
                Explore the Neighborhood
              </motion.h2>

              <div className="space-y-6">
                {neighborhoodHighlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#378b29]/10 flex items-center justify-center flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">{highlight.title}</h3>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Add your map component here */}
              <div className="absolute inset-0 bg-gray-100">
                <Image
                  src="/map-placeholder.jpg"
                  fill
                  className="object-cover"
                  alt="Neighborhood Map"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Similar Properties Slider */}
      <section className="py-24 bg-gray-50">
        {/* Add similar properties carousel here */}
      </section>

      {/* Similar Properties Slider */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif mb-16"
          >
            Similar Properties You'll Love
          </motion.h2>

          <div className="relative">
            <motion.div 
              className="flex gap-8 -mx-4 overflow-x-auto hide-scrollbar pb-8"
              drag="x"
              dragConstraints={{ right: 0, left: -1200 }}
            >
              {similarProperties.map((property, idx) => (
                <motion.div
                  key={idx}
                  className="min-w-[400px] bg-white rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64">
                    <Image
                      src={property.image}
                      fill
                      className="object-cover"
                      alt={property.title}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm">
                        ₹{property.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">{property.title}</h3>
                    <p className="text-gray-600 mb-4">{property.location}</p>
                    <div className="flex items-center gap-4 text-sm">
                      {property.features.map((feature, fidx) => (
                        <span key={fidx} className="flex items-center gap-1">
                          {feature.icon}
                          {feature.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 bg-[#378b29]">
                <h2 className="text-3xl font-serif text-white mb-8">Get in Touch</h2>
                <div className="space-y-6 text-white/90">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6" />
                    <div>
                      <p className="text-sm text-white/70">Call us at</p>
                      <a href="tel:+919501526153" className="text-lg hover:text-white">
                        +91 95015 26153
                      </a>
                    </div>
                  </div>
                  {/* Add more contact details */}
                </div>
              </div>

              <div className="p-12">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#378b29]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#378b29]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#378b29]"
                      placeholder="I'm interested in this property..."
                    />
                  </div>
                  <button className="w-full py-4 bg-[#378b29] text-white rounded-xl hover:bg-[#2d7021] transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Add these data structures at the top of your file
const amenitiesData = [
    {
      title: "Wellness & Recreation",
      icon: <Gem className="w-6 h-6 text-[#378b29]" />,
      items: [
        "Infinity Pool with City Views",
        "State-of-the-art Fitness Center",
        "Yoga & Meditation Studio",
        "Spa Treatment Rooms"
      ]
    },
    {
      title: "Luxury Services",
      icon: <Crown className="w-6 h-6 text-[#378b29]" />,
      items: [
        "24/7 Concierge Service",
        "Valet Parking",
        "Private Chef Services",
        "Wine Cellar Access"
      ]
    },
    {
      title: "Security & Privacy",
      icon: <Shield className="w-6 h-6 text-[#378b29]" />,
      items: [
        "Biometric Access Control",
        "24/7 Security Personnel",
        "CCTV Surveillance",
        "Secure Parking"
      ]
    }
  ];
  
  const neighborhoodHighlights = [
    {
      title: "Premium Location",
      icon: <MapPin className="w-5 h-5 text-[#378b29]" />,
      description: "Located in the heart of Derabassi, minutes away from major business districts and entertainment hubs."
    },
    {
      title: "Educational Excellence",
      icon: <GraduationCap className="w-5 h-5 text-[#378b29]" />,
      description: "Proximity to top-rated international schools and universities."
    },
    {
      title: "Healthcare Access",
      icon: <Stethoscope className="w-5 h-5 text-[#378b29]" />,
      description: "World-class healthcare facilities within a 5-kilometer radius."
    }
  ];
  
  const similarProperties = [
    {
      title: "Luxury Villa with Pool",
      location: "SBP Homes, Derabassi",
      price: "1.5Cr",
      image: "https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg?t=st=1737279351~exp=1737282951~hmac=b253edfcf15dd4247b37a9fa0ba0fe7e804e82a499717f58e24c709632d66fd2&w=996",
      features: [
        { icon: <BedDouble className="w-4 h-4" />, text: "4 Beds" },
        { icon: <Bath className="w-4 h-4" />, text: "3 Baths" },
        { icon: <Square className="w-4 h-4" />, text: "3500 sq.ft" }
      ]
    },
    // Add more similar properties
  ];
  
  // Add custom hooks for animations and interactions
  const useScrollAnimation = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: true
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  
    return [ref, controls];
  };
  