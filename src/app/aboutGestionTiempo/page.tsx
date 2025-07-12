"use client"

import ParticleBackground from "@/components/microComponents/ParticleBackground"
import { benefits, additionalFeatures } from "@/dataSections"
import { Shield, ArrowRight, Play } from "lucide-react"

export default function Page() {
  return (
    <>
      <ParticleBackground />

      <div className="relative z-10 min-h-screen text-white font-sans">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            <div
          id="navbar-observer-target"
          className="absolute top-0 h-[50vh] w-full pointer-events-none"
        />
          {/* Efecto de luz pulsante */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-pulse w-96 h-96 rounded-full bg-gradient-to-r from-[#d4af3780] to-[#0d47a180] blur-[100px] opacity-30"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-8">
              <Shield className="w-4 h-4 text-[#d4af37] mr-2" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">TECNOLOGÍA DE ÉLITE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Control Total en</span>
              <br />
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f1c232] to-[#d4af37] bg-clip-text text-transparent">
                Tiempo Real
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Conecta tu operación a nuestra tecnología de vanguardia.
              <span className="text-[#d4af37]"> Seguridad, datos en vivo y decisiones precisas.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Solicita una demostración
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#f1c232] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                Ver casos de éxito
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
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
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ventajas </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  Estratégicas
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cada funcionalidad está diseñada para darte la ventaja competitiva que necesitas
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-8 md:grid-cols-2 mb-20">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-6`}>
                      <div className="text-white">{benefit.icon}</div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-full"></div>
                </div>
              ))}
            </div>

            {/* Additional Features */}
            <div className="grid gap-6 md:grid-cols-3 mb-20">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-[#0f0f13]/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300 hover:bg-[#d4af37]/5"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-[#d4af37]/20 text-[#d4af37] mr-4">{feature.icon}</div>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="text-center relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent blur-xl"></div>

              <div className="relative z-10 bg-gradient-to-r from-[#0f0f13]/80 to-[#1a1a2e]/80 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                    Eleva tu negocio al siguiente nivel
                  </span>
                </h2>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Deja atrás lo incierto. Nuestra plataforma convierte tus datos en decisiones inteligentes.
                </p>

                <button className="group relative px-10 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Iniciar transformación digital
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f1c232] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
