
import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

const CollectionGrid: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="bg-luxury-black text-white py-24 rounded-[3rem] my-20 mx-4 md:mx-6 overflow-hidden relative" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/10 to-transparent pointer-events-none`}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
              <span className="text-luxury-gold font-bold uppercase tracking-[0.2em] text-xs">{t('exquisiteSelections')}</span>
              <h2 className="font-serif text-4xl md:text-6xl mt-4">{t('perfumesCollections')}</h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Feature 1 */}
              <div className="group relative cursor-pointer">
                 <div className="relative h-[600px] overflow-hidden rounded-t-[10rem] rounded-b-[2rem]">
                    <img 
                       src="https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=800&auto=format&fit=crop" 
                       alt="Royal Oud" 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 p-10 flex flex-col justify-between">
                       <div className={`self-end ${isRTL ? 'self-start' : 'self-end'}`}>
                          <span className="bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                             {t('limitedEdition')}
                          </span>
                       </div>
                       <div className={isRTL ? 'text-right' : 'text-left'}>
                          <h3 className="font-serif text-5xl mb-2">{t('royalOudTitle')}</h3>
                          <p className="text-gray-300 max-w-sm text-lg font-light leading-relaxed">
                             {t('royalOudDesc')}
                          </p>
                          <button className="mt-8 text-luxury-gold uppercase tracking-widest text-xs font-bold border-b border-luxury-gold pb-1 hover:text-white hover:border-white transition-colors">
                             {t('discoverCollection')}
                          </button>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Feature 2 & 3 */}
              <div className="flex flex-col gap-12">
                 <div className="group relative cursor-pointer h-[280px] rounded-[3rem] overflow-hidden">
                    <img 
                       src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop" 
                       alt="French Heritage" 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-75"
                    />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                     <div className={`absolute bottom-8 ${isRTL ? 'right-8 text-right' : 'left-8 text-left'}`}>
                        <h3 className="font-serif text-3xl mb-1">{t('frenchHeritageTitle')}</h3>
                        <p className="text-gray-300 text-sm">{t('frenchHeritageDesc')}</p>
                     </div>
                 </div>

                 <div className="group relative cursor-pointer h-[280px] rounded-[3rem] overflow-hidden">
                    <img 
                       src="https://fragrant-gift.myshopify.com/cdn/shop/products/orchid6_1024x1024@2x.jpg?v=1601677884" 
                       alt="Floral Symphony" 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-75"
                    />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                     <div className={`absolute bottom-8 ${isRTL ? 'right-8 text-right' : 'left-8 text-left'}`}>
                        <h3 className="font-serif text-3xl mb-1">{t('rareFlowersTitle')}</h3>
                        <p className="text-gray-300 text-sm">{t('rareFlowersDesc')}</p>
                     </div>
                 </div>
              </div>

           </div>
        </div>
    </section>
  );
};

export default CollectionGrid;
