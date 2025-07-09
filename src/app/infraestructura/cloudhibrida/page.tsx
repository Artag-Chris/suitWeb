"use client"

import ParticleBackground from "@/components/microComponents/ParticleBackground"
import {
  Cloud,
  Shield,
  Zap,
  Globe,
  Server,
  Lock,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Activity,
  Database,
  Network,
  ExternalLink,
  Target,
  Layers,
  Settings,
  Clock,
} from "lucide-react"
import { useEffect, useState } from "react"

const ourSolution = [
  {
    title: "Flexibilidad total",
    description: "Ejecuta cargas sensibles en privado y escálalas en público según demanda.",
    icon: <Layers className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Workload orchestration", "Dynamic scaling", "Multi-cloud management"],
    demo: "workload",
  },
  {
    title: "Ahorro inteligente",
    description: "Evita sobredimensionar servidores. Usa recursos según uso real.",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-500",
    features: ["Cost optimization AI", "Resource prediction", "Billing transparency"],
    demo: "cost",
  },
  {
    title: "Seguridad reforzada",
    description: "Controlas el acceso, los entornos críticos y los datos sensibles.",
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-red-500 to-pink-500",
    features: ["Zero-trust security", "Data encryption", "Access control"],
    demo: "security",
  },
  {
    title: "Alta disponibilidad",
    description: "Redundancia automática y tolerancia a fallos con respaldo en múltiples entornos.",
    icon: <Activity className="w-8 h-8" />,
    gradient: "from-purple-500 to-indigo-500",
    features: ["99.99% SLA", "Auto-failover", "Disaster recovery"],
    demo: "availability",
  },
  {
    title: "Despliegue ágil",
    description: "Integra CI/CD en múltiples entornos sin reescribir arquitectura.",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-500",
    features: ["DevOps pipeline", "Container orchestration", "Blue-green deployment"],
    demo: "deployment",
  },
  {
    title: "Cumplimiento normativo",
    description: "Alineado con estándares como GDPR, ISO27001 o políticas locales de datos.",
    icon: <Lock className="w-8 h-8" />,
    gradient: "from-indigo-500 to-purple-500",
    features: ["Compliance automation", "Audit trails", "Data governance"],
    demo: "compliance",
  },
]

const cloudComparison = [
  {
    label: "Nube Pública",
    icon: <Globe className="w-6 h-6" />,
    color: "text-blue-400",
    score: 65,
    items: ["Bajo costo inicial", "Alta escalabilidad", "Menor control", "Dependencia del proveedor"],
  },
  {
    label: "Nube Privada",
    icon: <Server className="w-6 h-6" />,
    color: "text-purple-400",
    score: 70,
    items: ["Alto control y seguridad", "Cumplimiento garantizado", "Costo elevado", "Poca flexibilidad"],
  },
  {
    label: "Nuestra Nube Híbrida",
    icon: <Cloud className="w-6 h-6" />,
    color: "text-[#d4af37]",
    score: 95,
    items: ["Balance ideal", "Control estratégico", "Escalabilidad bajo demanda", "Optimización de costos"],
  },
]

const successCases = [
  {
    company: "Empresa de Salud",
    category: "HEALTHCARE",
    result: "Hospedaje privado de historiales + app pública para pacientes con 99.9% uptime.",
    icon: <Shield className="w-8 h-8" />,
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Pacientes", value: "50K+" },
      { label: "Compliance", value: "HIPAA" },
      { label: "Ahorro", value: "40%" },
    ],
    architecture: "Private: EHR System | Public: Patient Portal",
    timeline: "3 meses",
  },
  {
    company: "Fintech Regional",
    category: "FINANCIAL SERVICES",
    result: "Plataforma en AWS + servidor privado con cifrado local de datos críticos.",
    icon: <Database className="w-8 h-8" />,
    metrics: [
      { label: "Transacciones/día", value: "1M+" },
      { label: "Latencia", value: "<50ms" },
      { label: "Security", value: "AES-256" },
      { label: "Disponibilidad", value: "99.99%" },
    ],
    architecture: "Private: Core Banking | Public: Mobile Banking",
    timeline: "6 meses",
  },
  {
    company: "Educación en Línea",
    category: "EDTECH",
    result: "Nube privada para contenido y pública para streaming a escala global.",
    icon: <Network className="w-8 h-8" />,
    metrics: [
      { label: "Estudiantes", value: "100K+" },
      { label: "Países", value: "25+" },
      { label: "Contenido", value: "10TB+" },
      { label: "Streaming", value: "4K HDR" },
    ],
    architecture: "Private: Content Management | Public: CDN & Streaming",
    timeline: "4 meses",
  },
]

