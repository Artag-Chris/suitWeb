import {
  Database,
  Shield,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Settings,
  Code,
  Target,
  Layers,
  RefreshCw,
  Activity,
  Lock,
  Globe,
} from "lucide-react"
import { useState } from "react"

export const migrationBenefits = [
  {
    title: "Menos riesgo",
    description: "Tecnologías obsoletas aumentan los errores, fallas y pérdida de datos.",
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-red-500 to-pink-500",
    features: ["Reducción de vulnerabilidades", "Backup automático", "Rollback seguro"],
    riskReduction: "85%",
  },
  {
    title: "Más velocidad",
    description: "Procesos lentos o bloqueos técnicos frenan la operación y frustran al equipo.",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-500",
    features: ["Performance optimizado", "Carga reducida", "Respuesta instantánea"],
    riskReduction: "70%",
  },
  {
    title: "Escalabilidad real",
    description: "Modernizar permite integrar con APIs, nubes, apps móviles y más.",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-500",
    features: ["Arquitectura moderna", "Integración API", "Cloud-ready"],
    riskReduction: "90%",
  },
  {
    title: "Ahorro sostenido",
    description: "Reducimos costos de mantenimiento, licencias antiguas y hardware dedicado.",
    icon: <Database className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Costos reducidos", "Licencias optimizadas", "Hardware eficiente"],
    riskReduction: "60%",
  },
  {
    title: "Cumplimiento normativo",
    description: "Sistemas actuales se adaptan a normas modernas de seguridad y protección de datos.",
    icon: <Lock className="w-8 h-8" />,
    gradient: "from-purple-500 to-indigo-500",
    features: ["GDPR compliance", "Security standards", "Audit trails"],
    riskReduction: "95%",
  },
  {
    title: "Visibilidad y control",
    description: "Accede a dashboards, reportes y métricas que antes eran imposibles.",
    icon: <Activity className="w-8 h-8" />,
    gradient: "from-indigo-500 to-purple-500",
    features: ["Real-time monitoring", "Advanced analytics", "Custom dashboards"],
    riskReduction: "80%",
  },
]

export const migrationPhases = [
  {
    phase: 1,
    title: "Auditoría técnica",
    description: "Análisis profundo del sistema actual, dependencias y puntos críticos.",
    duration: "2-4 semanas",
    deliverables: ["Inventario completo", "Mapa de dependencias", "Análisis de riesgos"],
    icon: <Settings className="w-6 h-6" />,
  },
  {
    phase: 2,
    title: "Mapeo de dependencias",
    description: "Identificación de integraciones, datos críticos y flujos de trabajo.",
    duration: "1-2 semanas",
    deliverables: ["Diagrama de arquitectura", "Plan de datos", "Matriz de impacto"],
    icon: <Layers className="w-6 h-6" />,
  },
  {
    phase: 3,
    title: "Diseño modular progresivo",
    description: "Arquitectura nueva diseñada para migración por módulos sin interrupciones.",
    duration: "3-6 semanas",
    deliverables: ["Arquitectura objetivo", "Plan de migración", "Cronograma detallado"],
    icon: <Code className="w-6 h-6" />,
  },
  {
    phase: 4,
    title: "Pruebas espejo antes de cortar",
    description: "Ambiente paralelo para validar funcionalidad antes del switch final.",
    duration: "2-4 semanas",
    deliverables: ["Ambiente de pruebas", "Validación completa", "Plan de rollback"],
    icon: <CheckCircle className="w-6 h-6" />,
  },
]


export const successCasesMigracion = [
  {
    company: "Compañía Logística",
    category: "SUPPLY CHAIN",
    result: "Migración completa de ERP COBOL a microservicios sin detener operaciones ni despachos.",
    icon: <Globe className="w-8 h-8" />,
    metrics: [
      { label: "Downtime", value: "0h", change: "0%" },
      { label: "Performance", value: "+340%", change: "+340%" },
      { label: "Costos operativos", value: "-45%", change: "-45%" },
      { label: "Tiempo integración", value: "2h", change: "-95%" },
    ],
    timeline: "8 meses",
    technologies: ["Microservices", "Docker", "Kubernetes", "PostgreSQL"],
    legacySystem: "COBOL ERP (25 años)",
    newSystem: "Microservices Architecture",
    challenges: ["Zero downtime requirement", "Data integrity", "User training"],
  },
  {
    company: "Sector Salud",
    category: "HEALTHCARE",
    result: "Reescritura segura de sistema de turnos en PHP heredado hacia un API moderna con React.",
    icon: <Shield className="w-8 h-8" />,
    metrics: [
      { label: "Tiempo respuesta", value: "-80%", change: "-80%" },
      { label: "Errores sistema", value: "-92%", change: "-92%" },
      { label: "Satisfacción usuario", value: "9.4/10", change: "+4.2" },
      { label: "Capacidad", value: "+500%", change: "+500%" },
    ],
    timeline: "6 meses",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    legacySystem: "PHP Monolith (15 años)",
    newSystem: "React + API REST",
    challenges: ["HIPAA compliance", "Real-time updates", "Mobile compatibility"],
  },
  {
    company: "Empresa Gubernamental",
    category: "GOVERNMENT",
    result: "Sistema de reportes migrado desde Visual Basic a app web cloud-ready sin perder histórico.",
    icon: <Database className="w-8 h-8" />,
    metrics: [
      { label: "Datos migrados", value: "100%", change: "0% loss" },
      { label: "Tiempo reportes", value: "-75%", change: "-75%" },
      { label: "Acceso concurrente", value: "+1000%", change: "+1000%" },
      { label: "Costos infraestructura", value: "-60%", change: "-60%" },
    ],
    timeline: "12 meses",
    technologies: ["Vue.js", "Python", "AWS", "MongoDB"],
    legacySystem: "Visual Basic 6.0 (20 años)",
    newSystem: "Cloud-native Web App",
    challenges: ["Data preservation", "Security compliance", "User adoption"],
  },
]

