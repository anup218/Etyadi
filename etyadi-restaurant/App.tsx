import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { Page, MenuItem } from './types';
import { TESTIMONIALS, FEATURES } from './constants';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'Home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <div className="py-20 bg-[#EBF4DD]">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {FEATURES.map((feature, idx) => (
                    <div key={idx} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border-b-4 border-[#5A7863] text-center hover:-translate-y-2 transition-transform duration-300">
                      <div className="w-16 h-16 bg-[#EBF4DD] rounded-full flex items-center justify-center mx-auto mb-6 text-[#5A7863]">
                        <feature.icon size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-[#3B4953] mb-3">{feature.title}</h3>
                      <p className="text-[#3B4953]/70">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white/60 py-20">
               <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl" alt="Interior" />
                  </div>
                  <div className="md:w-1/2">
                     <span className="text-[#5A7863] font-bold uppercase tracking-wider text-sm">The Experience</span>
                     <h2 className="text-4xl font-serif font-bold text-[#3B4953] mt-2 mb-6">A Symphony of Taste & Texture</h2>
                     <p className="text-[#3B4953]/80 mb-8 text-lg">Whether it's a casual lunch or a celebration, Etyadi provides the perfect backdrop. Our bamboo-themed interiors are designed to calm the senses while our food ignites the palate.</p>
                     <button onClick={() => setCurrentPage('About')} className="text-[#5A7863] font-bold border-b-2 border-[#5A7863] pb-1 hover:text-[#3B4953] hover:border-[#3B4953] transition-all">Read Our Story</button>
                  </div>
               </div>
            </div>

            <div className="bg-[#5A7863] py-20 text-white">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-serif font-bold mb-12 text-[#EBF4DD]">What Our Guests Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-[#3B4953]/20 backdrop-blur-sm p-8 rounded-xl relative border border-[#90AB8B]/20">
                      <div className="flex justify-center mb-4">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-[#EBF4DD] fill-current" />
                        ))}
                      </div>
                      <p className="italic text-[#EBF4DD]/90 mb-6">"{t.text}"</p>
                      <p className="font-bold text-[#90AB8B]">- {t.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      case 'Menu':
        return <MenuSection addToCart={addToCart} />;
      case 'Reservations':
        return <ReservationSection />;
      case 'About':
        return <AboutSection />;
      case 'Contact':
        return <ContactSection />;
      default:
        return <Hero setCurrentPage={setCurrentPage} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="font-sans text-[#3B4953] bg-[#EBF4DD] min-h-screen selection:bg-[#90AB8B] selection:text-[#3B4953]">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        cartCount={cart.length}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="min-h-screen">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}