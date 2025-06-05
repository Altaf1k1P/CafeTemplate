import React, { useState } from 'react';
import classNames from 'classnames';
import ReelsLoader from './ReelsLoader'; // adjust path as needed

const HappyCustomers = ({ customerMedia }) => {
  const [tab, setTab] = useState('images');

  return (
    <section className="bg-[#6e2000] pt-12 pb-20 text-center text-white">
      <h2 className="text-4xl font-bold mb-8">
        Happy <span className="text-[#fff] font-serif italic">Customers</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8 gap-4">
        {['images', 'reels'].map((type) => (
          <button
            key={type}
            onClick={() => setTab(type)}
            className={classNames(
              'px-6 py-2 rounded-full text-lg font-semibold transition',
              {
                'bg-[#784421] text-white': tab === type,
                'border border-white text-white': tab !== type,
              }
            )}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="flex justify-center overflow-x-auto gap-6 px-6 scrollbar-hide flex-wrap">
        {tab === 'images' &&
          customerMedia.images.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[320px] h-[420px] shrink-0 rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={item.src}
                alt={item.location}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-40 opacity-0 group-hover:opacity-50 transition duration-300 flex flex-col justify-center items-center">
                <div className="text-white text-5xl font-bold mb-2 cursor-pointer">+</div>
                <p className="text-sm font-semibold">Loc: {item.location}</p>
                <p className="text-xs text-gray-300">{item.hashtag}</p>
              </div>

            </div>
          ))}

        {tab === 'reels' && <ReelsLoader reels={customerMedia.reels} />}
      </div>
    </section>
  );
};

export default HappyCustomers;
