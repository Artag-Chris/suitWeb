'use client';
import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { DropdownMenu } from '../microComponents/DropdownMenu';
import { MenuKey, MenuRefs } from '@/app/interfaces';
import { ChartBarIcon, LinkIcon, CogIcon, UserIcon, ChartPieIcon, ClockIcon } from 'lucide-react';

function Navbar() {
    const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
    const [isMobile, setIsMobile] = useState(false);
    const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Referencias con tipado compatible con null
    const menuRefs: MenuRefs = {
        products: useRef<HTMLDivElement>(null),
        solutions: useRef<HTMLDivElement>(null),
        resources: useRef<HTMLDivElement>(null)
    };

    // Detectar si es móvil y limpiar timers
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
            if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        };
    }, []);

    // Cerrar menús al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!Object.values(menuRefs).some(ref =>
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
        <header className="border-b border-gray-700 bg-[#0F0F13] fixed w-full z-50">
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
  icon={<ChartBarIcon className="w-5 h-5 text-purple-500" />}
  stats={[
    { value: "3.2%", label: "Growth" },
    { value: "1.2", label: "Index" },
    { value: "5.4%", label: "Engagement" },
    { value: "6.3%", label: "Conversion" }
  ]}
  items={[
    // Columna 1: Features
    {
      title: "Features",
      items: [
        { 
          label: "Real-Time Service Management", 
          icon: <UserIcon  className="w-5 h-5 text-blue-400" />,
          description: "Monitor and manage services in real-time"
        },
        { 
          label: "Third-Party Integration", 
          icon: <LinkIcon className="w-5 h-5 text-green-400" />,
          description: "Seamless integration with external systems"
        },
      ]
    },
    
    // Columna 2: Management
    {
      title: "Management",
      items: [
        { 
          label: "Customer Management", 
          icon: <UserIcon  className="w-5 h-5 text-yellow-400" />,
          description: "Centralized customer data management"
        },
        { 
          label: "Product & Resource Management", 
          icon: <CogIcon className="w-5 h-5 text-red-400" />,
          description: "Efficient resource allocation"
        },
      ]
    },
    
    // Columna 3: Analytics
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
          icon: <UserIcon  className="w-5 h-5 text-indigo-400" />,
          description: "Network performance analytics"
        },
        { 
          label: "Total Users", 
          icon: <ChartPieIcon className="w-5 h-5 text-teal-400" />,
          description: "User growth metrics"
        },
      ]
    },
    
    // Ítem simple (sin columna)
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
  
  // Props de funcionalidad (deben venir del componente padre)
  activeMenu={activeMenu}
  setActiveMenu={setActiveMenu}
  menuRef={menuRefs.products}
  menuTransition={menuTransition}
  animationDuration={animationDuration}
  closeTimerRef={closeTimerRef}
  isMobile={isMobile}
/>

                        <DropdownMenu
                            menuKey="solutions"
                            title="Soluciones Especializadas"
                            items={[
                                { label: "Transformación Digital" },
                                { label: "Infraestructura Cloud" },
                                { label: "Optimización de Procesos" }
                            ]}
                            activeMenu={activeMenu}
                            setActiveMenu={setActiveMenu}
                            menuRef={menuRefs.solutions}
                            menuTransition={menuTransition}
                            animationDuration={animationDuration}
                            closeTimerRef={closeTimerRef}
                            isMobile={isMobile}
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
    )
}

export default Navbar;