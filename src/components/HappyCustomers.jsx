import React, { useState } from 'react';
import classNames from 'classnames';

// const customerMedia = {
//   images: [
//     {
//       src: 'https://www.bagarabiryanicafe.com/UploadImages/e4139560-1cb0-4fe9-8f4a-23e4f5b8a9dd-gallery.jpeg',
//       location: 'Biryani Date',
//       hashtag: '#BiryaniDate'
//     },
//     {
//       src: 'https://www.bagarabiryanicafe.com/UploadImages/42ce9d39-8492-4d12-80cf-d64f92f5936d-gallery.jpeg',
//       location: 'Aishwarya Mall',
//       hashtag: '#OpeningSoon'
//     },
//     {
//       src: 'https://www.bagarabiryanicafe.com/UploadImages/e4139560-1cb0-4fe9-8f4a-23e4f5b8a9dd-gallery.jpeg',
//       location: 'Our signature Biryani',
//       hashtag: '#Maharani'
//     },
//     {
//       src: 'https://www.bagarabiryanicafe.com/UploadImages/42ce9d39-8492-4d12-80cf-d64f92f5936d-gallery.jpeg',
//       location: 'JP Nagar',
//       hashtag: '#OpeningSoon'
//     }
//   ],
//   reels: [
//     {
//       src: 'https://www.bagarabiryanicafe.com/UploadImages/42ce9d39-8492-4d12-80cf-d64f92f5936d-gallery.jpeg',
//       location: 'Reel Location 1',
//       hashtag: '#ReelFun'
//     },
//     {
//       src: '/images/reels/reel2.jpg',
//       location: 'Reel Location 2',
//       hashtag: '#MoreReels'
//     }
//   ]
// };

const HappyCustomers = ({customerMedia}) => {
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
                'border border-white text-white': tab !== type
              }
            )}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="flex justify-center overflow-x-auto gap-6 px-6 scrollbar-hide">
        {customerMedia[tab].map((item, idx) => (
          <div
            key={idx}
            className="relative w-[320px] h-[420px] shrink-0 rounded-lg overflow-hidden shadow-lg group"
          >
            <img
              src={item.src}
              alt={item.location}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
              <p className="text-sm font-semibold">Loc: {item.location}</p>
              <p className="text-xs text-gray-300">{item.hashtag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomers;
