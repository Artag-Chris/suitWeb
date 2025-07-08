"use client"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, Suspense } from "react"
import type { Connection, Particle } from "@/interfaces"
import InteractiveVideoManager from "../shared/video/InteractiveVideoManager"

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar canvas al tamaño del viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Configuración de partículas
    const particles: Particle[] = []
    const connections: Connection[] = []
    const particleCount = window.innerWidth < 768 ? 50 : 100

    const colors = ["#d4af37", "#c0c0c0", "#0d47a1", "#4a148c"]

    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() > 0.8,
      })
    }

    // Crear conexiones entre partículas cercanas
    const createConnections = () => {
      connections.length = 0
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            connections.push({
              p1: particles[i],
              p2: particles[j],
              distance: distance,
            })
          }
        }
      }
    }

    createConnections()

    // Animación
    let animationFrameId: number

    const animate = () => {
      if (!ctx) return

      // Fondo con gradiente oscuro
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#0a0a0f")
      gradient.addColorStop(1, "#1a1a2e")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Dibujar conexiones primero
      ctx.lineWidth = 0.3
      connections.forEach((conn) => {
        const alpha = 1 - conn.distance / 150
        ctx.strokeStyle = `rgba(212, 175, 55, ${alpha * 0.7})`
        ctx.beginPath()
        ctx.moveTo(conn.p1.x, conn.p1.y)
        ctx.lineTo(conn.p2.x, conn.p2.y)
        ctx.stroke()
      })

      // Dibujar partículas
      particles.forEach((p) => {
        // Actualizar posición
        p.x += p.speedX
        p.y += p.speedY

        // Rebotar en los bordes
        if (p.x <= 0 || p.x >= canvas.width) p.speedX *= -1
        if (p.y <= 0 || p.y >= canvas.height) p.speedY *= -1

        // Dibujar partícula
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)

        if (p.glow) {
          // Efecto de brillo para partículas especiales
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
          gradient.addColorStop(0, `${p.color}ff`)
          gradient.addColorStop(1, `${p.color}00`)
          ctx.fillStyle = gradient
        } else {
          ctx.fillStyle = p.color
        }

        ctx.fill()
      })

      // Recrear conexiones periódicamente
      if (Math.random() > 0.95) {
        createConnections()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
      >
        {/* Punto de referencia PARA EL NAVBAR */}
        <div className="absolute top-0 h-[50vh] w-full pointer-events-none z-30" />

        {/* Canvas para el fondo animado estilo James Bond */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" aria-hidden="true" />

        {/* Efecto de luz pulsante */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-pulse-slow w-64 h-64 rounded-full bg-gradient-to-r from-[#d4af3780] to-[#0d47a180] blur-[100px] opacity-30"></div>
          </div>
        </div>

        {/* Patrón sutil de fibra de carbono */}
        <div className="absolute inset-0 z-2 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMCAwaDQwdjQwSDB6TTQwIDQwaDQwdjQwSDQweiIgZmlsbC1vcGFjaXR5PSIuMDQiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>

        {/* Gradientes sutiles para agregar profundidad */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#d4af3705] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0d47a105] to-transparent"></div>
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#d4af3708] to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0d47a108] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 px-8">
          <div className="space-y-16">
            <div className="space-y-12">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white">
                <span className="block font-light">Transformamos</span>
                <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] via-[#c0c0c0] to-[#d4af37]">
                  visiones en realidades
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
                Convierte tus ideas en herramientas que transforman. Creamos soluciones digitales personalizadas que te ahorran tiempo, eliminan cuellos de botella y aceleran tu crecimiento. Si puedes soñarlo, podemos desarrollarlo
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Botón principal estilo referencia */}
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-slate-900 rounded-xl font-medium text-lg transition-all duration-300 hover:from-[#d4af37] hover:to-[#d4af37] hover:scale-105 shadow-lg hover:shadow-xl border border-slate-600/50 hover:text-black">
                <span className="relative z-10 flex items-center justify-center">
                  Iniciar Proyecto
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Botón secundario estilo referencia */}
              <button className="group relative px-8 py-4 bg-gradient-to-r from-white to-white text-slate-900 rounded-xl font-medium text-lg transition-all duration-300 hover:from-[#d4af37] hover:to-[#d4af37] hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="relative z-10 flex items-center justify-center text-black">
                  Ver Servicios
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className="text-white">Cargando video...</span>
            </div>
          }
        >
          <InteractiveVideoManager position="middle-left" />
        </Suspense>
      </section>
    </>
  )
}

export default Hero
