
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

interface CategoryGridProps {
  onCategoryClick: (filters: any) => void;
  onCategoryOverview?: () => void;
  isPage?: boolean;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategoryClick, onCategoryOverview, isPage = false }) => {
  const { t, isRTL } = useLanguage();

  const categories: { title: string; filters: any; image: string; desc: string }[] = [
    {
      title: t('womenPerfume'),
      filters: { gender: "Women" },
      image: "https://media.istockphoto.com/id/1376552130/photo/studio-shot-of-a-young-woman-spraying-herself-with-perfume.jpg?s=612x612&w=0&k=20&c=q91cciLSUxLqFnc827B0i0pIki7zpU9WKWCtZ9bElR4=",
      desc: t('women')
    },
    {
      title: t('menColognes'),
      filters: { gender: "Men" },
      image: "https://www.thefashionisto.com/wp-content/uploads/2021/02/Suit-Wearing-Man-Spraying-Cologne-Fragrance.jpg",
      desc: t('men')
    },
    {
      title: t('unisexCollections'),
      filters: { gender: "Unisex" },
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop",
      desc: t('unisex')
    },
    {
      title: t('nicheFragrances'),
      filters: { tag: "Niche" },
      image: "https://images.unsplash.com/photo-1512777576244-b846ac3d816f?q=80&w=600&auto=format&fit=crop",
      desc: "Rare & Exclusive"
    }
  ];

  if (isPage) {
     categories.push(
       {
         title: t('giftSets'),
         filters: { category: "Gift Set" },
         image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
         desc: t('giftSetsDesc')
       },
       {
         title: t('bestSellersTitle'),
         filters: { tag: "Best Seller" },
         image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop",
         desc: t('mostLoved')
       }
     );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
       <div className={`flex justify-between items-end mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h2 className={`font-serif text-3xl md:text-5xl text-luxury-black ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('shopByCategories')}
          </h2>
          {!isPage && (
            <button 
              onClick={() => onCategoryOverview && onCategoryOverview()}
              className={`hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-luxury-gold transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('viewAllCategories')} <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          )}
       </div>

       <div className={`grid grid-cols-1 md:grid-cols-2 ${isPage ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              onClick={() => onCategoryClick(cat.filters)}
              className="group relative h-[300px] md:h-[450px] overflow-hidden rounded-[2rem] cursor-pointer shadow-md hover:shadow-xl transition-all"
            >
               <img 
                 src={cat.image} 
                 alt={cat.title} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
               
               <div className={`absolute bottom-6 ${isRTL ? 'right-6 text-right' : 'left-6 text-left'} text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300`}>
                  <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-1 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">{cat.desc}</span>
                  <h3 className="font-serif text-2xl font-medium">{cat.title}</h3>
               </div>
            </div>
          ))}
       </div>
    </section>
  );
};

export default CategoryGrid;
