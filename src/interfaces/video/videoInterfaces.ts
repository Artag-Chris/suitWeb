export interface VideoOption {
  src: string;
  thumbnail: string;
  title: string;
}

// Tipos para posición
export type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'| 'middle-right'
  | 'middle-left' | 'top-middle'
  | 'bottom-middle' | 'custom';

export interface InteractiveVideoManagerProps {
  position?: Position;
  customPosition?: { top?: string | number; right?: string | number; bottom?: string | number; left?: string | number };
}

export interface InteractiveVideoProps {
    src: string;
    videoOptions: VideoOption[];
    zIndex: number;
    requestElevation: () => void;
    position?: Position;
    customPosition?: { top?: string; right?: string; bottom?: string; left?: string };
    onClose: () => void;
}

export interface Coordinates {
    x: number;
    y: number;
}
