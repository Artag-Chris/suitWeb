'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { DropdownMenu } from '../microComponents/DropdownMenu';
import { Button } from '../ui/button';
import { BottomNavbarProps } from '@/app/interfaces';

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
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        if (!canvasRef.current) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        // Ajustar canvas al tamaño del navbar
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Configuración de partículas pequeñas
        const particles: Particle[] = [];
        const particleCount = 30;
        const colors = ['#d4af37', '#c0c0c0', '#7C3AED', '#6D28D9'];
        
        // Crear partículas
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                color: colors[Math.floor(Math.random() * colors.length)],
                glow: Math.random() > 0.9
            });
        }
        
        // Animación
        let animationFrameId: number;
        
        const animate = () => {
            if (!ctx) return;
            
            // Limpiar canvas con transparencia
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Actualizar y dibujar partículas
            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;
                
                if (p.x <= 0 || p.x >= canvas.width) p.speedX *= -1;
                if (p.y <= 0 || p.y >= canvas.height) p.speedY *= -1;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                
                if (p.glow) {
                    const gradient = ctx.createRadialGradient(
                        p.x, p.y, 0,
                        p.x, p.y, p.size * 3
                    );
                    gradient.addColorStop(0, `${p.color}aa`);
                    gradient.addColorStop(1, `${p.color}00`);
                    ctx.fillStyle = gradient;
                } else {
                    ctx.fillStyle = `${p.color}${p.size > 1 ? 'aa' : '77'}`;
                }
                
                ctx.fill();
            });
            
            animationFrameId = requestAnimationFrame(animate);
        };
        
        animate();
        
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    
    return (
        <>
            <div
                ref={bottomNavRef}
                className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] max-w-4xl bg-[#0F0F13] border border-gray-700 rounded-t-2xl shadow-2xl z-50 py-4 overflow-hidden"
            >
                {/* Canvas para partículas - ahora está detrás del contenido */}
                <canvas 
                    ref={canvasRef} 
                    className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-0"
                    aria-hidden="true"
                />
                
                {/* Efecto de luz sutil - también detrás del contenido */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-pulse-slow w-32 h-32 rounded-full bg-gradient-to-r from-[#d4af3730] to-[#7C3AED30] blur-[40px] opacity-20"></div>
                    </div>
                </div>
                
                {/* Contenido principal con z-index más alto */}
                <div className="relative z-10">
                    <div className="px-6">
                        <div className="flex justify-between items-center">
                            {/* Botón para volver al inicio */}
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-8 h-8 rounded-full border border-gray-600 hover:border-white bg-[#0F0F13]/80 backdrop-blur-sm z-20"
                                aria-label="Volver arriba"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* Menús compactos */}
                            <div className="flex space-x-6 relative z-20">
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
                                    className="text-gray-400 hover:text-white transition-colors text-xs font-medium z-20"
                                >
                                    SERVICES
                                </Link>
                            </div>

                            {/* Botón de acción */}
                            <Button
                                className="
                                    bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white 
                                    font-medium px-4 py-2 rounded text-xs
                                    hover:from-[#8B5CF6] hover:to-[#7C3AED] 
                                    transition-all duration-300 relative overflow-hidden
                                    shadow-md shadow-[#7C3AED]/30 z-20
                                "
                            >
                                <span className="relative z-10">Agenda una cita</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Definición de tipos para las partículas
interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    glow: boolean;
}

export default BottomNavbar;