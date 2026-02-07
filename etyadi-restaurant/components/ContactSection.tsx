import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection: React.FC = () => (
  <div className="pt-28 pb-20 bg-[#EBF4DD] min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-[#3B4953] mb-12">Get in Touch</h2>
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 bg-[#3B4953] text-[#EBF4DD]">
                      <h3 className="text-xl font-bold mb-6">Contact Info</h3>
                      <div className="space-y-6">
                          <div className="flex items-start gap-4">
                              <MapPin className="text-[#90AB8B] mt-1" />
                              <p>Etyadi Restaurant<br/>Near Collegiate School<br/>Silchar, Assam 788001</p>
                          </div>
                          <div className="flex items-center gap-4">
                              <Phone className="text-[#90AB8B]" />
                              <p>084030 51474</p>
                          </div>
                          <div className="flex items-start gap-4">
                              <Clock className="text-[#90AB8B] mt-1" />
                              <div>
                                  <p className="font-bold mb-1">Opening Hours</p>
                                  <p className="text-sm text-[#EBF4DD]/70">Mon - Sun: 11:00 AM - 10:00 PM</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="p-8">
                      <h3 className="text-xl font-bold text-[#3B4953] mb-6">Send a Message</h3>
                      <form className="space-y-4">
                          <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-[#90AB8B]/30 bg-white rounded-lg focus:ring-2 focus:ring-[#5A7863] outline-none" />
                          <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-[#90AB8B]/30 bg-white rounded-lg focus:ring-2 focus:ring-[#5A7863] outline-none" />
                          <textarea rows={4} placeholder="Message" className="w-full px-4 py-2 border border-[#90AB8B]/30 bg-white rounded-lg focus:ring-2 focus:ring-[#5A7863] outline-none"></textarea>
                          <button className="w-full bg-[#5A7863] text-white font-bold py-3 rounded-lg hover:bg-[#3B4953]">Send Message</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
);

export default ContactSection;