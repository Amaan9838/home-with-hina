'use client';
import Navbar from "@/components/NavbarOther";
import { Mail, MapPin, PhoneCallIcon, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const heroAnimation = {
    initial: { scale: 1.1, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" }
    }
};

export default function ContactPage() {
    return (
        <div className="bg-[#f8f5f0]">
            <Navbar />
            
            {/* Animated Hero Section */}
            <motion.div 
                className="relative h-[60vh] overflow-hidden"
                variants={heroAnimation}
                initial="initial"
                animate="animate"
            >
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src="/bg.png"
                        alt="Luxury Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
                </div>
                <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
                >
                    <motion.h1 
                        variants={fadeIn}
                        className="text-4xl md:text-7xl font-serif text-white mb-6"
                    >
                        Connect With Excellence
                    </motion.h1>
                    <motion.div 
                        variants={fadeIn}
                        className="w-24 h-1 bg-lime-500 mb-6"
                    />
                    <motion.p 
                        variants={fadeIn}
                        className="text-xl md:text-2xl text-white max-w-3xl font-light"
                    >
                        Experience personalized service that exceeds expectations
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Elegant Contact Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {contactMethods.map((method, index) => (
                        <motion.div 
                            key={index}
                            variants={fadeIn}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="bg-white rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgb(0,0,0)] border-2 border-black hover:shadow transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <motion.div 
                                className="flex flex-col items-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <motion.div 
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-20 h-20 rounded-full bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center mb-6"
                                >
                                    {method.icon}
                                </motion.div>
                                <h3 className="text-2xl font-serif mb-4">{method.title}</h3>
                                <p className="text-gray-600 text-center mb-4">{method.description}</p>
                                {method.link && (
                                    <motion.a 
                                        whileHover={{ scale: 1.05 }}
                                        href={method.link} 
                                        className="text-lime-600 hover:text-lime-700 font-semibold"
                                    >
                                        {method.linkText}
                                    </motion.a>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Premium Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 mb-20"
                >
                    <div className="max-w-4xl mx-auto overflow-hidden">
                        <motion.div 
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2"
                        >
                            <motion.div 
                                variants={fadeIn}
                                className="p-12 text-black"
                            >
                                <motion.h2 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-3xl font-serif mb-6"
                                >
                                    Let's Start a Conversation
                                </motion.h2>
                                <motion.p 
                                    variants={fadeIn}
                                    className="mb-8 text-black"
                                >
                                    Our dedicated team is ready to assist you with personalized attention and expertise.
                                </motion.p>
                                <motion.div 
                                    variants={staggerContainer}
                                    className="space-y-6"
                                >
                                    {contactDetails.map((detail, index) => (
                                        <motion.div 
                                            key={index}
                                            variants={fadeIn}
                                            whileHover={{ x: 10 }}
                                            className="flex items-center space-x-4"
                                        >
                                            <motion.div 
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
                                            >
                                                {detail.icon}
                                            </motion.div>
                                            <div>
                                                <h3 className="font-semibold">{detail.title}</h3>
                                                <p className="text-black/80">{detail.info}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            <motion.div 
                                variants={fadeIn}
                                className="p-12"
                            >
                                <motion.form 
                                    className="space-y-6"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <div className="space-y-4">
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-900 focus:outline-none transition-all"
                                        />
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-900 focus:outline-none transition-all"
                                        />
                                        <motion.textarea
                                            whileFocus={{ scale: 1.02 }}
                                            rows="4"
                                            placeholder="Your Message"
                                            className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-900 focus:outline-none transition-all"
                                        />
                                    </div>
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full text-white shadow-[2px_2px_0px_0px_rgb(0,0,0)] px-6 py-3 rounded-3xl border-white bg-[#8d6d36] hover:opacity-80 border transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </motion.button>
                                </motion.form>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// Keep your existing contactMethods and contactDetails arrays as they are


const contactMethods = [
    {
        icon: <Mail className="w-8 h-8 text-black" />,
        title: "Email Enquiry",
        description: "For personalized assistance and detailed inquiries",
        link: "mailto:info@homewithhina.com",
        linkText: "info@homewithhina.com"
    },
    {
        icon: <PhoneCallIcon className="w-8 h-8 text-black" />,
        title: "Direct Contact",
        description: "Speak directly with our luxury specialists",
        link: "tel:+15551234567",
        linkText: "+1 (555) 123-4567"
    },
    {
        icon: <MapPin className="w-8 h-8 text-black" />,
        title: "Visit Our Office",
        description: "1234 Sunset Boulevard, Los Angeles, CA 90026",
        link: "#",
        linkText: "Get Directions"
    }
];

const contactDetails = [
    {
        icon: <Clock className="w-6 h-6 text-black" />,
        title: "Business Hours",
        info: "Mon - Fri: 9:00 AM - 6:00 PM"
    },
    {
        icon: <PhoneCallIcon className="w-6 h-6 text-black" />,
        title: "Phone",
        info: "+1 (555) 123-4567"
    },
    {
        icon: <Mail className="w-6 h-6 text-black" />,
        title: "Email",
        info: "info@homewithhina.com"
    }
];
