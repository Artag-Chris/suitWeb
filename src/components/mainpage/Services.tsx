'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { TechCarousel } from '../microComponents/TechCarousel';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Desarrollo de Software a Medida",
      description: "Soluciones personalizadas que se adaptan perfectamente a tus necesidades de negocio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#d4af3780]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Automatización de Procesos",
      description: "Optimiza tus flujos de trabajo con soluciones inteligentes que ahorran tiempo y recursos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#d4af3780]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Inteligencia de Negocios",
      description: "Transforma tus datos en insights accionables para tomar mejores decisiones estratégicas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#d4af3780]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Transformación Digital",
      description: "Moderniza tu empresa con tecnologías de vanguardia que impulsan la innovación.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#d4af3780]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Ciberseguridad Avanzada",
      description: "Protege tus activos digitales con soluciones de seguridad de última generación.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#d4af3780]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Soporte Continuo",
      description: "Asistencia técnica 24/7 para garantizar el funcionamiento óptimo de tus sistemas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#d4af3780]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-24 overflow-hidden"
      id="services"
    >
      {/* Dark header with subtle gradient */}
      <div 
        className={`bg-gradient-to-r from-[#1E1E1E] to-[#2A2A2A] py-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              SERVICIOS
            </h2>
            <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Soluciones tecnológicas de vanguardia diseñadas para impulsar tu negocio hacia el futuro
            </p>
          </div>
        </div>
      </div>
      
      {/* Service cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 delay-${index * 100} ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              } hover:shadow-xl hover:-translate-y-3 group`}
            >
              <div className="mb-5 flex justify-center">
                <div className="bg-[#F0FDFA] p-4 rounded-full transition-colors group-hover:bg-[#00C2B5]/10">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              
              <div className="flex justify-center">
                <Button 
                  variant="outline"
                  className="border border-[#d4af3780] text-[#00C2B5] hover:bg-[#00C2B5] hover:text-white px-6 py-3 transition-colors duration-300"
                >
                  Descubrir más
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation & CTA */}
      <div 
        className={`bg-[#1E1E1E] py-24 mt-24 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <TechCarousel/>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-[#00C2B5] blur-[100px] opacity-10 z-0"></div>
      <div className="absolute bottom-1/3 left-10 w-56 h-56 rounded-full bg-[#1E1E1E] blur-[80px] opacity-10 z-0"></div>
    </section>
  );
};

export default ServicesSection;