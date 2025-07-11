"use client"
import { useState, useRef, useEffect, type MouseEvent } from "react"
import type { MenuKey, MenuRefs } from "@/interfaces"
import gsap from "gsap"
import NavLinks from "../microComponents/NavLinks"
import BottomNavbar from "./BottomNavbar"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Navbar() {
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isBottomNavVisible, setIsBottomNavVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)
  const topNavRef = useRef<HTMLDivElement>(null)
  const bottomNavRef = useRef<HTMLDivElement>(null)

  // Nuevo estado para controlar la visibilidad del top navbar
  const [isTopNavVisible, setIsTopNavVisible] = useState(true)

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
      if (mobile) {
        setIsBottomNavVisible(true)
        setIsTopNavVisible(false)
      } else {
        // Al cambiar a desktop, asegurar que top navbar está visible
        setIsTopNavVisible(true)
        if (topNavRef.current) {
          gsap.set(topNavRef.current, { opacity: 1, y: 0 })
        }
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [pathname])

  useEffect(() => {
    if (isMobile) return

    // Buscar el elemento observador en la página actual
    const observerElement = document.getElementById("navbar-observer-target")

    if (observerElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Nuevo: Usar una lógica más precisa para determinar la visibilidad
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              // Elemento visible - mostrar top navbar
              showTopNav()
            } else if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
              // Elemento no visible - mostrar bottom navbar
              showBottomNav()
            }
          })
        },
        { threshold: [0.5] } // Umbral más preciso
      )

      observer.observe(observerElement)

      return () => {
        observer.disconnect()
      }
    } else {
      // Si no hay elemento observador, mostrar siempre top navbar
      showTopNav()
    }
  }, [isMobile, pathname])

  // Función para mostrar el top navbar
  const showTopNav = () => {
    if (isMobile) return

    setIsBottomNavVisible(false)
    setIsTopNavVisible(true)

    if (topNavRef.current) {
      gsap.to(topNavRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }

  // Función para mostrar el bottom navbar
  const showBottomNav = () => {
    if (isMobile) return

    setIsTopNavVisible(false)

    if (topNavRef.current) {
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
  }

  // Al cambiar de página, resetear a top navbar
  useEffect(() => {
    setActiveMenu(null)
    setIsMobileMenuOpen(false)
    showTopNav()
  }, [pathname])

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
      {/* Navbar Superior - Ahora controlado por isTopNavVisible */}
      <header
        ref={topNavRef}
        className="border-b fixed w-full z-50 bg-[#0F0F13]"
        style={{ display: isTopNavVisible ? "block" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl font-light tracking-wider text-white">FINOVA</span>
                <span className="text-xs md:text-sm font-bold tracking-wider text-[#d4af37] mt-1">Desarrollo</span>
              </div>
            </Link>


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
              <button className="group relative px-6 py-3 bg-gradient-to-r from-white to-white text-black rounded-lg font-medium transition-all duration-300 hover:from-[#d4af37] hover:to-[#d4af37] hover:scale-105 shadow-md hover:shadow-lg border border-slate-600/50">
                <span className="relative z-10">Contáctanos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-black rounded-lg font-medium transition-all duration-300 hover:from-[#d4af37] hover:to-[#d4af37] hover:scale-105 shadow-md hover:shadow-lg">
                <span className="relative z-10">Agenda una cita</span>
                <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
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
                  <Link
                    href="/productos"
                    className="block w-full text-left text-white hover:text-[#d4af37] transition-colors py-2 border-b border-[#4B5563]/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Productos
                  </Link>
                  <Link
                    href="/soluciones"
                    className="block w-full text-left text-white hover:text-[#d4af37] transition-colors py-2 border-b border-[#4B5563]/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Soluciones
                  </Link>
                  <Link
                    href="/recursos"
                    className="block w-full text-left text-white hover:text-[#d4af37] transition-colors py-2 border-b border-[#4B5563]/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Recursos
                  </Link>
                  <Link
                    href="/servicios"
                    className="block w-full text-left text-white hover:text-[#d4af37] transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Servicios
                  </Link>
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

      {/* Navbar Inferior */}
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