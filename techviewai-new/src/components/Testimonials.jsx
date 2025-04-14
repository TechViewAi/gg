import React, { useMemo } from 'react';
import Section from './layout/Section';
import AnimatedElement from './layout/AnimatedElement';

const Testimonials = () => {
  // Generate testimonial data
  const testimonials = useMemo(() => [
    {
      quote: "TechViewAI's blockchain application transformed our examination system. We've implemented secure, tamper-proof assessments that significantly improved integrity and trust in our evaluation process.",
      author: "Khushi"
    },
    {
      quote: "The digital verification system with AI developed by TechViewAI has completely revolutionized our authentication process. It's accurate, efficient, and has strengthened our security protocols.",
      author: "Sumedh"
    },
    {
      quote: "Their email security extension has protected our organization from countless phishing attempts. The team delivered a user-friendly solution that seamlessly integrates with our existing systems.",
      author: "Gauri"
    }
  ], []);

  // Generate random dot positions once on component mount
  const dotPositions = useMemo(() => 
    Array.from({ length: 5 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    })), 
  []);

  // Memoize the star rating component to avoid unnecessary re-renders
  const StarRating = useMemo(() => (
    <div className="mb-4 text-indigo-400">
      {Array(5).fill(0).map((_, i) => (
        <svg key={i} className="inline-block w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  ), []);

  return (
    <Section id="testimonials" gradient="from-gray-900 to-gray-800">
      {/* Optimized dots pattern with pre-calculated positions */}
      <div className="absolute inset-0 opacity-10">
        {dotPositions.map((position, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-500"
            style={position}
          ></div>
        ))}
      </div>
      
      <AnimatedElement>
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
          {testimonials.map((testimonial, index) => (
            <AnimatedElement key={index} delay={index * 200}>
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10 group h-full flex flex-col">
                {StarRating}
                <p className="text-gray-300 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                <div className="mt-auto text-center">
                  <h4 className="font-medium text-white group-hover:text-indigo-300 transition-colors">{testimonial.author}</h4>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </AnimatedElement>
    </Section>
  );
};

export default Testimonials;