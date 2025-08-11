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
          className="max-w mx-auto"
        >
          <div 
            className="relative rounded-2xl p-12 text-center overflow-hidden"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/dy9hjd10h/image/upload/v1754934065/Frame_95253_ny0ygu.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            <h2 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
              Everyone has dreams, but imagine trying to dream without being able to see.
            </h2>
            
            <button className="relative z-10 bg-[#4169E1] hover:bg-[#3557c7] text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105">
              Support us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DreamSection;