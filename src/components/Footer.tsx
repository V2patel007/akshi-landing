import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 bg-[#070707] text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h1 
            className="text-5xl md:text-[85px] lg:text-[85px] font-bold leading-[0.9] max-w-6xl mx-auto"
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: '700' }}
          >
            Ready to revolutionize how you see?
          </h1>
          
          <button 
            className="bg-[#316BFF] hover:bg-[#2557e6] text-white px-16 py-5 rounded-full text-[20px] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#316BFF]/30"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Try for free
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;