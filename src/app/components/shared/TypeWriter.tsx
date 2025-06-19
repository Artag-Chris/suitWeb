// components/ui/typewriter.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      // Escribiendo
      timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }, speed);
    } else if (isDeleting && currentText !== "") {
      // Borrando
      timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
      }, deleteSpeed);
    } else if (!isDeleting && currentText === currentFullText) {
      // Pausa después de escribir
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && currentText === "") {
      // Pausa después de borrar y pasar al siguiente texto
      timer = setTimeout(() => {
        setIsDeleting(false);
        if (currentIndex + 1 >= texts.length && !loop) {
          setIsPaused(true);
          if (onComplete) onComplete();
        } else {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, delay / 2);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentIndex, currentFullText, speed, delay, deleteSpeed, loop, texts, onComplete]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      
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