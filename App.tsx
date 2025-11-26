
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import BrandGrid from './components/BrandGrid';
import CollectionGrid from './components/CollectionGrid';
import CategoryGrid from './components/CategoryGrid';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetails from './components/ProductDetails';
import AuthModal from './components/AuthModal';
import { CartProvider } from './lib/CartContext';
import { LanguageProvider, useLanguage } from './lib/LanguageContext';
import { products, Product, uniqueBrands, uniqueCategories } from './lib/data';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

type ViewState = 'home' | 'shop' | 'categories' | 'product' | 'success';

interface FilterState {
  brand: string | null;
  category: string | null;
  maxPrice: number;
  searchQuery: string;
  gender: string | null;
  family: string | null;
  note: string | null;
  collection: string | null;
  tag: string | null;
}

const AppContent: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useLanguage();

  // Consolidated Filter State
  const [filters, setFilters] = useState<FilterState>({
    brand: null,
    category: null,
    maxPrice: 5000, 
    searchQuery: "",
    gender: null,
    family: null,
    note: null,
    collection: null,
    tag: null
  });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckoutSuccess = () => {
    setView('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch to Category Overview
  const handleCategoryOverview = () => {
    setView('categories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch to Shop View (Filtered)
  const handleShopNavigation = (criteria: Partial<FilterState>) => {
    setFilters(prev => ({
      ...prev,
      brand: null,
      category: null,
      gender: null,
      family: null,
      note: null,
      collection: null,
      tag: null,
      ...criteria // Overwrite with new criteria
    }));
    setView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Navbar Navigation (Generic)
  const handleNavigation = (criteria: Partial<FilterState>) => {
      // If we are filtering by brand/gender/etc, go to shop view
      // If it's just a scroll to action from Home, handle separately
      handleShopNavigation(criteria);
  };

  // Handle Category Grid Click -> Go to Shop View
  const handleCategoryClick = (criteria: Partial<FilterState>) => {
     handleShopNavigation(criteria);
  };

  // Handle Brand Click -> Go to Shop View
  const handleBrandClick = (brand: string) => {
     handleShopNavigation({ brand });
  };

  // Handle individual filter change from ProductList
  const handleFilterChange = (key: string, value: string | null) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchBrand = filters.brand ? product.brand === filters.brand : true;
      const matchCategory = filters.category ? product.category === filters.category : true;
      const matchPrice = product.price <= filters.maxPrice;
      const matchSearch = filters.searchQuery 
        ? product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) || 
          product.brand.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
          (product.name_ar && product.name_ar.includes(filters.searchQuery)) // Support Arabic search
        : true;
      
      const matchGender = filters.gender ? product.gender === filters.gender || product.gender === 'Unisex' : true;
      const matchFamily = filters.family ? product.family === filters.family : true;
      const matchNote = filters.note ? product.notes.some(n => n.includes(filters.note!)) : true;
      const matchCollection = filters.collection ? product.collection === filters.collection : true;
      const matchTag = filters.tag ? product.tags?.includes(filters.tag) : true;

      return matchBrand && matchCategory && matchPrice && matchSearch && matchGender && matchFamily && matchNote && matchCollection && matchTag;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-luxury-cream flex flex-col font-sans transition-all duration-300">
      <Navbar 
        onHomeClick={handleBackToHome} 
        onNavigate={handleNavigation} 
        onCategoryOverview={handleCategoryOverview}
        onOpenAuth={() => setIsAuthOpen(true)}
      />
      <CartDrawer onCheckout={handleCheckoutSuccess} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <div className="animate-fade-in">
            <div className="relative">
              <Hero />
              <div className="relative z-20 -mt-16 px-4">
                <FilterBar 
                  brands={uniqueBrands}
                  categories={uniqueCategories}
                  selectedBrand={filters.brand}
                  selectedCategory={filters.category}
                  selectedPrice={filters.maxPrice}
                  onBrandChange={(val) => setFilters(prev => ({ ...prev, brand: val }))}
                  onCategoryChange={(val) => setFilters(prev => ({ ...prev, category: val }))}
                  onPriceChange={(val) => setFilters(prev => ({ ...prev, maxPrice: val }))}
                  onSearch={(val) => setFilters(prev => ({ ...prev, searchQuery: val }))}
                />
              </div>
            </div>
            
            <div className="bg-white pt-24 pb-16 rounded-t-[3rem] -mt-10 relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
               <BrandGrid onBrandClick={handleBrandClick} />
               <CategoryGrid 
                  onCategoryClick={handleCategoryClick} 
                  onCategoryOverview={handleCategoryOverview}
               />
               
               {/* Featured Products on Home - Show subset or specific list */}
               <ProductList 
                  products={filteredProducts.slice(0, 6)} 
                  onProductClick={handleProductClick}
                  activeFilters={{}} // No active filters display on home usually
                  onFilterChange={handleFilterChange}
                  // title is handled inside via translations now
               />
               <div className="flex justify-center mt-8">
                  <button 
                    onClick={() => handleShopNavigation({})}
                    className="bg-luxury-black text-white px-8 py-3 rounded-full font-bold hover:bg-luxury-gold transition-colors"
                  >
                    {t('viewAllProducts')}
                  </button>
               </div>

               <CollectionGrid />
               <Testimonials />
               <ContactSection />
               <Newsletter />
            </div>
          </div>
        )}

        {view === 'categories' && (
           <div className="pt-24 pb-12 animate-fade-in">
              <CategoryGrid 
                  onCategoryClick={handleCategoryClick} 
                  onCategoryOverview={handleCategoryOverview}
                  isPage={true} 
              />
              <Newsletter />
           </div>
        )}

        {view === 'shop' && (
           <div className="pt-24 pb-12 animate-fade-in min-h-screen">
               <div className="px-4 mb-8">
                <FilterBar 
                    brands={uniqueBrands}
                    categories={uniqueCategories}
                    selectedBrand={filters.brand}
                    selectedCategory={filters.category}
                    selectedPrice={filters.maxPrice}
                    onBrandChange={(val) => setFilters(prev => ({ ...prev, brand: val }))}
                    onCategoryChange={(val) => setFilters(prev => ({ ...prev, category: val }))}
                    onPriceChange={(val) => setFilters(prev => ({ ...prev, maxPrice: val }))}
                    onSearch={(val) => setFilters(prev => ({ ...prev, searchQuery: val }))}
                  />
               </div>
               <ProductList 
                  products={filteredProducts} 
                  onProductClick={handleProductClick}
                  activeFilters={{
                     gender: filters.gender,
                     family: filters.family,
                     note: filters.note,
                     collection: filters.collection,
                     brand: filters.brand,
                     tag: filters.tag
                  }}
                  onFilterChange={handleFilterChange}
                  onBreadcrumbHome={handleBackToHome}
                  onBreadcrumbShop={() => handleShopNavigation({})}
               />
           </div>
        )}

        {view === 'product' && selectedProduct && (
          <ProductDetails 
            product={selectedProduct} 
            onBack={() => setView(filters.gender ? 'shop' : 'home')} 
          />
        )}

        {view === 'success' && (
           <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 animate-fade-in">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg animate-bounce-slow">
                 <CheckCircle2 className="w-12 h-12" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-luxury-black">{t('orderConfirmed')}</h1>
              <p className="text-gray-500 text-lg max-w-md mb-8">
                 {t('thankYouOrder')}
              </p>
              <button 
                 onClick={handleBackToHome}
                 className="bg-luxury-black text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-luxury-gold transition-colors flex items-center gap-2"
              >
                 <ShoppingBag className="w-5 h-5" /> {t('continueShopping')}
              </button>
           </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;
