
import React from 'react';
import { Search, Lightbulb, Users, CheckCircle } from 'lucide-react';

const Method = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Imersão Estratégica',
      description: 'Fazemos com junto a identificação de mercado e necessidades negócio importante de empresas.'
    },
    {
      number: 2,
      icon: Lightbulb,
      title: 'Prototipação e Diagnóstico',
      description: 'Aceleramos a fase e protativação de desenvolvimento de sistema empresarial e negócios.'
    },
    {
      number: 3,
      icon: Users,
      title: 'Co-criação e Implementação',
      description: 'Desenvolvemos e estabelece, desenvolvendo habilidade de desenvolvimento em setores de trabalho.'
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Validação por Métricas',
      description: 'Verificamos os escalas de Implementação dos novamente avaliação e investigação.'
    }
  ];

  return (
    <section className="py-20 gradient-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-white/80 mb-4">Para todos nossos métodos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Método Origami</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-200">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-brand-green rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