// Componente para demo interactivo de nuestra arquitectura
const OurArchitectureDemo = () => {
  const [activeDemo, setActiveDemo] = useState<string>("overview")
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const demos = {
    overview: {
      title: "Arquitectura Completa",
      description: "Nuestra solución híbrida integrada",
    },
    workload: {
      title: "Gestión de Cargas",
      description: "Distribución inteligente de workloads",
    },
    cost: {
      title: "Optimización de Costos",
      description: "Ahorro automático basado en IA",
    },
    security: {
      title: "Seguridad Multicapa",
      description: "Protección end-to-end",
    },
  }

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-white font-semibold">Nuestra Arquitectura Híbrida</h4>
        <div className="flex space-x-2">
          {Object.keys(demos).map((key) => (
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${activeDemo === key ? "bg-[#d4af37] text-black" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              {demos[key as keyof typeof demos].title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-80 bg-[#0f0f13] rounded-lg overflow-hidden mb-4">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-gray-700"></div>
            ))}
          </div>
        </div>

        {/* Cloud layers */}
        <div className="absolute inset-4">
          {/* Public Cloud */}
          <div
            className={`absolute top-0 left-0 right-0 h-16 rounded-lg border-2 transition-all duration-1000 ${animationStep >= 1 ? "border-blue-400 bg-blue-400/20" : "border-gray-600 bg-gray-600/10"
              }`}
          >
            <div className="flex items-center justify-center h-full">
              <Globe className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-white font-semibold">Nube Pública</span>
            </div>
          </div>

          {/* Hybrid Management Layer */}
          <div
            className={`absolute top-20 left-8 right-8 h-12 rounded-lg border-2 transition-all duration-1000 ${animationStep >= 2 ? "border-[#d4af37] bg-[#d4af37]/20" : "border-gray-600 bg-gray-600/10"
              }`}
          >
            <div className="flex items-center justify-center h-full">
              <Settings className="w-5 h-5 text-[#d4af37] mr-2" />
              <span className="text-white font-semibold text-sm">Capa de Gestión Híbrida</span>
            </div>
          </div>

          {/* Private Cloud */}
          <div
            className={`absolute top-36 left-4 right-4 h-16 rounded-lg border-2 transition-all duration-1000 ${animationStep >= 3 ? "border-purple-400 bg-purple-400/20" : "border-gray-600 bg-gray-600/10"
              }`}
          >
            <div className="flex items-center justify-center h-full">
              <Server className="w-6 h-6 text-purple-400 mr-2" />
              <span className="text-white font-semibold">Nube Privada</span>
            </div>
          </div>

          {/* On-Premise */}
          <div
            className={`absolute bottom-0 left-8 right-8 h-16 rounded-lg border-2 transition-all duration-1000 ${animationStep >= 4 || animationStep === 0
                ? "border-green-400 bg-green-400/20"
                : "border-gray-600 bg-gray-600/10"
              }`}
          >
            <div className="flex items-center justify-center h-full">
              <Database className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-white font-semibold">On-Premise</span>
            </div>
          </div>

          {/* Data flow arrows */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#d4af37" />
              </marker>
            </defs>
            {animationStep >= 1 && (
              <>
                <line
                  x1="50%"
                  y1="16%"
                  x2="50%"
                  y2="28%"
                  stroke="#d4af37"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                />
                <line
                  x1="50%"
                  y1="40%"
                  x2="50%"
                  y2="52%"
                  stroke="#d4af37"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                />
                <line
                  x1="50%"
                  y1="68%"
                  x2="50%"
                  y2="80%"
                  stroke="#d4af37"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                />
              </>
            )}
          </svg>
        </div>
      </div>

      <div className="text-center">
        <h5 className="text-white font-semibold mb-2">{demos[activeDemo as keyof typeof demos].title}</h5>
        <p className="text-gray-400 text-sm">{demos[activeDemo as keyof typeof demos].description}</p>
      </div>
    </div>
  )
}

// Componente para métricas en tiempo real
const RealTimeMetrics = () => {
  const [metrics, setMetrics] = useState({
    activeWorkloads: 0,
    costSavings: 0,
    uptime: 0,
    securityEvents: 0,
  })

  useEffect(() => {
    const targets = {
      activeWorkloads: 847,
      costSavings: 42.3,
      uptime: 99.97,
      securityEvents: 0,
    }

    const duration = 3000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setMetrics({
        activeWorkloads: Math.floor(targets.activeWorkloads * progress),
        costSavings: Math.floor(targets.costSavings * progress * 10) / 10,
        uptime: Math.floor(targets.uptime * progress * 100) / 100,
        securityEvents: targets.securityEvents,
      })

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const metricsData = [
    {
      label: "Workloads Activos",
      value: metrics.activeWorkloads.toLocaleString(),
      icon: <Activity className="w-6 h-6" />,
      color: "text-blue-400",
      status: "Óptimo",
    },
    {
      label: "Ahorro de Costos",
      value: `${metrics.costSavings}%`,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-green-400",
      status: "Excelente",
    },
    {
      label: "Uptime Global",
      value: `${metrics.uptime}%`,
      icon: <Shield className="w-6 h-6" />,
      color: "text-[#d4af37]",
      status: "Perfecto",
    },
    {
      label: "Incidentes Seguridad",
      value: metrics.securityEvents.toString(),
      icon: <Lock className="w-6 h-6" />,
      color: "text-green-400",
      status: "Seguro",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metricsData.map((metric, index) => (
        <div
          key={index}
          className="group bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg bg-[#d4af37]/20 ${metric.color}`}>{metric.icon}</div>
            <div className="text-xs text-green-400 font-semibold">{metric.status}</div>
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-1">{metric.label}</h3>
            <p className="text-3xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
              {metric.value}
            </p>
          </div>

          {/* Status indicator */}
          <div className="mt-4 flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs text-gray-400">En tiempo real</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function NuestraNubeHibridaPage() {
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
