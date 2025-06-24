'use client';
import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { DropdownMenu } from '../microComponents/DropdownMenu';
import { MenuKey, MenuRefs } from '@/app/interfaces';
import { LinkIcon, CogIcon, UserIcon, ChartPieIcon, ClockIcon } from 'lucide-react';
import gsap from 'gsap';

function Navbar() {
    const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isBottomNavVisible, setIsBottomNavVisible] = useState(false);
    const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
    const topNavRef = useRef<HTMLDivElement>(null);
    const bottomNavRef = useRef<HTMLDivElement>(null);
    const heroObserverRef = useRef<HTMLDivElement>(null);

    // Referencias con tipado compatible con null
    const menuRefs: MenuRefs = {
        products: useRef<HTMLDivElement>(null),
        solutions: useRef<HTMLDivElement>(null),
        resources: useRef<HTMLDivElement>(null)
    };

    // Referencias separadas para el navbar inferior
    const bottomMenuRefs: MenuRefs = {
        products: useRef<HTMLDivElement>(null),
        solutions: useRef<HTMLDivElement>(null),
        resources: useRef<HTMLDivElement>(null)
    };

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);

            // En móvil, siempre mostrar navbar inferior
            if (mobile) {
                setIsBottomNavVisible(true);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Configurar Intersection Observer para el hero
        const observer = new IntersectionObserver((entries) => {
            if (isMobile) return;

            entries.forEach(entry => {
                if (entry.intersectionRatio < 0.5) {
                    animateNavToBottom();
                } else {
                    animateNavToTop();
                }
            });
        }, { threshold: 0.5 });

        if (heroObserverRef.current) {
            observer.observe(heroObserverRef.current);
        }

        return () => {
            window.removeEventListener('resize', checkMobile);
            if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
            observer.disconnect();
        };
    }, [isMobile]);

    const animateNavToBottom = () => {
        if (!topNavRef.current || isMobile) return;

        // Animación para desaparecer navbar superior
        gsap.to(topNavRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                setIsBottomNavVisible(true);
            }
        });
    };

    const animateNavToTop = () => {
        if (isMobile) return;

        // Animación para aparecer navbar superior
        if (topNavRef.current) {
            gsap.to(topNavRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        }

        setIsBottomNavVisible(false);
    };

    // Cerrar menús al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const allRefs = { ...menuRefs, ...bottomMenuRefs };
            if (!Object.values(allRefs).some(ref =>
                ref.current && ref.current.contains(e.target as Node)
            )) {
                setActiveMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside as unknown as EventListener);
        return () => document.removeEventListener(
            'mousedown',
            handleClickOutside as unknown as EventListener
        );
    }, []);

    // Duración y transición de animación
    const animationDuration = 500;
    const easingFunction = "cubic-bezier(0.33, 1, 0.68, 1)";
    const menuTransition = `
        transform origin-top 
        transition-all duration-${animationDuration} 
        ease-[${easingFunction}]
    `;

    return (
        <>
            {/* Punto de referencia - DEBE ESTAR DENTRO DEL HERO */}
            <div ref={heroObserverRef} className="absolute top-0 h-[50vh] w-full pointer-events-none" />

            {/* Navbar Superior */}
            <header ref={topNavRef} className="border-b border-gray-700 bg-[#0F0F13] fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-8 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <span className="text-2xl font-light tracking-wider text-white">
                                FINOVA
                            </span>
                        </div>

                        <nav className="hidden md:flex items-center space-x-10">
                            <DropdownMenu
                                menuKey="products"
                                title="Effect of Mobile Suite (EMS)"
                                stats={[
                                    { value: "3.2%", label: "Growth" },
                                    { value: "1.2", label: "Index" },
                                    { value: "5.4%", label: "Engagement" },
                                    { value: "6.3%", label: "Conversion" }
                                ]}
                                items={[
                                    {
                                        title: "Features",
                                        items: [
                                            {
                                                label: "Real-Time Service Management",
                                                icon: <UserIcon className="w-5 h-5 text-blue-400" />,
                                                description: "Monitor and manage services in real-time"
                                            },
                                            {
                                                label: "Third-Party Integration",
                                                icon: <LinkIcon className="w-5 h-5 text-green-400" />,
                                                description: "Seamless integration with external systems"
                                            },
                                        ]
                                    },
                                    {
                                        title: "Management",
                                        items: [
                                            {
                                                label: "Customer Management",
                                                icon: <UserIcon className="w-5 h-5 text-yellow-400" />,
                                                description: "Centralized customer data management"
                                            },
                                            {
                                                label: "Product & Resource Management",
                                                icon: <CogIcon className="w-5 h-5 text-red-400" />,
                                                description: "Efficient resource allocation"
                                            },
                                        ]
                                    },
                                    {
                                        title: "Analytics",
                                        items: [
                                            {
                                                label: "Customers",
                                                icon: <UserIcon className="w-5 h-5 text-pink-400" />,
                                                description: "Customer behavior insights"
                                            },
                                            {
                                                label: "Network",
                                                icon: <UserIcon className="w-5 h-5 text-indigo-400" />,
                                                description: "Network performance analytics"
                                            },
                                            {
                                                label: "Total Users",
                                                icon: <ChartPieIcon className="w-5 h-5 text-teal-400" />,
                                                description: "User growth metrics"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Red-Time Service Management",
                                        href: "/services",
                                        icon: <ClockIcon className="w-5 h-5 text-orange-400" />,
                                        description: "Advanced service monitoring tools"
                                    }
                                ]}
                                columns={3}
                                featuredItems={[
                                    {
                                        category: "BLOG",
                                        title: "Revolutionizing Telecom with Next-Gen Solutions",
                                        href: "/blog/telecom-revolution"
                                    },
                                    {
                                        category: "BLOG",
                                        title: "Accelerating 5G Rollouts with AI",
                                        href: "/blog/5g-ai"
                                    }
                                ]}
                                activeMenu={activeMenu}
                                setActiveMenu={setActiveMenu}
                                menuRef={menuRefs.products}
                                menuTransition={menuTransition}
                                animationDuration={animationDuration}
                                closeTimerRef={closeTimerRef}
                                isMobile={isMobile}
                                dropDirection="down"
                            />
                            <DropdownMenu
                                menuKey="solutions"
                                title="Our solutions"
                                items={[
                                    {
                                        title: "Features",
                                        items: [
                                            {
                                                label: "Transformación Digital",
                                                icon: <UserIcon className="w-5 h-5 text-blue-400" />,
                                                description: "Monitor and manage services in real-time"
                                            },
                                            {
                                                label: "Infraestructura Cloud",
                                                icon: <LinkIcon className="w-5 h-5 text-green-400" />,
                                                description: "Seamless integration with external systems"
                                            },
                                            {
                                                label: "Optimización de Procesos",
                                                icon: <LinkIcon className="w-5 h-5 text-green-400" />,
                                                description: "Seamless integration with external systems"
                                            },
                                        ]
                                    },
                                ]}
                                columns={3}
                                featuredItems={[
                                    {
                                        category: "BLOG",
                                        title: "Revolutionizing Telecom with Next-Gen Solutions",
                                        href: "/blog/telecom-revolution"
                                    },
                                    {
                                        category: "BLOG",
                                        title: "Accelerating 5G Rollouts with AI",
                                        href: "/blog/5g-ai"
                                    }
                                ]}
                                activeMenu={activeMenu}
                                setActiveMenu={setActiveMenu}
                                menuRef={menuRefs.solutions}
                                menuTransition={menuTransition}
                                animationDuration={animationDuration}
                                closeTimerRef={closeTimerRef}
                                isMobile={isMobile}
                                dropDirection="down"
                            />
                            <DropdownMenu
                                menuKey="resources"
                                title="Recursos Expertos"
                                items={[
                                    { label: "Whitepapers" },
                                    { label: "Casos de Estudio" },
                                    { label: "Webinars" }
                                ]}
                                activeMenu={activeMenu}
                                setActiveMenu={setActiveMenu}
                                menuRef={menuRefs.resources}
                                menuTransition={menuTransition}
                                animationDuration={animationDuration}
                                closeTimerRef={closeTimerRef}
                                isMobile={isMobile}
                                dropDirection="down"
                            />
                            <Link
                                href="#services"
                                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium tracking-wide"
                            >
                                SERVICES
                            </Link>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Button
                                variant="outline"
                                className="border border-gray-600 text-[#0F0F13] font-medium px-6 py-2 hover:bg-[#1E1E24] hover:text-white transition-all duration-300"
                            >
                                Contáctanos
                            </Button>
                            <Button
                                className="
                                    bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white 
                                    font-medium px-6 py-3 rounded-[10px] tracking-wide
                                    transition-all duration-300
                                    hover:from-[#8B5CF6] hover:to-[#7C3AED] 
                                    hover:translate-y-[-2px] hover:shadow-lg
                                    focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
                                    active:translate-y-0
                                "
                            >
                                Agenda una cita
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navbar Inferior - Versión compacta con DropdownMenu */}
            {isBottomNavVisible && (
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
                                BOOK A MEETING
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
            )}
        </>
    )
}

export default Navbar;