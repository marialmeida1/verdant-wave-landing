
import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main geometric shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-brand-green/20 geometric-shape animate-float"></div>
      <div className="absolute top-40 right-40 w-20 h-20 bg-brand-green/30 diamond-shape animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-brand-green/25 geometric-shape animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Left side shapes */}
      <div className="absolute top-60 left-10 w-16 h-16 bg-brand-green/15 diamond-shape animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-20 w-28 h-28 bg-brand-green/20 geometric-shape animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Central large shape inspired by the logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse-slow">
          <path
            d="M100 10 L170 50 L170 150 L100 190 L30 150 L30 50 Z"
            fill="url(#gradient)"
            className="animate-float"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00AF69" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#2D4A4C" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-10 left-1/3 w-12 h-12 bg-brand-green/10 geometric-shape animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-10 left-1/2 w-14 h-14 bg-brand-green/15 diamond-shape animate-float" style={{ animationDelay: '2.5s' }}></div>
    </div>
  );
};

export default GeometricBackground;
