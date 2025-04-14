import React from 'react';
import useInView from '../../hooks/useInView';

// Reusable component for fade-in animations
const AnimatedElement = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' // 'up', 'down', 'left', 'right'
}) => {
  const [ref, isInView] = useInView();
  
  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-10';
      case 'down': return '-translate-y-10';
      case 'left': return 'translate-x-10';
      case 'right': return '-translate-x-10';
      default: return 'translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isInView 
          ? 'opacity-100 transform-none' 
          : `opacity-0 ${getTransform()}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;