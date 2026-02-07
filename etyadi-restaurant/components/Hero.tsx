import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronRight, Star } from 'lucide-react';
import { Page } from '../types';
import { ORDER_LINK } from '../constants';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1920", // Original Ambiance
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920", // Interior Detail
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920"  // Dark Food Spread
];

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={img}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt={`Etyadi Ambiance ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#3B4953]/90"></div>
        </div>
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="inline-block px-4 py-1 border border-[#EBF4DD]/30 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-fade-in-up">
          <span className="text-[#EBF4DD] text-sm tracking-widest uppercase font-semibold">Est. 2024 • Silchar, Assam</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#EBF4DD] mb-6 leading-tight drop-shadow-lg">
          Where Nature Meets <span className="text-[#90AB8B]">Flavor</span>
        </h1>
        <p className="text-xl text-[#EBF4DD]/90 mb-10 max-w-2xl mx-auto font-light">
          Experience premium dining amidst authentic bamboo aesthetics. 
          Taste the essence of freshness in every bite.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => window.open(ORDER_LINK, '_blank')}
            className="w-full sm:w-auto px-8 py-4 bg-[#5A7863] hover:bg-[#3B4953] text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            Order Online <ShoppingBag size={20} />
          </button>
          <button 
            onClick={() => setCurrentPage('Reservations')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#EBF4DD] text-[#EBF4DD] hover:bg-[#EBF4DD] hover:text-[#3B4953] rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
          >
            Book A Table <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="mt-12 flex justify-center items-center gap-6 text-[#EBF4DD]/80">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400 fill-current" size={20} />
            <span className="font-semibold">4.0 (668+ Reviews)</span>
          </div>
          <div className="h-4 w-px bg-[#EBF4DD]/30"></div>
          <div>
            <span className="font-semibold">Open Now: </span> Closes 10 PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;