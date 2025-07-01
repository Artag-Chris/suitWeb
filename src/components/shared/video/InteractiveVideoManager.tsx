"use client";
import { useState, useCallback } from 'react';
import InteractiveVideo from './InteractiveVideo';
import { InteractiveVideoManagerProps, VideoOption } from '@/app/interfaces';

const InteractiveVideoManager = ({
  position = 'top-left',
  customPosition = {}
}: InteractiveVideoManagerProps) => {
  const [zIndex, setZIndex] = useState(100);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const requestElevation = useCallback(() => {
    setZIndex(prev => prev + 1);
  }, []);

  const toggleExpand = useCallback(() => {
    setIsAnimating(true);
    setIsExpanded(!isExpanded);
    
    // Reset animating state after transition
    setTimeout(() => setIsAnimating(false), 300);
  }, [isExpanded]);

  // Datos de ejemplo
  const mainVideo = 'https://www.youtube.com/watch?v=r3DdVXZ06Ho';
  const videoOptions: VideoOption[] = [
    {
      src: '/videos/video1.mp4',
      thumbnail: '/thumbnails/thumb1.jpg',
      title: 'Introducción'
    },
    {
      src: '/videos/video2.mp4',
      thumbnail: '/thumbnails/thumb2.jpg',
      title: 'Tutorial avanzado'
    },
  ];

  // Calcular estilos basados en posición
  const getPositionStyles = () => {
    const baseStyles = {
      position: 'fixed',
      zIndex: zIndex,
      transition: 'all 0.3s ease',
      overflow: 'hidden'
    } as React.CSSProperties;

    switch (position) {
      case 'top-right':
        return { ...baseStyles, top: '20px', right: '20px' };
      case 'top-left':
        return { ...baseStyles, top: '20px', left: '20px' };
      case 'bottom-right':
        return { ...baseStyles, bottom: '20px', right: '20px' };
      case 'bottom-left':
        return { ...baseStyles, bottom: '20px', left: '20px' };
      case 'middle-right':
        return {
          ...baseStyles,
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)'
        };
      case 'middle-left':
        return {
          ...baseStyles,
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)'
        };
      case 'top-middle':
        return {
          ...baseStyles,
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)'
        };
      case 'bottom-middle':
        return {
          ...baseStyles,
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)'
        };
      case 'custom':
        return {
          ...baseStyles,
          top: customPosition.top,
          right: customPosition.right,
          bottom: customPosition.bottom,
          left: customPosition.left
        };
      default:
        return { ...baseStyles, top: '20px', right: '20px' };
    }
  };

 const containerStyles = {
  ...getPositionStyles(),
  width: isExpanded ? '200px' : '60px',
  height: isExpanded ? '150px' : '60px',
  borderRadius: isExpanded ? '8px' : '50%',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  background: isExpanded ? '#000' : 'rgba(30, 30, 30, 0.85)',
  transformOrigin: position.includes('right') ? 'top right' : 
                  position.includes('left') ? 'top left' : 'center'
};

  return (
    <div 
      style={containerStyles}
      className={isAnimating ? 'transition-all duration-300' : ''}
    >
      {isExpanded ? (
        <InteractiveVideo
          src={mainVideo}
          videoOptions={videoOptions}
          zIndex={zIndex}
          requestElevation={requestElevation}
          position={position}
          onClose={toggleExpand}
        />
      ) : (
        <button
          onClick={toggleExpand}
          className="w-full h-full flex items-center justify-center"
          aria-label="Abrir reproductor de video"
        >
          <div className="text-white text-2xl transform transition-transform hover:scale-110">
            ▶
          </div>
        </button>
      )}
    </div>
  );
};

export default InteractiveVideoManager;