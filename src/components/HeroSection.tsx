import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#070707] text-white flex items-center justify-center pt-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 leading-[0.9]" style={{ fontFamily: 'Lato, sans-serif', fontWeight: '700' }}>
            See the World, Differently
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl mb-16 leading-relaxed text-white max-w-5xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: '600' }}
          >
            AKSHI turns any smart glasses into your personal AI-powered guide — reading, describing, and navigating in real time, even offline.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <button 
              className="bg-[#316BFF] hover:bg-[#2557e6] text-white px-16 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#316BFF]/30"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Try Now
            </button>
            <p className="text-gray-400 text-lg">No card required.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;