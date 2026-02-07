import { Leaf, ChefHat, Coffee } from 'lucide-react';
import { MenuItem, Testimonial, Feature } from './types';

export const ORDER_LINK = "https://www.google.com/viewer/chooseprovider?mid=/g/11mr22dgqd&g2lbs=AIBNGdWGy1x7nxVsrYjW8OfHPQb2hyUT1j0LKLG9lPbZbqn1U8b27Hxhua3eED4sp9AxdN5iYy-bLsbNTJCf9oQCxdxnLXAx2nLzJjuhHrCeAfHwhEBN7Eo%3D&hl=en-IN&gl=in&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=6jKHaZ7vHZ-tseMPvJzrmQI&ei=6jKHaZ7vHZ-tseMPvJzrmQI&fo_s=OA&opi=79508299&orderType=1&ebb=1&cs=0&foub=mcpp";

// PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzx4cR9cWuqxZurSZkaygLenBlCrjCOpZDoa9-Z2KKzNJbSpCmLI3jYfTi8myis0HEW/exec"; 

export const MENU_ITEMS: MenuItem[] = [
  // --- Highlights & Signature ---
  { id: 1, name: "Bamboo Smoked Chicken", price: 350, category: "Signature", description: "Chicken marinated in local herbs cooked inside fresh bamboo.", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800", type: "non-veg", rating: 4.8 },
  { id: 2, name: "Butter Chicken", price: 340, category: "Signature", description: "Classic tandoori chicken simmered in a rich tomato-butter gravy.", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800", type: "non-veg", rating: 4.9 },
  { id: 3, name: "Gulab Jamun with Rabri", price: 140, category: "Dessert", description: "Hot sweet dumplings served with rich condensed milk.", image: "https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.9 },
  
  // --- Starters ---
  { id: 4, name: "French Fries", price: 120, category: "Starters", description: "Crispy golden salted fries.", image: "https://images.unsplash.com/photo-1630384060421-a4323ceca041?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.5 },
  { id: 5, name: "Fish Finger", price: 280, category: "Starters", description: "Crumb fried fish fillets served with tartar sauce.", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800", type: "non-veg", rating: 4.7 },
  { id: 6, name: "Chicken Pakoda", price: 220, category: "Starters", description: "Spiced batter fried chicken chunks.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800", type: "non-veg", rating: 4.6 },
  { id: 7, name: "Paneer Roll", price: 150, category: "Starters", description: "Spiced paneer filling wrapped in fresh paratha.", image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.4 },
  { id: 8, name: "Crispy Corn", price: 220, category: "Starters", description: "Golden fried corn kernels tossed with peppers.", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.4 },

  // --- Main Course ---
  { id: 9, name: "Paneer Butter Masala", price: 280, category: "Main Course", description: "Cottage cheese cubes in a rich, creamy tomato gravy.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.5 },
  { id: 10, name: "Shahi Begum Chicken", price: 360, category: "Main Course", description: "Royal creamy chicken curry served best with Naan.", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800", type: "non-veg", rating: 4.8 },
  { id: 11, name: "Chicken Tikka Masala", price: 340, category: "Main Course", description: "Grilled chicken chunks in spiced curry.", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800", type: "non-veg", rating: 4.7 },
  { id: 12, name: "Paneer Kolhapuri", price: 290, category: "Main Course", description: "Spicy paneer gravy served with Butter Kulcha.", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.6 },

  // --- Chinese / Noodles / Rice ---
  { id: 13, name: "Veg Hakka Noodles", price: 180, category: "Chinese", description: "Classic wok-tossed noodles with fresh vegetables.", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.3 },
  { id: 14, name: "Schezwan Egg Noodles", price: 210, category: "Chinese", description: "Spicy noodles tossed with egg and schezwan sauce.", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800", type: "non-veg", rating: 4.5 },
  { id: 15, name: "Chicken Hakka Noodles", price: 240, category: "Chinese", description: "Stir-fried noodles with tender chicken chunks.", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800", type: "non-veg", rating: 4.6 },
  { id: 16, name: "Veg Fried Rice", price: 190, category: "Rice", description: "Wok-tossed aromatic rice with finely chopped veggies.", image: "https://images.unsplash.com/photo-1603133872878-684f1084261d?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.4 },
  { id: 17, name: "Hyderabadi Biryani", price: 320, category: "Rice", description: "Aromatic basmati rice cooked with tender meat and spices.", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800", type: "non-veg", rating: 4.9 },

  // --- Beverages ---
  { id: 18, name: "Virgin Mojito", price: 140, category: "Beverages", description: "Refreshing lime and mint cooler.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.6 },
  { id: 19, name: "Fresh Lime Soda", price: 90, category: "Beverages", description: "Sweet or salted refreshing soda with lemon.", image: "https://images.unsplash.com/photo-1568457717848-7688e147e8ab?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.5 },
  { id: 20, name: "Hot Coffee", price: 80, category: "Beverages", description: "Freshly brewed hot coffee.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.4 },
  { id: 21, name: "Blue Lagoon", price: 150, category: "Beverages", description: "Refreshing blue curaçao mocktail.", image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=800", type: "veg", rating: 4.6 },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Rahul Das", text: "The bamboo aesthetics are breathtaking. Best place in Silchar for a family dinner.", rating: 5 },
  { id: 2, name: "Priya Sharma", text: "The food was authentic and the service was impeccable. A true hidden gem.", rating: 5 },
  { id: 3, name: "Amit Roy", text: "Great ambiance and the Bamboo Chicken is a must-try. Highly recommended.", rating: 4 },
];

export const FEATURES: Feature[] = [
  { icon: Leaf, title: "Bamboo Ambiance", desc: "Sustainable architecture meeting modern comfort." },
  { icon: ChefHat, title: "Expert Chefs", desc: "Culinary masters creating authentic flavors." },
  { icon: Coffee, title: "Premium Coffee", desc: "Freshly brewed artisan coffee and beverages." },
];