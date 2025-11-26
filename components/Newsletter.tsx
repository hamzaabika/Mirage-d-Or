
import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

const Newsletter: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24" dir={isRTL ? 'rtl' : 'ltr'}>
       <div className="bg-[#F9F4EF] rounded-[3rem] px-6 py-20 md:p-20 text-center relative overflow-hidden border border-luxury-black/5">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-luxury-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="font-serif text-4xl md:text-5xl text-luxury-black mb-4">{t('unlockDiscount')}</h2>
             <p className="text-lg text-gray-600 mb-8">
               {t('subscribeDesc')}
             </p>
             
             <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder={t('emailPlaceholder')}
                  className={`flex-1 px-8 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-luxury-gold bg-white ${isRTL ? 'text-right' : 'text-left'}`}
                />
                <button 
                  type="button"
                  className="bg-luxury-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-luxury-gold transition-colors shadow-lg"
                >
                  {t('subscribeBtn')}
                </button>
             </form>
             <p className="text-xs text-gray-400 mt-4">
                {t('termsAgree')}
             </p>
          </div>
       </div>
    </section>
  );
};

export default Newsletter;
