"use client"

import { useState, useEffect } from "react"
import { Play, RotateCcw, Code, Server } from "lucide-react"
import ParticleBackground from "@/components/microComponents/ParticleBackground"
import { optimizationStepsData, factoresCostoData, beneficiosData, tecnologiasData, casosData } from "@/dataSections"

const SaaSPage = () => {
  // Performance Optimizer State
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [optimizationProgress, setOptimizationProgress] = useState(0)

  // Cost Calculator State
  const [saasType, setSaasType] = useState("B2B")
  const [currentUsers, setCurrentUsers] = useState(1000)

  // Real-time Metrics State
  const [realtimeMetrics, setRealtimeMetrics] = useState({
    activeUsers: 1247,
    responseTime: 245,
    uptime: 99.97,
    retention: 87.3,
  })

  const runOptimization = () => {
    setIsOptimizing(true)
    setOptimizationProgress(0)
    const timer = setInterval(() => {
      setOptimizationProgress((prev) => {
        if (prev >= 100) {
          setIsOptimizing(false)
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  const resetOptimization = () => {
    setIsOptimizing(false)
    setOptimizationProgress(0)
  }

  // Calculate cost analysis
  const costAnalysis: any = {
    current: Math.round(currentUsers * (saasType === "B2B" ? 2.4 : saasType === "B2C" ? 1.8 : 3.2)),
    optimized: Math.round(currentUsers * (saasType === "B2B" ? 1.44 : saasType === "B2C" ? 1.08 : 1.92)),
  }
  costAnalysis.savings = costAnalysis.current - costAnalysis.optimized

  // Simulate real-time metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setRealtimeMetrics((prev) => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 20 - 10),
        responseTime: Math.max(120, prev.responseTime + Math.floor(Math.random() * 40 - 20)),
        uptime: Math.min(99.99, Math.max(99.9, prev.uptime + (Math.random() * 0.02 - 0.01))),
        retention: Math.max(80, Math.min(95, prev.retention + (Math.random() * 2 - 1))),
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <ParticleBackground />
      <div className="text-white min-h-screen font-sans relative overflow-hidden">

        {/* HERO */}
        <section className="relative py-32 px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-yellow-600/10 border border-yellow-600/30 px-4 py-2 rounded-full mb-6">
              <Code className="w-4 h-4 text-yellow-600" />
              <span className="text-yellow-600 text-sm font-medium">OPTIMIZACIÓN SAAS</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight mb-6">
              SaaS que <span className="text-yellow-400">rinde</span>, crece y se disfruta
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              Optimizamos tu plataforma como un producto: más rápida, más barata de operar y lista para escalar con tu
              negocio.
            </p>
            {/* Real-time metrics in hero */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className=" border border-yellow-600/20 p-4 hover:bg-[#1e1e1e] transition">
                <div className="text-2xl font-bold text-yellow-400">{realtimeMetrics.activeUsers}</div>
                <div className="text-sm text-gray-400">Usuarios Activos</div>
              </div>
              <div className=" border border-yellow-600/20 p-4 hover:bg-[#1e1e1e] transition">
                <div className="text-2xl font-bold text-yellow-400">{realtimeMetrics.responseTime}ms</div>
                <div className="text-sm text-gray-400">Tiempo Respuesta</div>
              </div>
              <div className=" border border-yellow-600/20 p-4 hover:bg-[#1e1e1e] transition">
                <div className="text-2xl font-bold text-yellow-400">{realtimeMetrics.uptime.toFixed(2)}%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className=" border border-yellow-600/20 p-4 hover:bg-[#1e1e1e] transition">
                <div className="text-2xl font-bold text-yellow-400">{realtimeMetrics.retention.toFixed(1)}%</div>
                <div className="text-sm text-gray-400">Retención</div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿QUÉ ES OPTIMIZAR UN SAAS? */}
        <section className=" py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-10">¿Qué significa optimizar un SaaS?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              No se trata solo de que funcione. Se trata de que funcione bien: con menos latencia, menos gasto, mejor
              conversión, más retención y código que evoluciona contigo.
            </p>
          </div>
        </section>

        {/* PERFORMANCE OPTIMIZER SIMULATOR */}
        <section className=" py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-yellow-400 text-center mb-12">
              Simulador de Optimización de Performance
            </h2>
            <div className=" border border-yellow-600/20 p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-semibold">SaaS Performance Optimizer</h3>
                <div className="flex gap-4">
                  <button
                    onClick={runOptimization}
                    disabled={isOptimizing}
                    className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 text-black px-4 py-2 font-semibold transition"
                  >
                    <Play className="w-4 h-4" />
                    {isOptimizing ? "Optimizando..." : "Ejecutar Optimización"}
                  </button>
                  <button
                    onClick={resetOptimization}
                    className="flex items-center gap-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 transition"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-4">Fases de Optimización</h4>
                  <div className="space-y-4">
                    {optimizationStepsData.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4  border border-yellow-600/10"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${optimizationProgress > (index * 20)
                                ? "bg-green-500 text-black"
                                : isOptimizing && optimizationProgress >= index * 20
                                  ? "bg-yellow-500 text-black animate-pulse"
                                  : "bg-gray-600 text-gray-300"
                              }`}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-white font-medium">{step.name}</div>
                            <div className="text-sm text-gray-400">Duración: {step.duration}</div>
                          </div>
                        </div>
                        <div
                          className={`px-2 py-1 text-xs ${step.risk === "high"
                              ? "bg-red-900/30 text-red-400"
                              : step.risk === "medium"
                                ? "bg-yellow-900/30 text-yellow-400"
                                : "bg-green-900/30 text-green-400"
                            }`}
                        >
                          {step.risk === "high" ? "Alto Riesgo" : step.risk === "medium" ? "Riesgo Medio" : "Bajo Riesgo"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-4">Métricas de Optimización</h4>
                  {optimizationProgress === 100 ? (
                    <div className="space-y-4">
                      <div className="bg-green-900/20 p-4 border border-green-500/30">
                        <div className="flex justify-between items-center">
                          <span>Tiempo de Carga:</span>
                          <span className="text-green-400 font-bold">1.1s (-65%)</span>
                        </div>
                      </div>
                      <div className="bg-green-900/20 p-4 border border-green-500/30">
                        <div className="flex justify-between items-center">
                          <span>Costos Cloud:</span>
                          <span className="text-green-400 font-bold">$1,440/mes (-40%)</span>
                        </div>
                      </div>
                      <div className="bg-green-900/20 p-4 border border-green-500/30">
                        <div className="flex justify-between items-center">
                          <span>Tasa de Churn:</span>
                          <span className="text-green-400 font-bold">4.2% (-50%)</span>
                        </div>
                      </div>
                      <div className="bg-green-900/20 p-4 border border-green-500/30">
                        <div className="flex justify-between items-center">
                          <span>Performance Score:</span>
                          <span className="text-green-400 font-bold">94/100 (+45%)</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-64">
                      {isOptimizing ? (
                        <div className="text-center">
                          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                          <div className="text-yellow-400 font-medium">
                            Optimizando sistema... {optimizationProgress}%
                          </div>
                          <div className="w-64 bg-gray-700 h-2 mt-4">
                            <div
                              className="bg-yellow-400 h-2 transition-all duration-300"
                              style={{ width: `${optimizationProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-gray-500 text-center">
                          <Server className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <div>Ejecuta la optimización para ver resultados</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COST CALCULATOR */}
        <section className=" py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-yellow-400 text-center mb-12">
              Calculadora de Optimización de Costos
            </h2>
            <div className=" border border-yellow-600/20 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">Configuración de tu SaaS</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Tipo de SaaS</label>
                      <select
                        value={saasType}
                        onChange={(e) => setSaasType(e.target.value)}
                        className="w-full bg-[#0e0e0e] text-white p-3 border border-yellow-600/20 focus:border-yellow-500"
                      >
                        <option value="B2B">B2B (Business to Business)</option>
                        <option value="B2C">B2C (Business to Consumer)</option>
                        <option value="Enterprise">Enterprise</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">
                        Usuarios Activos: {currentUsers.toLocaleString()}
                      </label>
                      <input
                        type="range"
                        min="100"
                        max="100000"
                        step="100"
                        value={currentUsers}
                        onChange={(e) => setCurrentUsers(Number.parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-1">
                        <span>100</span>
                        <span>100K</span>
                      </div>
                    </div>
                    <div className=" p-4 border border-yellow-600/20">
                      <h4 className="text-white font-semibold mb-2">Factores de Costo Incluidos</h4>
                      <div className="text-sm text-gray-300 space-y-1">
                        {factoresCostoData.map((factor, i) => (
                          <div key={i} className="flex items-center gap-2">
                            {factor.icon}
                            <span>{factor.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">Análisis de Costos</h3>
                  <div className="space-y-6">
                    <div className="bg-red-900/20 p-6 border border-red-500/30">
                      <div className="text-red-400 font-semibold mb-2">Costo Actual</div>
                      <div className="text-3xl font-bold text-white">${costAnalysis.current.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">por mes sin optimización</div>
                    </div>
                    <div className="bg-green-900/20 p-6 border border-green-500/30">
                      <div className="text-green-400 font-semibold mb-2">Costo Optimizado</div>
                      <div className="text-3xl font-bold text-white">${costAnalysis.optimized.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">por mes con optimizaciones</div>
                    </div>
                    <div className="bg-yellow-900/20 p-6 border border-yellow-600/30">
                      <div className="text-yellow-400 font-semibold mb-2">Ahorro Mensual</div>
                      <div className="text-3xl font-bold text-white">${costAnalysis.savings.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">
                        {Math.round((costAnalysis.savings / costAnalysis.current) * 100)}% de reducción
                      </div>
                    </div>
                    <div className="bg-[#0e0e0e] p-6 border border-yellow-600/20">
                      <div className="text-yellow-400 font-semibold mb-2">Proyección Anual</div>
                      <div className="text-2xl font-bold text-white">${(costAnalysis.savings * 12).toLocaleString()}</div>
                      <div className="text-sm text-gray-400">ahorro total en 12 meses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className=" py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-14">Beneficios directos para tu producto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
              {beneficiosData.map((item, i) => (
                <div key={i} className=" p-6 border border-yellow-600/20 hover:bg-[#1e1e1e] transition">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STACK TÉCNICO */}
        <section className=" py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-10">Tecnologías que optimizamos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-300">
              {tecnologiasData.map((tech, i) => (
                <div key={i} className=" py-4 px-2 border border-yellow-500/10 hover:bg-[#1e1e1e]">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASOS DE OPTIMIZACIÓN */}
        <section className=" py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-14 text-yellow-400">Casos donde SaaS dejó de sufrir</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
              {casosData.map((item, i) => (
                <div key={i} className="border border-yellow-600/30 p-6 hover: transition">
                  <h3 className="text-white font-semibold mb-2">{item.empresa}</h3>
                  <p>{item.resultado}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className=" text-white py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Tu SaaS no necesita más features. Necesita optimización.</h2>
          <p className="mb-8 text-gray-400">Mejoramos lo que ya tienes. Hacemos que rinda mejor. Mucho mejor.</p>
          <div className="flex justify-center gap-4">
            <a
              href="#contacto"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition"
            >
              Optimizar mi plataforma
            </a>
            <a
              href="/migraciones"
              className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition"
            >
              Ver migraciones legacy
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

export default SaaSPage