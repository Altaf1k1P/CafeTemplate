import React from "react";
import Slider from "react-slick";
// import biryani1 from "./assets/biryani1.png"; // replace with your image
import { ChevronLeft, ChevronRight } from 'lucide-react';

// const data = [
//   {
//     image: "https://www.bagarabiryanicafe.com/assets/img/00icons/444.png",
//     title: "Gutti Vankaya Bagara Biryani",
//   },{
//     image: "https://www.bagarabiryanicafe.com/assets/img/00icons/444.png",
//     title: "Gutti Vankaya Bagara Biryani",
//   },{
//     image: "https://www.bagarabiryanicafe.com/assets/img/00icons/444.png",
//     title: "Gutti Vankaya Bagara Biryani",
//   },
//   // Add more images/titles here if needed
// ];

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#8B572A] text-white p-2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <ChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#8B572A] text-white p-2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <ChevronRight />
  </div>
);

const BiryaniSpeciality = ({data}) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
  };

  return (
    <div className="bg-[url('https://www.bagarabiryanicafe.com/assets/img/banner/main-bg.jpg')] bg-cover bg-center text-white py-16 px-8 md:px-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Our Specialty <br />
            Bucket Biryani <br />
            & Biryani Bowls
          </h2>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[300px] mx-auto"
                />
                <p className="mt-4 text-lg font-semibold">{item.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
    </div>
  );
};

export default BiryaniSpeciality;
