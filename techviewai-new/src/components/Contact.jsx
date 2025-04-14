import React from 'react';
import Section from './layout/Section';
import AnimatedElement from './layout/AnimatedElement';

const Contact = () => {
  return (
    <Section id="contact" gradient="from-gray-800 to-gray-900" maxWidth="4xl">
      <AnimatedElement>
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
                
                <ContactInfo />
              </div>
              
              <SocialLinks />
            </div>
            
            <div className="md:w-3/5 p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedElement>
    </Section>
  );
};

// Contact information component with icons
const ContactInfo = () => (
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
);

// Social media links
const SocialLinks = () => (
  <div className="mt-8">
    <h4 className="text-white font-medium mb-2">Connect with us</h4>
    <div className="flex space-x-4">
      {['twitter', 'linkedin', 'github', 'facebook'].map((social, i) => (
        <a 
          key={i}
          href={`#${social}`}
          className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
          aria-label={`Visit our ${social} page`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2V11h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </a>
      ))}
    </div>
  </div>
);

// Contact form component
const ContactForm = () => (
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
);

export default Contact;