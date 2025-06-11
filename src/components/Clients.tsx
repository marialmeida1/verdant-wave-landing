
import React from 'react';

const Clients = () => {
  // Placeholder para logos dos clientes
  const clients = [
    { name: 'EA', width: 'w-16' },
    { name: 'Amep', width: 'w-20' },
    { name: 'EcoSmart', width: 'w-24' },
    { name: 'TechWave', width: 'w-20' },
    { name: 'BrasilConstruct', width: 'w-24' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-gray mb-4">Empresas que já confiaram na nossa experiência</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green">Nossos Clientes</h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {clients.map((client, index) => (
            <div 
              key={index}
              className={`${client.width} h-12 bg-gray-200 rounded-lg flex items-center justify-center animate-fadeInUp hover:opacity-100 transition-opacity duration-200`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-brand-gray font-bold text-sm">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
