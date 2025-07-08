"use client"

import ParticleBackground from "@/components/microComponents/ParticleBackground"
import {
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  BarChart3,
  Activity,
  Globe,
  ShoppingCart,
  MessageSquare,
  Settings,
  ExternalLink,
  Quote,
  Layers,
  Brain,
  Rocket,
} from "lucide-react"
import { useEffect, useState } from "react"

const insights = [
  {
    title: "Comunicación entre áreas",
    description: "Marketing, ventas, operaciones y soporte usan los mismos datos para coordinar mejor.",
    icon: <MessageSquare className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Dashboards unificados", "KPIs compartidos", "Comunicación fluida"],
  },
  {
    title: "Toma de decisiones con evidencia",
    description: "Desde pricing hasta producto, los líderes analizan patrones, no opiniones.",
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    features: ["Decisiones basadas en datos", "Análisis predictivo", "Estrategia informada"],
  },
  {
    title: "Adaptación constante",
    description: "Los datos permiten probar, medir, corregir y escalar más rápido que la competencia.",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-500",
    features: ["Iteración rápida", "A/B testing", "Escalabilidad inteligente"],
  },
]

const departmentData = [
  {
    area: "Marketing",
    info: "Campañas medidas en tiempo real, adaptadas al rendimiento.",
    icon: <Target className="w-6 h-6" />,
    metrics: [
      { label: "ROI Campañas", value: "340%" },
      { label: "CTR", value: "4.2%" },
    ],
  },
  {
    area: "Ventas",
    info: "Alertas de clientes activos, leads calientes, ciclos de cierre.",
    icon: <TrendingUp className="w-6 h-6" />,
    metrics: [
      { label: "Conversion Rate", value: "28%" },
      { label: "Ciclo Promedio", value: "12d" },
    ],
  },
  {
    area: "Operaciones",
    info: "Dashboard de carga, entregas, SLA y productividad diaria.",
    icon: <Settings className="w-6 h-6" />,
    metrics: [
      { label: "SLA Compliance", value: "98.5%" },
      { label: "Productividad", value: "+45%" },
    ],
  },
  {
    area: "Soporte",
    info: "Tickets por tipo, urgencia y satisfacción del usuario.",
    icon: <Users className="w-6 h-6" />,
    metrics: [
      { label: "CSAT Score", value: "4.8/5" },
      { label: "Tiempo Respuesta", value: "2.3h" },
    ],
  },
]

const advancedCases = [
  {
    company: "Holding de Retail",
    category: "RETAIL & E-COMMERCE",
    result: "Logró predecir inventarios y mejorar margen logístico un 25% integrando datos de ventas + bodega.",
    icon: <ShoppingCart className="w-8 h-8" />,
    metrics: [
      { label: "Margen logístico", value: "+25%" },
      { label: "Precisión inventario", value: "94%" },
    ],
  },
  {
    company: "Startup Financiera",
    category: "FINTECH",
    result: "Relacionó comportamiento del cliente con churn, reduciendo bajas en un 40%.",
    icon: <BarChart3 className="w-8 h-8" />,
    metrics: [
      { label: "Reducción churn", value: "-40%" },
      { label: "Retención", value: "89%" },
    ],
  },
  {
    company: "EdTech Regional",
    category: "EDUCACIÓN",
    result: "Usó dashboards cruzados para optimizar marketing, contenidos y soporte de forma sincronizada.",
    icon: <Layers className="w-8 h-8" />,
    metrics: [
      { label: "Engagement", value: "+67%" },
      { label: "Completion Rate", value: "78%" },
    ],
  },
]

