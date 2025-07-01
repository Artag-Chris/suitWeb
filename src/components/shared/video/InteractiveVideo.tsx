"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import type { InteractiveVideoProps,  } from "@/app/interfaces"

const parsePositionValue = (value: string | undefined, defaultValue: number, isVertical: boolean): number => {
  if (!value) return defaultValue
  if (value.endsWith("px")) {
    return Number.parseFloat(value)
  } else if (value.endsWith("%")) {
    const percentage = Number.parseFloat(value) / 100
    return isVertical ? window.innerHeight * percentage : window.innerWidth * percentage
  } else if (value.endsWith("vh")) {
    return (Number.parseFloat(value) / 100) * window.innerHeight
  } else if (value.endsWith("vw")) {
    return (Number.parseFloat(value) / 100) * window.innerWidth
  } else {
    return Number.parseFloat(value) || defaultValue
  }
}

// Función para extraer el ID de YouTube de la URL
const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

const InteractiveVideo = ({
  src,
  videoOptions,
  zIndex,
  requestElevation,
  onClose,
}: InteractiveVideoProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isDocked, setIsDocked] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<string>(src)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [youTubeId, setYouTubeId] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Extraer ID de YouTube cuando cambia el video
  useEffect(() => {
    const id = getYouTubeId(currentVideo)
    setYouTubeId(id)
  }, [currentVideo])

  useEffect(() => {
    if (isHovered || isDocked || isMenuOpen || isDragging) {
      requestElevation()
    }
  }, [isHovered, isDocked, isMenuOpen, isDragging, requestElevation])

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = useCallback(() => {
    if (!isDocked) setIsHovered(false)
  }, [isDocked])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      if (!prev) requestElevation()
      return !prev
    })
  }

  const changeVideo = (newSrc: string) => {
    setCurrentVideo(newSrc)
    setIsMenuOpen(false)
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative bg-black/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-500/30"
      style={{ zIndex: zIndex }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Reproductor de video interactivo"
    >
      {/* Header con efecto cortina */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/80 to-transparent z-20 flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={toggleMenu}
            className="text-white/80 hover:text-white transition-colors duration-200 text-sm px-2 py-1 rounded hover:bg-white/10"
            aria-expanded={isMenuOpen}
            aria-label="Mostrar opciones de video"
          >
            Videos
          </button>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors duration-200 w-6 h-6 flex items-center justify-center rounded hover:bg-white/10"
            aria-label="Cerrar reproductor"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Video Player */}
      <div className="w-full h-full pt-12">
        {youTubeId ? (
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${youTubeId}?autoplay=1&rel=0`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          />
        ) : (
          <video
            src={currentVideo}
            className="w-full h-full object-cover"
            controls
            playsInline
            aria-label="Video principal"
          />
        )}
      </div>

      {/* Menu de videos con efecto cortina */}
      {isMenuOpen && (
        <div className="absolute top-12 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-yellow-500/20 animate-[slideDown_0.3s_ease-out] z-30">
          <div className="p-4">
            <h3 className="text-white text-sm font-medium mb-3">Videos Disponibles</h3>
            <div className="grid grid-cols-2 gap-3 max-h-32 overflow-y-auto">
              {videoOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200 group"
                  onClick={() => changeVideo(option.src)}
                  role="menuitem"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && changeVideo(option.src)}
                >
                  <img
                    src={option.thumbnail || "/placeholder.svg"}
                    alt={`Miniatura de ${option.title}`}
                    className="w-12 h-8 object-cover rounded border border-yellow-500/30 group-hover:border-yellow-500/60 transition-colors duration-200"
                  />
                  <span className="text-white/80 text-xs group-hover:text-white transition-colors duration-200 line-clamp-2">
                    {option.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default InteractiveVideo
