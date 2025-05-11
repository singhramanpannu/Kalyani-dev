import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../css/cinematicslider.css';
import img1 from '../assets/Banner-Images/image-1.jpg';
import img2 from '../assets/Banner-Images/Image-2.jpg';
import img3 from '../assets/Banner-Images/Image-3.jpg';
import img4 from '../assets/Banner-Images/Image-4.jpg';
import img5 from '../assets/Banner-Images/image-5.jpg';
import img6 from '../assets/Banner-Images/Image-6.jpg';

const imagesLeft = [img1, img2, img3];
const imagesRight = [img4, img5, img6];

const CinematicImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesLeft.length);
    }, 4000); // extended time for buttery smooth transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Left Panel */}
      <div className="w-1/2 h-full relative">
        <motion.img
          key={`left-${currentIndex}`}
          src={imagesLeft[currentIndex]}
          initial={{ scale: 1 }}
          animate={{ scale: 1.11 }}
          transition={{ duration: 6, ease: [0.25, 1, 0.5, 1] }}
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* Right Panel */}
      <div className="w-1/2 h-full relative">
        <motion.img
          key={`right-${currentIndex}`}
          src={imagesRight[currentIndex]}
          initial={{ scale: 1 }}
          animate={{ scale: 1.11 }}
          transition={{ duration: 6, ease: [0.25, 1, 0.5, 1] }}
          className="absolute w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CinematicImageSlider;
