import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/kl-logo.png';
import '../css/fonts.css';
import ServicesDropdownBar from './servicesdropdown';
import ProjectsDropdownBar from './projectsdropdown';

export default function Navbar() {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 90, damping: 14 }}
        className="bg-white border-b border-gray-200 sticky top-0 z-50"
      >
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="grid grid-cols-3 items-center h-[82px]">
            {/* Left */}
            <div className="flex justify-center items-center gap-6 relative">
              <NavLink name="Home" path="/" isActive={location.pathname === '/'} />
              <NavLink name="About" path="/about" isActive={location.pathname === '/about'} />

              {/* Services Dropdown Hover */}
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="relative"
              >
                <span className="inline-block text-[1.1rem] tracking-wide font-medium font-playfair text-gray-800 px-4 py-1 cursor-pointer">
                  Services
                </span>
              </div>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center relative">
              <div className="h-8 w-[1px] bg-gray-300 absolute left-0" />
              <div className="flex items-center justify-start w-[96%]">
                <motion.img
                  src={logo}
                  alt="Logo"
                  className="w-18 h-14"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <motion.span className="text-4xl dm-serif-text-regular text-gray-900 tracking-tight whitespace-nowrap">
                  Kalyani Engineering
                </motion.span>
              </div>
              <div className="h-8 w-[1px] bg-gray-300 absolute right-0" />
            </div>

            {/* Right */}
            <div className="flex justify-center items-center gap-6">
               <div
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
              className="relative"
            >
              <span className="inline-block text-[1.1rem] tracking-wide font-medium font-playfair text-gray-800 px-4 py-1 cursor-pointer">
                Projects
              </span>
            </div>
            <NavLink name="Contact Us" path="/contact" isActive={location.pathname === '/contact'} />
          </div>
              
            </div>
          </div>
        
      </motion.nav>

      {/* Dropdown lives OUTSIDE nav so it can go full width */}
      <AnimatePresence>
        {isServicesOpen && (
          <div
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <ServicesDropdownBar />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isProjectsOpen && (
          <div
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <ProjectsDropdownBar />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const NavLink = ({ name, path, isActive }) => (
  <div className="px-4 py-1">
    <Link
      to={path}
      className={`relative inline-block text-[1.1rem] tracking-wide font-medium font-playfair transition-colors duration-300 ${
        isActive ? 'text-black font-bold' : 'text-gray-700'
      } group`}
    >
      {name}
      <span className="block h-[2px] w-0 bg-[#8B4513] transition-all duration-500 ease-in-out group-hover:w-full" />
    </Link>
  </div>
);
