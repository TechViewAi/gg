import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold text-white">
              <span className="font-bold">Tech</span>
              <span className="font-medium">View</span>
              <span className="font-bold">AI</span>
            </span>
            <p className="mt-2 text-sm text-gray-400">
              © {currentYear} TechViewAI. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#services" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">Services</a>
            <a href="#testimonials" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">Contact</a>
            <a href="#privacy" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">Privacy</a>
            <a href="#terms" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;