// Componente para simulador de migración
export const MigrationSimulator = () => {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [migrationStatus, setMigrationStatus] = useState<"idle" | "running" | "success" | "paused">("idle")
  const [progress, setProgress] = useState(0)

  const phases = [
    { name: "Análisis Legacy", risk: "Alto", duration: "2 sem", color: "red" },
    { name: "Diseño Arquitectura", risk: "Medio", duration: "3 sem", color: "yellow" },
    { name: "Migración Datos", risk: "Crítico", duration: "4 sem", color: "red" },
    { name: "Testing Paralelo", risk: "Bajo", duration: "2 sem", color: "green" },
    { name: "Switch Final", risk: "Medio", duration: "1 sem", color: "yellow" },
  ]

  const runMigration = () => {
    setIsRunning(true)
    setMigrationStatus("running")
    setCurrentPhase(0)
    setProgress(0)

    let phaseIndex = 0
    const totalPhases = phases.length
    const phaseProgress = 100 / totalPhases

    const runPhase = () => {
      if (phaseIndex < totalPhases) {
        setCurrentPhase(phaseIndex)

        // Simulate phase progress
        let phaseStep = 0
        const phaseInterval = setInterval(() => {
          phaseStep += 2
          const currentProgress = phaseIndex * phaseProgress + (phaseStep * phaseProgress) / 100
          setProgress(Math.min(currentProgress, 100))

          if (phaseStep >= 100) {
            clearInterval(phaseInterval)
            phaseIndex++
            if (phaseIndex < totalPhases) {
              setTimeout(runPhase, 500)
            } else {
              setIsRunning(false)
              setMigrationStatus("success")
              setProgress(100)
            }
          }
        }, 100)
      }
    }

    runPhase()
  }

  const resetMigration = () => {
    setIsRunning(false)
    setMigrationStatus("idle")
    setCurrentPhase(0)
    setProgress(0)
  }

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-white font-semibold">Simulador de Migración</h4>
        <div className="flex space-x-2">
          <button
            onClick={runMigration}
            disabled={isRunning}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
              isRunning ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-[#d4af37] text-black hover:bg-[#f1c232]"
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            <span>Iniciar Migración</span>
          </button>
          <button
            onClick={resetMigration}
            className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500 transition-all duration-300 flex items-center space-x-2"
          >
            <Target className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Migration Status */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div
              className={`w-3 h-3 rounded-full ${
                migrationStatus === "idle"
                  ? "bg-gray-500"
                  : migrationStatus === "running"
                    ? "bg-yellow-400 animate-pulse"
                    : "bg-green-400"
              }`}
            ></div>
            <span className="text-white font-semibold">
              Status:{" "}
              {migrationStatus === "idle" ? "Listo" : migrationStatus === "running" ? "Migrando..." : "Completado"}
            </span>
          </div>
          <span className="text-[#d4af37] font-bold">{Math.round(progress)}%</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
          <div
            className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] h-3 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {isRunning && (
          <div className="text-sm text-gray-400">
            Fase actual: {phases[currentPhase]?.name} ({currentPhase + 1}/{phases.length})
          </div>
        )}
      </div>

      {/* Migration Phases */}
      <div className="space-y-4">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-500 ${
              index < currentPhase
                ? "border-green-400 bg-green-400/10"
                : index === currentPhase && isRunning
                  ? "border-yellow-400 bg-yellow-400/10 animate-pulse"
                  : "border-gray-600 bg-gray-800/50"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                index < currentPhase
                  ? "bg-green-400 text-black"
                  : index === currentPhase && isRunning
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-600 text-gray-400"
              }`}
            >
              {index < currentPhase ? (
                <CheckCircle className="w-5 h-5" />
              ) : index === currentPhase && isRunning ? (
                <div className="animate-spin">
                  <RefreshCw className="w-5 h-5" />
                </div>
              ) : (
                <Clock className="w-5 h-5" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">{phase.name}</span>
                <span className="text-sm text-gray-400">{phase.duration}</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs text-gray-400">Riesgo:</span>
                <span
                  className={`text-xs font-semibold ${
                    phase.color === "red"
                      ? "text-red-400"
                      : phase.color === "yellow"
                        ? "text-yellow-400"
                        : "text-green-400"
                  }`}
                >
                  {phase.risk}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Migration Summary */}
      {migrationStatus === "success" && (
        <div className="mt-6 grid grid-cols-3 gap-4 p-4 bg-green-400/10 rounded-lg border border-green-400/30">
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">12 sem</div>
            <div className="text-xs text-gray-400">Tiempo Total</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">0%</div>
            <div className="text-xs text-gray-400">Pérdida Datos</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">100%</div>
            <div className="text-xs text-gray-400">Éxito</div>
          </div>
        </div>
      )}
    </div>
  )
}

// Componente para análisis de riesgos
export const RiskAnalysis = () => {
  const [selectedSystem, setSelectedSystem] = useState("erp")

  const systemTypes = {
    erp: {
      name: "ERP Legacy",
      age: "15+ años",
      riskLevel: "Alto",
      complexity: "Crítica",
      risks: [
        { type: "Seguridad", level: 85, description: "Vulnerabilidades conocidas" },
        { type: "Performance", level: 70, description: "Lentitud creciente" },
        { type: "Integración", level: 90, description: "APIs obsoletas" },
        { type: "Mantenimiento", level: 95, description: "Costos elevados" },
      ],
    },
    crm: {
      name: "CRM Monolítico",
      age: "8+ años",
      riskLevel: "Medio",
      complexity: "Moderada",
      risks: [
        { type: "Seguridad", level: 60, description: "Parches pendientes" },
        { type: "Performance", level: 55, description: "Carga lenta" },
        { type: "Integración", level: 75, description: "Conectividad limitada" },
        { type: "Mantenimiento", level: 65, description: "Recursos especializados" },
      ],
    },
    web: {
      name: "Aplicación Web",
      age: "5+ años",
      riskLevel: "Bajo",
      complexity: "Baja",
      risks: [
        { type: "Seguridad", level: 40, description: "Framework desactualizado" },
        { type: "Performance", level: 35, description: "Optimización necesaria" },
        { type: "Integración", level: 45, description: "APIs modernas disponibles" },
        { type: "Mantenimiento", level: 30, description: "Documentación disponible" },
      ],
    },
  }

  const currentSystem = systemTypes[selectedSystem as keyof typeof systemTypes]

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-white font-semibold">Análisis de Riesgos</h4>
        <select
          value={selectedSystem}
          onChange={(e) => setSelectedSystem(e.target.value)}
          className="bg-[#0f0f13] border border-[#d4af37]/30 rounded-lg px-3 py-2 text-white text-sm"
        >
          <option value="erp">ERP Legacy</option>
          <option value="crm">CRM Monolítico</option>
          <option value="web">Aplicación Web</option>
        </select>
      </div>

      {/* System Info */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-lg font-bold text-[#d4af37]">{currentSystem.age}</div>
          <div className="text-xs text-gray-400">Antigüedad</div>
        </div>
        <div className="text-center">
          <div
            className={`text-lg font-bold ${
              currentSystem.riskLevel === "Alto"
                ? "text-red-400"
                : currentSystem.riskLevel === "Medio"
                  ? "text-[#d4af37]"
                  : "text-green-400"
            }`}
          >
            {currentSystem.riskLevel}
          </div>
          <div className="text-xs text-gray-400">Nivel de Riesgo</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-purple-400">{currentSystem.complexity}</div>
          <div className="text-xs text-gray-400">Complejidad</div>
        </div>
      </div>

      {/* Risk Breakdown */}
      <div className="space-y-4">
        {currentSystem.risks.map((risk, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white font-semibold">{risk.type}</span>
              <span className="text-sm text-gray-400">{risk.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                  risk.level >= 80
                    ? "bg-gradient-to-r from-red-500 to-red-400"
                    : risk.level >= 60
                      ? "bg-gradient-to-r from-[#d4af37] to-yellow-400"
                      : "bg-gradient-to-r from-green-500 to-green-400"
                }`}
                style={{ width: `${risk.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400">{risk.description}</p>
          </div>
        ))}
      </div>

      {/* Recommendation */}
      <div className="mt-6 p-4 bg-[#d4af37]/10 rounded-lg border border-[#d4af37]/30">
        <div className="flex items-center space-x-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-[#d4af37]" />
          <span className="text-[#d4af37] font-semibold">Recomendación</span>
        </div>
        <p className="text-gray-300 text-sm">
          {currentSystem.riskLevel === "Alto"
            ? "Migración urgente recomendada. Los riesgos superan los beneficios de mantener el sistema actual."
            : currentSystem.riskLevel === "Medio"
              ? "Planificar migración en los próximos 6-12 meses para evitar escalamiento de riesgos."
              : "Migración no urgente, pero recomendada para optimización y modernización."}
        </p>
      </div>
    </div>
  )
}