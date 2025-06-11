
import React from 'react';
import { Lightbulb, Users, TrendingUp, Zap } from 'lucide-react';

const ValueSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Capacitação',
      description: 'Oferecemos capacitação completa para desenvolver tecnologias de desenvolvimento, aplicações e gestão operacional na empresa.'
    },
    {
      icon: Users,
      title: 'Negócios e Gestão',
      description: 'Construímos negócios sustentáveis com performance avançada de métricas operacionais, garantindo a experiência necessária importantes.'
    },
    {
      icon: TrendingUp,
      title: 'Investimentos e Incentivos',
      description: 'Acesso a fundos e investimentos focados para complementar a capacidade de investir em crescimento abrangendo soluções.'
    },
    {
      icon: Zap,
      title: 'Inovação Colaborativa',
      description: 'Combinamos sua empresa cliente ao universalismo e esfera logísticas que geram ideias inovadoras e criar soluções mais mais elevados que de tecnologia e desenvolvimento.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-gray mb-4">Nosso conhecimento que impulsiona grandes empresas</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green">Como geramos valor</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-6 group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{value.title}</h3>
                <p className="text-brand-gray leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
