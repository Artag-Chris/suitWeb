"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { DropdownMenu } from "../microComponents/DropdownMenu"
import { Button } from "../ui/button"
import type { BottomNavbarProps, Connection, Particle } from "@/interfaces"
import { RocketLaunchIcon } from "@heroicons/react/16/solid" 
import {
  LinkIcon,
  UserCircleIcon, 
  ServerIcon,
  BarChartIcon as ChartBarIcon,
  TrendingUpIcon,
  BarChart2,
  Cloud,
  Cpu,
  MoveDiagonal,
  PieChart,
  RefreshCw,
  BookOpen,
  DownloadCloud,
  FileText,
  LibraryBig,
  Video,
  ChevronUp,
} from "lucide-react"

const NavbarParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const particles: Particle[] = []
    const connections: Connection[] = []

    // Reducir partículas en móviles para mejor rendimiento
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 15 : 30
    const colors = ["#d4af37", "#c0c0c0", "#0d47a1", "#4a148c"]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() > 0.8,
      })
    }

    const createConnections = () => {
      connections.length = 0
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < (isMobile ? 80 : 100)) {
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

    let animationFrameId: number
    const animate = () => {
      if (!ctx) return

      ctx.fillStyle = "rgba(15, 15, 19, 0.7)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.lineWidth = 0.3
      connections.forEach((conn) => {
        const alpha = 1 - conn.distance / (isMobile ? 80 : 100)
        ctx.strokeStyle = `rgba(212, 175, 55, ${alpha * 0.5})`
        ctx.beginPath()
        ctx.moveTo(conn.p1.x, conn.p1.y)
        ctx.lineTo(conn.p2.x, conn.p2.y)
        ctx.stroke()
      })

      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x <= 0 || p.x >= canvas.width) p.speedX *= -1
        if (p.y <= 0 || p.y >= canvas.height) p.speedY *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)

        if (p.glow) {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
          gradient.addColorStop(0, `${p.color}aa`)
          gradient.addColorStop(1, `${p.color}00`)
          ctx.fillStyle = gradient
        } else {
          ctx.fillStyle = `${p.color}${p.size > 1 ? "aa" : "77"}`
        }
        ctx.fill()
      })

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
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    />
  )
}

