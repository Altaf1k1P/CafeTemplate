import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Slider from 'react-slick';
import { useEffect } from 'react';

// const features = [
//   {
//     title: "In-House Food Processing Unit:",
//     description: "Streamlining cost-effective food production for quality and freshness.",
//   },
//   {
//     title: "Supply Chain Management:",
//     description: "Ensuring efficient sourcing, processing and distribution through single point of contact.",
//   },
//   {
//     title: "No Skilled Manpower Required:",
//     description: "Only last-mile regeneration like microwave or grill is required at the outlet level.",
//   },
//   {
//     title: "Consistency Assured:",
//     description: "Ensuring a consistent standard for all food items and beverages is guaranteed.",
//   },
// ];

// const sliderImages = [
//   'https://www.bagarabiryanicafe.com/assets/img/kitchen/3.jpg',
//   'https://www.bagarabiryanicafe.com/assets/img/kitchen/2.jpg',
//   'https://www.bagarabiryanicafe.com/assets/img/kitchen/1.jpg'
// ];

const BrandUniqueness = ({features, sliderImages }) => {
  const controls = useAnimation();

  useEffect(() => {
    const loopScroll = async () => {
      while (true) {
        await controls.start({ y: [-10, 10], transition: { duration: 3, repeat: Infinity, repeatType: 'reverse' } });
      }
    };
    loopScroll();
  }, [controls]);

  
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: true,
  };
  return (
    <div className="bg-[#6e200a] text-white py-20 px-8 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        Uniqueness About Our Brand
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        {/* Auto Scroll Image */}
        <motion.div
          animate={controls}
          className="overflow-hidden w-[400px] md:w-[500px] max-h-[500px] rounded shadow-lg"
        >
           <Slider {...sliderSettings}>
            {sliderImages.map((src, idx) => (
              <div key={idx}>
                <img src={src} alt={`Slide ${idx}`} className="object-cover w-full h-auto" />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-white md:w-1/2">
          {features.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandUniqueness;
