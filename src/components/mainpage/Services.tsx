import { Database, Globe, Shield } from 'lucide-react'
import React from 'react'

function Services() {
  return (
    <>
      <section id="servicios" className="py-40 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold tracking-tight mb-12 text-black">Servicios</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Desarrollamos soluciones tecnológicas que se adaptan perfectamente a las necesidades específicas de tu
              negocio
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="bg-white p-16 hover:shadow-lg transition-all duration-500 group">
              <Database className="w-16 h-16 text-black mb-12" />
              <h3 className="text-3xl font-bold mb-8 tracking-tight text-black">Bases de Datos</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Arquitecturas de datos robustas y escalables que crecen con tu negocio. Optimización y migración
                incluidas.
              </p>
            </div>
            <div className="bg-white p-16 hover:shadow-lg transition-all duration-500 group">
              <Globe className="w-16 h-16 text-black mb-12" />
              <h3 className="text-3xl font-bold mb-8 tracking-tight text-black">Hosting Seguro</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Infraestructura cloud confiable con monitoreo 24/7 y respaldos automáticos para máxima disponibilidad.
              </p>
            </div>
            <div className="bg-white p-16 hover:shadow-lg transition-all duration-500 group">
              <Shield className="w-16 h-16 text-black mb-12" />
              <h3 className="text-3xl font-bold mb-8 tracking-tight text-black">Software a Medida</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Aplicaciones personalizadas que automatizan procesos y optimizan la productividad de tu equipo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services