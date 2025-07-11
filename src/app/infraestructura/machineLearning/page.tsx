"use client"

import { useState, useEffect } from "react"
import { Play, RotateCcw, Brain, TrendingUp, Target, Zap, Clock, Award } from "lucide-react"
import ParticleBackground from "@/components/microComponents/ParticleBackground"
import { mlUseCases, techStackMachineLearning, successCasesMachineLearning } from "@/dataSections"

const MachineLearningPage = () => {
  // Real-time metrics state
  const [metrics, setMetrics] = useState({
    modelsDeployed: 847,
    accuracy: 94.2,
    predictions: 1250000,
    automationRate: 87.5,
  })

  // ML Training Simulator
  const [trainingState, setTrainingState] = useState({
    isRunning: false,
    currentPhase: 0,
    phases: [
      { name: "Preparación de Datos", duration: 2000, improvement: "+15%", status: "pending" },
      { name: "Feature Engineering", duration: 1800, improvement: "+25%", status: "pending" },
      { name: "Entrenamiento del Modelo", duration: 2500, improvement: "+35%", status: "pending" },
      { name: "Validación Cruzada", duration: 1500, improvement: "+20%", status: "pending" },
      { name: "Optimización de Hiperparámetros", duration: 2200, improvement: "+30%", status: "pending" },
    ],
    finalMetrics: {
      accuracy: 0,
      precision: 0,
      recall: 0,
      f1Score: 0,
    },
  })

  // Model Performance Calculator
  const [modelConfig, setModelConfig] = useState({
    dataSize: "medium",
    modelType: "classification",
    complexity: 50,
  })

  const [performanceResults, setPerformanceResults] = useState({
    accuracy: 85,
    trainingTime: 4.2,
    inferenceSpeed: 120,
    resourceUsage: 65,
  })

  // Update real-time metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        modelsDeployed: prev.modelsDeployed + Math.floor(Math.random() * 3),
        accuracy: Math.min(99.9, prev.accuracy + (Math.random() - 0.5) * 0.2),
        predictions: prev.predictions + Math.floor(Math.random() * 1000),
        automationRate: Math.min(99, prev.automationRate + (Math.random() - 0.5) * 0.3),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // ML Training Simulator Logic
  const runTraining = async () => {
    setTrainingState((prev) => ({ ...prev, isRunning: true, currentPhase: 0 }))

    for (let i = 0; i < trainingState.phases.length; i++) {
      setTrainingState((prev) => ({
        ...prev,
        currentPhase: i,
        phases: prev.phases.map((phase, idx) => ({
          ...phase,
          status: idx === i ? "running" : idx < i ? "completed" : "pending",
        })),
      }))

      await new Promise((resolve) => setTimeout(resolve, trainingState.phases[i].duration))
    }

    // Final results
    setTrainingState((prev) => ({
      ...prev,
      isRunning: false,
      phases: prev.phases.map((phase) => ({ ...phase, status: "completed" })),
      finalMetrics: {
        accuracy: 94.8,
        precision: 92.3,
        recall: 96.1,
        f1Score: 94.2,
      },
    }))
  }

  const resetTraining = () => {
    setTrainingState((prev) => ({
      ...prev,
      isRunning: false,
      currentPhase: 0,
      phases: prev.phases.map((phase) => ({ ...phase, status: "pending" })),
      finalMetrics: { accuracy: 0, precision: 0, recall: 0, f1Score: 0 },
    }))
  }

  // Calculate performance based on configuration
  useEffect(() => {
    const calculatePerformance = () => {
      let baseAccuracy = 75
      let baseTime = 5.0
      let baseSpeed = 100
      let baseUsage = 50

      // Data size impact
      if (modelConfig.dataSize === "small") {
        baseAccuracy += 5
        baseTime -= 2
        baseSpeed += 30
        baseUsage -= 20
      } else if (modelConfig.dataSize === "large") {
        baseAccuracy += 15
        baseTime += 3
        baseSpeed -= 20
        baseUsage += 30
      } else {
        baseAccuracy += 10
        baseTime += 1
        baseSpeed += 10
        baseUsage += 10
      }

      // Model type impact
      if (modelConfig.modelType === "regression") {
        baseAccuracy += 5
        baseTime -= 1
      } else if (modelConfig.modelType === "clustering") {
        baseAccuracy -= 5
        baseTime += 1
        baseSpeed += 20
      } else if (modelConfig.modelType === "deep_learning") {
        baseAccuracy += 20
        baseTime += 5
        baseSpeed -= 30
        baseUsage += 40
      }

      // Complexity impact
      const complexityFactor = modelConfig.complexity / 100
      baseAccuracy += complexityFactor * 15
      baseTime += complexityFactor * 3
      baseSpeed -= complexityFactor * 40
      baseUsage += complexityFactor * 30

      setPerformanceResults({
        accuracy: Math.min(99, Math.max(60, baseAccuracy)),
        trainingTime: Math.max(0.5, baseTime),
        inferenceSpeed: Math.max(10, baseSpeed),
        resourceUsage: Math.min(100, Math.max(20, baseUsage)),
      })
    }

    calculatePerformance()
  }, [modelConfig])


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Mission Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-black/20 backdrop-blur-sm mb-8">
            <Brain className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-sm font-medium">INTELIGENCIA ARTIFICIAL</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Machine Learning para
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#d4af37] to-yellow-500 bg-clip-text text-transparent">
              Decisiones Inteligentes
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Modelos que aprenden de tus datos para predecir, automatizar y detectar
            <span className="text-[#d4af37]"> patrones invisibles a simple vista</span>.
          </p>

          {/* Real-time Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Modelos Desplegados", value: metrics.modelsDeployed.toLocaleString(), icon: Brain },
              { label: "Precisión Promedio", value: `${metrics.accuracy.toFixed(1)}%`, icon: Target },
              { label: "Predicciones/Día", value: metrics.predictions.toLocaleString(), icon: TrendingUp },
              { label: "Automatización", value: `${metrics.automationRate.toFixed(1)}%`, icon: Zap },
            ].map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10">
                  <metric.icon className="w-8 h-8 text-[#d4af37] mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all duration-300 hover:scale-105">
              ▶ Solicita una demostración
            </button>
            <button className="px-8 py-4 border border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300">
              Ver casos de éxito →
            </button>
          </div>
        </div>
      </section>

      {/* What is ML Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-[#d4af37]">¿Qué es </span>
            <span className="text-white">Machine Learning?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Es la capacidad de los sistemas para <span className="text-[#d4af37]">aprender de los datos</span>,
            identificar patrones y tomar decisiones sin ser programados explícitamente. Lo usamos para{" "}
            <span className="text-[#d4af37]">clasificar, predecir, recomendar y detectar</span>.
          </p>
        </div>
      </section>

      {/* ML Training Simulator */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#d4af37]">Simulador de </span>
            <span className="text-white">Entrenamiento ML</span>
          </h2>

          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Training Phases */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-6">Fases de Entrenamiento</h3>
                <div className="space-y-4">
                  {trainingState.phases.map((phase, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          phase.status === "completed"
                            ? "bg-green-500 text-white"
                            : phase.status === "running"
                              ? "bg-[#d4af37] text-black animate-pulse"
                              : "bg-gray-600 text-gray-300"
                        }`}
                      >
                        {phase.status === "completed" ? "✓" : index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{phase.name}</span>
                          <span className="text-[#d4af37] text-sm">{phase.improvement}</span>
                        </div>
                        {phase.status === "running" && (
                          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                            <div
                              className="bg-gradient-to-r from-[#d4af37] to-yellow-500 h-2 rounded-full animate-pulse"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-6">Métricas del Modelo</h3>
                {trainingState.finalMetrics.accuracy > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Precisión", value: `${trainingState.finalMetrics.accuracy}%` },
                      { label: "Precision", value: `${trainingState.finalMetrics.precision}%` },
                      { label: "Recall", value: `${trainingState.finalMetrics.recall}%` },
                      { label: "F1-Score", value: `${trainingState.finalMetrics.f1Score}%` },
                    ].map((metric, index) => (
                      <div key={index} className="bg-black/40 rounded-lg p-4 border border-[#d4af37]/20">
                        <div className="text-2xl font-bold text-[#d4af37]">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-400 py-8">Ejecuta el entrenamiento para ver las métricas</div>
                )}
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex gap-4 mt-8 justify-center">
              <button
                onClick={runTraining}
                disabled={trainingState.isRunning}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Play className="w-4 h-4" />
                {trainingState.isRunning ? "Entrenando..." : "Ejecutar Entrenamiento"}
              </button>
              <button
                onClick={resetTraining}
                className="flex items-center gap-2 px-6 py-3 border border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Model Performance Calculator */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#d4af37]">Calculadora de </span>
            <span className="text-white">Performance ML</span>
          </h2>

          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Configuration */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Configuración del Modelo</h3>

                <div className="space-y-6">
                  {/* Data Size */}
                  <div>
                    <label className="block text-white font-medium mb-3">Tamaño de Datos</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["small", "medium", "large"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setModelConfig((prev) => ({ ...prev, dataSize: size }))}
                          className={`py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                            modelConfig.dataSize === size
                              ? "bg-gradient-to-r from-[#d4af37] to-yellow-500 text-black"
                              : "bg-black/40 text-gray-300 hover:bg-black/60 border border-[#d4af37]/20"
                          }`}
                        >
                          {size === "small" ? "Pequeño" : size === "medium" ? "Medio" : "Grande"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Model Type */}
                  <div>
                    <label className="block text-white font-medium mb-3">Tipo de Modelo</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { key: "classification", label: "Clasificación" },
                        { key: "regression", label: "Regresión" },
                        { key: "clustering", label: "Clustering" },
                        { key: "deep_learning", label: "Deep Learning" },
                      ].map((type) => (
                        <button
                          key={type.key}
                          onClick={() => setModelConfig((prev) => ({ ...prev, modelType: type.key }))}
                          className={`py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                            modelConfig.modelType === type.key
                              ? "bg-gradient-to-r from-[#d4af37] to-yellow-500 text-black"
                              : "bg-black/40 text-gray-300 hover:bg-black/60 border border-[#d4af37]/20"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Complexity Slider */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Complejidad del Modelo: {modelConfig.complexity}%
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={modelConfig.complexity}
                      onChange={(e) =>
                        setModelConfig((prev) => ({ ...prev, complexity: Number.parseInt(e.target.value) }))
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                    />
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Resultados Estimados</h3>

                <div className="space-y-4">
                  {[
                    {
                      label: "Precisión",
                      value: `${performanceResults.accuracy.toFixed(1)}%`,
                      color: "from-green-500 to-green-600",
                    },
                    {
                      label: "Tiempo de Entrenamiento",
                      value: `${performanceResults.trainingTime.toFixed(1)}h`,
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      label: "Velocidad de Inferencia",
                      value: `${performanceResults.inferenceSpeed.toFixed(0)} pred/s`,
                      color: "from-purple-500 to-purple-600",
                    },
                    {
                      label: "Uso de Recursos",
                      value: `${performanceResults.resourceUsage.toFixed(0)}%`,
                      color: "from-orange-500 to-orange-600",
                    },
                  ].map((result, index) => (
                    <div key={index} className="bg-black/40 rounded-lg p-4 border border-[#d4af37]/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{result.label}</span>
                        <span className="text-[#d4af37] font-bold">{result.value}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${result.color} h-2 rounded-full transition-all duration-500`}
                          style={{
                            width: `${Math.min(100, (Number.parseFloat(result.value) / (result.label.includes("%") ? 100 : result.label.includes("h") ? 10 : 200)) * 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#d4af37]">Casos Reales donde </span>
            <span className="text-white">Aplicamos ML</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlUseCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-6 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10 h-full">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4af37]/20 rounded-full">
                    <span className="text-[#d4af37] text-sm font-medium">{useCase.metrics}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#d4af37]">Stack Tecnológico </span>
            <span className="text-white">ML</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackMachineLearning.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-white font-semibold">{tech.name}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tech.rating === "Excelente"
                          ? "bg-green-500/20 text-green-400"
                          : tech.rating === "Muy Bueno"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {tech.rating}
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Adopción</span>
                      <span className="text-[#d4af37]">{tech.adoption}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#d4af37] to-yellow-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${tech.adoption}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#d4af37]">El Impacto de </span>
            <span className="text-white">Aplicar ML</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {successCasesMachineLearning.map((case_, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-6 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10 h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{case_.company}</h3>
                    <p className="text-[#d4af37] text-sm font-medium">{case_.sector}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-6">
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium mb-2">
                        Desafío
                      </span>
                      <p className="text-gray-300 text-sm">{case_.challenge}</p>
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium mb-2">
                        Solución
                      </span>
                      <p className="text-gray-300 text-sm">{case_.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Resultados</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(case_.results).map(([key, value]) => (
                        <div key={key} className="bg-black/40 rounded-lg p-3 border border-[#d4af37]/10">
                          <div className="text-[#d4af37] font-bold text-sm">{value}</div>
                          <div className="text-gray-400 text-xs capitalize">
                            {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {case_.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-[#d4af37]/20 text-[#d4af37] rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Duration & Challenges */}
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {case_.duration}
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Award className="w-4 h-4" />
                      {case_.challenges.length} desafíos
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">Deja que tus datos </span>
            <span className="text-[#d4af37]">aprendan por ti</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Creamos modelos de Machine Learning que impactan tu negocio
            <span className="text-[#d4af37]"> desde el primer entrenamiento</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all duration-300 hover:scale-105">
              Aplicar ML en mi empresa
            </button>
            <button className="px-8 py-4 border border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300">
              Ver análisis de datos →
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default MachineLearningPage