function BottomNavbar({
  bottomNavRef,
  activeMenu,
  setActiveMenu,
  bottomMenuRefs,
  menuTransition,
  animationDuration,
  closeTimerRef,
  isMobile,
}: BottomNavbarProps) {
  return (
    <>
      <div
        ref={bottomNavRef}
        className="
          fixed bottom-0 left-1/2 transform -translate-x-1/2 
          w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] 
          max-w-4xl 
          bg-transparent border border-gray-700 
          rounded-t-xl sm:rounded-t-2xl 
          shadow-2xl z-50 
          py-2 sm:py-3 md:py-4 
          overflow-visible
        "
      >
        {/* Fondo con partículas */}
        <div className="absolute inset-0 overflow-hidden rounded-t-xl sm:rounded-t-2xl z-0">
          <NavbarParticles />

          {/* Efecto de luz pulsante */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="animate-pulse-slow w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-[#d4af3780] to-[#0d47a180] blur-[40px] sm:blur-[50px] md:blur-[60px] opacity-20"></div>
            </div>
          </div>

          {/* Patrón sutil */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMCAwaDQwdjQwSDB6TTQwIDQwaDQwdjQwSDQweiIgZmlsbC1vcGFjaXR5PSIuMDQiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10">
          <div className="px-3 sm:px-4 md:px-6">
            <div className="flex justify-between items-center">
              {/* Botón para volver al inicio */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="
                  text-gray-400 hover:text-white transition-all duration-300 
                  flex items-center justify-center 
                  w-7 h-7 sm:w-8 sm:h-8 
                  rounded-md border border-gray-600 hover:border-white 
                  bg-[#0F0F13]/80 backdrop-blur-sm 
                  transform hover:scale-105
                  touch-manipulation
                "
                aria-label="Volver arriba"
              >
                <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>

              {/* Menús - Responsive */}
              <div className="flex space-x-2 sm:space-x-4 md:space-x-6">
                {/* En móviles, mostrar solo 2 menús principales */}
                <div className="hidden sm:block">
                  <DropdownMenu
                    menuKey="Productos"
                    title="EMS - ROI"
                    stats={[
                      { value: "32%", label: "Velocidad" },
                      { value: "1.2x", label: "Productividad" },
                      { value: "5.4%", label: "Satisfacción" },
                      { value: "6.3%", label: "Ahorro" },
                    ]}
                    items={[
                      {
                        title: "Funcionalidades",
                        items: [
                          {
                            label: "Gestión en Tiempo Real",
                            icon: <RocketLaunchIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
                            description: "Control y monitoreo de servicios en tiempo real",
                            href: "/aboutGestionTiempo",
                          },
                          {
                            label: "Integraciones API",
                            icon: <LinkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />,
                            description: "Conexión con sistemas externos",
                            href:"/aboutApis"
                          },
                        ],
                      },
                      {
                        title: "Gestión",
                        items: [
                          {
                            label: "Clientes",
                            icon: <UserCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />,
                            description: "Centralización de datos de usuarios",
                            href:"/aboutGestionClientes"
                          },
                          {
                            label: "Recursos",
                            icon: <ServerIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />,
                            description: "Optimización de infraestructura",
                            href: "/aboutGestionRecursos"
                          },
                        ],
                      },
                      {
                        title: "Analíticas",
                        items: [
                          {
                            label: "Rendimiento",
                            icon: <ChartBarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />,
                            description: "Métricas de eficiencia del sistema",
                            href:"/rendimiento"
                          },
                          {
                            label: "Uso",
                            icon: <TrendingUpIcon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />,
                            description: "Tendencias de adopción de usuarios",
                            href: "/uso"
                          },
                        ],
                      },
                    ]}
                    columns={isMobile ? 1 : 3}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                    menuRef={bottomMenuRefs.Productos} // CORRECCIÓN: Usar ref específica
                    menuTransition={menuTransition}
                    animationDuration={animationDuration}
                    closeTimerRef={closeTimerRef}
                    isMobile={isMobile}
                    dropDirection="up"
                  />
                </div>

                <DropdownMenu
                  menuKey="Soluciones"
                  title={isMobile ? "Soluciones" : "Soluciones Técnicas"}
                  items={[
                    {
                      title: "Infraestructura",
                      items: [
                        {
                          label: "Cloud Híbrida",
                          icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />,
                          description: "Implementación multi-nube con alta disponibilidad",
                          href:"/infraestructura/cloudhibrida"
                        },
                        {
                          label: "DevOps & CI/CD",
                          icon: <MoveDiagonal className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />,
                          description: "Automatización de despliegues y pipelines",
                          href:"/infraestructura/devops"
                        },
                      ],
                    },
                    {
                      title: "Modernización",
                      items: [
                        {
                          label: "Migración Legacy",
                          icon: <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />,
                          description: "Actualización de sistemas heredados",
                          href:"/infraestructura/migracionLegacy"
                        },
                        {
                          label: "Optimización SaaS",
                          icon: <BarChart2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />,
                          description: "Mejora de rendimiento en aplicaciones cloud",
                          href:"/infraestructura/saasOptimizacion"
                        },
                      ],
                    },
                    {
                      title: "Inteligencia",
                      items: [
                        {
                          label: "Análisis de Datos",
                          icon: <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />,
                          description: "Plataformas de business intelligence",
                          href:"/infraestructura/analisisDatos"
                        },
                        {
                          label: "Machine Learning",
                          icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />,
                          description: "Modelos predictivos para toma de decisiones",
                          href:"/infraestructura/machineLearning"
                        },
                      ],
                    },
                  ]}
                  columns={isMobile ? 1 : 3}
                  featuredItems={
                    !isMobile
                      ? [
                          {
                            category: "CASO DE ESTUDIO",
                            title: "Migración exitosa a microservicios para empresa de telecomunicaciones",
                            href: "/webinar/microservicios"
                          },
                          {
                            category: "WEBINAR",
                            title: "Mejores prácticas en implementación de CI/CD",
                            href: "/webinar/cicd"
                          },
                        ]
                      : undefined
                  }
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  menuRef={bottomMenuRefs.Soluciones} // CORRECCIÓN: Usar ref específica
                  menuTransition={menuTransition}
                  animationDuration={animationDuration}
                  closeTimerRef={closeTimerRef}
                  isMobile={isMobile}
                  dropDirection="up"
                />

                <DropdownMenu
                  menuKey="Recursos"
                  title={isMobile ? "Recursos" : "Recursos Expertos"}
                  items={[
                    {
                      title: "Materiales Técnicos",
                      items: [
                        {
                          label: "Whitepapers",
                          icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
                          description: "Documentos técnicos profundos",
                          href: "/webinar/whitepapers"
                        },
                        {
                          label: "Casos de Estudio",
                          icon: <BarChart2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />,
                          description: "Implementaciones exitosas",
                        },
                        {
                          label: "Webinars",
                          icon: <Video className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />,
                          description: "Sesiones técnicas en vivo",
                        },
                      ],
                    },
                    {
                      title: "Herramientas",
                      items: [
                        {
                          label: "Guías Prácticas",
                          icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />,
                          description: "Tutoriales paso a paso",
                        },
                        {
                          label: "Plantillas",
                          icon: <DownloadCloud className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />,
                          description: "Recursos descargables",
                        },
                      ],
                    },
                    {
                      title: "Biblioteca",
                      items: [
                        {
                          label: "Centro de Aprendizaje",
                          icon: <LibraryBig className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />,
                          description: "Recursos educativos completos",
                        },
                      ],
                    },
                  ]}
                  columns={isMobile ? 1 : 3}
                  featuredItems={
                    !isMobile
                      ? [
                          {
                            category: "NUEVO",
                            title: "Guía de Arquitectura Cloud 2024",
                            href: "/recursos/guia-cloud-2024",
                          },
                          {
                            category: "POPULAR",
                            title: "Webinar: DevOps en Entornos Empresariales",
                            href: "/recursos/webinar-devops",
                          },
                        ]
                      : undefined
                  }
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  menuRef={bottomMenuRefs.Recursos} // CORRECCIÓN: Usar ref específica
                  menuTransition={menuTransition}
                  animationDuration={animationDuration}
                  closeTimerRef={closeTimerRef}
                  isMobile={isMobile}
                  dropDirection="up"
                />

                <Link
                  href="#services"
                  className="
                    text-gray-400 hover:text-white transition-colors duration-300 
                    font-medium tracking-wide
                    text-xs sm:text-sm
                    hidden sm:block
                  "
                >
                  SERVICIOS
                </Link>
              </div>

              {/* Botón de acción - Responsive */}
              <Button
                className="
                  bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black
                  font-bold 
                  px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2
                  rounded 
                  text-xs sm:text-sm
                  hover:opacity-90 hover:translate-y-[-1px] sm:hover:translate-y-[-2px]
                  transition-all duration-300 shadow-lg shadow-[#d4af3780]
                  relative overflow-hidden group
                  touch-manipulation
                  whitespace-nowrap
                "
              >
                <span className="relative z-10">{isMobile ? "Contacto" : "Agenda una cita"}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#f1c232] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomNavbar