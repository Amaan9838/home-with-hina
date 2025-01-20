'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const amenities = [
  {
    id: 1,
    title: "Club House",
    description: "Experience luxury living with our state-of-the-art club house",
    image: "/parking.png",
    features: ["Entertainment Zone", "Party Hall", "Business Center"],
    icon: "https://cdn-icons-png.flaticon.com/512/3158/3158959.png"
  },
  {
    id: 2,
    title: "Swimming Pool",
    description: "Resort-style pool with premium deck area",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80",
    features: ["Temperature Controlled", "Kids Pool", "Lounging Area"],
    icon: "https://cdn-icons-png.flaticon.com/512/2784/2784593.png"
  },
  {
    id: 3,
    title: "Modern Fitness Center",
    description: "State-of-the-art equipment and dedicated training areas",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80",
    features: ["Latest Equipment", "Personal Training", "Yoga Studio"],
    icon: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png"
  },
  {
    id: 4,
    title: "Landscaped Gardens",
    description: "Meticulously designed green spaces for peaceful living",
    image: "/garden.png",
    features: ["Walking Trails", "Meditation Zones", "Kids Play Area"],
    icon: "https://cdn-icons-png.flaticon.com/512/2869/2869739.png"
  }
];

export default function AmenitiesShowcase() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-navy">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            World-Class Amenities
          </h2>
          <p className="text-xl text-white/70">
            Experience luxury living at its finest
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {amenities.map((amenity, idx) => (
            <motion.div
              key={amenity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="group relative "
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden ">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                   
                    <h3 className="text-3xl font-light text-white">
                      {amenity.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/80 mb-6">
                    {amenity.description}
                  </p>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-3"
                  >
                    {amenity.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm text-white bg-white/10 backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Amenities List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-8 rounded-3xl bg-black/80 backdrop-blur-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-white">
              <h4 className="text-xl mb-4 font-semibold">Essential Services</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Power Backup
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  24/7 Security
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Lift Access
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h4 className="text-xl mb-4 font-semibold">Outdoor Spaces</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Walking Gardens
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Kids Play Area
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Yoga Path
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h4 className="text-xl mb-4 font-semibold">Parking</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Ample Car Parking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Visitor Parking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  24/7 Access
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
