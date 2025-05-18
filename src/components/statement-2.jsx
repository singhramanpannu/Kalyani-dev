import React from 'react';
import { motion } from 'framer-motion';

export default function StatementTwo() {
  return (
    <section className="bg-white min-h-[40vh] py-[9vh] px-6 flex items-center justify-center overflow-hidden relative">
      

      {/* Main Message */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full max-w-4xl mx-auto text-center z-10"
      >
        <h2 className="text-[2.4rem] md:text-[2.8rem] lg:text-[2rem] leading-snug tracking-tight font-light text-gray-600 montserrat-light">
          Over 200,000 sq ft of premium commercial and residential spaces in execution globally
        </h2>
      </motion.div>

      
    </section>
  );
}
