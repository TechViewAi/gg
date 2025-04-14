import React from 'react';

// Reusable section component with consistent styling
const Section = ({ 
  id, 
  children, 
  className = '', 
  gradient = 'from-gray-900 to-gray-800',
  maxWidth = '6xl'
}) => {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`}></div>
      <div className={`max-w-${maxWidth} mx-auto px-6 relative`}>
        {children}
      </div>
    </section>
  );
};

export default Section;