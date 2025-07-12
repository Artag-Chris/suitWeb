"use client"

import ParticleBackground from "@/components/microComponents/ParticleBackground"
import { resources, comparison, caseStudiesRecursos } from "@/dataSections"
import {
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Settings,
  Zap,
  ExternalLink,
  Eye,
} from "lucide-react"

export default function RecursosPage() {
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
              <Settings className="w-4 h-4 text-[#d4af37] mr-2" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">OPTIMIZACIÓN INTELIGENTE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="text-white">Gestiona </span>
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f1c232] to-[#d4af37] bg-clip-text text-transparent">
                recursos
              </span>
              <br />
              <span className="text-white">como un sistema operativo</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <span className="text-[#d4af37]">Equipos, tiempo, dinero, tecnología.</span> Cuando todo está bien
              asignado, la empresa avanza con precisión.
            </p>

            {/* Scroll indicator */}

          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">¿Qué </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  recursos
                </span>
                <span className="text-white"> gestionamos?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cada recurso optimizado para maximizar el rendimiento y minimizar el desperdicio
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${resource.gradient} mb-6`}>
                      <div className="text-white">{resource.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {resource.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">{resource.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {resource.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-[#d4af37] mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-bl-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Cuando no se gestionan </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  recursos...
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                La diferencia entre el caos operativo y la excelencia empresarial
              </p>
            </div>

            {/* Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Disorder */}
              <div className="relative">
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">Desorden</h3>
                  </div>

                  <div className="space-y-4">
                    {comparison.disorder.map((item, index) => (
                      <div key={index} className="flex items-center">
                        {item.icon}
                        <span className="ml-3 text-gray-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Smart Management */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Zap className="w-8 h-8 text-green-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">Gestión Inteligente</h3>
                  </div>

                  <div className="space-y-4">
                    {comparison.management.map((item, index) => (
                      <div key={index} className="flex items-center">
                        {item.icon}
                        <span className="ml-3 text-gray-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Donde la gestión </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  hizo escalar
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Casos reales donde la optimización de recursos generó crecimiento exponencial
              </p>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudiesRecursos.map((study, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#0f0f13]/90 to-[#1a1a2e]/90 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-bold rounded-full">
                    {study.category}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/10 mb-6 group-hover:from-[#d4af37]/30 group-hover:to-[#d4af37]/20 transition-all duration-300">
                      <div className="text-[#d4af37]">{study.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {study.company}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">{study.result}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-[#d4af37] mb-1">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
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
                <Eye className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">VISIÓN DE FUTURO</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">No es control. Es </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  visión de futuro.
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Gestionar recursos no es frenar, es <span className="text-[#d4af37]">acelerar con inteligencia.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Implementar gestión inteligente
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f1c232] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                  Ver gestión de clientes
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
