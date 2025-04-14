import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900 bg-opacity-95 shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-white">
            <span className="font-bold">Tech</span>
            <span className="font-medium">View</span>
            <span className="font-bold">AI</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
          <NavLink onClick={() => scrollToSection('testimonials')}>Testimonials</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          
          <div className="ml-4">
            <a href="#get-started" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-all hover:scale-105">
              Get started
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm border-t border-gray-700 mt-4">
          <div className="px-6 py-4 space-y-3">
            <MobileNavLink onClick={() => scrollToSection('services')}>Services</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('testimonials')}>Testimonials</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('contact')}>Contact</MobileNavLink>
            <a href="#get-started" className="block bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md w-full text-center mt-4">
              Get started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable navigation link components
const NavLink = ({ children, onClick }) => (
  <button 
    onClick={onClick} 
    className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors"
  >
    {children}
  </button>
);

const MobileNavLink = ({ children, onClick }) => (
  <button 
    onClick={onClick} 
    className="block text-sm font-medium text-gray-300 py-2 w-full text-left hover:text-indigo-400"
  >
    {children}
  </button>
);

export default Navbar;