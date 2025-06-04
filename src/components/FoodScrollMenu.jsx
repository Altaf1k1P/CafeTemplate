import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Custom Arrow components
const PrevArrow = ({ onClick }) => (
  <div
    className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full shadow-md p-2 z-10 cursor-pointer'
    onClick={onClick}
  >
    <ChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full shadow-md p-2 z-10 cursor-pointer'
    onClick={onClick}
  >
    <ChevronRight />
  </div>
);

const FoodScrollMenu = ({ items, text, bgColor = 'bg-white' }) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={`relative w-full py-[4%] ${bgColor} px-8`}>
      <h2 className='text-4xl md:text-5xl text-center font-bold leading-tight mb-10'>{text}</h2>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.name} className='px-2'>
            <div className='flex flex-col gap-1 items-center px-12 h-[300px]'>
              <img
                src={item.img}
                alt={item.name}
                className=' w-full object-cover rounded-full h-full shadow-md mx-auto'
              />
              <span className='text-xl font-bold m-2 text-center'>{item.name}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FoodScrollMenu;
