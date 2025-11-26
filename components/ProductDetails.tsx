
import React from 'react';
import { ArrowLeft, Star, Truck, ShieldCheck, Heart } from 'lucide-react';
import { Product } from '../lib/data';
import { useCart } from '../lib/CartContext';
import { useLanguage } from '../lib/LanguageContext';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack }) => {
  const { addToCart } = useCart();
  const { t, isRTL, language } = useLanguage();

  const name = language === 'ar' && product.name_ar ? product.name_ar : product.name;
  const description = language === 'ar' && product.description_ar ? product.description_ar : product.description;
  const notes = language === 'ar' && product.notes_ar ? product.notes_ar : product.notes;

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 animate-fade-in" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-luxury-black transition-colors mb-8 group"
        >
          <div className={`bg-gray-100 p-2 rounded-full group-hover:bg-gray-200 transition-colors ${isRTL ? 'rotate-180' : ''}`}>
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="font-medium">{t('backToShop')}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="relative h-[500px] lg:h-[700px] bg-[#F5F5F5] rounded-[3rem] overflow-hidden group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'} bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-sm`}>
                {product.brand}
            </div>
          </div>

          {/* Info Section */}
          <div className={`flex flex-col justify-center ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
               <div className="flex text-luxury-gold">
                   {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
               </div>
               <span className="text-gray-400 text-sm">(124 {t('reviews')})</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl text-luxury-black mb-4">{name}</h1>
            <p className="text-3xl font-light text-gray-900 mb-8">{product.price} {t('currency')}</p>

            <div className="prose prose-lg text-gray-500 mb-10 leading-relaxed">
              {description}
            </div>

            {/* Notes */}
            <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-luxury-black">{t('fragranceNotes')}</h3>
                <div className="flex flex-wrap gap-3">
                    {notes.map(note => (
                        <span key={note} className="px-6 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-luxury-gold hover:text-luxury-gold transition-colors cursor-default">
                            {note}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4 mb-12">
                <button 
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-luxury-black text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-luxury-gold transition-colors shadow-xl active:scale-95 duration-200"
                >
                    {t('addToCart')} - {product.price} {t('currency')}
                </button>
                <button className="p-4 border border-gray-200 rounded-full hover:border-red-300 hover:text-red-500 transition-colors">
                    <Heart className="w-6 h-6" />
                </button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Truck className="w-5 h-5 text-luxury-gold mt-1" />
                    <div>
                        <h4 className="font-bold text-sm">{t('freeShipping')}</h4>
                        <p className="text-xs text-gray-500 mt-1">{t('onOrdersOver')}</p>
                    </div>
                </div>
                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <ShieldCheck className="w-5 h-5 text-luxury-gold mt-1" />
                    <div>
                        <h4 className="font-bold text-sm">{t('authenticity')}</h4>
                        <p className="text-xs text-gray-500 mt-1">{t('directBrands')}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
