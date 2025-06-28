import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './InteractiveVideo.module.css';

// Definición de tipos
// Tipos para posición (debe coincidir con InteractiveVideoManager)
type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'middle-right' | 'middle-left' | 'custom';

interface InteractiveVideoProps {
    src: string;
    videoOptions: VideoOption[];
    zIndex: number;
    requestElevation: () => void;
    position?: Position;
    customPosition?: { top?: string; right?: string; bottom?: string; left?: string };
}
interface VideoOption {
    src: string;
    thumbnail: string;
    title: string;
}

interface InteractiveVideoProps {
    src: string;
    videoOptions: VideoOption[];
    zIndex: number;
    requestElevation: () => void;
    position?: Position;
    customPosition?: { top?: string; right?: string; bottom?: string; left?: string };
}

interface Coordinates {
    x: number;
    y: number;
}

const parsePositionValue = (value: string | undefined, defaultValue: number, isVertical: boolean): number => {
    if (!value) return defaultValue;

    if (value.endsWith('px')) {
        return parseFloat(value);
    } else if (value.endsWith('%')) {
        const percentage = parseFloat(value) / 100;
        return isVertical
            ? window.innerHeight * percentage
            : window.innerWidth * percentage;
    } else if (value.endsWith('vh')) {
        return (parseFloat(value) / 100) * window.innerHeight;
    } else if (value.endsWith('vw')) {
        return (parseFloat(value) / 100) * window.innerWidth;
    } else {
        // Asumir que es un número en píxeles
        return parseFloat(value) || defaultValue;
    }
};

