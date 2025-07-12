"use client"

import ParticleBackground from "@/components/microComponents/ParticleBackground"
import { benefitsMicroservicios, strategiesMicroservicios, caseStudiesMicroservicios, techStackMicroservicios } from "@/dataSections"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  Database,
  Network,
  Target,
  Building,
  Eye,
  Rocket,
  BarChart3,
  Server,
  Cpu,
  CloudCog,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function WebinarMicroserviciosPage() {
  const [currentMetric, setCurrentMetric] = useState(0)
  const [liveMetrics, setLiveMetrics] = useState({
    services: 247,
    deployments: 1840,
    uptime: 99.97,
    performance: 94.8,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics((prev) => ({
        services: prev.services + Math.floor(Math.random() * 3),
        deployments: prev.deployments + Math.floor(Math.random() * 5),
        uptime: Math.min(99.99, prev.uptime + Math.random() * 0.02),
        performance: Math.min(99, prev.performance + Math.random() * 0.5),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % benefitsMicroservicios.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <ParticleBackground />
      <div className="relative z-10 min-h-screen text-white font-sans overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
            <div
          id="navbar-observer-target"
          className="absolute top-0 h-[50vh] w-full pointer-events-none"
        />
          {/* Efecto de luz pulsante */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-pulse w-96 h-96 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-purple-500/20 blur-[100px]"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-8">
              <Building className="w-4 h-4 text-[#d4af37] mr-2" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">
                CASO DE ÉXITO: TELECOMUNICACIONES
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="text-white">Migración Exitosa a </span>
              <span className="bg-gradient-to-r from-[#d4af37] via-yellow-400 to-[#d4af37] bg-clip-text text-transparent">
                Microservicios
              </span>
              <br />
              <span className="text-white">en Telecomunicaciones</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              <span className="text-[#d4af37]">Estrategias y buenas prácticas</span> que permitieron manejar la
              complejidad y aprovechar los beneficios de la arquitectura distribuida.
            </p>

            {/* Live Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-4 hover:border-[#d4af37]/40 transition-all duration-300">
                <div className="text-2xl font-bold text-[#d4af37]">{liveMetrics.services}</div>
                <div className="text-sm text-gray-400">Microservicios</div>
              </div>
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-4 hover:border-[#d4af37]/40 transition-all duration-300">
                <div className="text-2xl font-bold text-[#d4af37]">{liveMetrics.deployments}</div>
                <div className="text-sm text-gray-400">Despliegues/mes</div>
              </div>
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-4 hover:border-[#d4af37]/40 transition-all duration-300">
                <div className="text-2xl font-bold text-[#d4af37]">{liveMetrics.uptime.toFixed(2)}%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-4 hover:border-[#d4af37]/40 transition-all duration-300">
                <div className="text-2xl font-bold text-[#d4af37]">{liveMetrics.performance.toFixed(1)}%</div>
                <div className="text-sm text-gray-400">Performance</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-yellow-500 text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Ver estrategias completas
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                Descargar caso de estudio
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>

            {/* Scroll indicator */}

          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-8">
              <Network className="w-4 h-4 text-[#d4af37] mr-2" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">TRANSFORMACIÓN DIGITAL</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">¿Por qué </span>
              <span className="bg-gradient-to-r from-[#d4af37] to-yellow-400 bg-clip-text text-transparent">
                Microservicios?
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Las telecomunicaciones enfrentan desafíos únicos:{" "}
              <span className="text-[#d4af37]">millones de usuarios concurrentes</span>, alta disponibilidad requerida,
              y la necesidad de escalar rápidamente. Los microservicios ofrecen la
              <span className="text-[#d4af37]"> flexibilidad y resiliencia</span> necesarias para estos entornos
              críticos.
            </p>

            {/* Benefits Showcase */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {benefitsMicroservicios.map((benefit, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover:transform hover:scale-105 ${currentMetric === index
                      ? "border-[#d4af37]/50 shadow-lg shadow-[#d4af37]/20"
                      : "border-[#d4af37]/20 hover:border-[#d4af37]/40"
                    }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/10 group-hover:from-[#d4af37]/30 group-hover:to-[#d4af37]/20 transition-all duration-300">
                      <div className="text-[#d4af37]">{benefit.icon}</div>
                    </div>
                    <div className="text-2xl font-bold text-[#d4af37]">{benefit.metric}</div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-8">
                <Target className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">ESTRATEGIAS CLAVE</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Las </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-yellow-400 bg-clip-text text-transparent">
                  6 Estrategias
                </span>
                <span className="text-white"> Fundamentales</span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cada estrategia fue cuidadosamente implementada para garantizar una migración exitosa sin interrupciones
                del servicio
              </p>
            </div>

            {/* Strategies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strategiesMicroservicios.map((strategy, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${strategy.gradient} mb-6`}>
                      <div className="text-white">{strategy.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {strategy.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">{strategy.description}</p>

                    {/* Benefits */}
                    <div className="space-y-2">
                      {strategy.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-[#d4af37] mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>

                    {/* Image placeholder */}
                    <div className="mt-6 h-32 bg-gradient-to-r from-[#d4af37]/10 to-transparent rounded-lg flex items-center justify-center">
                      <div className="text-[#d4af37] opacity-50">
                        <Code className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-bl-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-8">
                <BarChart3 className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">CASOS DE ÉXITO</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Transformaciones </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-yellow-400 bg-clip-text text-transparent">
                  Reales
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Empresas que lograron migrar exitosamente y los resultados cuantificables que obtuvieron
              </p>
            </div>

            {/* Case Studies */}
            <div className="space-y-12">
              {caseStudiesMicroservicios.map((study, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left side - Company info */}
                      <div className="lg:w-1/3">
                        <div className="flex items-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/10 mr-4">
                            <div className="text-[#d4af37]">{study.icon}</div>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
                              {study.company}
                            </h3>
                            <div className="text-sm text-[#d4af37] font-medium">{study.category}</div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Desafío</h4>
                            <p className="text-gray-300 text-sm">{study.challenge}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Solución</h4>
                            <p className="text-gray-300 text-sm">{study.solution}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Duración</h4>
                            <div className="inline-flex items-center px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-sm font-medium rounded-full">
                              <Clock className="w-4 h-4 mr-1" />
                              {study.duration}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Results and Tech */}
                      <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Results */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Resultados</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {study.results.map((result, idx) => (
                                <div
                                  key={idx}
                                  className="bg-gradient-to-br from-black/40 to-black/20 rounded-lg p-4 border border-[#d4af37]/10"
                                >
                                  <div className="text-2xl font-bold text-[#d4af37] mb-1">{result.value}</div>
                                  <div className="text-xs text-gray-400">{result.metric}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Stack Tecnológico</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, idx) => (
                                <div
                                  key={idx}
                                  className="px-3 py-1 bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full border border-[#d4af37]/20"
                                >
                                  {tech}
                                </div>
                              ))}
                            </div>

                            {/* Visual representation */}
                            <div className="mt-6 h-24 bg-gradient-to-r from-[#d4af37]/10 to-transparent rounded-lg flex items-center justify-center">
                              <div className="flex space-x-4 text-[#d4af37] opacity-50">
                                <Server className="w-6 h-6" />
                                <Database className="w-6 h-6" />
                                <CloudCog className="w-6 h-6" />
                                <Cpu className="w-6 h-6" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#d4af37]/5 to-transparent rounded-tl-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-8">
                <Code className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">TECNOLOGÍAS CLAVE</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Stack </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-yellow-400 bg-clip-text text-transparent">
                  Tecnológico
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Las herramientas y tecnologías más adoptadas en migraciones exitosas a microservicios
              </p>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStackMicroservicios.map((tech, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-6 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
                        {tech.name}
                      </h3>
                      <div className="text-sm text-[#d4af37] font-medium">{tech.adoption}%</div>
                    </div>

                    <div className="mb-4">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#d4af37] to-yellow-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.adoption}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-400">{tech.category}</div>

                    <div
                      className={`mt-2 inline-flex px-2 py-1 rounded-full text-xs font-medium ${tech.adoption >= 90
                          ? "bg-green-500/20 text-green-400"
                          : tech.adoption >= 80
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                    >
                      {tech.adoption >= 90 ? "Excelente" : tech.adoption >= 80 ? "Muy Bueno" : "Bueno"}
                    </div>
                  </div>
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

            <div className="relative z-10 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-6">
                <Rocket className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">PRÓXIMOS PASOS</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">¿Listo para tu </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-yellow-400 bg-clip-text text-transparent">
                  migración?
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Aplicamos estas mismas estrategias probadas para{" "}
                <span className="text-[#d4af37]">transformar tu arquitectura monolítica</span>
                en un sistema de microservicios escalable y resiliente.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-yellow-500 text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Solicitar consultoría gratuita
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                  Descargar guía completa
                  <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
