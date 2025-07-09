"use client"

import ParticleBackground from "@/components/microComponents/ParticleBackground"
import {
  Database,
  Shield,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Clock,
  Settings,
  Code,
  ExternalLink,
  Target,
  Layers,
  RefreshCw,
  Activity,
  Lock,
  Globe,
} from "lucide-react"
import { useState } from "react"

const migrationBenefits = [
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

const migrationPhases = [
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

const successCases = [
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
const MigrationSimulator = () => {
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
const RiskAnalysis = () => {
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
                  ? "text-yellow-400"
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
                      ? "bg-gradient-to-r from-yellow-500 to-yellow-400"
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

export default function MigracionesPage() {
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
              <Database className="w-4 h-4 text-[#d4af37] mr-2" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">MODERNIZACIÓN SEGURA</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="text-white">Migramos lo viejo, </span>
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f1c232] to-[#d4af37] bg-clip-text text-transparent">
                sin romper nada
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Moderniza tus sistemas legacy sin perder tu operación.{" "}
              <span className="text-[#d4af37]">
                Migramos con estrategia, sin sobresaltos y sin perder información crítica.
              </span>
            </p>

            
          </div>
            {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
        </section>

        {/* What is Legacy Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-full blur-xl"></div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">¿Qué es un </span>
                  <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                    sistema legacy?
                  </span>
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Un sistema legacy es una plataforma antigua (ERP, backend, software propio) que sigue siendo crítica
                  pero ya no escala, no se integra fácilmente, y representa un riesgo de seguridad o costos ocultos.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  <span className="text-[#d4af37]">No se trata de borrarlo, sino de migrarlo con inteligencia.</span>
                </p>

                <div className="space-y-4">
                  {[
                    "Tecnología obsoleta",
                    "Integración limitada",
                    "Costos de mantenimiento altos",
                    "Riesgos de seguridad",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-400 mr-3" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Risk Analysis */}
              <div className="relative">
                <RiskAnalysis />
              </div>
            </div>
          </div>
        </section>

        {/* Migration Simulator Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Simulator */}
              <div className="relative">
                <MigrationSimulator />
              </div>

              {/* Right Content */}
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">¿Cómo migramos </span>
                  <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                    sin caos?
                  </span>
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Nuestra metodología probada garantiza migración sin interrupciones, con validación continua y rollback
                  automático en caso de problemas.
                </p>

                <div className="space-y-6">
                  {migrationPhases.map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center">
                        <div className="text-[#d4af37]">{phase.icon}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-white">
                            Fase {phase.phase}: {phase.title}
                          </h3>
                          <span className="text-sm text-gray-400">{phase.duration}</span>
                        </div>
                        <p className="text-gray-300 mb-2">{phase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <span key={idx} className="px-2 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs rounded-full">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">¿Por qué migrar </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  sistemas legacy?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cada beneficio medido y comprobado en migraciones reales
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Risk reduction badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">
                    -{benefit.riskReduction} riesgo
                  </div>

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

        {/* Success Cases Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Donde transformamos </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  sin apagar
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Migraciones complejas ejecutadas sin interrumpir operaciones críticas
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
                      <span className="text-sm text-gray-400">Duración: {useCase.timeline}</span>
                    </div>

                    {/* Migration Details */}
                    <div className="space-y-3 mb-6">
                      <div className="bg-[#0f0f13]/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-1">Sistema Legacy:</div>
                        <div className="text-sm text-red-400">{useCase.legacySystem}</div>
                      </div>
                      <div className="bg-[#0f0f13]/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-1">Sistema Nuevo:</div>
                        <div className="text-sm text-green-400">{useCase.newSystem}</div>
                      </div>
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
                <Shield className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">MIGRACIÓN SEGURA</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Moderniza </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  sin parar tu negocio
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Migramos sistemas críticos con{" "}
                <span className="text-[#d4af37]">continuidad total y sin sorpresas.</span>
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">0%</div>
                  <div className="text-sm text-gray-400">Pérdida de datos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">100%</div>
                  <div className="text-sm text-gray-400">Continuidad operativa</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">85%</div>
                  <div className="text-sm text-gray-400">Reducción de riesgos</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Agenda diagnóstico gratuito
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f1c232] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                  Ver soluciones DevOps
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