// Componente para métricas animadas avanzadas
const AdvancedMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    users: 0,
    growth: 0,
    efficiency: 0,
    satisfaction: 0,
    uptime: 0,
  })

  useEffect(() => {
    const targets = {
      revenue: 2847000,
      users: 15420,
      growth: 156,
      efficiency: 94.7,
      satisfaction: 4.9,
      uptime: 99.98,
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedValues({
        revenue: Math.floor(targets.revenue * progress),
        users: Math.floor(targets.users * progress),
        growth: Math.floor(targets.growth * progress),
        efficiency: Math.floor(targets.efficiency * progress * 10) / 10,
        satisfaction: Math.floor(targets.satisfaction * progress * 10) / 10,
        uptime: Math.floor(targets.uptime * progress * 100) / 100,
      })

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const metrics = [
    {
      label: "Revenue Anual",
      value: `$${animatedValues.revenue.toLocaleString()}`,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-[#d4af37]",
      change: "+23.4%",
    },
    {
      label: "Usuarios Activos",
      value: animatedValues.users.toLocaleString(),
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-400",
      change: "+12.8%",
    },
    {
      label: "Crecimiento MoM",
      value: `${animatedValues.growth}%`,
      icon: <Rocket className="w-6 h-6" />,
      color: "text-green-400",
      change: "+8.2%",
    },
    {
      label: "Eficiencia Operativa",
      value: `${animatedValues.efficiency}%`,
      icon: <Settings className="w-6 h-6" />,
      color: "text-purple-400",
      change: "+15.6%",
    },
    {
      label: "Satisfacción Cliente",
      value: `${animatedValues.satisfaction}/5`,
      icon: <Target className="w-6 h-6" />,
      color: "text-pink-400",
      change: "+0.3",
    },
    {
      label: "Uptime Sistema",
      value: `${animatedValues.uptime}%`,
      icon: <Activity className="w-6 h-6" />,
      color: "text-teal-400",
      change: "+0.02%",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="group bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg bg-[#d4af37]/20 ${metric.color}`}>{metric.icon}</div>
            <div className="text-sm font-semibold text-green-400">{metric.change}</div>
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-1">{metric.label}</h3>
            <p className="text-3xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
              {metric.value}
            </p>
          </div>

          {/* Progress bar animation */}
          <div className="mt-4 w-full bg-gray-700 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] h-1 rounded-full transition-all duration-2000 ease-out"
              style={{ width: `${(index + 1) * 16.67}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Componente para gráfico de líneas avanzado
const AdvancedLineChart = () => {
  const data = [
    { month: "Ene", value: 45, target: 40 },
    { month: "Feb", value: 52, target: 45 },
    { month: "Mar", value: 48, target: 50 },
    { month: "Abr", value: 61, target: 55 },
    { month: "May", value: 68, target: 60 },
    { month: "Jun", value: 75, target: 65 },
    { month: "Jul", value: 82, target: 70 },
    { month: "Ago", value: 78, target: 75 },
  ]

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-white font-semibold">Performance vs Target</h4>
        <Activity className="w-5 h-5 text-[#d4af37]" />
      </div>

      <div className="relative h-40">
        <svg className="w-full h-full" viewBox="0 0 400 160">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="0" y1={i * 32} x2="400" y2={i * 32} stroke="#374151" strokeWidth="0.5" opacity="0.3" />
          ))}

          {/* Target line */}
          <polyline
            fill="none"
            stroke="#6b7280"
            strokeWidth="2"
            strokeDasharray="5,5"
            points={data
              .map((point, index) => `${(index * 400) / (data.length - 1)},${160 - (point.target / 100) * 160}`)
              .join(" ")}
          />

          {/* Actual performance line */}
          <polyline
            fill="none"
            stroke="#d4af37"
            strokeWidth="3"
            points={data
              .map((point, index) => `${(index * 400) / (data.length - 1)},${160 - (point.value / 100) * 160}`)
              .join(" ")}
            className="animate-pulse"
          />

          {/* Data points */}
          {data.map((point, index) => (
            <circle
              key={index}
              cx={(index * 400) / (data.length - 1)}
              cy={160 - (point.value / 100) * 160}
              r="4"
              fill="#d4af37"
              className="animate-pulse"
            />
          ))}
        </svg>

        {/* Month labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          {data.map((point, index) => (
            <span key={index}>{point.month}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#d4af37] rounded-full mr-2"></div>
          <span className="text-gray-300">Performance</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-0.5 bg-gray-500 mr-2"></div>
          <span className="text-gray-300">Target</span>
        </div>
      </div>
    </div>
  )
}

// Componente para heatmap
const HeatmapChart = () => {
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]
  const hours = ["6", "9", "12", "15", "18", "21"]

  const generateHeatmapData = () => {
    return days.map(() => hours.map(() => Math.random()))
  }

  const [heatmapData] = useState(generateHeatmapData())

  const getIntensity = (value: number) => {
    if (value > 0.8) return "bg-[#d4af37] opacity-100"
    if (value > 0.6) return "bg-[#d4af37] opacity-75"
    if (value > 0.4) return "bg-[#d4af37] opacity-50"
    if (value > 0.2) return "bg-[#d4af37] opacity-25"
    return "bg-gray-600 opacity-20"
  }

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-white font-semibold">Actividad por Hora</h4>
        <Globe className="w-5 h-5 text-[#d4af37]" />
      </div>

      <div className="space-y-2">
        {/* Hour labels */}
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span></span>
          {hours.map((hour) => (
            <span key={hour}>{hour}h</span>
          ))}
        </div>

        {/* Heatmap grid */}
        {days.map((day, dayIndex) => (
          <div key={day} className="flex items-center space-x-2">
            <span className="text-xs text-gray-400 w-8">{day}</span>
            <div className="flex space-x-1">
              {hours.map((_, hourIndex) => (
                <div
                  key={hourIndex}
                  className={`w-6 h-4 rounded-sm transition-all duration-300 hover:scale-110 ${getIntensity(
                    heatmapData[dayIndex][hourIndex],
                  )}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
        <span>Menos</span>
        <div className="flex space-x-1">
          {[0.2, 0.4, 0.6, 0.8, 1].map((intensity) => (
            <div key={intensity} className={`w-3 h-3 rounded-sm ${getIntensity(intensity)}`}></div>
          ))}
        </div>
        <span>Más</span>
      </div>
    </div>
  )
}

export default function UsoAnaliticasPage() {
  return (
    <>
      <ParticleBackground />

      <div className="relative z-10 min-h-screen text-white font-sans">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          {/* Efecto de luz pulsante */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-pulse w-96 h-96 rounded-full bg-gradient-to-r from-[#d4af3780] to-[#0d47a180] blur-[100px] opacity-30"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-8">
              <BarChart3 className="w-4 h-4 text-[#d4af37] mr-2" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">CRECIMIENTO MEDIBLE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="text-white">Las empresas que </span>
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f1c232] to-[#d4af37] bg-clip-text text-transparent">
                crecen
              </span>
              <br />
              <span className="text-white">se miden</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Desde startups hasta multinacionales, los datos son el{" "}
              <span className="text-[#d4af37]">idioma común</span> que conecta áreas, mejora decisiones y multiplica
              resultados.
            </p>

            {/* Scroll indicator */}
            
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
        </section>

        {/* Insights Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">¿Por qué las grandes empresas </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  invierten en analítica?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                La diferencia entre crecer y escalar está en cómo usas tus datos
              </p>
            </div>

            {/* Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${insight.gradient} mb-6`}>
                      <div className="text-white">{insight.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {insight.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">{insight.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {insight.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mr-3 flex-shrink-0"></div>
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

        {/* Quote Section */}
        <section className="py-16 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-r from-[#0f0f13]/80 to-[#1a1a2e]/80 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-12">
              <Quote className="w-12 h-12 text-[#d4af37] mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl italic text-[#d4af37] mb-6 leading-relaxed">
                "No se puede escalar lo que no se controla. Y no se puede controlar lo que no se mide."
              </blockquote>
              <cite className="text-gray-400">— Principio de gestión empresarial moderna</cite>
            </div>
          </div>
        </section>

        {/* Advanced Metrics Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  Métricas
                </span>
                <span className="text-white"> que impulsan el crecimiento</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Visualizaciones avanzadas que transforman datos complejos en insights accionables
              </p>
            </div>

            {/* Advanced Metrics */}
            <div className="mb-12">
              <AdvancedMetrics />
            </div>

            {/* Advanced Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AdvancedLineChart />
              <HeatmapChart />
            </div>
          </div>
        </section>

        {/* Department Data Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Datos que </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  conectan equipos
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cada departamento optimizado con métricas específicas y objetivos alineados
              </p>
            </div>

            {/* Department Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentData.map((dept, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-[#d4af37]/20 text-[#d4af37] mr-3">{dept.icon}</div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {dept.area}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{dept.info}</p>

                  {/* Metrics */}
                  <div className="space-y-2">
                    {dept.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">{metric.label}</span>
                        <span className="text-sm font-bold text-[#d4af37]">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Cases Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Cuando los datos </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  alinean toda la empresa
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Casos reales donde la analítica integrada generó transformaciones empresariales
              </p>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advancedCases.map((study, index) => (
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
                <Target className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">ESTRATEGIA EN ACCIÓN</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">No son solo números. Es </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  estrategia en acción.
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                ¿Quieres tomar decisiones como las grandes?{" "}
                <span className="text-[#d4af37]">Empieza con tus datos.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Ver cómo aplicarlo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f1c232] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                  Volver a analíticas
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
