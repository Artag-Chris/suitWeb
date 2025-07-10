'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { TechCarousel } from '../microComponents/TechCarousel';
import { services } from '@/dataSections';

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

  

  return (
    <section 
      ref={sectionRef}
      className="relative  py-24 overflow-hidden"
      id="services"
    >
      {/* Dark header with subtle gradient */}
     <div 
  className={`bg-gradient-to-r from-[#1E1E1E]/20 to-[#2A2A2A]/60 backdrop-blur-md py-24 transition-all duration-1000 ${
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
        className={`bg-gradient-to-r from-[#1E1E1E]/20 to-[#2A2A2A]/60  py-24 mt-24 transition-all duration-1000 delay-700 ${
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