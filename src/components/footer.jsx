import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMap } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f0] text-gray-800 w-full py-14 px-6 border-t border-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm md:text-[0.95rem]">
        
        {/* Left Column: Company Info */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-lg font-semibold tracking-wider text-gray-900">KALYANI ENGINEERING</h4>
          <p className="leading-relaxed">45, Industrial Area, Sitapura,<br />Jaipur, Rajasthan, 302022</p>
          <Link 
            to="https://www.google.co.in/maps/place/Jaipur,+Rajasthan/@26.8854214,75.6257413,11z/data=!3m1!4b1!4m6!3m5!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!8m2!3d26.9124336!4d75.7872709!16zL20vMDE2NzIy?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D" 
            className="mt-3 inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors duration-200 font-medium"
          >
            <HiOutlineMap className="text-xl" /> View Map
          </Link>
          <p className="text-xs mt-6 text-gray-500">&copy; {new Date().getFullYear()} Kalyani Engineering. All rights reserved.</p>
        </div>

        {/* Center Column: Nav Links */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'About', 'Services', 'Our Projects', 'Contact'].map((item, idx) => (
              <li key={idx}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`} 
                  className="hover:underline hover:text-[#8B4513] transition duration-150"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Social Links */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold tracking-wider mb-4">Follow Us</h4>
          <ul className="space-y-3">
            <li>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:text-pink-600 transition-colors"
              >
                <FaInstagram className="text-lg" /> Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:text-blue-600 transition-colors"
              >
                <FaFacebook className="text-lg" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
