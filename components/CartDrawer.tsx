
import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight, Loader2 } from 'lucide-react';
import { useCart } from '../lib/CartContext';
import { useLanguage } from '../lib/LanguageContext';

interface CartDrawerProps {
  onCheckout?: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ onCheckout }) => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { t, isRTL, language } = useLanguage();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate API call
    setTimeout(() => {
        setIsCheckingOut(false);
        setIsCartOpen(false);
        if (onCheckout) onCheckout();
    }, 1500);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex ${isRTL ? 'justify-start' : 'justify-end'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-out animate-slide-in">
        <div className="p-6 flex items-center justify-between border-b border-gray-100 bg-white z-10">
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" /> {t('yourBag')}
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                 <ShoppingBag className="w-10 h-10 opacity-30" />
              </div>
              <p className="font-medium text-lg">{t('emptyBag')}</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-luxury-black font-bold underline underline-offset-4 hover:text-luxury-gold transition-colors"
              >
                {t('startShopping')}
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 animate-fade-in">
                <div className="w-24 h-28 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-serif font-bold text-lg leading-tight mb-1">
                          {language === 'ar' && item.name_ar ? item.name_ar : item.name}
                        </h3>
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">{item.brand} — {item.size}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-2 py-1 border border-gray-100">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:text-luxury-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-luxury-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-bold text-luxury-black">{item.price * item.quantity} {t('currency')}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-gray-50/50 backdrop-blur-sm">
                <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{t('subtotal')}</span>
                        <span>{cartTotal} {t('currency')}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{t('shipping')}</span>
                        <span className="text-green-600 font-medium">{t('free')}</span>
                    </div>
                    <div className="flex items-center justify-between text-xl font-serif font-bold pt-2 border-t border-gray-200">
                        <span>{t('total')}</span>
                        <span>{cartTotal} {t('currency')}</span>
                    </div>
                </div>
                
                <button 
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full bg-luxury-black text-white py-4 rounded-xl font-bold tracking-wide hover:bg-gray-800 transition-all transform hover:scale-[1.01] shadow-lg flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed"
                >
                    {isCheckingOut ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" /> {t('processing')}
                        </>
                    ) : (
                        <>
                            {t('checkout')} <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                        </>
                    )}
                </button>
                <p className="text-[10px] text-gray-400 mt-3 text-center flex items-center justify-center gap-1">
                    <ShieldCheckIcon className="w-3 h-3" /> {t('secureCheckout')}
                </p>
            </div>
        )}
      </div>
    </div>
  );
};

function ShieldCheckIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    )
}

export default CartDrawer;
