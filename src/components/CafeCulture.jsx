// components/CafeCulture.jsx
import React from 'react';
import CafeCard from './CafeCard';

const content = [
  {
    image: 'https://www.bagarabiryanicafe.com/assets/img/redef/1.png',
    title: 'Vibrant Entertainment',
    description: 'Hosting Open Mic and Stand-up Comedy Shows for lively experiences.',
  },
  {
    image: 'https://www.bagarabiryanicafe.com/assets/img/redef/1.png',
    title: 'Joyous Celebrations',
    description: 'Ideal venue for various celebrations, adding a festive touch to the cafe atmosphere.',
  },
  {
    image: 'https://www.bagarabiryanicafe.com/assets/img/redef/1.png',
    title: 'Social Get-Togethers',
    description: 'Welcoming spaces for social gatherings, fostering community connections.',
  },
];

const CafeCulture = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-brown-700 mb-12">
        Redefining <span className="text-orange-700">Cafe Culture</span> in India
      </h2>
      <div className="flex flex-wrap justify-center text-left gap-8 max-w-full md:mx-auto">
        {content.map((item, idx) => (
          <CafeCard
            key={idx}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CafeCulture;
