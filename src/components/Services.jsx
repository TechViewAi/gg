import React, { useState } from 'react';
import { ArrowRight, Database, Code, BarChart, CheckCircle } from 'lucide-react';
import Section from './layout/Section';
import AnimatedElement from './layout/AnimatedElement';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    { 
      id: 0, 
      title: 'AI Solutions', 
      icon: <Database size={20} className="mr-2" />,
      description: 'Harness the power of artificial intelligence to transform your business operations, gain valuable insights, and create personalized experiences for your customers.',
      features: ['Custom AI Models', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision'],
      highlight: 'Our AI solutions have helped businesses reduce operational costs by an average of 35% while increasing customer satisfaction scores.'
    },
    { 
      id: 1, 
      title: 'Web Applications', 
      icon: <Code size={20} className="mr-2" />,
      description: 'Build powerful, responsive web applications that provide seamless user experiences across all devices and platforms, tailored to your specific business requirements.',
      features: ['Custom Web Development', 'Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions'],
      highlight: 'Our custom web applications have helped clients achieve an average increase of 42% in online engagement and conversion rates.'
    },
    { 
      id: 2, 
      title: 'Automated Services', 
      icon: <BarChart size={20} className="mr-2" />,
      description: 'Streamline your business processes through intelligent automation, reducing manual tasks and allowing your team to focus on strategic initiatives that drive growth.',
      features: ['Workflow Automation', 'Business Process Optimization', 'API Integration', 'Custom Automation Solutions'],
      highlight: 'Our automation solutions have helped clients reduce operational time by up to 65% and minimize human error in critical business processes.'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="services" gradient="from-gray-900 via-gray-800 to-gray-900">
      <AnimatedElement>
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
        
        {/* Simplified service tabs */}
        <div className="flex flex-col md:flex-row mb-12">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-6">
            <div className="space-y-2">
              {services.map((service) => (
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
            {services.map((service) => (
              <div key={service.id} className={`transition-all duration-500 ${activeService === service.id ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle size={16} className="text-indigo-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4 border border-gray-700">
                  <div className="text-sm text-gray-400">
                    <span className="text-indigo-400">→</span> {service.highlight}
                  </div>
                </div>
              </div>
            ))}
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
      </AnimatedElement>
    </Section>
  );
};

export default Services;