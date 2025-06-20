// components/ui/typewriter.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  deleteSpeed?: number;
  loop?: boolean;
  cursor?: boolean;
  cursorBlinkSpeed?: number;
  className?: string;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  delay = 1000,
  deleteSpeed = 50,
  loop = true,
  cursor = true,
  cursorBlinkSpeed = 0.8,
  className = "",
  onComplete
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const texts = Array.isArray(text) ? text : [text];
  const currentFullText = texts[currentIndex % texts.length];

  useEffect(() => {
    if (isPaused) return;
    
    let timer: NodeJS.Timeout;
    
    if (!isDeleting && currentText !== currentFullText) {
      // Escribiendo - carácter por carácter
      timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }, speed);
    } else if (isDeleting && currentText !== "") {
      // Borrando - todo de una vez
      timer = setTimeout(() => {
        setCurrentText("");
        setIsDeleting(false);
        
        // Avanzar al siguiente texto después de borrar
        if (currentIndex + 1 >= texts.length && !loop) {
          setIsPaused(true);
          if (onComplete) onComplete();
        } else {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, deleteSpeed);
    } else if (!isDeleting && currentText === currentFullText) {
      // Pausa después de escribir
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentIndex, currentFullText, speed, delay, deleteSpeed, loop, texts, onComplete]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Texto sin animaciones adicionales para evitar el flash */}
      <span>{currentText}</span>
      
      {cursor && (
        <motion.span
          className="ml-0.5 w-[2px] h-[1em] bg-current inline-block align-middle"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: cursorBlinkSpeed,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      )}
    </div>
  );
};

export default Typewriter;