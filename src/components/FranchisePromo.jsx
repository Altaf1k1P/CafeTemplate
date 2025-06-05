import React from 'react';
import { CheckCircle } from 'lucide-react';

const FranchisePromo = () => {
  const benefits = [
    '15 Plus Varieties Of Biryanis',
    "Bucket Biryani's & Kebab Combos",
    'No Skilled Manpower Required',
    'Easy Supply Chain',
    'Designed by F&B Experts',
    'Successfully Running in Multi-Locations',
    'Zero Royalty',
  ];

  return (
    <section className="bg-[#f5f0e9] py-12 px-4 text-center font-sans">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight md:mb-5 mb-4">
        Partner with{' '}
        <span className="text-[#ac7339]">India's Fastest</span> <br />
        Growing Biryani <span className="text-[#ac7339]">Franchise</span>
      </h2>

      {/* Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-10 px-4">
  <div className="flex justify-center">
    <video
      controls
       poster="https://www.bagarabiryanicafe.com/assets/new-img/poster.png"
      className="w-full max-w-[600px] rounded-xl border-8 border-white shadow-lg"
     src="https://www.bagarabiryanicafe.com/assets/new-img/v2.mp4"
    />
  </div>
  <div className="flex justify-center">
    <video
      controls
      poster="https://www.bagarabiryanicafe.com/assets/new-img/poster.png"
      className="w-full max-w-[600px] min-w-[300px] rounded-xl border-8 border-white shadow-lg"
      src="https://www.bagarabiryanicafe.com/assets/new-img/v2.mp4"
    />
  </div>
</div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10">
        {benefits.map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-2 bg-[#4b2e13] text-white px-4 py-2 rounded-full text-sm font-medium shadow"
          >
            <CheckCircle size={18} className="text-white" />
            {item}
          </span>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-[#4b2e13] hover:bg-[#3a220f] text-white text-sm font-semibold px-6 py-3 rounded shadow transition duration-300">
        Apply For Franchise
      </button>
    </section>
  );
};

export default FranchisePromo;
