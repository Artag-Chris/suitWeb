"use client"

import ParticleBackground from "@/components/microComponents/ParticleBackground"
import { benefitsApis, favoriteApis } from "@/dataSections"
import {
  ArrowRight,
  Globe,
  Code,
  Sparkles,
  CheckCircle,
  ExternalLink,
} from "lucide-react"

export default function Page() {
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10 min-h-screen text-white font-sans">
        <div
          id="navbar-observer-target"
          className="absolute top-0 h-[50vh] w-full pointer-events-none"
        />
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          {/* Efecto de luz pulsante */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-pulse w-96 h-96 rounded-full bg-gradient-to-r from-[#d4af3780] to-[#0d47a180] blur-[100px] opacity-30"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-8">
              <Code className="w-4 h-4 text-[#d4af37] mr-2" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">INTEGRACIÓN AVANZADA</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="text-white">¿Qué es una </span>
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f1c232] to-[#d4af37] bg-clip-text text-transparent">
                API
              </span>
              <span className="text-white">?</span>
            </h1>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Una <span className="text-[#d4af37] font-semibold">API</span> (Interfaz de Programación de Aplicaciones)
                es el puente que conecta tu sistema con herramientas externas.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                En lugar de reinventar la rueda, las APIs nos permiten integrar funciones listas para usar:
                <span className="text-[#d4af37]"> pagos, notificaciones, validaciones, y más.</span>
              </p>
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Content */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-full blur-xl"></div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                    Potencia
                  </span>
                  <span className="text-white"> tu negocio</span>
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Implementamos APIs para automatizar procesos, eliminar tareas repetitivas y conectar tu sistema con
                  herramientas como <span className="text-[#d4af37]">WhatsApp, Medios de pago, Meta, Google Maps</span>{" "}
                  y más.
                </p>

                <div className="flex items-center text-[#d4af37]">
                  <Sparkles className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Integración sin límites</span>
                </div>
              </div>

              {/* Right Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefitsApis.map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${benefit.gradient} mb-4`}>
                        <div className="text-white">{benefit.icon}</div>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                        + {benefit.title}
                      </h4>

                      <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Favorite APIs Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Nuestras APIs </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  Favoritas
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Herramientas de élite seleccionadas para maximizar el potencial de tu negocio
              </p>
            </div>

            {/* APIs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoriteApis.map((api, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#0f0f13]/90 to-[#1a1a2e]/90 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-bold rounded-full">
                    {api.category}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/10 mb-6 group-hover:from-[#d4af37]/30 group-hover:to-[#d4af37]/20 transition-all duration-300">
                      <div className="text-[#d4af37]">{api.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {api.name}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">{api.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {api.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-[#d4af37] mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#d4af37]/10 to-transparent rounded-tl-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent blur-xl"></div>

            <div className="relative z-10 bg-gradient-to-r from-[#0f0f13]/80 to-[#1a1a2e]/80 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-6">
                <Globe className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">INTEGRACIÓN PERSONALIZADA</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">¿Quieres integrar una </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">API</span>
                <span className="text-white"> en tu negocio?</span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Habla con nosotros y encuentra la solución que necesitas.
                <span className="text-[#d4af37]"> Transformamos ideas en realidades digitales.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Contáctanos
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f1c232] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                  Ver proyectos
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
