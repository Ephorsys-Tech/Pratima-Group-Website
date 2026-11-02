import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [], variant = "light", className = "" }) {
  const isDark = variant === "dark";

  return (
    <nav 
      className={`w-full py-2.5 sm:py-3 border-b text-xs transition-colors ${
        isDark 
          ? 'bg-[#07271E] border-emerald-900/40 text-gray-400' 
          : 'bg-[#FFFDF5] border-[#EFE8D6] text-gray-500'
      } ${className}`} 
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          <li className="flex items-center">
            <Link 
              to="/" 
              className={`flex items-center gap-1 font-medium transition-colors ${
                isDark ? 'hover:text-white text-gray-300' : 'hover:text-[#0D4738] text-gray-700'
              }`}
              title="Home"
            >
              <Home size={13} className={isDark ? 'text-[#C8973E]' : 'text-[#D99A00]'} />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5 sm:gap-2">
                <ChevronRight size={12} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
                {isLast || !item.to ? (
                  <span 
                    className={`font-bold ${isDark ? 'text-[#C8973E]' : 'text-[#0D4738]'}`} 
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    to={item.to} 
                    className={`font-medium transition-colors ${
                      isDark ? 'hover:text-white text-gray-300' : 'hover:text-[#0D4738] text-gray-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
