import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './InteractiveVideo.module.css';
import { InteractiveVideoProps, Coordinates } from '@/app/interfaces';

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
        return parseFloat(value) || defaultValue;
    }
};

// Función para extraer el ID de YouTube de la URL
const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

const InteractiveVideo = ({
    src,
    videoOptions,
    zIndex,
    requestElevation,
    position = 'top-right',
    customPosition = {},
    onClose
}: InteractiveVideoProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDocked, setIsDocked] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<string>(src);
    const [positionCoords, setPositionCoords] = useState<Coordinates>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Estado para el ID de YouTube
    const [youTubeId, setYouTubeId] = useState<string | null>(null);
    
    // Referencia para el iframe
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Extraer ID de YouTube cuando cambia el video
    useEffect(() => {
        const id = getYouTubeId(currentVideo);
        setYouTubeId(id);
    }, [currentVideo]);

    useEffect(() => {
        if (isHovered || isDocked || isMenuOpen || isDragging) {
            requestElevation();
        }
    }, [isHovered, isDocked, isMenuOpen, isDragging, requestElevation]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = useCallback(() => {
        if (!isDocked) setIsHovered(false);
    }, [isDocked]);

    const toggleMenu = () => {
        setIsMenuOpen(prev => {
            if (!prev) requestElevation();
            return !prev;
        });
    };

    const toggleDock = useCallback(() => {
        setIsDocked(prev => {
            const newState = !prev;

            if (newState) {
                requestElevation();

                if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    let newX = 0;
                    let newY = 0;

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
                            const topValue = parsePositionValue(
                                typeof customPosition.top === 'string'
                                    ? customPosition.top
                                    : typeof customPosition.top === 'number'
                                        ? `${customPosition.top}`
                                        : undefined,
                                20,
                                true
                            );
                            const rightValue = parsePositionValue(
                                typeof customPosition.right === 'string'
                                    ? customPosition.right
                                    : typeof customPosition.right === 'number'
                                        ? `${customPosition.right}`
                                        : undefined,
                                20,
                                false
                            );
                            const bottomValue = parsePositionValue(
                                typeof customPosition.bottom === 'string'
                                    ? customPosition.bottom
                                    : typeof customPosition.bottom === 'number'
                                        ? `${customPosition.bottom}`
                                        : undefined,
                                0,
                                true
                            );
                            const leftValue = parsePositionValue(
                                typeof customPosition.left === 'string'
                                    ? customPosition.left
                                    : typeof customPosition.left === 'number'
                                        ? `${customPosition.left}`
                                        : undefined,
                                0,
                                false
                            );

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

    const changeVideo = (newSrc: string) => {
        setCurrentVideo(newSrc);
        setIsMenuOpen(false);
        
        // Si es un video normal (no YouTube)
        if (!getYouTubeId(newSrc)) {
            // Aquí podrías manejar videos normales si es necesario
            console.log("Cambiando a video normal:", newSrc);
        }
    };

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

    const containerClasses = `
        ${styles.container}
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
                {youTubeId ? (
                    <iframe
                        ref={iframeRef}
                        src={`https://www.youtube.com/embed/${youTubeId}?autoplay=1&rel=0`}
                        className={styles.videoPlayer}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube video player"
                    ></iframe>
                ) : (
                    <video
                        src={currentVideo}
                        className={styles.videoPlayer}
                        controls
                        playsInline
                        aria-label="Video principal"
                    />
                )}
            </div>

            <div className={styles.controls}>
                <button
                    onClick={onClose}
                    className={styles.controlButton}
                    aria-label="Cerrar reproductor"
                >
                    ✕
                </button>
                
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