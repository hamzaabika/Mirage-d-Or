
import React, { useState } from 'react';
import { Search, ChevronDown, CheckCircle2, X } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

interface FilterBarProps {
  brands: string[];
  categories: string[];
  selectedBrand: string | null;
  selectedCategory: string | null;
  selectedPrice: number;
  onBrandChange: (brand: string | null) => void;
  onCategoryChange: (category: string | null) => void;
  onPriceChange: (price: number) => void;
  onSearch: (query: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  brands,
  categories,
  selectedBrand,
  selectedCategory,
  selectedPrice,
  onBrandChange,
  onCategoryChange,
  onPriceChange,
  onSearch
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { t, isRTL } = useLanguage();

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const handleSearchToggle = () => {
    if (isSearchOpen) {
      // Close search
      setIsSearchOpen(false);
      setSearchQuery("");
      onSearch("");
    } else {
      // Open search
      setIsSearchOpen(true);
      setActiveDropdown(null);
    }
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    onSearch(val);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-full shadow-2xl p-2 md:p-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 border border-gray-100 relative transition-all duration-300" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {isSearchOpen ? (
        <div className="w-full flex items-center px-4 animate-fade-in">
           <Search className={`w-5 h-5 text-gray-400 ${isRTL ? 'ml-3' : 'mr-3'}`} />
           <input 
             type="text" 
             autoFocus
             placeholder={t('searchPlaceholder')}
             value={searchQuery}
             onChange={handleSearchInput}
             className="flex-1 bg-transparent border-none outline-none text-luxury-black font-medium h-14"
           />
           <button 
             onClick={handleSearchToggle}
             className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
           >
             <X className="w-5 h-5 text-gray-500" />
           </button>
        </div>
      ) : (
        <>
          {/* Brand Selector */}
          <div className="relative w-full md:w-auto flex-1 group z-30">
            <button 
              onClick={() => toggleDropdown('brand')}
              className={`w-full flex items-center justify-between px-6 py-3 rounded-full hover:bg-gray-50 transition-colors ${isRTL ? 'text-right' : 'text-left'} ${selectedBrand ? 'bg-luxury-gold/5' : ''}`}
            >
              <div>
                <div className={`flex items-center gap-2 text-sm font-bold mb-0.5 ${selectedBrand ? 'text-luxury-gold' : 'text-luxury-black'}`}>
                  <CheckCircle2 className={`w-4 h-4 ${selectedBrand ? 'text-luxury-gold' : 'text-gray-400'}`} />
                  {selectedBrand || t('brand')}
                </div>
                <span className="text-xs text-gray-500 block truncate max-w-[100px]">{selectedBrand || t('selectBrand')}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'brand' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'brand' && (
              <div className={`absolute top-full mt-2 w-full md:w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 animate-fade-in max-h-60 overflow-y-auto ${isRTL ? 'right-0' : 'left-0'}`}>
                 <div 
                   className={`px-4 py-2 hover:bg-gray-50 rounded-lg cursor-pointer text-sm font-bold text-gray-500 mb-1 ${!selectedBrand ? 'bg-gray-50 text-luxury-black' : ''}`}
                   onClick={() => {
                     onBrandChange(null);
                     setActiveDropdown(null);
                   }}
                 >
                   {t('allBrands')}
                 </div>
                {brands.map(brand => (
                  <div 
                    key={brand} 
                    onClick={() => {
                      onBrandChange(brand);
                      setActiveDropdown(null);
                    }}
                    className={`px-4 py-2 hover:bg-gray-50 rounded-lg cursor-pointer text-sm ${selectedBrand === brand ? 'text-luxury-gold font-bold bg-luxury-gold/5' : 'text-gray-700'}`}
                  >
                    {brand}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-gray-200"></div>

          {/* Item Selector */}
          <div className="relative w-full md:w-auto flex-1 z-20">
            <button 
              onClick={() => toggleDropdown('item')}
              className={`w-full flex items-center justify-between px-6 py-3 rounded-full hover:bg-gray-50 transition-colors ${isRTL ? 'text-right' : 'text-left'} ${selectedCategory ? 'bg-luxury-gold/5' : ''}`}
            >
              <div>
                <div className={`flex items-center gap-2 text-sm font-bold mb-0.5 ${selectedCategory ? 'text-luxury-gold' : 'text-luxury-black'}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={selectedCategory ? 'text-luxury-gold' : 'text-gray-400'}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                   {selectedCategory ? t(selectedCategory as any) : t('item')}
                </div>
                <span className="text-xs text-gray-500 block truncate max-w-[100px]">{selectedCategory ? t(selectedCategory as any) : t('selectItem')}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'item' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'item' && (
              <div className={`absolute top-full mt-2 w-full md:w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 animate-fade-in ${isRTL ? 'right-0' : 'left-0'}`}>
                 <div 
                   className={`px-4 py-2 hover:bg-gray-50 rounded-lg cursor-pointer text-sm font-bold text-gray-500 mb-1 ${!selectedCategory ? 'bg-gray-50 text-luxury-black' : ''}`}
                   onClick={() => {
                     onCategoryChange(null);
                     setActiveDropdown(null);
                   }}
                 >
                   {t('allItems')}
                 </div>
                {categories.map(item => (
                  <div 
                    key={item} 
                    onClick={() => {
                      onCategoryChange(item);
                      setActiveDropdown(null);
                    }}
                    className={`px-4 py-2 hover:bg-gray-50 rounded-lg cursor-pointer text-sm ${selectedCategory === item ? 'text-luxury-gold font-bold bg-luxury-gold/5' : 'text-gray-700'}`}
                  >
                    {t(item as any)}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-gray-200"></div>

          {/* Price Selector */}
          <div className="relative w-full md:w-auto flex-1 z-10">
            <button 
               onClick={() => toggleDropdown('price')}
               className={`w-full flex items-center justify-between px-6 py-3 rounded-full hover:bg-gray-50 transition-colors ${isRTL ? 'text-right' : 'text-left'} ${selectedPrice < 5000 ? 'bg-luxury-gold/5' : ''}`}
            >
              <div>
                <div className={`flex items-center gap-2 text-sm font-bold mb-0.5 ${selectedPrice < 5000 ? 'text-luxury-gold' : 'text-luxury-black'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={selectedPrice < 5000 ? 'text-luxury-gold' : 'text-gray-400'}><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.668 0 9-4 9-8"/></svg>
                  {t('price')}
                </div>
                <span className="text-xs text-gray-500 block">{t('maxPrice')}: {selectedPrice} {t('currency')}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'price' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'price' && (
              <div className={`absolute top-full mt-2 w-full md:w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 animate-fade-in ${isRTL ? 'right-0' : 'left-0'}`}>
                 <div className="px-4 py-3">
                   <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium">{t('maxPrice')}</p>
                      <span className="text-xs font-bold text-luxury-gold">{selectedPrice} {t('currency')}</span>
                   </div>
                   <input 
                      type="range" 
                      min="0" 
                      max="5000" 
                      step="100"
                      value={selectedPrice}
                      onChange={(e) => onPriceChange(Number(e.target.value))}
                      className="w-full accent-luxury-black h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2 text-[10px] text-gray-400">
                        <span>0</span>
                        <span>5000</span>
                    </div>
                 </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button 
            onClick={handleSearchToggle}
            className="w-full md:w-14 md:h-14 rounded-full bg-luxury-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg active:scale-95 duration-200"
          >
            <Search className="w-6 h-6" />
          </button>
        </>
      )}

    </div>
  );
};

export default FilterBar;
