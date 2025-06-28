"use client";
import { useState, useCallback } from 'react';
import InteractiveVideo from './InteractiveVideo';

// Definición de tipos para el manager
interface VideoOption {
  src: string;
  thumbnail: string;
  title: string;
}

// Tipos para posición
type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'| 'middle-right'
  | 'middle-left' | 'custom';

interface InteractiveVideoManagerProps {
  position?: Position;
  customPosition?: { top?: string | number; right?: string | number; bottom?: string | number; left?: string | number };
}

const InteractiveVideoManager = ({
  position = 'top-left',
  customPosition = {}
}: InteractiveVideoManagerProps) => {
  const [zIndex, setZIndex] = useState(100);

  const requestElevation = useCallback(() => {
    setZIndex(prev => prev + 1);
  }, []);

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
      width: '200px',
      height: '150px'
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

  return (
    <div style={getPositionStyles()}>
      <InteractiveVideo
        src={mainVideo}
        videoOptions={videoOptions}
        zIndex={zIndex}
        requestElevation={requestElevation}
        position={position}
      //  customPosition={customPosition}
      />
    </div>
  );
};

export default InteractiveVideoManager;