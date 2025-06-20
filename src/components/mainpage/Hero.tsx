'use client'
import { ArrowRight } from 'lucide-react'
import React, { useRef } from 'react'
import { Button } from '../ui/button'

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Punto de referencia PARA EL NAVBAR */}
      <div className="absolute top-0 h-[50vh] w-full pointer-events-none" />
      
      {/* Fondo sutil para agregar profundidad */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#0F0F13]/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0F0F13]/5 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10 px-8">
        <div className="space-y-16">
          <div className="space-y-12">
            <h1 className="text-7xl lg:text-8xl font-bold tracking-tight leading-none text-black">
              <span className="block">Transformamos</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900">
                visiones en realidades
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
              Soluciones de software a medida que transforman tu flujo de trabajo. 
              Diseñadas para ahorrarte tiempo, reducir complicaciones y potenciar tu crecimiento.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button className="bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold px-16 py-6 text-lg hover:opacity-90 hover:translate-y-[-2px] transition-all duration-300 shadow-lg">
              Iniciar Proyecto
              <ArrowRight className="w-5 h-5 ml-4" />
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:text-black hover:border-black px-16 py-6 text-lg bg-white hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
