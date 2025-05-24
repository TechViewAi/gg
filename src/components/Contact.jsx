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
      <span className="text-gray-300">+91 9518571613</span>
    </div>
    <div className="flex items-start">
      <svg className="w-5 h-5 text-indigo-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
      <span className="text-gray-300">techviewai@gmail.com</span>
    </div>
    <div className="flex items-start">
      <svg className="w-5 h-5 text-indigo-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
      <span className="text-gray-300">Jawalkar Nagar, Pimple Gurav, Pune 61</span>
    </div>
  </div>
);

// Updated Social media links with just LinkedIn and Email
const SocialLinks = () => (
  <div className="mt-8">
    <h4 className="text-white font-medium mb-2">Connect with us</h4>
    <div className="flex space-x-4">
      {/* LinkedIn link */}
      <a 
        href="https://www.linkedin.com/in/yashnkm/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
        aria-label="Visit our LinkedIn page"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      </a>
      
      {/* Email link */}
      <a 
        href="mailto:techviewai@gmail.com"
        className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
        aria-label="Email us"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </a>
    </div>
  </div>
);

// Contact form component
const ContactForm = () => (
  <form
    className="space-y-4"
    action="https://formsubmit.co/techviewai@gmail.com"
    method="POST"
  >
    <input type="hidden" name="_template" value="table" />
    <input
      type="hidden"
      name="_captcha"
      value="false"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="Name"
          className="w-full px-4 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="Email"
          className="w-full px-4 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
          placeholder="Your email"
          required
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="Phone"
          className="w-full px-4 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="Subject"
          className="w-full px-4 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
          placeholder="How can we help?"
        />
      </div>
    </div>
    <div>
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        Message
      </label>
      <textarea
        id="message"
        name="Message"
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