import React, { useState } from 'react';
import { Search, ExternalLink, Star } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, ORDER_LINK } from '../constants';

interface MenuSectionProps {
  addToCart: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['All', 'Signature', 'Starters', 'Main Course', 'Chinese', 'Rice', 'Beverages', 'Dessert'];

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-[#EBF4DD] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#5A7863] font-bold tracking-widest uppercase text-sm">Culinary Excellence</span>
          <h2 className="text-4xl font-serif font-bold text-[#3B4953] mt-2">Our Menu</h2>
          <p className="mt-4 text-[#3B4953]/80 max-w-2xl mx-auto">
            A fusion of traditional Assamese flavors, classic North Indian dishes, and modern culinary arts.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 sticky top-20 z-30 bg-[#EBF4DD]/95 py-4 px-2 rounded-xl backdrop-blur-sm shadow-sm">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto hide-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#5A7863] text-white shadow-md' 
                    : 'bg-white/60 text-[#3B4953] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#90AB8B]" size={18} />
            <input 
              type="text" 
              placeholder="Search dishes..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-[#90AB8B]/30 focus:outline-none focus:ring-2 focus:ring-[#5A7863] bg-white/80"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                  <Star className="text-yellow-400 fill-current" size={14} />
                  <span className="text-xs font-bold text-[#3B4953]">{item.rating}</span>
                </div>
                {item.category === 'Signature' && (
                  <div className="absolute top-3 left-3 bg-[#5A7863] text-white px-2 py-1 rounded-md text-xs font-bold uppercase shadow-sm">
                    Bestseller
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-bold text-lg text-[#3B4953] leading-tight">{item.name}</h3>
                  <div className={`w-4 h-4 rounded-sm border flex items-center justify-center flex-shrink-0 ${item.type === 'veg' ? 'border-green-600' : 'border-red-600'}`}>
                    <div className={`w-2 h-2 rounded-full ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}></div>
                  </div>
                </div>
                <p className="text-[#3B4953]/70 text-sm line-clamp-2 mb-4 h-10">{item.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-lg font-bold text-[#5A7863]">₹{item.price}</span>
                  <button 
                    onClick={() => window.open(ORDER_LINK, '_blank')}
                    className="px-4 py-2 bg-[#EBF4DD] hover:bg-[#5A7863] hover:text-white text-[#3B4953] rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
                  >
                    Order <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;