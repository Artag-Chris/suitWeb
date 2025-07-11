"use client"

import { useState, useEffect } from "react"
import {
  BarChart3,
  TrendingUp,
  Eye,
  Target,
  Brain,
  Play,
  RotateCcw,
  Database,
  Zap,
  Activity,
  Cpu,
  LineChart,
} from "lucide-react"
import ParticleBackground from "@/components/microComponents/ParticleBackground"
import { analysisPhasesData, benefitsData, techStackData, successCasesData, getRiskColor } from "@/dataSections"

export default function AnalisisDatosPage() {
  // Real-time metrics state
  const [metrics, setMetrics] = useState({
    dataPoints: 847293,
    insights: 156,
    accuracy: 94.7,
    predictions: 89.2,
  })

  // Data Analysis Simulator
  const [analysisState, setAnalysisState] = useState({
    isRunning: false,
    currentPhase: 0,
    progress: 0,
    completed: false,
  })

  // Business Intelligence Calculator
  const [biConfig, setBiConfig] = useState({
    dataVolume: "medium",
    businessType: "ecommerce",
    teamSize: 25,
  })

  const [biResults, setBiResults] = useState({
    timeToInsight: "2-4 horas",
    costReduction: "35%",
    decisionSpeed: "+180%",
    accuracy: "94%",
  })

  // Update real-time metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        dataPoints: prev.dataPoints + Math.floor(Math.random() * 100),
        insights: prev.insights + (Math.random() > 0.7 ? 1 : 0),
        accuracy: Math.min(99.9, prev.accuracy + (Math.random() - 0.5) * 0.1),
        predictions: Math.min(99.9, prev.predictions + (Math.random() - 0.5) * 0.2),
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Analysis Simulator Logic
  const runAnalysis = () => {
    if (analysisState.isRunning) return

    setAnalysisState({ isRunning: true, currentPhase: 0, progress: 0, completed: false })

    const runPhase = (phaseIndex: number) => {
      if (phaseIndex >= analysisPhasesData.length) {
        setAnalysisState((prev) => ({ ...prev, isRunning: false, completed: true }))
        return
      }

      const phase = analysisPhasesData[phaseIndex]
      const startTime = Date.now()

      const updateProgress = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(100, (elapsed / phase.duration) * 100)

        setAnalysisState((prev) => ({
          ...prev,
          currentPhase: phaseIndex,
          progress: progress,
        }))

        if (progress < 100) {
          requestAnimationFrame(updateProgress)
        } else {
          setTimeout(() => runPhase(phaseIndex + 1), 200)
        }
      }

      updateProgress()
    }

    runPhase(0)
  }

  const resetAnalysis = () => {
    setAnalysisState({ isRunning: false, currentPhase: 0, progress: 0, completed: false })
  }

  // BI Calculator Logic
  useEffect(() => {
    const calculateBI = () => {
      const volumeMultiplier = biConfig.dataVolume === "small" ? 0.8 : biConfig.dataVolume === "large" ? 1.3 : 1.0
      const typeMultiplier = biConfig.businessType === "saas" ? 1.2 : biConfig.businessType === "retail" ? 0.9 : 1.0
      const teamMultiplier = biConfig.teamSize > 50 ? 1.1 : biConfig.teamSize < 10 ? 0.9 : 1.0

      const baseReduction = 35 * volumeMultiplier * typeMultiplier * teamMultiplier
      const baseSpeed = 180 * volumeMultiplier * typeMultiplier
      const baseAccuracy = (94 * (volumeMultiplier + typeMultiplier)) / 2

      setBiResults({
        timeToInsight:
          biConfig.dataVolume === "small" ? "1-2 horas" : biConfig.dataVolume === "large" ? "4-8 horas" : "2-4 horas",
        costReduction: `${Math.round(baseReduction)}%`,
        decisionSpeed: `+${Math.round(baseSpeed)}%`,
        accuracy: `${Math.round(baseAccuracy)}%`,
      })
    }

    calculateBI()
  }, [biConfig])


  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#d4af37] bg-black/20 backdrop-blur-sm mb-8 hover:border-[#d4af37]/50 transition-all duration-300">
            <BarChart3 className="w-5 h-5 text-[#d4af37]" />
            <span className="text-[#d4af37] text-sm font-medium tracking-wide">INTELIGENCIA DE DATOS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Decisiones que tienen{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#d4af37] to-[#d4af37] animate-pulse">
              datos detrás
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Analizamos, estructuramos y visualizamos los datos para que entiendas qué está pasando, por qué, y qué
            deberías hacer.
          </p>

          {/* Real-time Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-500 hover:scale-105">
              <Database className="w-10 h-10 text-[#d4af37] mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-white mb-1">{metrics.dataPoints.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Puntos de Datos</div>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#d4af37] to-[#d4af37] rounded-full animate-pulse"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-500 hover:scale-105">
              <Eye className="w-10 h-10 text-[#d4af37] mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-white mb-1">{metrics.insights}</div>
              <div className="text-sm text-gray-400">Insights Generados</div>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#d4af37] to-[#d4af37] rounded-full animate-pulse"
                  style={{ width: "92%" }}
                />
              </div>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-500 hover:scale-105">
              <Target className="w-10 h-10 text-[#d4af37] mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-white mb-1">{metrics.accuracy.toFixed(1)}%</div>
              <div className="text-sm text-gray-400">Precisión</div>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#d4af37] to-[#d4af37] rounded-full animate-pulse"
                  style={{ width: "96%" }}
                />
              </div>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-500 hover:scale-105">
              <Brain className="w-10 h-10 text-[#d4af37] mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-white mb-1">{metrics.predictions.toFixed(1)}%</div>
              <div className="text-sm text-gray-400">Predicciones</div>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#d4af37] to-[#d4af37] rounded-full animate-pulse"
                  style={{ width: "89%" }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-[#d4af37] to-[#d4af37] hover:from-yellow-300 hover:to-[#d4af37] text-black px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/25">
              <span className="flex items-center gap-3">
                <Activity className="w-5 h-5 group-hover:animate-pulse" />
                Solicita una demostración
              </span>
            </button>
            <button className="group border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4af37]/25">
              <span className="flex items-center gap-3">
                Ver casos de éxito
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* What is Data Analysis */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#d4af37] mb-8">
            ¿Por qué analizar tus datos?
          </h2>
          <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Porque los datos ya los tienes: ventas, usuarios, visitas, campañas, procesos... pero si no los analizas,
            estás operando a ciegas. El análisis de datos convierte información cruda en{" "}
            <span className="text-[#d4af37] font-semibold bg-[#d4af37]/10 px-2 py-1 rounded-lg">
              decisiones estratégicas
            </span>
            .
          </p>
        </div>
      </section>

      {/* Data Analysis Simulator */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#d4af37]">
            Simulador de Análisis de Datos
          </h2>

          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-500 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold text-white">Proceso de Análisis Completo</h3>
              <div className="flex gap-4">
                <button
                  onClick={runAnalysis}
                  disabled={analysisState.isRunning}
                  className="flex items-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#d4af37] hover:from-yellow-300 hover:to-[#d4af37] disabled:from-gray-600 disabled:to-gray-700 text-black px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 disabled:scale-100"
                >
                  <Play className="w-5 h-5" />
                  {analysisState.isRunning ? "Ejecutando..." : "Ejecutar"}
                </button>
                <button
                  onClick={resetAnalysis}
                  className="flex items-center gap-3 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black px-6 py-3 rounded-xl font-bold transition-all duration-300"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {analysisPhasesData.map((phase, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-black/40 to-black/20 border border-gray-700/50 hover:border-[#d4af37]/30 transition-all duration-300">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                        index < analysisState.currentPhase
                          ? "bg-gradient-to-r from-green-400 to-green-500 text-black shadow-lg shadow-green-500/25"
                          : index === analysisState.currentPhase && analysisState.isRunning
                            ? "bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-black shadow-lg shadow-[#d4af37]/25 animate-pulse"
                            : "bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white font-bold text-lg">{phase.name}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-[#d4af37] font-bold text-sm bg-[#d4af37]/10 px-3 py-1 rounded-full">
                            {phase.improvement}
                          </span>
                          <span
                            className={`text-xs font-medium px-3 py-1 rounded-full border ${getRiskColor(phase.risk)}`}
                          >
                            {phase.risk}
                          </span>
                        </div>
                      </div>

                      {index === analysisState.currentPhase && analysisState.isRunning && (
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#d4af37] to-[#d4af37] h-3 rounded-full transition-all duration-100 shadow-lg"
                            style={{ width: `${analysisState.progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {analysisState.completed && (
              <div className="mt-10 p-8 bg-gradient-to-r from-[#d4af37]/10 to-[#d4af37]/10 border border-[#d4af37]/30 rounded-2xl">
                <h4 className="text-2xl font-bold text-[#d4af37] mb-6 text-center">🎉 Análisis Completado</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-3xl font-bold text-[#d4af37]">+150%</div>
                    <div className="text-sm text-gray-400">Insights Generados</div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-3xl font-bold text-[#d4af37]">-65%</div>
                    <div className="text-sm text-gray-400">Tiempo de Decisión</div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-3xl font-bold text-[#d4af37]">+240%</div>
                    <div className="text-sm text-gray-400">Precisión</div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-3xl font-bold text-[#d4af37]">98%</div>
                    <div className="text-sm text-gray-400">Confiabilidad</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#d4af37]">
            Lo que puedes lograr con análisis de datos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{benefit.desc}</p>
                <div className="text-[#d4af37] font-bold text-lg bg-[#d4af37]/10 px-4 py-2 rounded-full inline-block">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BI Calculator */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#d4af37]">
            Calculadora de Business Intelligence
          </h2>

          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-500 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Cpu className="w-8 h-8 text-[#d4af37]" />
                  Configuración
                </h3>

                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-bold text-gray-300 mb-4">Volumen de Datos</label>
                    <div className="flex gap-3">
                      {["small", "medium", "large"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setBiConfig((prev) => ({ ...prev, dataVolume: size }))}
                          className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                            biConfig.dataVolume === size
                              ? "bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-black shadow-lg shadow-[#d4af37]/25"
                              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          }`}
                        >
                          {size === "small" ? "Pequeño" : size === "medium" ? "Medio" : "Grande"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-300 mb-4">Tipo de Negocio</label>
                    <div className="flex gap-3">
                      {["ecommerce", "saas", "retail"].map((type) => (
                        <button
                          key={type}
                          onClick={() => setBiConfig((prev) => ({ ...prev, businessType: type }))}
                          className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                            biConfig.businessType === type
                              ? "bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-black shadow-lg shadow-[#d4af37]/25"
                              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          }`}
                        >
                          {type === "ecommerce" ? "E-commerce" : type === "saas" ? "SaaS" : "Retail"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-300 mb-4">
                      Tamaño del Equipo: <span className="text-[#d4af37]">{biConfig.teamSize}</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={biConfig.teamSize}
                      onChange={(e) => setBiConfig((prev) => ({ ...prev, teamSize: Number.parseInt(e.target.value) }))}
                      className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #facc15 0%, #facc15 ${((biConfig.teamSize - 5) / 95) * 100}%, #374151 ${((biConfig.teamSize - 5) / 95) * 100}%, #374151 100%)`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <LineChart className="w-8 h-8 text-[#d4af37]" />
                  Resultados Proyectados
                </h3>

                <div className="space-y-6">
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-black/40 to-black/20 rounded-xl border border-gray-700/50 hover:border-[#d4af37]/30 transition-all duration-300">
                    <span className="text-gray-300 font-medium">Tiempo a Insights</span>
                    <span className="text-[#d4af37] font-bold text-xl">{biResults.timeToInsight}</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-black/40 to-black/20 rounded-xl border border-gray-700/50 hover:border-[#d4af37]/30 transition-all duration-300">
                    <span className="text-gray-300 font-medium">Reducción de Costos</span>
                    <span className="text-[#d4af37] font-bold text-xl">{biResults.costReduction}</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-black/40 to-black/20 rounded-xl border border-gray-700/50 hover:border-[#d4af37]/30 transition-all duration-300">
                    <span className="text-gray-300 font-medium">Velocidad de Decisión</span>
                    <span className="text-[#d4af37] font-bold text-xl">{biResults.decisionSpeed}</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-black/40 to-black/20 rounded-xl border border-gray-700/50 hover:border-[#d4af37]/30 transition-all duration-300">
                    <span className="text-gray-300 font-medium">Precisión</span>
                    <span className="text-[#d4af37] font-bold text-xl">{biResults.accuracy}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#d4af37]">
            Herramientas que usamos en análisis de datos
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStackData.map((tool, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10"
              >
                <div className="text-xl font-bold text-white mb-3">{tool.name}</div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#d4af37] to-[#d4af37] h-3 rounded-full transition-all duration-1000 shadow-lg"
                    style={{ width: `${tool.adoption}%` }}
                  />
                </div>
                <div className="text-sm text-gray-400 mb-2">{tool.adoption}% adopción</div>
                <div
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    tool.rating === "Excelente"
                      ? "bg-green-500/20 text-green-400"
                      : tool.rating === "Muy Bueno"
                        ? "bg-[#d4af37]/20 text-[#d4af37]"
                        : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {tool.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#d4af37]">
            Empresas que ahora ven con claridad
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successCasesData.map((caso, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{caso.empresa}</h3>
                  <div className="text-[#d4af37] font-bold text-sm bg-[#d4af37]/10 px-3 py-1 rounded-full inline-block">
                    {caso.sector}
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed text-lg">{caso.resultado}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(caso.metrics).map(([key, value]) => (
                    <div key={key} className="text-center bg-black/40 rounded-xl p-4">
                      <div className="text-2xl font-bold text-[#d4af37]">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-400 mb-3">DESAFÍOS SUPERADOS:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caso.challenges.map((challenge, challengeIndex) => (
                      <span
                        key={challengeIndex}
                        className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30"
                      >
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-400 mb-3">TECNOLOGÍAS:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caso.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs rounded-full border border-[#d4af37]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#d4af37]" />
                  Implementado en <span className="text-[#d4af37] font-bold">{caso.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Tus datos ya tienen respuestas. Solo hay que hacer las{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#d4af37]">
              preguntas correctas
            </span>
            .
          </h2>
          <p className="text-xl text-gray-300 mb-16 leading-relaxed">
            Analizamos tu operación con ojos nuevos y herramientas reales.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-[#d4af37] to-[#d4af37] hover:from-yellow-300 hover:to-[#d4af37] text-black px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/25">
              <span className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 group-hover:animate-pulse" />
                Empezar análisis de datos
              </span>
            </button>
            <button className="group border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4af37]/25">
              <span className="flex items-center gap-3">
                Optimizar mi plataforma
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>
       </div>
  )
}