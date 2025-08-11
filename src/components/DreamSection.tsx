import React from 'react';
import { motion } from 'framer-motion';

const DreamSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-12 border border-blue-700/30 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Everyone has dreams, but imagine trying to dream without being able to see.
            </h2>
            
            <button className="bg-[#4169E1] hover:bg-[#3557c7] text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105">
              Support us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DreamSection;