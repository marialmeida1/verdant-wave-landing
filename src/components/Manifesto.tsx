
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Manifesto = () => {
  const principles = [
    {
      title: 'Somos outsiders, não ortodoxos',
      description: 'Investigamos novos paradigmas e estimulação de outros modelos para inovar.'
    },
    {
      title: 'Geramos resultados que podem gerar',
      description: 'Propormos investigação com habilidade e entendimentos.'
    },
    {
      title: 'Excelência técnica e disciplina',
      description: 'Entregamos conectividade e entendimentos.'
    },
    {
      title: 'Emergimos nas competências essenciais',
      description: 'Trabalhamos para missão e de forma.'
    },
    {
      title: 'Pensamento grandes, competidores pequenos',
      description: 'Não cada certo de crescimento do de trabalho de pequena.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-gray mb-4">A forma como fazemos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green mb-12">Nosso Manifesto</h2>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto mb-12">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 h-full">
                <h3 className="text-lg font-bold text-brand-dark mb-4 leading-tight">
                  {principle.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 group"
          >
            Vamos iniciar juntos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
