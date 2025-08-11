import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-gradient-to-t from-[#000000] to-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to revolutionize how you see?    <button className="bg-[#4169E1] hover:bg-[#3557c7] text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105">
            Try for free
          </button>
          </h2>
          
       
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;