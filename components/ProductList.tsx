
import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag, Eye, SearchX, ChevronRight, Home } from 'lucide-react';
import { Product } from '../lib/data';
import { useCart } from '../lib/CartContext';
import { useLanguage } from '../lib/LanguageContext';

interface ProductListProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  activeFilters?: {
    gender?: string | null;
    family?: string | null;
    note?: string | null;
    collection?: string | null;
    brand?: string | null;
    tag?: string | null;
  };
  onFilterChange?: (key: string, value: string | null) => void;
  title?: string;
  onBreadcrumbHome?: () => void;
  onBreadcrumbShop?: () => void;
}

const ProductList: React.FC<ProductListProps> = ({ 
    products, 
    onProductClick, 
    activeFilters, 
    onFilterChange, 
    title,
    onBreadcrumbHome,
    onBreadcrumbShop
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  const { t, isRTL, language } = useLanguage();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      const modifier = isRTL ? -1 : 1;
      
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount * modifier : scrollAmount * modifier,
        behavior: 'smooth'
      });
    }
  };

  const getTitle = () => {
    if (title) return title;
    if (activeFilters?.gender === 'Women') return t('womenPerfume');
    if (activeFilters?.gender === 'Men') return t('menColognes');
    if (activeFilters?.gender === 'Unisex') return t('unisexCollections');
    if (activeFilters?.tag === 'Niche') return t('nicheFragrances');
    if (activeFilters?.brand) return `${activeFilters.brand}`;
    return t('exploreLatest');
  };

  const getCurrentCategoryName = () => {
    if (activeFilters?.gender) return t(activeFilters.gender.toLowerCase() as any);
    if (activeFilters?.tag) return activeFilters.tag;
    if (activeFilters?.brand) return activeFilters.brand;
    return t('all');
  };

  const tabs = ['All', 'Women', 'Men', 'Unisex'];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12" id="shop" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Breadcrumbs */}
      {onBreadcrumbHome && (
        <div className={`flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <button onClick={onBreadcrumbHome} className="hover:text-luxury-black flex items-center gap-1">
                <Home className="w-3 h-3" /> {t('home')}
            </button>
            <ChevronRight className={`w-3 h-3 text-gray-300 ${isRTL ? 'rotate-180' : ''}`} />
            <button onClick={onBreadcrumbShop} className="hover:text-luxury-black">
                {t('shopByCategories')}
            </button>
            <ChevronRight className={`w-3 h-3 text-gray-300 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="text-luxury-gold font-bold">{getCurrentCategoryName()}</span>
        </div>
      )}

      <div className={`flex flex-col md:flex-row items-end justify-between mb-8 gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
        <div className={`w-full ${isRTL ? 'text-right' : 'text-left'}`}>
          <span className="text-luxury-gold font-bold uppercase tracking-widest text-xs mb-2 block">
             {t('shopCategories')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-black transition-all duration-300">
            {getTitle()}
          </h2>
        </div>
        
        <div className={`hidden md:flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-luxury-black hover:text-white transition-colors"
          >
            <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-luxury-black hover:text-white transition-colors"
          >
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Gender Tabs */}
      <div className={`flex gap-8 border-b border-gray-100 mb-10 overflow-x-auto no-scrollbar ${isRTL ? 'flex-row-reverse' : ''}`}>
        {tabs.map(tab => {
          const isActive = tab === 'All' 
            ? !activeFilters?.gender 
            : activeFilters?.gender === tab;
            
          return (
            <button
              key={tab}
              onClick={() => onFilterChange && onFilterChange('gender', tab === 'All' ? null : tab)}
              className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                isActive 
                  ? 'border-b-2 border-luxury-gold text-luxury-black scale-105' 
                  : 'border-b-2 border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {t(tab.toLowerCase() as any)}
            </button>
          );
        })}
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-3xl animate-fade-in">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <SearchX className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="font-serif text-xl font-bold text-gray-700 mb-2">{t('noScentsFound')}</h3>
          <p className="text-gray-500 max-w-xs">{t('tryAdjusting')}</p>
        </div>
      ) : (
        <div 
          ref={scrollRef}
          className={`flex gap-8 overflow-x-auto pb-12 pt-4 no-scrollbar snap-x snap-mandatory px-2 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[280px] md:min-w-[320px] snap-center group relative animate-fade-in text-left" dir="ltr">
              <div 
                className="relative bg-white rounded-[2rem] overflow-hidden aspect-[4/5] mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   loading="lazy"
                 />
                 
                 {/* Overlay Actions */}
                 <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                   <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="flex-1 bg-luxury-black text-white py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-800"
                   >
                     <ShoppingBag className="w-4 h-4" /> {t('addToCart')}
                   </button>
                   <button className="w-12 bg-white text-luxury-black py-3 rounded-xl flex items-center justify-center hover:bg-gray-100 shadow-md">
                     <Eye className="w-4 h-4" />
                   </button>
                 </div>

                 <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} flex flex-col gap-2 items-start`}>
                    <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm">
                        {product.brand}
                    </div>
                    {product.tags && product.tags.includes('Best Seller') && (
                       <div className="bg-luxury-gold/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                          Best Seller
                       </div>
                    )}
                 </div>
              </div>
              
              <div className={`px-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-center justify-between mb-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <h3 
                    className="font-serif text-2xl text-luxury-black cursor-pointer hover:text-luxury-gold transition-colors"
                    onClick={() => onProductClick(product)}
                  >
                    {language === 'ar' ? product.name_ar : product.name}
                  </h3>
                  <span className="font-sans font-bold text-lg text-luxury-black">{product.price} {t('currency')}</span>
                </div>
                <div className={`flex items-center gap-2 mb-1 flex-wrap ${isRTL ? 'justify-end' : ''}`}>
                   <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full">
                     {language === 'ar' && product.gender_ar ? product.gender_ar : product.gender}
                   </span>
                   <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full">
                     {language === 'ar' && product.family_ar ? product.family_ar : product.family}
                   </span>
                </div>
                <p className="text-gray-500 text-sm line-clamp-1">
                  {language === 'ar' && product.description_ar ? product.description_ar : product.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* "View All" Card */}
          <div className="min-w-[200px] flex items-center justify-center snap-center">
               <button onClick={onBreadcrumbShop} className="group flex flex-col items-center gap-4 text-gray-400 hover:text-luxury-black transition-colors">
                 <div className="w-20 h-20 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-luxury-black group-hover:text-white group-hover:border-luxury-black transition-all">
                    <ArrowRight className={`w-8 h-8 ${isRTL ? 'rotate-180' : ''}`} />
                 </div>
                 <span className="font-serif text-xl font-bold">{t('viewAll')}</span>
               </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductList;
