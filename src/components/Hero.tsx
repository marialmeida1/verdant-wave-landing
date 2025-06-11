
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import GeometricBackground from './GeometricBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-green overflow-hidden">
      <GeometricBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Inove como uma startup.
            <br />
            <span className="text-white/90">Cresça como uma gigante.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Laboratório de inovação que impulsiona grandes empresas.
            <br />
            União e método de trabalho de startups reais.
          </p>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              className="bg-white text-brand-green hover:bg-white/90 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 group"
            >
              Vamos inovar juntos?
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
