'use client';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const starVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: "spring", stiffness: 200, damping: 10 }
};

export default function Testimonials() {
    return (
        <section className="pt-12 pb-24">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[3rem] font-bold text-center mb-16"
                >
                    Client Experiences
                </motion.h2>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={testimonial.id}
                            variants={cardVariants}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="bg-white flex flex-col gap-4 p-8 rounded-3xl shadow-[4px_4px_0px_0px_rgb(0,0,0)] border-2 border-black"
                        >
                            <motion.div 
                                className="flex items-center gap-1"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.1 }
                                    }
                                }}
                            >
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        variants={starVariants}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <Star className="text-green-500" fill='#22c55e' size={20} />
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-900"
                            >
                                "{testimonial.quote}"
                            </motion.div>

                            <motion.div 
                                className='flex items-center md:gap-6'
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                    <p className="text-gray-800">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}


const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Happy Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "Working with Home with Hina was an exceptional experience. They understood exactly what we were looking for in our dream home.",
  },
  {
    id: 2,
    name: "Michael Roberts",
    role: "Satisfied Buyer",
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
    quote: "The attention to detail and professionalism was outstanding. I couldn’t be happier with the results.",
  },
  {
    id: 3,
    name: "Jessica Lee",
    role: "New Resident",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    quote: "Their creative approach and customer service truly set them apart. Highly recommend them for your next project!",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Recent Client",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    quote: "They brought our vision to life with stunning results. Exceptional work and fantastic communication throughout.",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "First-Time Buyer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    quote: "Home with Hina made the entire process effortless and enjoyable. I couldn’t have asked for a better experience.",
  },
  {
    id: 6,
    name: "John Miller",
    role: "Thrilled Homeowner",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    quote: "Their expertise and professionalism were evident from start to finish. The results exceeded my expectations.",
  },
  
];
