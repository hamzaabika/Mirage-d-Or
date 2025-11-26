
import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToShop = () => {
    const element = document.getElementById('shop');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[90vh] pt-32 pb-32 overflow-hidden bg-[#F5F0EB]" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Decorative Elements */}
      <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent pointer-events-none transform ${isRTL ? 'scale-x-[-1]' : ''}`}></div>
      <div className={`absolute top-1/4 ${isRTL ? 'right-10' : 'left-10'} w-96 h-96 bg-yellow-200/20 rounded-full blur-[100px] pointer-events-none`}></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className={`lg:col-span-7 flex flex-col justify-center text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'} pt-10 lg:pt-0`}>
           <div className={`inline-block mx-auto ${isRTL ? 'lg:mr-0' : 'lg:ml-0'} mb-4 px-4 py-1.5 border border-luxury-black/10 rounded-full bg-white/50 backdrop-blur-sm text-xs font-bold tracking-widest uppercase text-luxury-black/70`}>
             {t('newCollection')}
           </div>
           <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.9] tracking-tight text-luxury-black mb-6">
             {t('essenceOf')} <br />
             <span className="italic font-light text-luxury-black/80 relative inline-block">
               {t('timelessLuxury')}
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-luxury-gold opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
               </svg>
             </span>
           </h1>
           
           <p id="about" className={`text-gray-600 max-w-md mx-auto ${isRTL ? 'lg:mr-0' : 'lg:ml-0'} text-lg leading-relaxed mt-4`}>
             {t('heroDesc')}
           </p>

           <div className={`flex flex-col sm:flex-row gap-4 mt-8 justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-start'}`}>
             <button 
                onClick={scrollToShop}
                className="bg-luxury-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
             >
               {t('shopCollection')}
             </button>
             <button 
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-luxury-black/10 hover:bg-white transition-colors"
             >
               <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-luxury-black">
                  <Mail className="w-4 h-4" />
               </span>
               {t('contact')}
             </button>
           </div>
        </div>

        {/* Image Content */}
        <div className={`lg:col-span-5 relative flex justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-end'} items-center`}>
            {/* Main Bottle Image */}
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px] z-10">
               <img 
                 src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop" 
                 alt="Luxury Perfume Bottle" 
                 className="w-full h-full object-cover rounded-[10rem] rounded-t-full shadow-2xl"
               />
               
               {/* Floating Price Tag */}
               <div className={`absolute bottom-12 ${isRTL ? '-right-8' : '-left-8'} bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow`}>
                  <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold font-bold text-xs">
                      {t('currency')}
                    </div>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <span className="block font-serif text-2xl font-bold text-luxury-black">980</span>
                      <span className="text-[10px] uppercase tracking-wider text-gray-500">{t('startingPrice')}</span>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Abstract Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-luxury-gold/10 rounded-full z-0 pointer-events-none animate-spin-slow-reverse"></div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
