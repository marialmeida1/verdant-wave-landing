
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueSection from '@/components/ValueSection';
import Manifesto from '@/components/Manifesto';
import Method from '@/components/Method';
import Clients from '@/components/Clients';
import Cases from '@/components/Cases';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueSection />
      <Manifesto />
      <Method />
      <Clients />
      <Cases />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
