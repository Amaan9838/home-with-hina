'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Phone, User } from 'lucide-react';
import AmenitiesShowcase from './AmenitiesShowcase';
import FeaturedProperties from './FeaturedProperties';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function PropertyFeatureShowcase() {
  const [selectedPlan, setSelectedPlan] = useState(propertyData.floorPlans[0]);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  // Auto-rotate hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => 
        (prev + 1) % propertyData.heroImages.length
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-gradient-to-b from-[#f8f5f0] to-white">
      {/* Hero Section with Image Carousel */}
      <section className="relative h-screen">
        {propertyData.heroImages.map((image, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentHeroImage === idx ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              fill
              className="object-cover"
              alt={`${propertyData.title} - View ${idx + 1}`}
              priority={idx === 0}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/30" />
        <motion.div 
          className="absolute md:inset-0 bottom-6 flex items-center justify-center text-center text-white"
          {...fadeInUp}
        >
          <div className="space-y-6 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-7xl font-serif mb-4">{propertyData.title}</h1>
              <p className="text-xl hidden md:block font-light tracking-wide">{propertyData.location}</p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4">
              {propertyData.approvals.map((approval, idx) => (
                <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  {approval}
                </span>
              ))}
            </div>
            
          </div>
        </motion.div>
      </section>
      <FeaturedProperties/>
      <section className="py-32 bg-[#f8f5f0]">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl font-serif mb-4">Thoughtfully Designed Spaces</h2>
          <p className="text-gray-600">Select your ideal home from our premium floor plans</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Floor Plan Navigation */}
          <div className="space-y-4">
            {floorPlans.map((plan, idx) => (
              <motion.button
                key={idx}
                className={`w-full p-6 text-left rounded-xl shadow-[0px_4px_0px_0px_rgb(0,0,0)] transition-all ${
                  selectedPlan.type === plan.type 
                    ? 'bg-navy text-white' 
                    : 'bg-white hover:bg-navy/5'
                }`}
                onClick={() => setSelectedPlan(plan)}
                whileHover={{ x: 10 }}
              >
                <h3 className="text-2xl font-light mb-2">{plan.type}</h3>
                <div className="flex justify-between text-sm">
                  <span>{plan.area}</span>
                  <span>{plan.price}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Floor Plan Details */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-[4px_4px_0px_0px_rgb(0,0,0)] border-2 border-black"
            key={selectedPlan.type}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src={selectedPlan.image}
                    fill
                    className="object-cover"
                    alt={selectedPlan.type}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {Object.entries(selectedPlan.specs).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <span className="text-gray-500 block">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-4">Room Dimensions</h4>
                <ul className="space-y-3">
                  {selectedPlan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 py-4 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors">
                  Download Floor Plan
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

       {/* Features Grid */}
       <section className="py-16 md:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {propertyData.features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-[2px_2px_0px_0px_rgb(0,0,0)] border border-black">
                  <Image
                    src={feature.image}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={feature.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 p-8 text-white">
                    <h3 className="text-2xl font-light mb-2">{feature.title}</h3>
                    <p className="text-sm font-light opacity-80">{feature.description}</p>
                    <ul className="mt-4 space-y-2">
                      {feature.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm opacity-80">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Amenities Showcase */}
    <AmenitiesShowcase/>

      {/* Floor Plans */}
      
    
   {/* Enhanced Contact Section */}
   <section className="bg-[#f8f5f0] py-16 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            {...fadeInUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Schedule a Visit</h2>
                <p className="text-gray-600 mb-8">Experience luxury living at {propertyData.title}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    {propertyData.contact.phones.map((phone, idx) => (
                      <a 
                        key={idx}
                        href={`tel:${phone}`}
                        className="text-lg hover:text-gold transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-lg">{propertyData.contact.name}</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] md:h-auto rounded-2xl overflow-hidden">
                <Image
                  src={propertyData.contact.image}
                  fill
                  className="object-cover"
                  alt="Contact"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Premium Residences",
    description: "Luxurious Living Spaces with Premium Finishes",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80",
    specs: ["Italian Marble Flooring", "3.2m Ceiling Height", "Designer Lighting"]
  },
  {
    title: "Designer Kitchens",
    description: "German-engineered Modular Kitchens",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80",
    specs: ["Bosch Appliances", "Quartz Countertops", "Smart Storage Solutions"]
  },
  {
    title: "Spa-like Bathrooms",
    description: "Premium Sanitaryware & Fittings",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80",
    specs: ["Grohe Fittings", "Rain Showers", "Anti-skid Tiles"]
  }
];



const floorPlans = [
  {
    type: "1 BHK Premium",
    area: "800 sq.ft",
    price: "Starting ₹45L",
    image: "/1BHK.png",
    features: [
      "Master Bedroom: 14' x 12'",
      "Living Room: 16' x 14'",
      "Kitchen: 8' x 10'",
      "Balcony: 6' x 12'"
    ],
    specs: {
      bedrooms: 1,
      bathrooms: 1,
      balconies: 1,
      direction: "East Facing"
    }
  },
  {
    type: "2 BHK Luxury",
    area: "1200 sq.ft",
    price: "Starting ₹75L",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Master Bedroom: 16' x 14'",
      "Second Bedroom: 14' x 12'",
      "Living Room: 18' x 16'",
      "Kitchen: 10' x 12'",
      "Balconies: 2 (6' x 12' each)"
    ],
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      balconies: 2,
      direction: "South-East Facing"
    }
  },
  {
    type: "3 BHK Elite",
    area: "1800 sq.ft",
    price: "Starting ₹1.2Cr",
    image: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Master Bedroom: 18' x 16'",
      "Second Bedroom: 16' x 14'",
      "Third Bedroom: 14' x 12'",
      "Living Room: 20' x 18'",
      "Kitchen: 12' x 14'",
      "Balconies: 3 (6' x 12' each)"
    ],
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      balconies: 3,
      direction: "South Facing"
    }
  }
];


const propertyData = {
  title: "Find Your Dream Home with Hina!",
  location: "SBP Ambala Chandigarh Highway, Derabassi Mohali",
  heroImages: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0", // Modern apartment exterior
    "/3BHK.jpg", // Luxury building front
    "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Apartment interior
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80"  // Premium entrance
  ],
  features: [
    {
      title: "Premium 3 BHK",
      description: "Spacious Living with Modern Amenities",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80", 
      specs: ["1550 sq.yd Area", "East Facing", "Power Backup"]
    },
    {
      title: "Garden Views",
      description: "Surrounded by Lush Greenery",
      image: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?q=80",
      specs: ["Big Garden", "Walking Paths", "Landscaped Areas"]
    },
    {
      title: "Premium Facilities",
      description: "World-class Amenities",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80",
      specs: ["Club House", "Swimming Pool", "Modern Gym"]
    }
  ],
  amenities: [
    {
      title: "Club House",
      description: "Premium recreational facility",
      image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80",
      icon: "https://cdn-icons-png.flaticon.com/512/3158/3158959.png"
    },
    {
      title: "Swimming Pool",
      description: "Resort-style pool with deck",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80",
      icon: "https://cdn-icons-png.flaticon.com/512/2784/2784593.png"
    },
    {
      title: "Modern Gym",
      description: "State-of-the-art equipment",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80",
      icon: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png"
    },
    {
      title: "Gardens & Parks",
      description: "Multiple landscaped areas",
      image: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?q=80",
      icon: "https://cdn-icons-png.flaticon.com/512/2869/2869739.png"
    }
  ],
  floorPlans: [
    {
      type: "3 BHK Premium",
      area: "1550 sq.yd",
      price: "Contact for Price",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80",
      features: [
        "Master Bedroom: 16' x 14'",
        "Living Room: 20' x 16'",
        "Kitchen: 12' x 10'",
        "Balcony: 8' x 6'"
      ],
      specs: {
        orientation: "East Facing",
        parking: "Ample Cars Parking",
        powerBackup: "Available",
        lift: "Available"
      }
    }
  ],
  approvals: ["SBI Bank Approved", "RERA Registered"],
  contact: {
    name: "Ms Hina",
    phones: ["9501526153", "9056007075"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80"
  }
};
