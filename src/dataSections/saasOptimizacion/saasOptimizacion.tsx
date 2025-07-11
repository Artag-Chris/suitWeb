import { BarChart3, Server, Database, Cloud } from "lucide-react"
// Datos para los mapas
export const optimizationStepsData = [
  { name: "Análisis de Performance", risk: "medium", duration: "2-3 días" },
  { name: "Optimización de Assets", risk: "low", duration: "1-2 días" },
  { name: "Configuración de Cache", risk: "low", duration: "1 día" },
  { name: "Optimización de DB", risk: "high", duration: "3-4 días" },
  { name: "Implementación CDN", risk: "medium", duration: "1-2 días" },
];

export const beneficiosData = [
  {
    title: "Velocidad de carga",
    desc: "Mejoramos la arquitectura y los assets para reducir tiempos críticos.",
  },
  {
    title: "Menos costos en cloud",
    desc: "Auditamos y optimizamos uso de recursos, escalado, bases y cachés.",
  },
  {
    title: "Menor churn",
    desc: "Corregimos puntos de fricción en UX y flujos que generan fuga de usuarios.",
  },
  {
    title: "Escalabilidad real",
    desc: "Migramos a arquitecturas modulares listas para crecer sin reescribir.",
  },
  {
    title: "Control de métricas",
    desc: "Implementamos eventos clave, analíticas, funnels y métricas de retención.",
  },
  {
    title: "Mejor experiencia móvil",
    desc: "UI y performance optimizada para dispositivos y conexiones reales.",
  },
];

export const tecnologiasData = [
  "Next.js", "React", "Node.js", "PostgreSQL", "MongoDB", "Vercel", "Firebase", "Stripe"
];

export const casosData = [
  {
    empresa: "Plataforma educativa",
    resultado: "Redujimos los costos de cloud un 40% con arquitectura serverless.",
  },
  {
    empresa: "SaaS financiero",
    resultado: "Mejoramos la velocidad un 65% y duplicamos la retención mensual.",
  },
  {
    empresa: "Startup B2B",
    resultado: "Reestructuramos el backend para soportar 10x más usuarios sin downtime.",
  },
];

export const factoresCostoData = [
  { icon: <Cloud className="w-4 h-4 text-yellow-400" />, label: "Infraestructura cloud" },
  { icon: <Database className="w-4 h-4 text-yellow-400" />, label: "Base de datos y storage" },
  { icon: <Server className="w-4 h-4 text-yellow-400" />, label: "CDN y distribución" },
  { icon: <BarChart3 className="w-4 h-4 text-yellow-400" />, label: "Monitoreo y analytics" },
];