import React from 'react';

const AboutSection: React.FC = () => (
  <div className="pt-28 pb-20 bg-[#EBF4DD] min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80&w=400" className="rounded-xl shadow-lg mt-8" alt="Interior" />
          <img src="https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&q=80&w=400" className="rounded-xl shadow-lg" alt="Food" />
        </div>
        <div>
          <span className="text-[#5A7863] font-bold tracking-widest uppercase text-sm">Our Story</span>
          <h2 className="text-4xl font-serif font-bold text-[#3B4953] mt-2 mb-6">Traditional Roots, Modern Soul</h2>
          <p className="text-[#3B4953]/80 mb-6 leading-relaxed">
            Etyadi was born from a simple desire: to create a space in Silchar where families could disconnect from the city noise and reconnect with nature. 
            Constructed extensively using locally sourced bamboo and reclaimed wood, our structure breathes with the environment.
          </p>
          <p className="text-[#3B4953]/80 mb-8 leading-relaxed">
            Our kitchen is led by Chef Anirban, who brings 15 years of experience in blending traditional Assamese techniques with contemporary presentation.
          </p>
          <div className="flex gap-4">
            <div className="border-l-4 border-[#5A7863] pl-4">
              <p className="font-bold text-[#3B4953] text-lg">Local Sourcing</p>
              <p className="text-[#3B4953]/60 text-sm">Supporting Silchar farmers</p>
            </div>
            <div className="border-l-4 border-[#90AB8B] pl-4">
              <p className="font-bold text-[#3B4953] text-lg">Eco Friendly</p>
              <p className="text-[#3B4953]/60 text-sm">Plastic-free commitment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;