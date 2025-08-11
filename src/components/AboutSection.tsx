import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-white leading-relaxed">
              For millions of visually impaired individuals, navigating the world is a daily challenge.
            </p>
            
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-white leading-relaxed">
                <span className="font-bold">AKSHI</span> changes that — using advanced AI to see, understand, and speak back to you instantly.
              </p>
              
              <p className="text-2xl md:text-3xl text-white leading-relaxed">
                From reading a signboard to guiding you through crowded streets, AKSHI works anytime, anywhere, without depending on the internet.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;