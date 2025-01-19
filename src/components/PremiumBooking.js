import { motion } from 'framer-motion';

export default function PremiumBooking() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div className="relative">
              <input 
                type="text" 
                id="name"
                className="peer w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-gold outline-none transition-colors bg-transparent"
                placeholder=" "
              />
              <label 
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 
                          peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gold
                          peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm"
              >
                Full Name
              </label>
            </div>
            {/* Add more form fields */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-navy text-white py-4 rounded-lg hover:bg-navy/90 transition-colors"
            >
              Schedule Private Viewing
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
