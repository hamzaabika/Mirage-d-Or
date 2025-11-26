
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../lib/data';
import { useLanguage } from '../lib/LanguageContext';

const Testimonials: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-6 py-24" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="text-center mb-16">
         <span className="text-luxury-gold font-bold uppercase tracking-widest text-xs">{t('voiceOfExcellence')}</span>
         <h2 className="font-serif text-4xl md:text-5xl mt-3 text-luxury-black">{t('customerReviews')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {reviews.map((review) => (
            <div key={review.id} className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-xl transition-shadow relative border border-gray-50">
               <Quote className={`w-10 h-10 text-luxury-gold/20 absolute top-8 ${isRTL ? 'left-8' : 'right-8'}`} />
               <div className={`flex text-luxury-gold mb-6 ${isRTL ? 'justify-end' : ''}`}>
                  {[...Array(review.rating)].map((_, i) => (
                     <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
               </div>
               <p className={`text-gray-600 italic font-serif text-lg leading-relaxed mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                  "{review.content}"
               </p>
               <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h4 className="font-bold text-luxury-black">{review.author}</h4>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">{review.role}</span>
               </div>
            </div>
         ))}
      </div>
    </section>
  );
};

export default Testimonials;
