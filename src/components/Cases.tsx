
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      title: 'Transformação Digital Industrial',
      subtitle: 'Indústria | Inovação',
      description: 'Desenvolvimento de sistema de dados para implementação de novas tecnologias de produção.',
      image: 'bg-gray-300'
    },
    {
      title: 'Plataforma de Gestão de Inovação',
      subtitle: 'Tecnologia | Startup',
      description: 'Plataforma inovadora para gestão de desenvolvimento e projetos de inovação.',
      image: 'bg-gray-300'
    },
    {
      title: 'Programa de Inovação Aberta',
      subtitle: 'Corporativo | Strategy',
      description: 'Hub de inovação corporativa para desenvolvimento entre múltiplas subsidiárias.',
      image: 'bg-gray-300'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-gray mb-4">Conheça alguns de nossos resultados</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green">Cases de Sucesso</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 ${caseItem.image}`}></div>
              <div className="p-6">
                <div className="text-brand-green text-sm font-medium mb-2">
                  {caseItem.subtitle}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {caseItem.title}
                </h3>
                <p className="text-brand-gray mb-4 leading-relaxed">
                  {caseItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Ver todos os cases
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
