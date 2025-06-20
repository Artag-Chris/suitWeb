import { RefObject, Dispatch, SetStateAction, ReactNode } from 'react';

export type MenuKey = 'products' | 'solutions' | 'resources' | null;
export type MenuRefs = {
  [key in Exclude<MenuKey, null>]: RefObject<HTMLDivElement | null>;
};

// Definir tipos para los items del menú
export type MenuItemBase = {
  label: string;
  href?: string;
  icon?: ReactNode;
  price?: string;
  description?: string;
};

export type SimpleMenuItem = MenuItemBase;

export type MenuColumn = {
  title?: string;
  items: SimpleMenuItem[];
};

export type MenuItem = SimpleMenuItem | MenuColumn;

// Tipos para contenido especializado
export interface FeaturedItem {
  title: string;
  category: string;
  href?: string;
}

export interface MenuStats {
  value: string;
  label: string;
}

export interface MenuItemProps {
  menuKey: Exclude<MenuKey, null>;
  title?: string;
  items?: MenuItem[]; // Puede contener ambos tipos
  activeMenu: MenuKey;
  setActiveMenu: Dispatch<SetStateAction<MenuKey>>;
  menuRef: RefObject<HTMLDivElement | null>;
  menuTransition: string;
  animationDuration: number;
  closeTimerRef: React.MutableRefObject<NodeJS.Timeout | null>;
  isMobile: boolean;
  customContent?: ReactNode;
  icon?: ReactNode;
  stats?: MenuStats[];
  featuredItems?: FeaturedItem[];
  columns?: number;
}

// Función type guard para detectar columnas
export function isMenuColumn(item: MenuItem): item is MenuColumn {
  return (item as MenuColumn).items !== undefined;
}