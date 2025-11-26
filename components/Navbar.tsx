
import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X, Globe } from 'lucide-react';
import { useCart } from '../lib/CartContext';
import { useLanguage } from '../lib/LanguageContext';

interface NavbarProps {
  onHomeClick: () => void;
  onNavigate: (criteria: any) => void;
  onCategoryOverview?: () => void;
  onOpenAuth: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, onNavigate, onCategoryOverview, onOpenAuth }) => {
  const { setIsCartOpen, cartCount } = useCart();
  const { t, language, setLanguage, isRTL } = useLanguage();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleScrollTo = (id: string) => {
    // If it's a "contact" action, we might want to scroll to the form or footer
    // Let's assume footer or new contact section
    const targetId = id === 'contact' ? 'contact-form' : id;
    
    // If not on home, go home first
    onHomeClick(); 
    setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onNavigate({ searchQuery });
      setShowSearch(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navItems = [
      { label: t('home'), action: () => {
          onHomeClick();
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }},
      { label: t('categories'), action: () => onCategoryOverview && onCategoryOverview() },
      { label: t('shop'), action: () => onNavigate({}) },
      { label: t('bestSellers'), action: () => onNavigate({ tag: 'Best Seller' }) },
      { label: t('aboutUs'), action: () => handleScrollTo('about') },
      { label: t('contact'), action: () => handleScrollTo('contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6 px-6 md:px-12 transition-all duration-300" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo - Mirage d'Or */}
        <div 
          onClick={() => {
            onHomeClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 flex items-center justify-center relative transition-transform duration-500 group-hover:rotate-180">
            {/* Geometric Sun Icon */}
            <svg viewBox="0 0 40 40" className="w-full h-full text-luxury-black fill-current group-hover:text-luxury-gold transition-colors">
              <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" />
              <circle cx="20" cy="20" r="4" className="fill-white" />
            </svg>
          </div>
          <div className="flex flex-col">
             <span className="font-serif text-2xl font-bold tracking-tight text-luxury-black leading-none group-hover:text-luxury-gold transition-colors">Mirage d’Or</span>
             <span className="text-[8px] uppercase tracking-[0.3em] text-luxury-gold font-bold">Parfumerie</span>
          </div>
        </div>

        {/* Center Links - Desktop */}
        <div className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md border border-white/40 text-luxury-black px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
          {navItems.map((item, index) => (
            <button 
              key={index} 
              onClick={() => {
                  item.action();
              }}
              className={`text-sm font-medium px-4 py-1 rounded-full transition-colors hover:text-luxury-gold ${index === 0 ? 'text-luxury-gold font-bold' : 'text-gray-600'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-5 relative">
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 hover:text-luxury-gold transition-colors font-bold text-xs uppercase"
            title="Switch Language"
          >
             <Globe className="w-4 h-4" />
             <span>{language === 'en' ? 'AR' : 'EN'}</span>
          </button>

          <div className="w-px h-4 bg-gray-300 mx-1 hidden md:block"></div>

          {/* Mobile/Quick Search Input Overlay */}
          {showSearch ? (
              <form onSubmit={handleSearchSubmit} className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg border border-gray-100 flex items-center px-4 py-1 w-64 animate-fade-in z-50 ${isRTL ? 'left-0' : 'right-0'}`}>
                  <input 
                    type="text" 
                    placeholder={t('searchPlaceholder')}
                    className={`bg-transparent outline-none text-sm w-full ${isRTL ? 'text-right' : 'text-left'}`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button type="button" onClick={() => setShowSearch(false)} className="p-2 hover:bg-gray-100 rounded-full">
                      <X className="w-4 h-4 text-gray-500" />
                  </button>
              </form>
          ) : (
            <button 
                onClick={() => setShowSearch(true)}
                className="hidden md:block hover:text-luxury-gold transition-colors"
            >
                <Search className="w-5 h-5" />
            </button>
          )}

          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative hover:text-luxury-gold transition-colors group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-luxury-gold text-white text-[10px] flex items-center justify-center rounded-full font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={onOpenAuth}
            className="hidden md:block hover:text-luxury-gold transition-colors"
          >
            <User className="w-5 h-5" />
          </button>

          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
