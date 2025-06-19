"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const ParticleSystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = "-10px"
      particle.style.top = Math.random() * window.innerHeight + "px"
      particle.style.animationDelay = Math.random() * 20 + "s"
      particle.style.animationDuration = 15 + Math.random() * 10 + "s"

      container.appendChild(particle)

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 25000)
    }

    const interval = setInterval(createParticle, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" style={{ overflow: "hidden" }} />
}

export default ParticleSystem