const InteractiveVideo = ({
    src,
    videoOptions,
    zIndex,
    requestElevation,
    position = 'top-right',
    customPosition = {}
}: InteractiveVideoProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDocked, setIsDocked] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<string>(src);
    const [positionCoords, setPositionCoords] = useState<Coordinates>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Elevar el componente cuando está activo
    useEffect(() => {
        if (isHovered || isDocked || isMenuOpen || isDragging) {
            requestElevation();
        }
    }, [isHovered, isDocked, isMenuOpen, isDragging, requestElevation]);

    // Manejar hover
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = useCallback(() => {
        if (!isDocked) setIsHovered(false);
    }, [isDocked]);

    // Alternar menú
    const toggleMenu = () => {
        setIsMenuOpen(prev => {
            if (!prev) requestElevation();
            return !prev;
        });
    };

    // Alternar dock con posicionamiento inteligente
    const toggleDock = useCallback(() => {
        setIsDocked(prev => {
            const newState = !prev;

            if (newState) {
                requestElevation();

                if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    let newX = 0;
                    let newY = 0;

                    // Calcular posición basada en la prop
                    switch (position) {
                        case 'top-right':
                            newX = window.innerWidth - rect.width - 20;
                            newY = 20;
                            break;
                        case 'top-left':
                            newX = 20;
                            newY = 20;
                            break;
                        case 'bottom-right':
                            newX = window.innerWidth - rect.width - 20;
                            newY = window.innerHeight - rect.height - 20;
                            break;
                        case 'bottom-left':
                            newX = 20;
                            newY = window.innerHeight - rect.height - 20;
                            break;
                        case 'custom':
                            // Convertir valores CSS a píxeles
                            const topValue = parsePositionValue(customPosition.top, 20, true);
                            const rightValue = parsePositionValue(customPosition.right, 20, false);
                            const bottomValue = parsePositionValue(customPosition.bottom, 0, true);
                            const leftValue = parsePositionValue(customPosition.left, 0, false);

                            // Calcular posición con prioridad top/right
                            if (customPosition.top !== undefined || customPosition.bottom !== undefined) {
                                newY = customPosition.top !== undefined
                                    ? topValue
                                    : window.innerHeight - rect.height - bottomValue;
                            } else {
                                newY = 20;
                            }

                            if (customPosition.right !== undefined || customPosition.left !== undefined) {
                                newX = customPosition.right !== undefined
                                    ? window.innerWidth - rect.width - rightValue
                                    : leftValue;
                            } else {
                                newX = window.innerWidth - rect.width - 20;
                            }
                            break;
                        default:
                            newX = window.innerWidth - rect.width - 20;
                            newY = 20;
                    }

                    setPositionCoords({ x: newX, y: newY });
                }
            }

            return newState;
        });

        setIsMenuOpen(false);
    }, [requestElevation, position, customPosition]);

    // Cambiar video
    const changeVideo = (newSrc: string) => {
        setCurrentVideo(newSrc);
        setIsMenuOpen(false);
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(e => console.error("Error al reproducir:", e));
        }
    };

    // Drag & drop
    const startDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDocked) return;
        setIsDragging(true);
        requestElevation();
        if (containerRef.current) {
            setPositionCoords({
                x: e.clientX - containerRef.current.offsetWidth / 2,
                y: e.clientY - containerRef.current.offsetHeight / 2
            });
        }
    };

    const onDrag = useCallback((e: MouseEvent) => {
        if (!isDragging || !isDocked || !containerRef.current) return;
        setPositionCoords({
            x: e.clientX - containerRef.current.offsetWidth / 2,
            y: e.clientY - containerRef.current.offsetHeight / 2
        });
    }, [isDragging, isDocked]);

    const endDrag = useCallback(() => setIsDragging(false), []);

    // Eventos globales
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', onDrag);
            window.addEventListener('mouseup', endDrag);
            return () => {
                window.removeEventListener('mousemove', onDrag);
                window.removeEventListener('mouseup', endDrag);
            };
        }
    }, [isDragging, onDrag, endDrag]);

    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node) &&
                isMenuOpen
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    // Ajustar transform-origin según la posición
    useEffect(() => {
        if (!containerRef.current) return;

        switch (position) {
            case 'top-right':
                containerRef.current.style.transformOrigin = 'top right';
                break;
            case 'top-left':
                containerRef.current.style.transformOrigin = 'top left';
                break;
            case 'bottom-right':
                containerRef.current.style.transformOrigin = 'bottom right';
                break;
            case 'bottom-left':
                containerRef.current.style.transformOrigin = 'bottom left';
                break;
            case 'custom':
                containerRef.current.style.transformOrigin = 'top right';
                break;
            default:
                containerRef.current.style.transformOrigin = 'top right';
        }
    }, [position]);

    // Estilos dinámicos
    const containerClasses = `
    ${styles.container}
    ${isHovered ? styles.hovered : ''}
    ${isDocked ? styles.docked : ''}
    ${isMenuOpen ? styles.menuOpen : ''}
  `;

    const containerStyle: React.CSSProperties = {
        transform: isDocked
            ? `translate(${positionCoords.x}px, ${positionCoords.y}px)`
            : 'none',
        cursor: isDocked ? (isDragging ? 'grabbing' : 'grab') : 'default',
        zIndex: zIndex
    };

    return (
        <div
            ref={containerRef}
            className={containerClasses}
            style={containerStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={startDrag}
            role="region"
            aria-label="Reproductor de video interactivo"
        >
            <div className={styles.videoWrapper}>
                <video
                    ref={videoRef}
                    src={currentVideo}
                    className={styles.videoPlayer}
                    controls
                    playsInline
                    aria-label="Video principal"
                />
            </div>

            <div className={styles.controls}>
                <button
                    onClick={toggleDock}
                    className={styles.controlButton}
                    aria-label={isDocked ? "Desanclar video" : "Anclar video"}
                >
                    {isDocked ? '✕' : '📌'}
                </button>

                <button
                    onClick={toggleMenu}
                    className={styles.controlButton}
                    aria-expanded={isMenuOpen}
                    aria-label="Mostrar opciones de video"
                >
                    {isMenuOpen ? '▲' : '▼'}
                </button>
            </div>

            {isMenuOpen && (
                <div className={styles.videoMenu} role="menu">
                    {videoOptions.map((option, index) => (
                        <div
                            key={index}
                            className={styles.menuItem}
                            onClick={() => changeVideo(option.src)}
                            role="menuitem"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && changeVideo(option.src)}
                        >
                            <img
                                src={option.thumbnail}
                                alt={`Miniatura de ${option.title}`}
                                className={styles.thumbnail}
                            />
                            <span>{option.title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InteractiveVideo;