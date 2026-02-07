import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  type: 'veg' | 'non-veg';
  rating: number;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export type Page = 'Home' | 'Menu' | 'Reservations' | 'About' | 'Contact';

export interface ReservationFormData {
  Date: string;
  Time: string;
  'Party Size': string;
  Name: string;
  Phone: string;
  'Special Request': string;
}