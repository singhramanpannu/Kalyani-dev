import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesDropdownBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="fixed top-[82px] left-0 w-full bg-white border-t border-gray-200 shadow z-40"
    >
      <div className="max-w-[1440px] mx-auto px-10 py-5 flex gap-16 items-center justify-center">
        <Link
          to="/projects/latest"
          className="text-lg font-semibold tracking-wide text-gray-800 hover:text-[#8B4513] transition-colors duration-200"
        >
          Interior Designing.
        </Link>
        <Link
          to="/projects/old"
          className="text-lg font-semibold tracking-wide text-gray-800 hover:text-[#8B4513] transition-colors duration-200"
        >
          Extrior Designing.
        </Link>
        <Link
          to="/projects/old"
          className="text-lg font-semibold tracking-wide text-gray-800 hover:text-[#8B4513] transition-colors duration-200"
        >
          Renovations.
        </Link>
        <Link
          to="/projects/old"
          className="text-lg font-semibold tracking-wide text-gray-800 hover:text-[#8B4513] transition-colors duration-200"
        >
          Architecture Planning
        </Link>
    
      </div>
    </motion.div>
  );
};

export default ServicesDropdownBar;
