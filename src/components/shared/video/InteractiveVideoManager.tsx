"use client";
import { useState, useCallback } from 'react';
import InteractiveVideo from './InteractiveVideo';

// Definición de tipos para el manager
interface VideoOption {
  src: string;
  thumbnail: string;
  title: string;
}

const InteractiveVideoManager = () => {
  const [zIndexCounter, setZIndexCounter] = useState(10);
  const [activeZIndex, setActiveZIndex] = useState(10);

  // Solicitar elevación de z-index
  const requestElevation = useCallback(() => {
    const newZIndex = zIndexCounter + 1;
    setZIndexCounter(newZIndex);
    setActiveZIndex(newZIndex);
  }, [zIndexCounter]);

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

  return (
    <div className="{styles.videoManager}">
      <InteractiveVideo 
        src={mainVideo} 
        videoOptions={videoOptions} 
        zIndex={activeZIndex}
        requestElevation={requestElevation}
      />
    </div>
  );
};

export default InteractiveVideoManager;