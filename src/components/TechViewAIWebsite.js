import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code, Server, CheckCircle, Database, BarChart } from 'lucide-react';

const TechViewAIWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    testimonials: false,
    contact: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Check which sections are visible
      const sections = ['hero', 'services', 'testimonials', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight - 100 && rect.bottom >= 0;
          setIsVisible(prev => ({ ...prev, [section]: isInViewport }));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    
    // Hero section animation sequence
    const timer = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    
    // Service section rotation
    const serviceTimer = setInterval(() => {
      setActiveService(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
      clearInterval(serviceTimer);
    };
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
    <div className="font-sans text-white bg-gray-900 min-h-screen">
      {/* Navigation - Minimalist navbar */}
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
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors">Contact</button>
            
            <div className="ml-4 flex items-center space-x-3">
              <a href="#get-started" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-all hover:scale-105">
                Get started
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm border-t border-gray-700 mt-4">
            <div className="px-6 py-4 space-y-3">
              <button onClick={() => scrollToSection('services')} className="block text-sm font-medium text-gray-300 py-2 w-full text-left">Services</button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-sm font-medium text-gray-300 py-2 w-full text-left">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block text-sm font-medium text-gray-300 py-2 w-full text-left">Contact</button>
              <a href="#get-started" className="block bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md w-full text-center mt-4">
                Get started
              </a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section - Animated */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          
          {/* Dynamic grid background */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 10 }).map((_, rowIndex) => (
              <div key={`row-${rowIndex}`} className="flex">
                {Array.from({ length: 10 }).map((_, colIndex) => (
                  <div 
                    key={`cell-${rowIndex}-${colIndex}`} 
                    className="border border-gray-700 flex-1 aspect-square"
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className={`max-w-4xl mx-auto px-6 text-center transition-opacity duration-1000 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative mb-16">
            {/* Animated text elements */}
            <div className={`transition-all duration-1000 absolute top-0 left-0 w-full ${animationPhase === 0 ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block mb-4 mx-auto">
                <span className="bg-indigo-900 bg-opacity-50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-indigo-300">
                  Delivering technical excellence
                </span>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 absolute top-0 left-0 w-full ${animationPhase === 1 ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block mb-4 mx-auto">
                <span className="bg-purple-900 bg-opacity-50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-purple-300">
                  Empowering local businesses
                </span>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 absolute top-0 left-0 w-full ${animationPhase === 2 ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block mb-4 mx-auto">
                <span className="bg-blue-900 bg-opacity-50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-blue-300">
                  Innovative AI solutions
                </span>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 absolute top-0 left-0 w-full ${animationPhase === 3 ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block mb-4 mx-auto">
                <span className="bg-indigo-900 bg-opacity-50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-indigo-300">
                  Transforming digital experiences
                </span>
              </div>
            </div>
            
            {/* Spacer for the animated elements */}
            <div className="h-10"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Technical solutions for <span className="text-indigo-400">every business</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We deliver innovative technical expertise to local businesses and professionals, helping you transform ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#get-started" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-md text-center transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20">
              Get started
            </a>
            <button 
              onClick={() => scrollToSection('services')}
              className="border border-gray-700 hover:border-indigo-400 text-gray-300 hover:text-white font-medium px-8 py-3 rounded-md text-center transition-all hover:bg-gray-800 group"
            >
              Explore our services <ArrowRight size={16} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Animated dots indicating scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <div className="text-sm text-gray-400 mb-2">Scroll to explore</div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section - Interactive */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        
        <div className={`max-w-6xl mx-auto px-6 relative transition-all duration-1000 transform ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <span className="bg-indigo-900 bg-opacity-50 rounded-full px-3 py-1 text-xs font-medium text-indigo-300">
                WHAT WE DO
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Interactive Solutions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We specialize in creating customized technical solutions that empower your business to thrive in the digital age.
            </p>
          </div>
          
          {/* Interactive service tabs */}
          <div className="flex flex-col md:flex-row mb-12">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-6">
              <div className="space-y-2">
                {[
                  { id: 0, title: 'AI Solutions', icon: <Database size={20} className="mr-2" /> },
                  { id: 1, title: 'Web Applications', icon: <Code size={20} className="mr-2" /> },
                  { id: 2, title: 'Automated Services', icon: <BarChart size={20} className="mr-2" /> }
                ].map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all flex items-center ${
                      activeService === service.id 
                        ? 'bg-indigo-900 bg-opacity-50 text-white border-l-4 border-indigo-500' 
                        : 'bg-gray-800 bg-opacity-50 text-gray-300 hover:bg-opacity-70'
                    }`}
                  >
                    {service.icon}
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-2/3 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              {/* AI Solutions */}
              <div className={`transition-all duration-500 ${activeService === 0 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <h3 className="text-xl font-semibold mb-4 text-white">AI Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Harness the power of artificial intelligence to transform your business operations, gain valuable insights, and create personalized experiences for your customers.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    'Custom AI Models', 
                    'Natural Language Processing', 
                    'Predictive Analytics', 
                    'Computer Vision'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle size={16} className="text-indigo-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4 border border-gray-700">
                  <div className="text-sm text-gray-400">
                    <span className="text-indigo-400">→</span> Our AI solutions have helped businesses reduce operational costs by an average of 35% while increasing customer satisfaction scores.
                  </div>
                </div>
              </div>
              
              {/* Web Applications */}
              <div className={`transition-all duration-500 ${activeService === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <h3 className="text-xl font-semibold mb-4 text-white">Web Applications</h3>
                <p className="text-gray-300 mb-4">
                  Build powerful, responsive web applications that provide seamless user experiences across all devices and platforms, tailored to your specific business requirements.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    'Custom Web Development', 
                    'Responsive Design', 
                    'Progressive Web Apps', 
                    'E-commerce Solutions'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle size={16} className="text-indigo-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4 border border-gray-700">
                  <div className="text-sm text-gray-400">
                    <span className="text-indigo-400">→</span> Our custom web applications have helped clients achieve an average increase of 42% in online engagement and conversion rates.
                  </div>
                </div>
              </div>
              
              {/* Automated Services */}
              <div className={`transition-all duration-500 ${activeService === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <h3 className="text-xl font-semibold mb-4 text-white">Automated Services</h3>
                <p className="text-gray-300 mb-4">
                  Streamline your business processes through intelligent automation, reducing manual tasks and allowing your team to focus on strategic initiatives that drive growth.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    'Workflow Automation', 
                    'Business Process Optimization', 
                    'API Integration', 
                    'Custom Automation Solutions'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle size={16} className="text-indigo-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4 border border-gray-700">
                  <div className="text-sm text-gray-400">
                    <span className="text-indigo-400">→</span> Our automation solutions have helped clients reduce operational time by up to 65% and minimize human error in critical business processes.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center bg-transparent border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:bg-opacity-10 px-6 py-3 rounded-md font-medium transition-all"
            >
              Discuss your project with us <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        
        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-indigo-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 3}s infinite alternate`
              }}
            ></div>
          ))}
        </div>
        
        <div className={`max-w-6xl mx-auto px-6 relative transition-all duration-1000 transform ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <span className="bg-indigo-900 bg-opacity-50 rounded-full px-3 py-1 text-xs font-medium text-indigo-300">
                SUCCESS STORIES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We've helped businesses of all sizes achieve their technical goals. Here's what some of our clients have to say.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "TechViewAI transformed our business with their AI solution. We've seen a 40% increase in efficiency and significant cost savings.",
                author: "Sarah Johnson",
                company: "Retail Solutions Inc.",
                image: "https://via.placeholder.com/48"
              },
              {
                quote: "The web application developed by TechViewAI has completely revolutionized how we interact with our customers. It's intuitive, fast, and scalable.",
                author: "Michael Chen",
                company: "Global Logistics",
                image: "https://via.placeholder.com/48"
              },
              {
                quote: "Their automated services saved us countless hours of manual work. The team was professional, responsive, and delivered beyond our expectations.",
                author: "Jennifer Williams",
                company: "Healthcare Innovations",
                image: "https://via.placeholder.com/48"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10 group"
              >
                <div className="mb-4 text-indigo-400">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="inline-block w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-white group-hover:text-indigo-300 transition-colors">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
        
        <div className={`max-w-4xl mx-auto px-6 relative transition-all duration-1000 transform ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-block mb-3">
              <span className="bg-indigo-900 bg-opacity-50 rounded-full px-3 py-1 text-xs font-medium text-indigo-300">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Start Your Journey</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to transform your business with our technical expertise? Let's start a conversation.
            </p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700">
            <div className="md:flex">
              <div className="md:w-2/5 bg-indigo-900 bg-opacity-20 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
                  <p className="text-gray-300 mb-6">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-gray-300">info@techviewai.com</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-gray-300">123 Innovation Way, Tech City, TC 12345</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-white font-medium mb-2">Connect with us</h4>
                  <div className="flex space-x-4">
                    {['twitter', 'linkedin', 'github', 'facebook'].map((social, i) => (
                      <a 
                        key={i}
                        href={`#${social}`}
                        className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2V11h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-md transition-all hover:shadow-lg hover:shadow-indigo-600/20"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
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
                © {new Date().getFullYear()} TechViewAI. All rights reserved.
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
    </div>
  );
};

export default TechViewAIWebsite;