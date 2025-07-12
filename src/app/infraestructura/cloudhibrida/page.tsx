"use client"

import ParticleBackground from "@/components/microComponents/ParticleBackground"
import { OurArchitectureDemo, RealTimeMetrics, ourSolution, cloudComparison, successCases } from "@/dataSections"
import {
  Cloud,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Target,
  Clock,
} from "lucide-react"


export default function NuestraNubeHibridaPage() {
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
              <Cloud className="w-4 h-4 text-[#d4af37] mr-2" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">NUESTRA SOLUCIÓN</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="text-white">Nuestra infraestructura </span>
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f1c232] to-[#d4af37] bg-clip-text text-transparent">
                nube híbrida
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Máxima flexibilidad, seguridad y control. Combina lo mejor del mundo privado y público con{" "}
              <span className="text-[#d4af37]">nuestra arquitectura pensada para escalar sin límites.</span>
            </p>

            {/* Scroll indicator */}

          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* What is Our Hybrid Cloud Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-full blur-xl"></div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">¿Qué es </span>
                  <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                    nuestra nube híbrida?
                  </span>
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Es una arquitectura que conecta recursos locales (on-premise), nube privada y nube pública de forma
                  inteligente. Así, puedes decidir qué se ejecuta dónde, optimizando{" "}
                  <span className="text-[#d4af37]">rendimiento, costos y seguridad.</span>
                </p>

                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  Es el puente entre control total y escalabilidad infinita, diseñado específicamente para empresas que
                  buscan lo mejor de ambos mundos.
                </p>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-gray-300">Implementación en 30 días</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-gray-300">Soporte 24/7</span>
                  </div>
                </div>
              </div>

              {/* Right Visualization */}
              <div className="relative">
                <OurArchitectureDemo />
              </div>
            </div>
          </div>
        </section>

        {/* Real-time Metrics Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Métricas </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  en tiempo real
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitoreo continuo de nuestra infraestructura híbrida en producción
              </p>
            </div>

            <RealTimeMetrics />
          </div>
        </section>

        {/* Our Solution Benefits Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Beneficios </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  reales
                </span>
                <span className="text-white"> para tu operación</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cada ventaja diseñada y probada en nuestros clientes más exigentes
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ourSolution.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-6`}>
                      <div className="text-white">{benefit.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">{benefit.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {benefit.features.map((feature, idx) => (
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
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">¿Por qué no solo </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  nube pública o privada?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comparación objetiva que demuestra la superioridad de nuestra solución híbrida
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudComparison.map((cloud, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border rounded-2xl p-8 ${cloud.label === "Nuestra Nube Híbrida"
                    ? "border-[#d4af37]/50 ring-2 ring-[#d4af37]/20"
                    : "border-[#d4af37]/20"
                    }`}
                >
                  {cloud.label === "Nuestra Nube Híbrida" && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#d4af37] text-black text-xs font-bold rounded-full">
                      NUESTRA SOLUCIÓN
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-[#d4af37]/20 ${cloud.color} mb-4`}>{cloud.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{cloud.label}</h3>

                    {/* Score */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="text-3xl font-bold text-[#d4af37] mr-2">{cloud.score}</div>
                      <div className="text-gray-400">/100</div>
                    </div>

                    {/* Score bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                      <div
                        className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] h-2 rounded-full transition-all duration-2000 ease-out"
                        style={{ width: `${cloud.score}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {cloud.items.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Cases Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">¿Dónde implementamos </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  nuestra nube híbrida?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Casos de éxito reales con métricas verificables y arquitecturas detalladas
              </p>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {successCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#0f0f13]/90 to-[#1a1a2e]/90 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-bold rounded-full">
                    {useCase.category}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/10 mb-6 group-hover:from-[#d4af37]/30 group-hover:to-[#d4af37]/20 transition-all duration-300">
                      <div className="text-[#d4af37]">{useCase.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {useCase.company}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-4">{useCase.result}</p>

                    {/* Timeline */}
                    <div className="flex items-center mb-4">
                      <Clock className="w-4 h-4 text-[#d4af37] mr-2" />
                      <span className="text-sm text-gray-400">Implementación: {useCase.timeline}</span>
                    </div>

                    {/* Architecture */}
                    <div className="bg-[#0f0f13]/50 rounded-lg p-3 mb-6">
                      <div className="text-xs text-gray-400 mb-1">Arquitectura:</div>
                      <div className="text-sm text-[#d4af37]">{useCase.architecture}</div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {useCase.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center bg-[#1a1a2e]/50 rounded-lg p-3">
                          <div className="text-lg font-bold text-[#d4af37] mb-1">{metric.value}</div>
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
                <Target className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">SOLUCIÓN PROBADA</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Construimos tu nube ideal. </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  Híbrida. Segura. Escalable.
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Nuestra arquitectura híbrida te da el poder de{" "}
                <span className="text-[#d4af37]">crecer sin comprometer nada.</span> Con casos de éxito comprobados.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">50+</div>
                  <div className="text-sm text-gray-400">Clientes exitosos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">99.97%</div>
                  <div className="text-sm text-gray-400">Uptime promedio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">40%</div>
                  <div className="text-sm text-gray-400">Ahorro promedio</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Agenda una consultoría
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f1c232] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                  Ver cómo lo medimos
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
