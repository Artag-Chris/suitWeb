"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  glow: boolean
}

interface Connection {
  p1: Particle
  p2: Particle
  distance: number
}

export default function ParticleBackground() {
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "linear-gradient(135deg, #0f0f13 0%, #1a1a2e 50%, #16213e 100%)" }}
    />
  )
}
