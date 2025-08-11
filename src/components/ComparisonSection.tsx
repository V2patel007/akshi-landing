import React from 'react';
import { motion } from 'framer-motion';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-16"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              From waiting for help... to<br />
              instant independence
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              No more relying on someone to read signs, describe<br />
              surroundings, or guide you.<br />
              With AKSHI, real-time assistance is just a voice command away.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6 text-left">
                Getting assistance
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-red-900/40 border border-red-700/50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-white font-medium">Traditionally (without AI)</span>
                  </div>
                  <span className="text-white font-bold">5min</span>
                </div>
                
                <div className="flex items-center justify-between bg-blue-900/40 border border-blue-700/50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-medium">with AKSHI</span>
                  </div>
                  <span className="text-white font-bold">10sec</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;