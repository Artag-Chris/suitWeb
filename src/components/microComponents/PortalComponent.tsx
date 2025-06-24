// components/Portal.tsx
'use client';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'; // Importa ReactDOM directamente

interface PortalProps {
  children: React.ReactNode;
  selector?: string;
}

const Portal: React.FC<PortalProps> = ({ children, selector = 'body' }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof window === 'undefined' || !mounted) return null;

  const container = document.querySelector(selector) || document.body;
  return ReactDOM.createPortal(children, container);
};

export default Portal;