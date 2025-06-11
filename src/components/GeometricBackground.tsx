
import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primeira imagem - canto superior direito */}
      <div className="absolute top-10 right-10 w-48 h-48 opacity-20 animate-float">
        <img 
          src="/lovable-uploads/c1b770e6-f17c-4d74-9248-9a922dec5125.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Segunda imagem - canto inferior esquerdo */}
      <div className="absolute bottom-20 left-10 w-40 h-40 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
        <img 
          src="/lovable-uploads/c1b770e6-f17c-4d74-9248-9a922dec5125.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default GeometricBackground;
