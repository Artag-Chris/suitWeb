import { useEffect, useState } from "react"

import {
  GitBranch,
  Zap,
  Shield,
  Target,
  Activity,
  Clock,
  TrendingUp,
  CheckCircle,
  XCircle,
  Settings,
  Code,
  Server,
  Database,
  Play,
  RotateCcw,
  Cpu,
  Globe,
} from "lucide-react"

export const devopsAdvantages = [
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

export const techStack = [
  { name: "GitHub Actions", category: "CI/CD", icon: <GitBranch className="w-6 h-6" />, usage: 95 },
  { name: "Docker", category: "Containerization", icon: <Database className="w-6 h-6" />, usage: 98 },
  { name: "Kubernetes", category: "Orchestration", icon: <Server className="w-6 h-6" />, usage: 92 },
  { name: "Terraform", category: "IaC", icon: <Settings className="w-6 h-6" />, usage: 88 },
  { name: "Jenkins", category: "Automation", icon: <Cpu className="w-6 h-6" />, usage: 85 },
  { name: "Prometheus", category: "Monitoring", icon: <Activity className="w-6 h-6" />, usage: 94 },
  { name: "Grafana", category: "Visualization", icon: <TrendingUp className="w-6 h-6" />, usage: 91 },
  { name: "Ansible", category: "Configuration", icon: <Code className="w-6 h-6" />, usage: 87 },
]

export const successCasesDevops = [
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
export const InteractivePipeline = () => {
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
export const DevOpsMetrics = () => {
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
