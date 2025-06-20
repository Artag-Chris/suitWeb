"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Code, Menu, X, Zap, Globe, Brain, Shield } from "lucide-react"
import Image from 'next/image'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Manejar scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // CORRECCIÓN: Actualizar sección activa con verificación de tipo
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        // Verificar que es un HTMLElement antes de acceder a offsetTop
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop - 100
          if (window.scrollY >= sectionTop) {
            setActiveSection(`#${section.id}`)
          }
        }
      })
    }

    // Manejar clics fuera del menú móvil
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navItems = [
    { name: "Inicio", href: "#home", icon: Globe },
    { name: "Servicios", href: "#services", icon: Zap },
    { name: "Tech Stack", href: "#tech", icon: Code },
    { name: "Equipo", href: "#team", icon: Brain },
    { name: "Contactanos", href: "#contact", icon: Shield },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-card backdrop-blur-md border-b border-primary-accent/20 shadow-xl" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo mejorado con efectos */}
          <div className="flex items-center">
            <div className="group w-[90px] md:w-[120px] transition-all duration-300 hover:scale-105">
              <Image
                src="/LOGO FINOVA-04.png"
                width={150}
                height={150}
                alt="Finova Logo"
                className="drop-shadow-lg transition-all group-hover:drop-shadow-[0_0_12px_rgba(0,224,255,0.4)]"
                style={{ 
                  filter: "brightness(105%) contrast(110%)",
                  transition: "filter 0.3s ease, drop-shadow 0.3s ease"
                }}
              />
            </div>
          </div>

          {/* Desktop Navigation con indicador activo */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = activeSection === item.href
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 transition-all duration-300 group ${
                    isActive 
                      ? "text-[#00E0FF] font-semibold" 
                      : "text-text-secondary hover:text-[#00E0FF]"
                  }`}
                >
                  <IconComponent 
                    className={`w-4 h-4 transition-all ${
                      isActive 
                        ? "text-[#00E0FF] animate-pulse" 
                        : "group-hover:animate-pulse group-hover:text-[#00E0FF]"
                    }`} 
                  />
                  
                  <span className="relative">
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#00E0FF] animate-pulse rounded-full"></span>
                    )}
                  </span>
                </a>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="neon-btn hover:shadow-[0_0_15px_rgba(0,224,255,0.6)] transition-shadow">
              <span className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Start Project
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-primary-surface/30 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-primary-accent" />
            ) : (
              <Menu className="w-5 h-5 text-primary-accent" />
            )}
          </button>
        </div>

        {/* Mobile Menu mejorado */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden glass-card mt-2 rounded-lg border border-primary-accent/20 animate-fadeIn shadow-xl"
          >
            <div className="p-4 space-y-3">
              {navItems.map((item) => {
                const IconComponent = item.icon
                const isActive = activeSection === item.href
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 transition-colors duration-300 p-3 rounded-lg group ${
                      isActive
                        ? "bg-primary-surface/30 text-[#00E0FF] font-semibold"
                        : "hover:bg-primary-surface/30 text-text-secondary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <IconComponent 
                      className={`w-5 h-5 ${
                        isActive 
                          ? "text-[#00E0FF] animate-pulse" 
                          : "group-hover:text-primary-accent"
                      }`} 
                    />
                    <span
                      className={`${
                        isActive 
                          ? "text-[#00E0FF]" 
                          : "group-hover:text-primary-accent"
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>
                )
              })}
              <div className="pt-3 border-t border-primary-accent/30">
                <button className="neon-btn w-full py-2.5 hover:shadow-[0_0_15px_rgba(0,224,255,0.6)] transition-shadow">
                  <span className="flex items-center justify-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Start Project
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Neural Network Background Effect mejorado */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-accent/30 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-purple/30 to-transparent"></div>
        
        {/* Efecto de pulso neuronal */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#00E0FF] opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-primary-purple opacity-25 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Definición de animación fadeIn */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>
    </nav>
  )
}

export default Navbar