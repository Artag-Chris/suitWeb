  import { TrendingUp, Shield, Target, Zap, Users, BarChart3 } from "lucide-react"
  export const mlUseCases = [
    {
      title: "Detección de Fraude",
      description: "Modelos que identifican transacciones sospechosas en tiempo real con 99.2% de precisión.",
      icon: Shield,
      gradient: "from-red-500 to-red-600",
      metrics: "+99.2% precisión",
    },
    {
      title: "Predicción de Demanda",
      description: "Algoritmos que anticipan necesidades de stock y personal basados en patrones históricos.",
      icon: TrendingUp,
      gradient: "from-blue-500 to-blue-600",
      metrics: "+85% precisión",
    },
    {
      title: "Clasificación Automática",
      description: "Procesamiento inteligente de tickets, correos y documentos sin intervención humana.",
      icon: Target,
      gradient: "from-green-500 to-green-600",
      metrics: "+92% automatización",
    },
    {
      title: "Recomendaciones Inteligentes",
      description: "Sistemas personalizados que aumentan conversión y engagement del usuario.",
      icon: Users,
      gradient: "from-purple-500 to-purple-600",
      metrics: "+45% conversión",
    },
    {
      title: "Análisis de Sentimientos",
      description: "Evaluación automática de opiniones para medir percepción y satisfacción.",
      icon: BarChart3,
      gradient: "from-yellow-500 to-yellow-600",
      metrics: "+88% precisión",
    },
    {
      title: "Optimización Dinámica",
      description: "Algoritmos que ajustan precios, rutas y procesos según condiciones en tiempo real.",
      icon: Zap,
      gradient: "from-indigo-500 to-indigo-600",
      metrics: "+65% eficiencia",
    },
  ]

  export const techStackMachineLearning = [
    { name: "Python", adoption: 95, rating: "Excelente" },
    { name: "scikit-learn", adoption: 88, rating: "Excelente" },
    { name: "TensorFlow", adoption: 82, rating: "Muy Bueno" },
    { name: "PyTorch", adoption: 79, rating: "Muy Bueno" },
    { name: "Pandas", adoption: 92, rating: "Excelente" },
    { name: "Jupyter", adoption: 85, rating: "Muy Bueno" },
    { name: "Google Vertex AI", adoption: 72, rating: "Bueno" },
    { name: "AWS Sagemaker", adoption: 68, rating: "Bueno" },
  ]

 export const successCasesMachineLearning = [
    {
      company: "Banca Digital",
      sector: "FinTech • 500K+ transacciones/día",
      challenge: "Detección de fraude manual",
      solution: "Modelo de ML para detección automática",
      results: {
        fraudReduction: "-80%",
        accuracy: "99.2%",
        satisfaction: "4.8/5",
        processingTime: "-95%",
      },
      technologies: ["Python", "TensorFlow", "AWS", "PostgreSQL"],
      duration: "5 meses",
      challenges: ["Datos desbalanceados", "Falsos positivos", "Tiempo real"],
    },
    {
      company: "Comercio Electrónico",
      sector: "E-commerce • 2M+ productos",
      challenge: "Recomendaciones genéricas",
      solution: "Motor de recomendación personalizado",
      results: {
        ticketIncrease: "+45%",
        engagement: "+120%",
        satisfaction: "4.6/5",
        conversionRate: "+85%",
      },
      technologies: ["PyTorch", "Redis", "MongoDB", "Docker"],
      duration: "4 meses",
      challenges: ["Cold start", "Escalabilidad", "Personalización"],
    },
    {
      company: "Logística Inteligente",
      sector: "Logistics • 50K+ rutas/día",
      challenge: "Optimización manual de rutas",
      solution: "Algoritmos predictivos de optimización",
      results: {
        costReduction: "-35%",
        efficiency: "+80%",
        satisfaction: "4.4/5",
        fuelSavings: "-40%",
      },
      technologies: ["scikit-learn", "Google Maps API", "Python", "BigQuery"],
      duration: "6 meses",
      challenges: ["Tráfico variable", "Múltiples restricciones", "Tiempo real"],
    },
  ]