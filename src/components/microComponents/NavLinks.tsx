import React from 'react'
import Link from 'next/link';
import { UserIcon, LinkIcon, CogIcon, ChartPieIcon, ClockIcon } from 'lucide-react';
import { DropdownMenu } from './DropdownMenu';
import { NavLinksProps } from '@/app/interfaces';


function NavLinks({
    activeMenu,
    setActiveMenu,
    menuRefs,
    menuTransition,
    animationDuration,
    closeTimerRef,
    isMobile
}: NavLinksProps) {
    return (
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
    )
}

export default NavLinks