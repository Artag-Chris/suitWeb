'use client'
import { codeSnippets } from "@/references"
import { ConsoleComponent } from "../shared/Console"
import { Code, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import ParticleSystem from "../effects/tech-stack"

const Hero: React.FC = () => {
  const [currentCode, setCurrentCode] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Columna izquierda: Texto y contenido */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span 
                className="block text-[#00E0FF] font-bold" 
                style={{ textShadow: "0 0 20px #00E0FF" }}
              >
                Finova
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
              Transforming ideas into intelligent, scalable digital ecosystems
            </p>
            
            <div className="mb-10 p-4 glass-card rounded-lg border border-primary-accent/30">
              <div className="flex items-center">
                <div className="bg-[#00E0FF]/20 p-2 rounded-lg mr-4">
                  <Code className="w-6 h-6 text-[#00E0FF]" />
                </div>
                <div>
                  <div className="font-mono text-primary-cyber">
                    optimizePerformance((
                  </div>
                  <div className="font-mono text-primary-cyber ml-4">
                    latency: "99.9%",
                  </div>
                  <div className="font-mono text-primary-cyber ml-4">
                    uptime: "100%"
                  </div>
                  <div className="font-mono text-primary-cyber">
                    ))
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="neon-btn group flex-1">
                <span className="flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Launch Project
                </span>
              </button>
              <button className="glass-card px-6 py-4 hover:bg-primary-surface/80 flex-1">
                <span className="flex items-center text-text-primary justify-center">
                  <Code className="w-5 h-5 mr-2" />
                  View Tech Stack
                </span>
              </button>
            </div>
          </div>
          
          {/* Columna derecha: Componente de Consola */}
          <div className="h-full">
            <ConsoleComponent currentCode={codeSnippets[currentCode]} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero