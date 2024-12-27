import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  return (
    <div className="overflow-hidden">
      <p 
        className={`animate-slide-up ${className}`}
        style={{ 
          animationDuration: '0.8s',
          animationFillMode: 'both' 
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default AnimatedText;