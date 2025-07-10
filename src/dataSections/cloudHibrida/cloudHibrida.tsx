import { useEffect, useState } from "react"
import {
  Cloud,
  Shield,
  Zap,
  Globe,
  Server,
  Lock,
  TrendingUp,
  Activity,
  Database,
  Network,
  Layers,
  Settings,
} from "lucide-react"
export const ourSolution = [
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

export const cloudComparison = [
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

export const successCases = [
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
export const OurArchitectureDemo = () => {
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
export const RealTimeMetrics = () => {
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