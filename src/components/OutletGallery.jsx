import React from 'react';

const outlets = [
  {
    name: 'Neeladri Nagar',
    img: 'https://www.bagarabiryanicafe.com/UploadImages/a3ecb876-dd80-4bc9-8c47-184e769c0faf-outletImage.jpeg', // replace with actual path or URL
  },
  {
    name: 'Somasundarapalya',
    img: 'https://www.bagarabiryanicafe.com/UploadImages/8ecce786-df81-4174-8921-8ceea03e258c-outletImage.jpeg',
  },
  {
    name: 'Kasavanahalli',
    img: 'https://www.bagarabiryanicafe.com/UploadImages/ee611a26-026d-40b3-8303-1351b852fab1-outletImage.jpeg',
  },
];

const OutletGallery = () => {
  return (
    <div className="py-12 px-4 bg-white">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-12">
        Glimpse of <span className="text-[#7A4E1D]">Our Outlets</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {outlets.map((outlet, index) => (
          <div key={index} className="text-left">
            <img
              src={outlet.img}
              alt={outlet.name}
              className="w-full h-[300px] object-cover rounded-md shadow-md"
            />
            <p className="mb-4 text-xl font-bold text-[#7A4E1D] border-b-1 border-black py-2">
              {outlet.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutletGallery;
