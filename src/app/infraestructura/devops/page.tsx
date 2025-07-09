"use client"

import ParticleBackground from "@/components/microComponents/ParticleBackground"
import {
  GitBranch,
  Zap,
  Shield,
  Target,
  Activity,
  Clock,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  XCircle,
  Settings,
  Code,
  Server,
  Database,
  ExternalLink,
  Play,
  RotateCcw,
  Cpu,
  Globe,
} from "lucide-react"
import { useEffect, useState } from "react"

const devopsAdvantages = [
  {
    title: "Despliegues rápidos y seguros",
    description: "Entrega continua (CI/CD) con rollback automáticos en segundos.",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-500",
    features: ["CI/CD automatizado", "Rollback en segundos", "Zero-downtime deployment"],
    metric: "10x más rápido",
  },
  {
    title: "Menos errores en producción",
    description: "Automatización de pruebas, análisis estático y validaciones en cada commit.",
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-500",
    features: ["Testing automatizado", "Code quality gates", "Security scanning"],
    metric: "70% menos errores",
  },
  {
    title: "Escalabilidad sin fricción",
    description: "Infraestructura como código (IaC) y entornos replicables.",
    icon: <Server className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Infrastructure as Code", "Auto-scaling", "Environment parity"],
    metric: "Escala infinita",
  },
  {
    title: "Colaboración real",
    description: "Menos tickets, más flujo. Desarrollo y operaciones trabajan en un mismo ritmo.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    features: ["Shared responsibility", "Cross-functional teams", "DevOps culture"],
    metric: "80% menos tickets",
  },
  {
    title: "Visibilidad total",
    description: "Monitoreo continuo, alertas automáticas y dashboards en tiempo real.",
    icon: <Activity className="w-8 h-8" />,
    gradient: "from-red-500 to-pink-500",
    features: ["Real-time monitoring", "Automated alerts", "Performance insights"],
    metric: "100% visibilidad",
  },
  {
    title: "Tiempo de recuperación reducido",
    description: "Cuando algo falla, se detecta y se corrige en minutos, no en días.",
    icon: <Clock className="w-8 h-8" />,
    gradient: "from-indigo-500 to-purple-500",
    features: ["Fast recovery", "Automated healing", "Incident response"],
    metric: "5 min MTTR",
  },
]

const techStack = [
  { name: "GitHub Actions", category: "CI/CD", icon: <GitBranch className="w-6 h-6" />, usage: 95 },
  { name: "Docker", category: "Containerization", icon: <Database className="w-6 h-6" />, usage: 98 },
  { name: "Kubernetes", category: "Orchestration", icon: <Server className="w-6 h-6" />, usage: 92 },
  { name: "Terraform", category: "IaC", icon: <Settings className="w-6 h-6" />, usage: 88 },
  { name: "Jenkins", category: "Automation", icon: <Cpu className="w-6 h-6" />, usage: 85 },
  { name: "Prometheus", category: "Monitoring", icon: <Activity className="w-6 h-6" />, usage: 94 },
  { name: "Grafana", category: "Visualization", icon: <TrendingUp className="w-6 h-6" />, usage: 91 },
  { name: "Ansible", category: "Configuration", icon: <Code className="w-6 h-6" />, usage: 87 },
]

