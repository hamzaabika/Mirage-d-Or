
import React, { useState } from 'react';
import { X, User, Mail, Lock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { t, isRTL } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden animate-fade-in">
         {/* Header */}
         <div className="bg-[#F9F4EF] p-8 text-center relative">
            <button onClick={onClose} className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} p-2 hover:bg-black/5 rounded-full transition-colors`}>
               <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-luxury-gold font-serif font-bold text-2xl">
               M
            </div>
            <h2 className="font-serif text-2xl font-bold text-luxury-black">
               {isLogin ? t('welcomeBack') : t('joinMirage')}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
               {isLogin ? t('signInDesc') : t('signUpDesc')}
            </p>
         </div>

         {/* Form */}
         <div className="p-8">
            <div className="flex gap-4 mb-6 p-1 bg-gray-50 rounded-full">
               <button 
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 text-sm font-bold rounded-full transition-all ${isLogin ? 'bg-white shadow-sm text-luxury-black' : 'text-gray-400 hover:text-gray-600'}`}
               >
                  {t('signIn')}
               </button>
               <button 
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 text-sm font-bold rounded-full transition-all ${!isLogin ? 'bg-white shadow-sm text-luxury-black' : 'text-gray-400 hover:text-gray-600'}`}
               >
                  {t('signUp')}
               </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-4">
               {!isLogin && (
                  <div className="relative">
                     <User className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400`} />
                     <input type="text" placeholder={t('fullName')} className={`w-full bg-gray-50 border-none rounded-xl py-3 ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} outline-none focus:ring-2 focus:ring-luxury-gold/20`} />
                  </div>
               )}
               <div className="relative">
                  <Mail className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400`} />
                  <input type="email" placeholder={t('emailAddress')} className={`w-full bg-gray-50 border-none rounded-xl py-3 ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} outline-none focus:ring-2 focus:ring-luxury-gold/20`} />
               </div>
               <div className="relative">
                  <Lock className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400`} />
                  <input type="password" placeholder={t('password')} className={`w-full bg-gray-50 border-none rounded-xl py-3 ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} outline-none focus:ring-2 focus:ring-luxury-gold/20`} />
               </div>

               <button className="w-full bg-luxury-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-luxury-gold transition-colors shadow-lg mt-4">
                  {isLogin ? t('signIn') : t('createAccount')} 
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
               </button>
            </form>
         </div>
      </div>
    </div>
  );
};

export default AuthModal;
