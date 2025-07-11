"use client"
import { useState, useRef, useEffect, type MouseEvent } from "react"
import type { MenuKey, MenuRefs } from "@/interfaces"
import gsap from "gsap"
import NavLinks from "../microComponents/NavLinks"
import BottomNavbar from "./BottomNavbar"

function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isBottomNavVisible, setIsBottomNavVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)
  const topNavRef = useRef<HTMLDivElement>(null)
  const bottomNavRef = useRef<HTMLDivElement>(null)
  const heroObserverRef = useRef<HTMLDivElement>(null)

  // Referencias con tipado compatible con null
  const menuRefs: MenuRefs = {
    Productos: useRef<HTMLDivElement>(null),
    Soluciones: useRef<HTMLDivElement>(null),
    Recursos: useRef<HTMLDivElement>(null),
  }

  // Referencias separadas para el navbar inferior
  const bottomMenuRefs: MenuRefs = {
    Productos: useRef<HTMLDivElement>(null),
    Soluciones: useRef<HTMLDivElement>(null),
    Recursos: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // En móvil, siempre mostrar navbar inferior
      if (mobile) {
        setIsBottomNavVisible(true)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Configurar Intersection Observer para el hero
    const observer = new IntersectionObserver(
      (entries) => {
        if (isMobile) return
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 0.5) {
            animateNavToBottom()
          } else {
            animateNavToTop()
          }
        })
      },
      { threshold: 0.5 },
    )

    if (heroObserverRef.current) {
      observer.observe(heroObserverRef.current)
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
      observer.disconnect()
    }
  }, [isMobile])

  const animateNavToBottom = () => {
    if (!topNavRef.current || isMobile) return

    // Animación para desaparecer navbar superior
    gsap.to(topNavRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setIsBottomNavVisible(true)
      },
    })
  }

  const animateNavToTop = () => {
    if (isMobile) return

    // Animación para aparecer navbar superior
    if (topNavRef.current) {
      gsap.to(topNavRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }
    setIsBottomNavVisible(false)
  }

  // Cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const allRefs = { ...menuRefs, ...bottomMenuRefs }
      if (!Object.values(allRefs).some((ref) => ref.current && ref.current.contains(e.target as Node))) {
        setActiveMenu(null)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside as unknown as EventListener)
    return () => document.removeEventListener("mousedown", handleClickOutside as unknown as EventListener)
  }, [])

  // Duración y transición de animación
  const animationDuration = 500
  const easingFunction = "cubic-bezier(0.33, 1, 0.68, 1)"
  const menuTransition = `
        transform origin-top 
        transition-all duration-${animationDuration} 
        ease-[${easingFunction}]
    `

  return (
    <>
      {/* Punto de referencia - DEBE ESTAR DENTRO DEL HERO */}
      <div ref={heroObserverRef} className="absolute top-0 h-[50vh] w-full pointer-events-none" />

      {/* Navbar Superior */}
      <header ref={topNavRef} className="border-b  fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
                window.location.href = "/"
              }}
            >
              <span className="text-xl md:text-2xl font-light tracking-wider text-white">FINOVA</span>
              <span className="text-xs md:text-sm font-bold tracking-wider text-[#d4af37] ml-1">Desarrollo</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavLinks
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                menuRefs={menuRefs}
                menuTransition={menuTransition}
                animationDuration={300}
                closeTimerRef={closeTimerRef}
                isMobile={isMobile}
              />
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-white to-white text-black rounded-lg font-medium transition-all duration-300 hover:from-slate-700 hover:to-slate-600 hover:scale-105 shadow-md hover:shadow-lg border border-slate-600/50">
                <span className="relative z-10">Contáctanos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-slate-900 rounded-lg font-medium transition-all duration-300 hover:from-[#d4af37] hover:to-[#d4af37] hover:scale-105 shadow-md hover:shadow-lg">
                <span className="relative z-10">Agenda una cita</span>
                <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div
                className={`w-6 h-0.5 bg-[#d4af37] transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-[#d4af37] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-[#d4af37] transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#0F0F13] border-b border-[#4B5563] shadow-lg">
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  <button
                    className="block w-full text-left text-white hover:text-[#d4af37] transition-colors py-2 border-b border-[#4B5563]/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Productos +
                  </button>
                  <button
                    className="block w-full text-left text-white hover:text-[#d4af37] transition-colors py-2 border-b border-[#4B5563]/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Soluciones +
                  </button>
                  <button
                    className="block w-full text-left text-white hover:text-[#d4af37] transition-colors py-2 border-b border-[#4B5563]/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Recursos +
                  </button>
                  <button
                    className="block w-full text-left text-white hover:text-[#d4af37] transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Servicios
                  </button>
                </div>

                {/* Mobile Action Buttons */}
                <div className="pt-4 space-y-3">
                  <button
                    className="w-full px-4 py-3 bg-gradient-to-r from-white to-white text-black rounded-lg font-medium transition-all duration-300 hover:from-slate-700 hover:to-slate-600 shadow-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contáctanos
                  </button>
                  <button
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-slate-900 rounded-lg font-medium transition-all duration-300 shadow-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Agenda una cita
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Navbar Inferior - Versión compacta con DropdownMenu */}
      {isBottomNavVisible && (
        <BottomNavbar
          bottomNavRef={bottomNavRef}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          bottomMenuRefs={bottomMenuRefs}
          menuTransition="ease-in-out"
          animationDuration={300}
          closeTimerRef={closeTimerRef}
          isMobile={isMobile}
        />
      )}
    </>
  )
}

export default Navbar