const successCases = [
  {
    company: "E-commerce de Alto Tráfico",
    category: "RETAIL",
    result: "Pasó de 1 despliegue semanal a 10 diarios sin afectar disponibilidad.",
    icon: <Globe className="w-8 h-8" />,
    metrics: [
      { label: "Despliegues/día", value: "10x", change: "+900%" },
      { label: "Downtime", value: "0%", change: "-100%" },
      { label: "Time to Market", value: "2h", change: "-95%" },
      { label: "Team Velocity", value: "+250%", change: "+250%" },
    ],
    timeline: "4 meses",
    technologies: ["Kubernetes", "GitHub Actions", "Prometheus"],
  },
  {
    company: "Startup Fintech",
    category: "FINANCIAL SERVICES",
    result: "Automatizó validaciones, disminuyendo errores humanos en un 70%.",
    icon: <Shield className="w-8 h-8" />,
    metrics: [
      { label: "Errores producción", value: "-70%", change: "-70%" },
      { label: "Test coverage", value: "95%", change: "+45%" },
      { label: "Security score", value: "A+", change: "+3 grades" },
      { label: "Compliance", value: "100%", change: "+40%" },
    ],
    timeline: "3 meses",
    technologies: ["Docker", "Terraform", "Jenkins"],
  },
  {
    company: "Corporativo B2B",
    category: "ENTERPRISE",
    result: "Redujo tiempos de recuperación por incidentes críticos a menos de 5 min.",
    icon: <Clock className="w-8 h-8" />,
    metrics: [
      { label: "MTTR", value: "5min", change: "-92%" },
      { label: "Incidents", value: "-60%", change: "-60%" },
      { label: "Availability", value: "99.9%", change: "+0.4%" },
      { label: "Team satisfaction", value: "9.2/10", change: "+3.1" },
    ],
    timeline: "6 meses",
    technologies: ["Ansible", "Grafana", "Kubernetes"],
  },
]

// Componente para pipeline CI/CD interactivo
const InteractivePipeline = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [pipelineStatus, setPipelineStatus] = useState<"idle" | "running" | "success" | "failed">("idle")

  const pipelineSteps = [
    { name: "Code Commit", icon: <Code className="w-5 h-5" />, duration: 1000, status: "pending" },
    { name: "Build", icon: <Settings className="w-5 h-5" />, duration: 2000, status: "pending" },
    { name: "Test", icon: <CheckCircle className="w-5 h-5" />, duration: 3000, status: "pending" },
    { name: "Security Scan", icon: <Shield className="w-5 h-5" />, duration: 1500, status: "pending" },
    { name: "Deploy Staging", icon: <Server className="w-5 h-5" />, duration: 2500, status: "pending" },
    { name: "Integration Tests", icon: <Activity className="w-5 h-5" />, duration: 2000, status: "pending" },
    { name: "Deploy Production", icon: <Globe className="w-5 h-5" />, duration: 3000, status: "pending" },
  ]

  const [steps, setSteps] = useState(pipelineSteps)

  const runPipeline = () => {
    setIsRunning(true)
    setPipelineStatus("running")
    setCurrentStep(0)
    setSteps(pipelineSteps.map((step) => ({ ...step, status: "pending" })))

    let stepIndex = 0
    const runStep = () => {
      if (stepIndex < steps.length) {
        setCurrentStep(stepIndex)
        setSteps((prev) =>
          prev.map((step, index) =>
            index === stepIndex
              ? { ...step, status: "running" }
              : index < stepIndex
                ? { ...step, status: "success" }
                : step,
          ),
        )

        setTimeout(() => {
          setSteps((prev) => prev.map((step, index) => (index === stepIndex ? { ...step, status: "success" } : step)))
          stepIndex++
          if (stepIndex < pipelineSteps.length) {
            runStep()
          } else {
            setIsRunning(false)
            setPipelineStatus("success")
          }
        }, pipelineSteps[stepIndex].duration)
      }
    }

    runStep()
  }

  const resetPipeline = () => {
    setIsRunning(false)
    setPipelineStatus("idle")
    setCurrentStep(0)
    setSteps(pipelineSteps.map((step) => ({ ...step, status: "pending" })))
  }

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-white font-semibold">Pipeline CI/CD Interactivo</h4>
        <div className="flex space-x-2">
          <button
            onClick={runPipeline}
            disabled={isRunning}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
              isRunning ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-[#d4af37] text-black hover:bg-[#f1c232]"
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Run Pipeline</span>
          </button>
          <button
            onClick={resetPipeline}
            className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500 transition-all duration-300 flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Pipeline Status */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <div
            className={`w-3 h-3 rounded-full ${
              pipelineStatus === "idle"
                ? "bg-gray-500"
                : pipelineStatus === "running"
                  ? "bg-yellow-400 animate-pulse"
                  : pipelineStatus === "success"
                    ? "bg-green-400"
                    : "bg-red-400"
            }`}
          ></div>
          <span className="text-white font-semibold">
            Status:{" "}
            {pipelineStatus === "idle"
              ? "Ready"
              : pipelineStatus === "running"
                ? "Running..."
                : pipelineStatus === "success"
                  ? "Success"
                  : "Failed"}
          </span>
        </div>
        {isRunning && (
          <div className="text-sm text-gray-400">
            Current step: {steps[currentStep]?.name} ({currentStep + 1}/{steps.length})
          </div>
        )}
      </div>

      {/* Pipeline Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-500 ${
              step.status === "pending"
                ? "border-gray-600 bg-gray-800/50"
                : step.status === "running"
                  ? "border-yellow-400 bg-yellow-400/10 animate-pulse"
                  : step.status === "success"
                    ? "border-green-400 bg-green-400/10"
                    : "border-red-400 bg-red-400/10"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                step.status === "pending"
                  ? "bg-gray-600 text-gray-400"
                  : step.status === "running"
                    ? "bg-yellow-400 text-black"
                    : step.status === "success"
                      ? "bg-green-400 text-black"
                      : "bg-red-400 text-white"
              }`}
            >
              {step.status === "running" ? (
                <div className="animate-spin">{step.icon}</div>
              ) : step.status === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : step.status === "failed" ? (
                <XCircle className="w-5 h-5" />
              ) : (
                step.icon
              )}
            </div>

            <div className="flex-1">
              <div className="text-white font-semibold">{step.name}</div>
              <div className="text-sm text-gray-400">
                {step.status === "running"
                  ? "In progress..."
                  : step.status === "success"
                    ? "Completed successfully"
                    : step.status === "failed"
                      ? "Failed"
                      : "Waiting..."}
              </div>
            </div>

            <div className="text-sm text-gray-400">{step.duration / 1000}s</div>
          </div>
        ))}
      </div>

      {/* Pipeline Metrics */}
      {pipelineStatus === "success" && (
        <div className="mt-6 grid grid-cols-3 gap-4 p-4 bg-green-400/10 rounded-lg border border-green-400/30">
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">
              {steps.reduce((acc, step) => acc + step.duration, 0) / 1000}s
            </div>
            <div className="text-xs text-gray-400">Total Time</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">7/7</div>
            <div className="text-xs text-gray-400">Steps Passed</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">100%</div>
            <div className="text-xs text-gray-400">Success Rate</div>
          </div>
        </div>
      )}
    </div>
  )
}

// Componente para métricas DevOps en tiempo real
const DevOpsMetrics = () => {
  const [metrics, setMetrics] = useState({
    deployments: 0,
    uptime: 0,
    mttr: 0,
    leadTime: 0,
  })

  useEffect(() => {
    const targets = {
      deployments: 847,
      uptime: 99.97,
      mttr: 4.2,
      leadTime: 2.1,
    }

    const duration = 2500
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setMetrics({
        deployments: Math.floor(targets.deployments * progress),
        uptime: Math.floor(targets.uptime * progress * 100) / 100,
        mttr: Math.floor(targets.mttr * progress * 10) / 10,
        leadTime: Math.floor(targets.leadTime * progress * 10) / 10,
      })

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const metricsData = [
    {
      label: "Deployments/Mes",
      value: metrics.deployments.toLocaleString(),
      icon: <Zap className="w-6 h-6" />,
      color: "text-yellow-400",
      trend: "+340%",
      status: "Excelente",
    },
    {
      label: "Uptime",
      value: `${metrics.uptime}%`,
      icon: <Activity className="w-6 h-6" />,
      color: "text-green-400",
      trend: "+0.3%",
      status: "Óptimo",
    },
    {
      label: "MTTR",
      value: `${metrics.mttr}min`,
      icon: <Clock className="w-6 h-6" />,
      color: "text-blue-400",
      trend: "-85%",
      status: "Rápido",
    },
    {
      label: "Lead Time",
      value: `${metrics.leadTime}h`,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-purple-400",
      trend: "-92%",
      status: "Ágil",
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

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm font-semibold text-green-400">{metric.trend}</div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function DevOpsPage() {
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
              <GitBranch className="w-4 h-4 text-[#d4af37] mr-2" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">AUTOMATIZACIÓN AVANZADA</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="text-white">DevOps: </span>
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f1c232] to-[#d4af37] bg-clip-text text-transparent">
                velocidad
              </span>
              <br />
              <span className="text-white">sin sacrificar calidad</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Integra desarrollo, operaciones y automatización para{" "}
              <span className="text-[#d4af37]">lanzar más rápido, con menos errores y más confianza.</span>
            </p>

          
            
          </div>
            {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
        </section>

        {/* What is DevOps Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-full blur-xl"></div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">¿Qué es </span>
                  <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                    DevOps?
                  </span>
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  DevOps es la combinación de prácticas, herramientas y cultura para automatizar y optimizar los
                  procesos entre desarrollo y operaciones.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  Su objetivo: <span className="text-[#d4af37]">entregar software confiable y de forma continua.</span>
                </p>

                <div className="space-y-4">
                  {[
                    "Cultura de colaboración",
                    "Automatización inteligente",
                    "Monitoreo continuo",
                    "Mejora iterativa",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Interactive Pipeline */}
              <div className="relative">
                <InteractivePipeline />
              </div>
            </div>
          </div>
        </section>

        {/* DevOps Metrics Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">DevOps </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  cambia las reglas del juego
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Métricas reales que demuestran el impacto transformador de DevOps
              </p>
            </div>

            <DevOpsMetrics />
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Advantages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devopsAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Metric badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-bold rounded-full">
                    {advantage.metric}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${advantage.gradient} mb-6`}>
                      <div className="text-white">{advantage.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {advantage.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">{advantage.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {advantage.features.map((feature, idx) => (
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

        {/* Tech Stack Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Tecnologías que </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  dominamos
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stack tecnológico probado en producción con métricas de adopción reales
              </p>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-[#d4af37]/20 text-[#d4af37]">{tech.icon}</div>
                    <div className="text-sm text-gray-400">{tech.category}</div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                    {tech.name}
                  </h3>

                  {/* Usage bar */}
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Adoption</span>
                      <span>{tech.usage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.usage}%` }}
                      ></div>
                    </div>
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
                <span className="text-white">Cómo DevOps </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  mejora equipos reales
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transformaciones medibles en organizaciones de diferentes sectores
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

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {useCase.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {useCase.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center bg-[#1a1a2e]/50 rounded-lg p-3">
                          <div className="text-lg font-bold text-[#d4af37] mb-1">{metric.value}</div>
                          <div className="text-xs text-gray-400 mb-1">{metric.label}</div>
                          <div className="text-xs text-green-400">{metric.change}</div>
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
                <Zap className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">TRANSFORMACIÓN DIGITAL</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Automatiza. Escala. </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  Entrega mejor.
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Implementamos pipelines DevOps que se ajustan a{" "}
                <span className="text-[#d4af37]">tu flujo, equipo y objetivos.</span>
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">10x</div>
                  <div className="text-sm text-gray-400">Más despliegues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">70%</div>
                  <div className="text-sm text-gray-400">Menos errores</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">5min</div>
                  <div className="text-sm text-gray-400">MTTR promedio</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Quiero DevOps en mi empresa
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f1c232] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                  Ver infraestructura en la nube
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
