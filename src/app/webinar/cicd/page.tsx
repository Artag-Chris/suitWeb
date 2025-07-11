"use client"

import { useState, useEffect } from "react"
import {
  GitBranch,
  Shield,
  Clock,
  CheckCircle,
  PlayCircle,
  RotateCcw,
  ArrowRight,
  Code,
  TestTube,
  Rocket,
} from "lucide-react"
import ParticleBackground from "@/components/microComponents/ParticleBackground"
import { pipelineSteps, benefitsCCID, techStackCCID, successCasesCCID } from "@/dataSections"


export default function WebinarCICDPage() {
  // Métricas en tiempo real
  const [metrics, setMetrics] = useState({
    deployments: 1247,
    testsPassed: 98.7,
    buildTime: 3.2,
    uptime: 99.94,
  })

  // Simulador CI/CD Pipeline
  const [pipelineState, setPipelineState] = useState({
    isRunning: false,
    currentStep: 0,
    steps: pipelineSteps,
    finalMetrics: {
      deploymentTime: "8.2 min",
      testCoverage: "94.8%",
      securityScore: "98.5%",
      reliability: "99.7%",
    },
  })

  // Calculadora de beneficios CI/CD
  const [calculator, setCalculator] = useState({
    teamSize: 10,
    deploymentsPerWeek: 5,
    projectComplexity: "medium",
    results: {
      timeReduction: 65,
      qualityImprovement: 85,
      costSavings: 40,
      teamProductivity: 120,
    },
  })

  // Actualizar métricas cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        deployments: prev.deployments + Math.floor(Math.random() * 3),
        testsPassed: +(prev.testsPassed + (Math.random() - 0.5) * 0.2).toFixed(1),
        buildTime: +(prev.buildTime + (Math.random() - 0.5) * 0.3).toFixed(1),
        uptime: +(prev.uptime + (Math.random() - 0.5) * 0.02).toFixed(2),
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Ejecutar pipeline CI/CD
  const runPipeline = () => {
    if (pipelineState.isRunning) return

    setPipelineState((prev) => ({
      ...prev,
      isRunning: true,
      currentStep: 0,
      steps: pipelineSteps.map((s) => ({ ...s, status: "pending" })),
    }))

    pipelineSteps.forEach((step, index) => {
      setTimeout(
        () => {
          setPipelineState((prev) => ({
            ...prev,
            currentStep: index,
            steps: prev.steps.map((s, i) => ({
              ...s,
              status: i < index ? "completed" : i === index ? "running" : "pending",
            })),
          }))
          if (index === pipelineSteps.length - 1) {
            setTimeout(() => {
              setPipelineState((prev) => ({
                ...prev,
                isRunning: false,
                steps: prev.steps.map((s) => ({ ...s, status: "completed" })),
              }))
            }, step.duration * 1000)
          }
        },
        pipelineSteps.slice(0, index).reduce((acc, s) => acc + s.duration * 1000, 0),
      )
    })
  }

  // Reset pipeline
  const resetPipeline = () => {
    setPipelineState((prev) => ({
      ...prev,
      isRunning: false,
      currentStep: 0,
      steps: pipelineSteps.map((s) => ({ ...s, status: "pending" })),
    }))
  }

  // Actualizar calculadora
  const updateCalculator = (field: string, value: any) => {
    const newCalculator = { ...calculator, [field]: value }
    const baseMultiplier = {
      small: 0.8,
      medium: 1.0,
      large: 1.3,
    }[newCalculator.projectComplexity]
    const teamMultiplier = Math.log10(newCalculator.teamSize) / Math.log10(10)
    const deploymentMultiplier = Math.log10(newCalculator.deploymentsPerWeek + 1) / Math.log10(8)
    newCalculator.results = {
      timeReduction: Math.round(50 + baseMultiplier! * teamMultiplier * deploymentMultiplier * 30),
      qualityImprovement: Math.round(70 + baseMultiplier! * teamMultiplier * 25),
      costSavings: Math.round(30 + baseMultiplier! * deploymentMultiplier * 20),
      teamProductivity: Math.round(100 + baseMultiplier! * teamMultiplier * deploymentMultiplier * 40),
    }
    setCalculator(newCalculator)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div
          id="navbar-observer-target"
          className="absolute top-0 h-[50vh] w-full pointer-events-none"
        />
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-black/20 backdrop-blur-sm mb-8">
            <GitBranch className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-sm font-medium">WEBINAR: CI/CD MASTERY</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            CI/CD: El Futuro del{" "}
            <span className="bg-gradient-to-r from-[#d4af37] to-[#d4af37] bg-clip-text text-transparent">
              Desarrollo Ágil
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Automatiza la integración, prueba y despliegue del código para optimizar y agilizar el ciclo de vida del
            desarrollo con <span className="text-[#d4af37]">rapidez y calidad</span>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Deployments/Mes", value: metrics.deployments, icon: <Rocket className="w-5 h-5" /> },
              { label: "Tests Passed", value: `${metrics.testsPassed}%`, icon: <TestTube className="w-5 h-5" /> },
              { label: "Build Time", value: `${metrics.buildTime}min`, icon: <Clock className="w-5 h-5" /> },
              { label: "System Uptime", value: `${metrics.uptime}%`, icon: <Shield className="w-5 h-5" /> },
            ].map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center mb-3 text-[#d4af37] group-hover:scale-110 transition-transform">
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all duration-300 hover:scale-105">
              <PlayCircle className="w-5 h-5 inline mr-2" />
              Ver Webinar Completo
            </button>
            <button className="px-8 py-4 border border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37]/10 transition-all duration-300">
              Descargar Guía CI/CD
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ¿Qué es CI/CD? */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              ¿Qué es <span className="text-[#d4af37]">CI/CD</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              La CI/CD es un conjunto de prácticas que automatizan la integración, prueba y despliegue del código en el
              desarrollo de software, optimizando el ciclo de vida del desarrollo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Integración Continua (CI)</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Integra cambios de código en un repositorio compartido de forma frecuente y automática, con
                compilaciones y pruebas que detectan errores tempranamente.
              </p>
              <div className="space-y-3">
                {[
                  "Detección temprana de errores",
                  "Compilaciones automáticas",
                  "Pruebas automatizadas",
                  "Feedback inmediato",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Entrega Continua (CD)</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Automatiza la entrega del código validado a entornos de preproducción o producción, con despliegues
                automáticos o con aprobación manual.
              </p>
              <div className="space-y-3">
                {[
                  "Despliegues automatizados",
                  "Entornos consistentes",
                  "Rollbacks rápidos",
                  "Zero-downtime deployments",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulador CI/CD Pipeline */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">
              <span className="text-[#d4af37]">Simulador</span> CI/CD Pipeline
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experimenta cómo funciona un pipeline CI/CD completo en tiempo real
            </p>
          </div>
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8">
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={runPipeline}
                disabled={pipelineState.isRunning}
                className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <PlayCircle className="w-5 h-5 inline mr-2" />
                {pipelineState.isRunning ? "Ejecutando..." : "Ejecutar Pipeline"}
              </button>
              <button
                onClick={resetPipeline}
                disabled={pipelineState.isRunning}
                className="px-6 py-3 border border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37]/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RotateCcw className="w-5 h-5 inline mr-2" />
                Reset
              </button>
            </div>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {pipelineState.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                      step.status === "completed"
                        ? "bg-green-500 shadow-lg shadow-green-500/25"
                        : step.status === "running"
                          ? "bg-[#d4af37] animate-pulse shadow-lg shadow-[#d4af37]/25"
                          : "bg-gray-600"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <CheckCircle className="w-8 h-8 text-white" />
                    ) : step.status === "running" ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <div className="w-8 h-8 border-2 border-gray-400 rounded-full" />
                    )}
                  </div>
                  <h4 className="font-semibold text-white mb-1">{step.name}</h4>
                  <p className="text-sm text-gray-400">{step.duration}s</p>
                  <div className="mt-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        step.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : step.status === "running"
                            ? "bg-[#d4af37]/20 text-[#d4af37]"
                            : "bg-gray-600/20 text-gray-400"
                      }`}
                    >
                      {step.improvement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {!pipelineState.isRunning && pipelineState.steps.every((s) => s.status === "completed") && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                {Object.entries(pipelineState.finalMetrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Beneficios de CI/CD */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              ¿Por qué es <span className="text-[#d4af37]">Necesaria</span> CI/CD Hoy?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Para negocios y escalabilidad en entornos dinámicos con alta demanda tecnológica
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsCCID.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] rounded-full text-sm font-semibold">
                    {benefit.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadora de Beneficios */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">
              <span className="text-[#d4af37]">Calculadora</span> de Beneficios CI/CD
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre el impacto potencial de implementar CI/CD en tu organización
            </p>
          </div>
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Configuración del Proyecto</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Tamaño del Equipo</label>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={calculator.teamSize}
                      onChange={(e) => updateCalculator("teamSize", Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="text-[#d4af37] font-semibold mt-1">{calculator.teamSize} desarrolladores</div>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Deployments por Semana</label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={calculator.deploymentsPerWeek}
                      onChange={(e) => updateCalculator("deploymentsPerWeek", Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="text-[#d4af37] font-semibold mt-1">
                      {calculator.deploymentsPerWeek} deployments/semana
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Complejidad del Proyecto</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["small", "medium", "large"].map((complexity) => (
                        <button
                          key={complexity}
                          onClick={() => updateCalculator("projectComplexity", complexity)}
                          className={`py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                            calculator.projectComplexity === complexity
                              ? "bg-[#d4af37] text-black"
                              : "bg-gray-700 text-white hover:bg-gray-600"
                          }`}
                        >
                          {complexity === "small" ? "Pequeño" : complexity === "medium" ? "Medio" : "Grande"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Beneficios Proyectados</h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Reducción de Tiempo",
                      value: `${calculator.results.timeReduction}%`,
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      label: "Mejora de Calidad",
                      value: `${calculator.results.qualityImprovement}%`,
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      label: "Ahorro de Costos",
                      value: `${calculator.results.costSavings}%`,
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      label: "Productividad del Equipo",
                      value: `${calculator.results.teamProductivity}%`,
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((result, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">{result.label}</span>
                        <span className="text-[#d4af37] font-bold text-xl">{result.value}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${result.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${Math.min(Number.parseInt(result.value), 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              <span className="text-[#d4af37]">Stack Tecnológico</span> CI/CD
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Herramientas y plataformas que utilizamos para implementar pipelines CI/CD robustos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackCCID.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-bold text-white mb-3">{tech.name}</h3>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Adopción</span>
                      <span className="text-[#d4af37] font-semibold">{tech.adoption}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#d4af37] to-[#d4af37] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${tech.adoption}%` }}
                      />
                    </div>
                  </div>
                  <div
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                      tech.rating === "Excelente"
                        ? "bg-green-500/20 text-green-400"
                        : tech.rating === "Muy Bueno"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-[#d4af37]/20 text-[#d4af37]"
                    }`}
                  >
                    {tech.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Casos de <span className="text-[#d4af37]">Éxito</span> Reales
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empresas que transformaron su desarrollo con CI/CD
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {successCasesCCID.map((case_, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10 h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{case_.company}</h3>
                    <p className="text-[#d4af37] font-semibold">{case_.sector}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Resultados Obtenidos:</h4>
                    <div className="space-y-2">
                      {case_.results.map((result, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Satisfacción:</span>
                      <span className="text-[#d4af37] font-bold">{case_.satisfaction}/5.0</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#d4af37] to-[#d4af37] h-2 rounded-full"
                        style={{ width: `${(case_.satisfaction / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Stack Tecnológico:</h4>
                    <div className="flex flex-wrap gap-2">
                      {case_.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#d4af37]/20 text-[#d4af37] rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Desafíos Superados:</h4>
                    <div className="flex flex-wrap gap-2">
                      {case_.challenges.map((challenge, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-semibold"
                        >
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#d4af37]/20">
                    <span className="text-gray-400 text-sm">Duración:</span>
                    <span className="text-[#d4af37] font-semibold">{case_.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Transforma tu Desarrollo con <span className="text-[#d4af37]">CI/CD</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Implementa pipelines CI/CD que aceleren tu desarrollo, mejoren la calidad y reduzcan riesgos en cada
            despliegue.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all duration-300 hover:scale-105">
              <PlayCircle className="w-5 h-5 inline mr-2" />
              Solicitar Consultoría CI/CD
            </button>
            <button className="px-8 py-4 border border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37]/10 transition-all duration-300">
              Descargar Whitepaper
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}