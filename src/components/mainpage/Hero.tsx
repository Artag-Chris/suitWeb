import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <>
    <section className="pt-40 pb-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-16">
            <div className="space-y-12">
              <h1 className="text-7xl lg:text-8xl font-bold tracking-tight leading-none text-black">Finova</h1>
              <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
                Soluciones de software a medida que transforman tu flujo de trabajo. Diseñadas para ahorrarte tiempo,
                reducir complicaciones y potenciar tu crecimiento.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button className="bg-black text-white font-semibold px-16 py-6 text-lg hover:bg-gray-800 transition-all duration-300">
                Iniciar Proyecto
                <ArrowRight className="w-5 h-5 ml-4" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:text-black hover:border-black px-16 py-6 text-lg bg-white transition-all duration-300"
              >
                Ver Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero