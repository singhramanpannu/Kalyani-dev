import React from 'react';
import { motion } from 'framer-motion';

export default function StatementSection() {
  return (
    <section className="bg-transparent min-h-[50vh] py-[12vh] px-6 md:px-24 flex items-center justify-center overflow-hidden relative">
      {/* Decorative Divider Line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 h-[1px] bg-gray-200"
      />

      {/* Main Message */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full max-w-4xl mx-auto text-center z-10"
      >
        <h2 className="text-[2.4rem] md:text-[2.8rem] lg:text-[2rem] leading-snug tracking-tight font-light text-gray-600 montserrat-light">
          <span className="mr-3 montserrat-regular text-gray-800 text-[3.2rem] md:text-[3.4rem] mb-3">
            Design
          </span>
          is how we shape experience — quietly, beautifully.
        </h2>
      </motion.div>

      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-white/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
    </section>
  );
}
