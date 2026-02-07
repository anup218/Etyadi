import React from 'react';
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-[#3B4953] text-[#EBF4DD] pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#5A7863] rounded-full flex items-center justify-center mr-2">
              <span className="text-[#EBF4DD] font-serif font-bold">E</span>
            </div>
            <h2 className="text-2xl font-serif font-bold tracking-wide">ETYADI</h2>
          </div>
          <p className="text-[#EBF4DD]/70 mb-6">
            Silchar's premier dining destination celebrating bamboo aesthetics and culinary excellence.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#5A7863]/30 flex items-center justify-center hover:bg-[#5A7863] transition-colors"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#5A7863]/30 flex items-center justify-center hover:bg-[#5A7863] transition-colors"><Instagram size={18} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-[#90AB8B]">Quick Links</h3>
          <ul className="space-y-3 text-[#EBF4DD]/70">
            <li><button className="hover:text-white transition-colors">Home</button></li>
            <li><button className="hover:text-white transition-colors">Menu</button></li>
            <li><button className="hover:text-white transition-colors">Reservations</button></li>
            <li><button className="hover:text-white transition-colors">Private Events</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-[#90AB8B]">Contact Us</h3>
          <ul className="space-y-4 text-[#EBF4DD]/70">
            <li className="flex items-start gap-3">
              <MapPin className="flex-shrink-0 mt-1" size={18} />
              <span>Near Collegiate School, Silchar, Assam 788001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} />
              <span>084030 51474</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#5A7863]"></div>
              <span>Open today: 11:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-[#90AB8B]">Newsletter</h3>
          <p className="text-[#EBF4DD]/70 mb-4 text-sm">Subscribe for exclusive offers and updates.</p>
          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-[#EBF4DD]/10 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#5A7863] outline-none text-white placeholder-white/50"
            />
            <button className="bg-[#5A7863] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#90AB8B] transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-[#EBF4DD]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#EBF4DD]/50">
        <p>&copy; 2024 Etyadi Restaurant. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;