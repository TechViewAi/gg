import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import useInView from '../hooks/useInView';
import { trackEvent } from '../utils/analytics';

const Hero = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [ref, isInView] = useInView();

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 80;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    scrollToSection('services');
    trackEvent('click', 'navigation', 'explore_services_button');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" 
             style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"
             style={{animationDuration: '12s'}}></div>
      </div>
      
      <div ref={ref} className={`max-w-4xl mx-auto px-6 text-center transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative mb-16">
          {[
            { phase: 0, color: 'indigo', text: 'Delivering technical excellence' },
            { phase: 1, color: 'purple', text: 'Empowering local businesses' },
            { phase: 2, color: 'blue', text: 'Innovative AI solutions' },
            { phase: 3, color: 'indigo', text: 'Transforming digital experiences' }
          ].map((item, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 absolute top-0 left-0 w-full ${
                animationPhase === item.phase 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-block mb-4 mx-auto">
                <span className={`bg-${item.color}-900 bg-opacity-50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-${item.color}-300`}>
                  {item.text}
                </span>
              </div>
            </div>
          ))}
          
          <div className="h-10"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Technical solutions for <span className="text-indigo-400">every business</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          We deliver innovative technical expertise to local businesses and professionals, helping you transform ideas into reality.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="#services"
            onClick={handleExploreClick}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-md text-center transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 group flex items-center cursor-pointer z-20 relative"
            aria-label="Explore our services"
          >
            Explore our services <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;