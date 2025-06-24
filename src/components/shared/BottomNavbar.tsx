import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { DropdownMenu } from '../microComponents/DropdownMenu';
import { Button } from '../ui/button';
import { BottomNavbarProps, Connection, Particle } from '@/app/interfaces';


const NavbarParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const particles: Particle[] = [];
    const connections: Connection[] = [];
    const particleCount = 30;
    const colors = ['#d4af37', '#c0c0c0', '#0d47a1', '#4a148c'];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() > 0.8
      });
    }
    
    const createConnections = () => {
      connections.length = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            connections.push({
              p1: particles[i],
              p2: particles[j],
              distance: distance
            });
          }
        }
      }
    };
    
    createConnections();
    
    // Animación
    let animationFrameId: number;
    
    const animate = () => {
      if (!ctx) return;
      
      // Fondo oscuro semi-transparente como en el Hero
      ctx.fillStyle = 'rgba(15, 15, 19, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Dibujar conexiones primero (igual que en Hero)
      ctx.lineWidth = 0.3;
      connections.forEach(conn => {
        const alpha = 1 - (conn.distance / 100);
        ctx.strokeStyle = `rgba(212, 175, 55, ${alpha * 0.5})`;
        ctx.beginPath();
        ctx.moveTo(conn.p1.x, conn.p1.y);
        ctx.lineTo(conn.p2.x, conn.p2.y);
        ctx.stroke();
      });
      
      // Dibujar partículas (igual que en Hero)
      particles.forEach(p => {
        // Actualizar posición
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Rebotar en los bordes
        if (p.x <= 0 || p.x >= canvas.width) p.speedX *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.speedY *= -1;
        
        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        if (p.glow) {
          // Efecto de brillo para partículas especiales
          const gradient = ctx.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, p.size * 4
          );
          gradient.addColorStop(0, `${p.color}aa`);
          gradient.addColorStop(1, `${p.color}00`);
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = `${p.color}${p.size > 1 ? 'aa' : '77'}`;
        }
        
        ctx.fill();
      });
      
      // Recrear conexiones periódicamente
      if (Math.random() > 0.95) {
        createConnections();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    />
  );
};

// Componente BottomNavbar
function BottomNavbar({
    bottomNavRef,
    activeMenu,
    setActiveMenu,
    bottomMenuRefs,
    menuTransition,
    animationDuration,
    closeTimerRef,
    isMobile
}: BottomNavbarProps) {
    return (
        <>
            <div
                ref={bottomNavRef}
                className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] max-w-4xl bg-transparent border border-gray-700 rounded-t-2xl shadow-2xl z-50 py-4 overflow-visible"
            >
                {/* Fondo con partículas IDÉNTICO AL HERO */}
                <div className="absolute inset-0 overflow-hidden rounded-t-2xl z-0">
                    <NavbarParticles />
                    
                    {/* Efecto de luz pulsante como en Hero */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="animate-pulse-slow w-32 h-32 rounded-full bg-gradient-to-r from-[#d4af3780] to-[#0d47a180] blur-[60px] opacity-20"></div>
                        </div>
                    </div>
                    
                    {/* Patrón sutil de fibra de carbono como en Hero */}
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMCAwaDQwdjQwSDB6TTQwIDQwaDQwdjQwSDQweiIgZmlsbC1vcGFjaXR5PSIuMDQiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
                </div>
                
                {/* Contenido principal - encima de las partículas */}
                <div className="relative z-10">
                    <div className="px-6">
                        <div className="flex justify-between items-center">
                            {/* Botón para volver al inicio */}
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-8 h-8 rounded-full border border-gray-600 hover:border-white bg-[#0F0F13]/80 backdrop-blur-sm"
                                aria-label="Volver arriba"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* Menús compactos */}
                            <div className="flex space-x-6">
                                <DropdownMenu
                                    menuKey="products"
                                    title="PRODUCTS"
                                    compact={true}
                                    items={[
                                        { label: "Real-Time Service Management" },
                                        { label: "Third-Party Integration" },
                                        { label: "Customer Management" },
                                        { label: "Analytics" }
                                    ]}
                                    activeMenu={activeMenu}
                                    setActiveMenu={setActiveMenu}
                                    menuRef={bottomMenuRefs.products}
                                    menuTransition={menuTransition}
                                    animationDuration={animationDuration}
                                    closeTimerRef={closeTimerRef}
                                    isMobile={isMobile}
                                    dropDirection="up"
                                />
                                <DropdownMenu
                                    menuKey="solutions"
                                    title="SOLUTIONS"
                                    compact={true}
                                    items={[
                                        { label: "Transformación Digital" },
                                        { label: "Infraestructura Cloud" },
                                        { label: "Optimización de Procesos" }
                                    ]}
                                    activeMenu={activeMenu}
                                    setActiveMenu={setActiveMenu}
                                    menuRef={bottomMenuRefs.solutions}
                                    menuTransition={menuTransition}
                                    animationDuration={animationDuration}
                                    closeTimerRef={closeTimerRef}
                                    isMobile={isMobile}
                                    dropDirection="up"
                                />
                                <DropdownMenu
                                    menuKey="resources"
                                    title="RESOURCES"
                                    compact={true}
                                    items={[
                                        { label: "Whitepapers" },
                                        { label: "Casos de Estudio" },
                                        { label: "Webinars" }
                                    ]}
                                    activeMenu={activeMenu}
                                    setActiveMenu={setActiveMenu}
                                    menuRef={bottomMenuRefs.resources}
                                    menuTransition={menuTransition}
                                    animationDuration={animationDuration}
                                    closeTimerRef={closeTimerRef}
                                    isMobile={isMobile}
                                    dropDirection="up"
                                />
                                <Link
                                    href="#services"
                                    className="text-gray-400 hover:text-white transition-colors text-xs font-medium"
                                >
                                    SERVICES
                                </Link>
                            </div>

                            {/* Botón de acción */}
                            <Button
                                className="
                                    bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black
                                    font-bold px-4 py-2 rounded text-xs
                                    hover:opacity-90 hover:translate-y-[-2px] 
                                    transition-all duration-300 shadow-lg shadow-[#d4af3780]
                                    relative overflow-hidden group
                                "
                            >
                                <span className="relative z-10">Agenda una cita</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#f1c232] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default BottomNavbar;