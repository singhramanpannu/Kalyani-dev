import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import logo from '../assets/images/kl-logo.png';
import '../css/fonts.css';
import ServicesDropdownBar from './servicesdropdown';
import ProjectsDropdownBar from './projectsdropdown';

export default function Navbar() {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [showLogoIcon, setShowLogoIcon] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogoIcon(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative z-50">
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 90, damping: 14 }}
        className={`fixed top-0 z-50 w-full border-b border-gray-300 transition-colors duration-700 ${
          showLogoIcon ? 'bg-[#C9AD94]' : 'bg-white'
        }`}
      >
        <div className="flex items-center justify-between px-16 h-[100px] transition-all duration-500">
          {/* Logo */}
          <div className="flex items-center h-full">
            <motion.div
                className="flex items-center "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img src={logo} alt="Logo" className="w-19 h-16 object-contain" />
                <div className="text-2xl uppercase montserrat-bold text-black leading-tight">
                  Kalyani<br />
                  <span className="text-3xl">Engineering</span>
                </div>
              </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-[1rem] montserrat-regular items-center text-black">
            <NavLink name="Home" path="/" isActive={location.pathname === '/'} />
            <NavLink name="About us" path="/about" isActive={location.pathname === '/about'} />
            <span
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="cursor-pointer transition-colors duration-200"
            >
              What we offer
            </span>
            <span
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
              className="cursor-pointer transition-colors duration-200"
            >
              Projects
            </span>
            <NavLink name="Connect with us" path="/contact" isActive={location.pathname === '/contact'} />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-3xl text-black"
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#8E1616] flex flex-col items-center justify-center z-40"
          >
            <button
              className="absolute top-6 right-6 text-3xl text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
            <div className="flex flex-col gap-8 text-2xl text-white montserrat-regular items-center">
              <NavLink name="Home" path="/" isActive={location.pathname === '/'} />
              <NavLink name="About" path="/about" isActive={location.pathname === '/about'} />
              <span onClick={() => setIsMobileMenuOpen(false)}>Services</span>
              <span onClick={() => setIsMobileMenuOpen(false)}>Projects</span>
              <NavLink name="Contact" path="/contact" isActive={location.pathname === '/contact'} />
              <div className="flex justify-center gap-4 mt-6 text-3xl">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdowns for Desktop */}
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
  <Link
    to={path}
    className={`transition-colors duration-200 ${
      isActive ? 'text-black font-semibold' : 'text-black hover:opacity-80'
    }`}
  >
    {name}
  </Link>
);
