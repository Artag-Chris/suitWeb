import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './InteractiveVideo.module.css';

// Definición de tipos
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
}

interface Position {
  x: number;
  y: number;
}

const InteractiveVideo = ({ 
  src, 
  videoOptions,
  zIndex,
  requestElevation
}: InteractiveVideoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDocked, setIsDocked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>(src);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
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

  // Alternar dock
  const toggleDock = useCallback(() => {
    setIsDocked(prev => {
      const newState = !prev;
      if (newState) {
        requestElevation();
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          setPosition({
            x: window.innerWidth - rect.width - 20,
            y: 20
          });
        }
      }
      return newState;
    });
    setIsMenuOpen(false);
  }, [requestElevation]);

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
      setPosition({
        x: e.clientX - containerRef.current.offsetWidth / 2,
        y: e.clientY - containerRef.current.offsetHeight / 2
      });
    }
  };

  const onDrag = useCallback((e: MouseEvent) => {
    if (!isDragging || !isDocked || !containerRef.current) return;
    setPosition({
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

  // Estilos dinámicos
  const containerClasses = `
    ${styles.container}
    ${isHovered ? styles.hovered : ''}
    ${isDocked ? styles.docked : ''}
    ${isMenuOpen ? styles.menuOpen : ''}
  `;

  const containerStyle: React.CSSProperties = {
    transform: isDocked 
      ? `translate(${position.x}px, ${position.y}px)`
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
          aria-label={isDocked ? "Desanclar video" : "Anclar video a la derecha"}
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