'use client';
import React, { useEffect, useRef } from 'react';
import { isMenuColumn, MenuItemProps } from '@/app/interfaces';

export const DropdownMenu = (props: MenuItemProps) => {
  const { 
    menuKey, 
    title, 
    items, 
    activeMenu, 
    setActiveMenu, 
    menuRef,
    menuTransition,
    closeTimerRef,
    isMobile,
    customContent,
    icon,
    stats,
    featuredItems,
    columns,
    compact,
    dropDirection = 'down' 
  } = props;
  
  const localTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (localTimerRef.current) clearTimeout(localTimerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (localTimerRef.current) {
      clearTimeout(localTimerRef.current);
      localTimerRef.current = null;
    }
    
    if (!isMobile && activeMenu !== menuKey) {
      setActiveMenu(menuKey);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      closeTimerRef.current = setTimeout(() => {
        setActiveMenu(null);
      }, 150);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setActiveMenu(activeMenu === menuKey ? null : menuKey);
    } else {
      setActiveMenu(activeMenu === menuKey ? null : menuKey);
      if (activeMenu !== menuKey) {
        localTimerRef.current = setTimeout(() => {
          setActiveMenu(null);
        }, 3000);
      }
    }
  };

  // Clases para la posición del dropdown basadas en la dirección
  const getDropdownPositionClasses = () => {
    const baseClasses = "absolute left-0 min-w-[500px] bg-[#1E1E24] border border-gray-700 shadow-2xl z-50 overflow-hidden rounded-xl";
    
    if (dropDirection === 'up') {
      return `${baseClasses} bottom-full mb-2`;
    } else {
      return `${baseClasses} top-full mt-2`;
    }
  };

  // Clases para la animación basadas en la dirección
  const getAnimationClasses = () => {
    const baseTransition = menuTransition;
    
    if (dropDirection === 'up') {
      return `${baseTransition} origin-bottom ${activeMenu === menuKey 
        ? "scale-y-100 opacity-100" 
        : "scale-y-0 opacity-0"}`;
    } else {
      return `${baseTransition} origin-top ${activeMenu === menuKey 
        ? "scale-y-100 opacity-100" 
        : "scale-y-0 opacity-0"}`;
    }
  };

  // Renderizar contenido personalizado si está definido
  if (customContent) {
    return (
      <div 
        className="relative"
        ref={menuRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className={`flex items-center cursor-pointer text-gray-400 hover:text-white transition-all duration-300 font-medium tracking-wide w-full ${
            compact ? 'text-xs' : ''
          }`}
          onClick={handleClick}
          aria-expanded={activeMenu === menuKey}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {menuKey.toUpperCase()}
          <span className="ml-1 transform transition-transform duration-300">
            {activeMenu === menuKey ? '✕' : '+'}
          </span>
        </button>
        
        <div 
          className={`${getDropdownPositionClasses()} ${getAnimationClasses()}`}
          onMouseEnter={() => {
            if (closeTimerRef.current) {
              clearTimeout(closeTimerRef.current);
              closeTimerRef.current = null;
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              closeTimerRef.current = setTimeout(() => {
                setActiveMenu(null);
              }, 200);
            }
          }}
        >
          {customContent}
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative rounded"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className={`flex items-center cursor-pointer text-gray-400 hover:text-white transition-all duration-300 font-medium tracking-wide w-full ${
          compact ? 'text-xs' : ''
        }`}
        onClick={handleClick}
        aria-expanded={activeMenu === menuKey}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {menuKey.toUpperCase()}
        <span className="ml-1 transform transition-transform duration-300">
          {activeMenu === menuKey ? '✕' : '+'}
        </span>
      </button>
      
      <div 
        className={`${getDropdownPositionClasses()} ${getAnimationClasses()}`}
        onMouseEnter={() => closeTimerRef.current && clearTimeout(closeTimerRef.current)}
        onMouseLeave={() => !isMobile && (closeTimerRef.current = setTimeout(() => setActiveMenu(null), 200))}
      >
        <div className={`${compact ? 'p-3' : 'p-6'}`}>
          {title && <h3 className={`text-white font-bold mb-4 ${compact ? 'text-lg' : 'text-xl'}`}>{title}</h3>}
          
          {stats && (
            <div className="grid grid-cols-4 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-purple-500">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
          
          {items && items.length > 0 && (
            <div className={`grid ${columns ? `grid-cols-${columns}` : ''} gap-8`}>
              {items.map((item, index) => {
                if (isMenuColumn(item)) {
                  // Renderizar columna
                  return (
                    <div key={index}>
                      {item.title && <h4 className="text-gray-300 font-semibold mb-3">{item.title}</h4>}
                      <ul className="space-y-3">
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a 
                              href={subItem.href || '#'} 
                              className="flex items-center text-gray-400 hover:text-white transition-colors py-2 group"
                              onClick={() => setActiveMenu(null)}
                            >
                              {subItem.icon && <span className="mr-3 group-hover:text-purple-500">{subItem.icon}</span>}
                              <span className="flex-1">{subItem.label}</span>
                              {subItem.price && <span className="ml-2 text-purple-500">{subItem.price}</span>}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                } else {
                  // Renderizar ítem simple
                  return (
                    <div key={index} className="col-span-full">
                      <a 
                        href={item.href || '#'} 
                        className="flex items-center text-gray-400 hover:text-white transition-colors py-2 group"
                        onClick={() => setActiveMenu(null)}
                      >
                        {item.icon && <span className="mr-3 group-hover:text-purple-500">{item.icon}</span>}
                        <span className="flex-1">{item.label}</span>
                        {item.price && <span className="ml-2 text-purple-500">{item.price}</span>}
                      </a>
                    </div>
                  );
                }
              })}
            </div>
          )}
          
          {featuredItems && (
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h4 className="text-gray-300 font-semibold mb-4">FEATURED</h4>
              <div className="grid grid-cols-2 gap-4">
                {featuredItems.map((featured, index) => (
                  <a 
                    key={index} 
                    href={featured.href || '#'}
                    className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="text-xs text-purple-500 mb-1">{featured.category}</div>
                    <div className="font-medium text-white">{featured.title}</div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};