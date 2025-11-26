
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const ContactSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-6 py-24" id="contact-form">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <span className={`text-luxury-gold font-bold uppercase tracking-widest text-xs mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('getInTouch')}
          </span>
          <h2 className={`font-serif text-4xl md:text-5xl text-luxury-black mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('contactTitle')}
          </h2>
          <p className={`text-gray-600 text-lg leading-relaxed mb-10 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('contactDesc')}
          </p>

          <div className="space-y-6">
            <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
               <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0 text-luxury-gold">
                 <Phone className="w-5 h-5" />
               </div>
               <div>
                  <h4 className="font-bold text-luxury-black mb-1" dir="ltr">+212 00 00 00 00</h4>
                  <p className="text-sm text-gray-500">{t('workingHours')}</p>
               </div>
            </div>
            
            <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
               <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0 text-luxury-gold">
                 <Mail className="w-5 h-5" />
               </div>
               <div>
                  <h4 className="font-bold text-luxury-black mb-1">contact@miragedor.ma</h4>
                  <p className="text-sm text-gray-500">{t('onlineSupport')}</p>
               </div>
            </div>

            <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
               <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0 text-luxury-gold">
                 <MapPin className="w-5 h-5" />
               </div>
               <div>
                  <h4 className="font-bold text-luxury-black mb-1">{t('locationCity')}</h4>
                  <p className="text-sm text-gray-500">{t('locationAddress')}</p>
               </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100">
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className={`block text-sm font-bold text-luxury-black ${isRTL ? 'text-right' : 'text-left'}`}>{t('name')}</label>
                    <input type="text" className={`w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all ${isRTL ? 'text-right' : ''}`} placeholder={isRTL ? 'الاسم الكامل' : 'Full name'} />
                 </div>
                 <div className="space-y-2">
                    <label className={`block text-sm font-bold text-luxury-black ${isRTL ? 'text-right' : 'text-left'}`}>{t('email')}</label>
                    <input type="email" className={`w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all ${isRTL ? 'text-right' : ''}`} placeholder="name@example.com" />
                 </div>
              </div>
              
              <div className="space-y-2">
                 <label className={`block text-sm font-bold text-luxury-black ${isRTL ? 'text-right' : 'text-left'}`}>{t('subject')}</label>
                 <input type="text" className={`w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all ${isRTL ? 'text-right' : ''}`} placeholder={isRTL ? 'كيف يمكننا مساعدتك؟' : 'How can we help?'} />
              </div>

              <div className="space-y-2">
                 <label className={`block text-sm font-bold text-luxury-black ${isRTL ? 'text-right' : 'text-left'}`}>{t('message')}</label>
                 <textarea rows={4} className={`w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all ${isRTL ? 'text-right' : ''}`} placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}></textarea>
              </div>

              <button type="button" className="w-full bg-luxury-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-luxury-gold transition-colors shadow-lg">
                 {isRTL ? <><Send className="w-4 h-4 ml-2" /> {t('sendMessage')}</> : <>{t('sendMessage')} <Send className="w-4 h-4" /></>}
              </button>
           </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
