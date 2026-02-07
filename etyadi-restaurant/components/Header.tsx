import React from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Page } from '../types';
import { ORDER_LINK } from '../constants';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  cartCount: number;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  setCurrentPage, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  const navItems: Page[] = ['Home', 'Menu', 'Reservations', 'About', 'Contact'];

  const handleNavClick = (item: Page) => {
    setCurrentPage(item);
    setIsMobileMenuOpen(false);
  };

  const handleOrderOnline = () => {
    window.open(ORDER_LINK, '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#EBF4DD]/80 backdrop-blur-md shadow-sm border-b border-[#90AB8B]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => setCurrentPage('Home')}
          >
            <div className="w-10 h-10 bg-[#5A7863] rounded-full flex items-center justify-center mr-2 shadow-sm">
              <span className="text-[#EBF4DD] font-serif font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#3B4953] tracking-wide">ETYADI</h1>
              <p className="text-xs text-[#5A7863] tracking-widest uppercase font-semibold">Restaurant</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  currentPage === item 
                    ? 'bg-[#5A7863] text-[#EBF4DD] shadow-md transform scale-105' 
                    : 'text-[#3B4953]/80 hover:bg-[#5A7863]/10 hover:text-[#5A7863]'
                }`}
              >
                {item}
              </button>
            ))}
            
            <div className="flex items-center gap-3 ml-4">
              <button 
                onClick={handleOrderOnline}
                className="bg-[#3B4953] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#5A7863] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Order Online <ExternalLink size={14} />
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[#3B4953] hover:text-[#5A7863] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#EBF4DD] border-t border-[#90AB8B]/30 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  currentPage === item
                    ? 'bg-[#5A7863] text-white shadow-md'
                    : 'text-[#3B4953] hover:bg-[#90AB8B]/20'
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={handleOrderOnline}
              className="w-full mt-4 bg-[#3B4953] text-white px-5 py-3 rounded-xl text-base font-medium flex items-center justify-center gap-2 shadow-md"
            >
              Order Online <ExternalLink size={16} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;