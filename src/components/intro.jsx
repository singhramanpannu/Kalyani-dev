import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/images/bg-img-1.jpg';

export default function IntroSplitSection() {
  return (
    <section className="bg-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ fontFamily: `'Playfair Display', serif` }}
          >
            Welcome to Kalyani Engineering
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-xl"
            style={{ fontFamily: `'Inter', sans-serif` }}
          >
            We are a design-forward interior studio that merges aesthetics and functionality. From contemporary homes to commercial environments, we craft spaces that feel intentional, timeless, and personal.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="w-full h-[380px] md:h-[460px] overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={image}
            alt="Kalyani Engineering Work"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
