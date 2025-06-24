import Link from 'next/link';
import React from 'react'
import { DropdownMenu } from '../microComponents/DropdownMenu'
import { Button } from '../ui/button'
import { BottomNavbarProps } from '@/app/interfaces'

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
                className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] max-w-4xl bg-[#0F0F13] border border-gray-700 rounded-t-2xl shadow-2xl z-50 py-4"
            >
                <div className="px-6">
                    <div className="flex justify-between items-center">
                        {/* Botón para volver al inicio */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-8 h-8 rounded-full border border-gray-600 hover:border-white"
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
                                    bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white 
                                    font-medium px-4 py-2 rounded text-xs
                                    hover:from-[#8B5CF6] hover:to-[#7C3AED] 
                                    transition-all duration-300
                                "
                        >
                            Agenda una cita
                        </Button>
                    </div>

                    {/* Texto descriptivo */}
                    {/* <div className="mt-3 text-center">
                            <p className="text-[10px] text-gray-500 tracking-widest">
                                [ EFFICIENCY, SCALABILITY, AND ABILITY ]
                            </p>
                        </div> */}
                </div>
            </div>
        </>
    )
}

export default BottomNavbar