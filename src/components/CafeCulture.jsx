// components/CafeCulture.jsx
import React from 'react';
import CafeCard from './CafeCard';



const CafeCulture = ({content}) => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight md:mb-12 mb-4">
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
