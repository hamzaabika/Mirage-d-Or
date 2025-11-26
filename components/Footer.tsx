
import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="col-span-1 md:col-span-1">
             <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
               <div className="w-8 h-8 flex items-center justify-center">
                 <svg viewBox="0 0 40 40" className="w-full h-full text-white fill-current">
                    <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" />
                 </svg>
               </div>
               <h3 className="font-serif text-2xl font-bold">Mirage d’Or</h3>
             </div>
             
             <p className="text-gray-400 text-sm leading-relaxed">
               {t('footerDesc')}
             </p>
             <div className={`mt-6 flex gap-4 ${isRTL ? 'justify-end' : ''}`}>
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold transition-colors cursor-pointer">
                  <span className="text-xs">IG</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold transition-colors cursor-pointer">
                  <span className="text-xs">FB</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold transition-colors cursor-pointer">
                  <span className="text-xs">X</span>
                </div>
             </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">{t('shopFooter')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">{t('allProducts')}</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">{t('bestSellers')}</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">{t('newArrivals')}</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">{t('categories')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">{t('support')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">{t('faq')}</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">{t('shippingReturns')}</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">{t('contact')}</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">{t('storeLocator')}</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6">{t('newsletterFooter')}</h4>
             <p className="text-sm text-gray-400 mb-4">{t('newsletterFooterDesc')}</p>
             <div className="flex bg-white/10 rounded-full p-1 border border-white/5 focus-within:border-white/20 transition-colors">
               <input type="email" placeholder={t('enterEmail')} className={`bg-transparent px-4 py-2 text-sm text-white w-full focus:outline-none placeholder-gray-500 ${isRTL ? 'text-right' : 'text-left'}`} />
               <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-luxury-gold hover:text-white transition-colors">
                 {t('join')}
               </button>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2025 Mirage d’Or. {t('rightsReserved')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t('privacyPolicy')}</a>
            <a href="#" className="hover:text-white">{t('termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
