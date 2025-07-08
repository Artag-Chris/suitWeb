import React from 'react'
import Link from 'next/link';
import {
    LinkIcon, ChartBarIcon, TrendingUpIcon, ServerIcon, UserCircleIcon,
    BarChart2, Cloud, MoveDiagonal, RefreshCw, Cpu, PieChart, BookOpen, DownloadCloud, FileText, LibraryBig, Video
} from 'lucide-react';
import { DropdownMenu } from './DropdownMenu';
import { NavLinksProps } from '@/interfaces';
import { RocketLaunchIcon } from '@heroicons/react/16/solid';



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
                menuKey="Productos"
                title="EMS - ROI para Desarrollo"
                stats={[
                    { value: "32%", label: "Velocidad Entrega" },
                    { value: "1.2x", label: "Productividad Dev" },
                    { value: "5.4%", label: "Satisfacción Clientes" },
                    { value: "6.3%", label: "Ahorro Costos" }
                ]}
                items={[
                    {
                        title: "Funcionalidades",
                        items: [
                            {
                                label: "Gestión en Tiempo Real",
                                icon: <RocketLaunchIcon className="w-5 h-5 text-blue-500" />,
                                description: "Control y monitoreo de servicios en tiempo real",
                                href: "/aboutGestionTiempo"
                            },
                            {
                                label: "Integraciones API",
                                icon: <LinkIcon className="w-5 h-5 text-green-500" />,
                                description: "Conexión con sistemas externos",
                                href: "/aboutApis"
                            },
                        ]
                    },
                    {
                        title: "Gestión",
                        items: [
                            {
                                label: "Clientes",
                                icon: <UserCircleIcon className="w-5 h-5 text-amber-500" />,
                                description: "Centralización de datos de usuarios",
                                href: "/aboutGestionClientes"
                            },
                            {
                                label: "Recursos",
                                icon: <ServerIcon className="w-5 h-5 text-red-500" />,
                                description: "Optimización de infraestructura",
                                href: "/aboutGestionRecursos"
                            },
                        ]
                    },
                    {
                        title: "Analíticas",
                        items: [
                            {
                                label: "Rendimiento",
                                icon: <ChartBarIcon className="w-5 h-5 text-purple-500" />,
                                description: "Métricas de eficiencia del sistema",
                                href: "/analiticRendimiento"
                            },
                            {
                                label: "Uso",
                                icon: <TrendingUpIcon className="w-5 h-5 text-teal-500" />,
                                description: "Tendencias de adopción de usuarios",
                                href: "/analiticUso"
                            },
                        ]
                    }
                ]}
                columns={3}
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
                menuKey="Soluciones"
                title="Soluciones Técnicas"
                items={[
                    {
                        title: "Infraestructura",
                        items: [
                            {
                                label: "Cloud Híbrida",
                                icon: <Cloud className="w-5 h-5 text-purple-500" />,
                                description: "Implementación multi-nube con alta disponibilidad"
                            },
                            {
                                label: "DevOps & CI/CD",
                                icon: <MoveDiagonal className="w-5 h-5 text-yellow-500" />,
                                description: "Automatización de despliegues y pipelines"
                            },
                        ]
                    },
                    {
                        title: "Modernización",
                        items: [
                            {
                                label: "Migración Legacy",
                                icon: <RefreshCw className="w-5 h-5 text-red-500" />,
                                description: "Actualización de sistemas heredados"
                            },
                            {
                                label: "Optimización SaaS",
                                icon: <BarChart2 className="w-5 h-5 text-teal-500" />,
                                description: "Mejora de rendimiento en aplicaciones cloud"
                            },
                        ]
                    },
                    {
                        title: "Inteligencia",
                        items: [
                            {
                                label: "Análisis de Datos",
                                icon: <PieChart className="w-5 h-5 text-indigo-500" />,
                                description: "Plataformas de business intelligence"
                            },
                            {
                                label: "Machine Learning",
                                icon: <Cpu className="w-5 h-5 text-pink-500" />,
                                description: "Modelos predictivos para toma de decisiones"
                            },
                        ]
                    }
                ]}
                columns={4}
                featuredItems={[
                    {
                        category: "CASO DE ESTUDIO",
                        title: "Migración exitosa a microservicios para empresa de telecomunicaciones",
                        href: "/casos/telecom-microservicios"
                    },
                    {
                        category: "WEBINAR",
                        title: "Mejores prácticas en implementación de CI/CD",
                        href: "/webinars/cicd-best-practices"
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
                menuKey="Recursos"
                title="Recursos Expertos"
                items={[
                    {
                        title: "Materiales Técnicos",
                        items: [
                            {
                                label: "Whitepapers",
                                icon: <FileText className="w-5 h-5 text-blue-500" />,
                                description: "Documentos técnicos profundos"
                            },
                            {
                                label: "Casos de Estudio",
                                icon: <BarChart2 className="w-5 h-5 text-green-500" />,
                                description: "Implementaciones exitosas"
                            },
                            {
                                label: "Webinars",
                                icon: <Video className="w-5 h-5 text-purple-500" />,
                                description: "Sesiones técnicas en vivo"
                            }
                        ]
                    },
                    {
                        title: "Herramientas",
                        items: [
                            {
                                label: "Guías Prácticas",
                                icon: <BookOpen className="w-5 h-5 text-yellow-500" />,
                                description: "Tutoriales paso a paso"
                            },
                            {
                                label: "Plantillas",
                                icon: <DownloadCloud className="w-5 h-5 text-teal-500" />,
                                description: "Recursos descargables"
                            }
                        ]
                    },
                    {
                        title: "Biblioteca",
                        items: [
                            {
                                label: "Centro de Aprendizaje",
                                icon: <LibraryBig className="w-5 h-5 text-indigo-500" />,
                                description: "Recursos educativos completos"
                            }
                        ]
                    }
                ]}
                columns={3}
                featuredItems={[
                    {
                        category: "NUEVO",
                        title: "Guía de Arquitectura Cloud 2024",
                        href: "/recursos/guia-cloud-2024"
                    },
                    {
                        category: "POPULAR",
                        title: "Webinar: DevOps en Entornos Empresariales",
                        href: "/recursos/webinar-devops"
                    }
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
                SERVICIOS
            </Link>
        </nav>
    )
}

export default NavLinks