
import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

interface BrandGridProps {
  onBrandClick?: (brand: string) => void;
}

const BrandGrid: React.FC<BrandGridProps> = ({ onBrandClick }) => {
  const { t } = useLanguage();
  
  // Using SVG paths for a premium look without external image dependencies
  const brands = [
    { 
      name: 'CHANEL', 
      logo: (
        <svg viewBox="0 0 100 30" className="h-full w-auto fill-current">
           <text x="50" y="20" fontSize="20" fontWeight="bold" fontFamily="Montserrat, sans-serif" textAnchor="middle" letterSpacing="4">CHANEL</text>
        </svg>
      )
    },
    { 
      name: 'DIOR', 
      logo: (
        <svg viewBox="0 0 100 30" className="h-full w-auto fill-current">
          <text x="50" y="20" fontSize="20" fontWeight="bold" fontFamily="Bodoni Moda, serif" textAnchor="middle" letterSpacing="2">DIOR</text>
        </svg>
      ) 
    },
    { 
      name: 'GUCCI', 
      logo: (
        <svg viewBox="0 0 100 30" className="h-full w-auto fill-current">
           <text x="50" y="20" fontSize="20" fontWeight="bold" fontFamily="Cinzel, serif" textAnchor="middle" letterSpacing="2">GUCCI</text>
        </svg>
      ) 
    },
    { 
      name: 'YVES SAINT LAURENT', 
      logo: (
        <svg viewBox="0 0 180 30" className="h-full w-auto fill-current">
           <text x="90" y="20" fontSize="16" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">YVES SAINT LAURENT</text>
        </svg>
      ) 
    },
    { 
      name: 'TOM FORD', 
      logo: (
        <svg viewBox="0 0 140 30" className="h-full w-auto fill-current">
           <rect x="5" y="2" width="130" height="26" fill="none" stroke="currentColor" strokeWidth="2"/>
           <text x="70" y="21" fontSize="16" fontWeight="bold" fontFamily="Montserrat, sans-serif" textAnchor="middle" letterSpacing="2">TOM FORD</text>
        </svg>
      ) 
    },
    { 
      name: 'VERSACE', 
      logo: (
        <svg viewBox="0 0 120 30" className="h-full w-auto fill-current">
           <text x="60" y="20" fontSize="18" fontWeight="bold" fontFamily="Montserrat, sans-serif" textAnchor="middle" letterSpacing="3">VERSACE</text>
        </svg>
      ) 
    },
    { 
      name: 'LE LABO', 
      logo: (
         <svg viewBox="0 0 100 30" className="h-full w-auto fill-current">
           <text x="50" y="20" fontSize="18" fontFamily="Courier New, monospace" fontWeight="bold" textAnchor="middle" letterSpacing="-1">LE LABO</text>
        </svg>
      ) 
    },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="bg-white py-12 mb-8 overflow-hidden" id="brands">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-luxury-gold text-xs font-bold uppercase tracking-widest">{t('trustedPartners')}</span>
        <h2 className="font-serif text-3xl md:text-4xl mt-2 text-luxury-black">{t('premiumBrands')}</h2>
      </div>
      
      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-scroll hover:[animation-play-state:paused] w-max items-center">
          {duplicatedBrands.map((brand, i) => (
            <div 
              key={`${brand.name}-${i}`} 
              onClick={() => onBrandClick && onBrandClick(brand.name)}
              className="w-[180px] md:w-[240px] h-20 md:h-24 flex items-center justify-center mx-6 md:mx-8 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 text-luxury-black hover:scale-110"
            >
              <div className="h-8 md:h-10 pointer-events-none">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default BrandGrid;
