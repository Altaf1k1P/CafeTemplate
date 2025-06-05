import React from 'react';
import { motion } from 'framer-motion';


const spiceFloat = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
function Hero() {
  return (
    <section
      className=" text-white  md:pb-30  overflow-hidden "
    >
        <div className="relative  py-[7%]  flex flex-col md:flex-row items-center justify-between  md:h-[80vh] w-full bg-[url('/img/hero.png')] bg-cover bg-center">
       
     <motion.img
        src="https://www.bagarabiryanicafe.com/assets/new-img/ele.png"
        alt="spice"
        className="hidden md:block absolute top-30 left-10 w-25 opacity-50"
        variants={spiceFloat}
        animate="animate"
      />
       <motion.img
        src="https://www.bagarabiryanicafe.com/assets/new-img/ele.png"
        alt="spice"
        className="hidden md:block absolute top-1/4 left-[45%] w-25 opacity-40"
        variants={spiceFloat}
        animate="animate"
      />
     
      {/* Left Content */}
      <div className="max-w-xl md:pl-[6%]  md:w-1/2 z-10 fade-spice">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-serif">
          Get Addicted <br />
          to <span className="text-[#f5d042]">30 spices</span> <br />
          in every bite
        </h1>
        <button className="mt-6 bg-[#8a5a2c] text-white px-6 py-3 rounded shadow-md hover:bg-[#a16a38] transition font-semibold">
          View Menu →
        </button>
      </div>
      <motion.div
        className="w-[70%] md:w-1/2 rounded-full  md:absolute md:right-8 md:top-[-20px]  overflow-hidden z-10"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        <img
          src="https://www.bagarabiryanicafe.com/assets/new-img/ban1111.webp"
          alt="Spicy Dish"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>   
    </section>
  );
}

export default Hero;
