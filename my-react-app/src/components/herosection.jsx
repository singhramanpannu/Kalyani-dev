import React from 'react';
import vd1 from '../assets/videos/vd1.mp4'

export default function HeroSection() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src={vd1} // replace with your actual video path
      />

      {/* Dark overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center h-full px-10 md:px-24">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-wide">
            Welcome to Kalyani Engineering
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            We specialize in crafting high-end, bespoke interior designs for residential, commercial, and industrial spaces.
            Blending innovation with elegance, our expert team transforms environments into timeless experiences.
          </p>
          <button className="mt-4 px-6 py-3 bg-white text-black text-sm font-medium rounded-full shadow hover:shadow-lg transition">
            Explore Our Projects
          </button>
        </div>
      </div>
    </div>
  );
}
