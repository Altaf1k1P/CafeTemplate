import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Slider from 'react-slick';
import { useEffect } from 'react';


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
    <div className="bg-[#6e200a] text-white py-20 px-10 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight md:mb-12 mb-4 text-center">
        Uniqueness About Our Brand
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        {/* Auto Scroll Image */}
        <motion.div
          animate={controls}
          className="overflow-hidden w-[350px] md:w-[500px] max-h-[500px] rounded shadow-lg"
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
