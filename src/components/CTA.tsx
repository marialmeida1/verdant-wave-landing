
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import GeometricBackground from './GeometricBackground';

const CTA = () => {
  return (
    <section className="relative py-20 gradient-green overflow-hidden">
      <GeometricBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Pronto para avançar com
            <br />
            <span className="text-white/90">inovação estratégica?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Junte-se a nós agora e possa inovar junto com métodos e setores de startups reais.
          </p>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              className="bg-white text-brand-green hover:bg-white/90 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 group"
            >
              Entrar em contato
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
