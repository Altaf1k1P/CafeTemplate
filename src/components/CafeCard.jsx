// components/CafeCard.jsx
import React from 'react';

const CafeCard = ({ image, title, description }) => {
  return (
    <div className="w-full md:w-[30%] px-4 text-left">
      <img src={image} alt={title} className="rounded-2xl object-cover h-[250px] w-full shadow-md mb-4 mx-auto" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default CafeCard;
