"use client"

import type React from "react"

import { useState, useCallback } from "react"
import InteractiveVideo from "./InteractiveVideo"
import { InteractiveVideoManagerProps, VideoOption } from "@/app/interfaces"


const InteractiveVideoManager = ({ position = "top-left", customPosition = {} }: InteractiveVideoManagerProps) => {
  const [zIndex, setZIndex] = useState(100)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isTranslating, setIsTranslating] = useState(false)

  const requestElevation = useCallback(() => {
    setZIndex((prev) => prev + 1)
  }, [])

  const toggleExpand = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)

    if (!isExpanded) {
      // Primero trasladar hacia arriba
      setIsTranslating(true)

      // Después de la traslación, expandir
      setTimeout(() => {
        setIsExpanded(true)
        setIsTranslating(false)  
      }, 400)

      // Reset animating state
      setTimeout(() => setIsAnimating(false), 800)
    } else {
      // Colapsar directamente
      setIsExpanded(false)
      setTimeout(() => setIsAnimating(false), 400)
    }
  }, [isExpanded, isAnimating])

  // Datos de ejemplo con más videos
  const mainVideo = "https://www.youtube.com/watch?v=r3DdVXZ06Ho"
  const videoOptions: VideoOption[] = [
    {
      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=60&width=80",
      title: "Introducción al Proyecto",
    },
    {
      src: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      thumbnail: "/placeholder.svg?height=60&width=80",
      title: "Tutorial Avanzado",
    },
    {
      src: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      thumbnail: "/placeholder.svg?height=60&width=80",
      title: "Casos de Uso",
    },
    {
      src: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
      thumbnail: "/placeholder.svg?height=60&width=80",
      title: "Mejores Prácticas",
    },
  ]

  // Calcular estilos basados en posición
  const getPositionStyles = () => {
    const baseStyles = {
      position: "fixed",
      zIndex: zIndex,
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      overflow: "hidden",
    } as React.CSSProperties

    // Si está en proceso de traslación, mover hacia arriba
    if (isTranslating) {
      return {
        ...baseStyles,
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }
    }

    // Si está expandido, mantener en la parte superior
    if (isExpanded) {
      return {
        ...baseStyles,
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
      }
    }

    // Posiciones normales cuando está colapsado
    switch (position) {
      case "top-right":
        return { ...baseStyles, top: "20px", right: "20px" }
      case "top-left":
        return { ...baseStyles, top: "20px", left: "20px" }
      case "bottom-right":
        return { ...baseStyles, bottom: "20px", right: "20px" }
      case "bottom-left":
        return { ...baseStyles, bottom: "20px", left: "20px" }
      case "middle-right":
        return {
          ...baseStyles,
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
        }
      case "middle-left":
        return {
          ...baseStyles,
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
        }
      case "top-middle":
        return {
          ...baseStyles,
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }
      case "bottom-middle":
        return {
          ...baseStyles,
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }
      case "custom":
        return {
          ...baseStyles,
          top: customPosition.top,
          right: customPosition.right,
          bottom: customPosition.bottom,
          left: customPosition.left,
        }
      default:
        return { ...baseStyles, top: "20px", right: "20px" }
    }
  }

  // Estilos para el botón dorado líquido con glassmorphism
  const containerStyles = {
    ...getPositionStyles(),
    width: isExpanded ? "400px" : "70px",
    height: isExpanded ? "300px" : "70px",
    borderRadius: isExpanded ? "16px" : "20px",
    background: isExpanded
      ? "rgba(0, 0, 0, 0.85)"
      : `
        linear-gradient(135deg, 
          rgba(255, 215, 0, 0.9) 0%, 
          rgba(255, 193, 7, 0.8) 25%,
          rgba(255, 235, 59, 0.9) 50%,
          rgba(255, 193, 7, 0.8) 75%,
          rgba(255, 215, 0, 0.9) 100%
        )
      `,
    backdropFilter: "blur(20px)",
    border: isExpanded ? "1px solid rgba(255, 215, 0, 0.3)" : "2px solid rgba(255, 255, 255, 0.3)",
    boxShadow: isExpanded
      ? `
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 215, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `
      : `
        0 20px 40px -8px rgba(255, 215, 0, 0.4),
        0 8px 16px -4px rgba(255, 193, 7, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1),
        0 0 20px rgba(255, 215, 0, 0.3)
      `,
    transformOrigin: position.includes("right") ? "top right" : position.includes("left") ? "top left" : "center",
  }

  return (
    <div style={containerStyles} className="group relative">
      {isExpanded ? (
        <div className="w-full h-full opacity-0 animate-[fadeIn_0.4s_ease-out_0.2s_forwards]">
          <InteractiveVideo
            src={mainVideo}
            videoOptions={videoOptions}
            zIndex={zIndex}
            requestElevation={requestElevation}
            position={position}
            onClose={toggleExpand}
          />
        </div>
      ) : (
        <button
          onClick={toggleExpand}
          disabled={isAnimating}
          className="w-full h-full flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300"
          aria-label="Abrir reproductor de video"
        >
          {/* Efecto de ondas líquidas */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>

          {/* Partículas doradas flotantes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${2 + i * 0.5}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Icono de play mejorado */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

              {/* Anillo pulsante */}
              <div className="absolute inset-0 border-2 border-white/40 rounded-full animate-ping group-hover:animate-none"></div>
              <div className="absolute inset-0 border border-white/60 rounded-full group-hover:border-white/80 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Efecto de brillo en hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit]"></div>
        </button>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default InteractiveVideoManager
