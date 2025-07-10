import { Zap, TrendingUp, Users, Lock, Eye, Cpu, } from "lucide-react"
export const benefits = [
  {
    title: "Decisiones inteligentes en el momento justo",
    description: "Accede a datos actualizados al instante y toma decisiones ágiles basadas en información confiable.",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Optimización de procesos",
    description:
      "Detecta cuellos de botella y mejora la eficiencia operativa en tiempo real con nuestra API administrativa.",
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Ahorro en costos operativos",
    description:
      "Evita pérdidas detectando fallos y errores al instante, reduciendo hasta un 20% en gastos innecesarios.",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Experiencia del cliente mejorada",
    description: "Ofrece respuestas rápidas y personalizadas gracias al monitoreo continuo del flujo de trabajo.",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-500",
  },
]

export const additionalFeatures = [
  {
    title: "Integración Instantánea",
    description:
      "Nuestro sistema se adapta a tu infraestructura existente sin fricciones. Listo para desplegar en horas, no días.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Seguridad Nivel Corporativo",
    description:
      "Protegemos cada paquete de datos con cifrado avanzado. Tu información es tuya—nosotros solo te ayudamos a verla.",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: "Visibilidad Total",
    description: "Desde cualquier dispositivo, accede a paneles dinámicos, métricas clave y alertas en tiempo real.",
    icon: <Eye className="w-6 h-6" />,
  },
]