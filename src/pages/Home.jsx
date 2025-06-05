import React from 'react';
import { useData } from '../context/DataContext';
import FoodScrollMenu from '../components/FoodScrollMenu';
import CafeCulture from '../components/CafeCulture';
import HappyCustomers from '../components/HappyCustomers';
import BrandUniqueness from '../components/BrandUniqueness';
import BiryaniSpeciality from '../components/BiryaniSpeciality';
import FranchisePromo from '../components/FranchisePromo';
import OutletGallery from '../components/OutletGallery';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal.jsx';

function Home() {
  const { data } = useData();

 if (!data) return (
  <div className="flex items-center justify-center h-screen">
    <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
  </div>
);


  return (
    <>
      <Hero />

      <ScrollReveal><FoodScrollMenu items={data.menu.Biryani} text="Explore Our Menu" /></ScrollReveal>
      <ScrollReveal><FoodScrollMenu items={data.menu.KebabsAndDesserts} text="Kebabs & Desserts" bgColor="bg-[#f5f0e9]" /></ScrollReveal>
      <ScrollReveal><BiryaniSpeciality data={data.biryaniSpecialData} /></ScrollReveal>
      <ScrollReveal><FranchisePromo /></ScrollReveal>
      <ScrollReveal><BrandUniqueness features={data.biryaniUniqueData.features} sliderImages={data.biryaniUniqueData.sliderImages} /></ScrollReveal>
      <ScrollReveal><CafeCulture content={data.cafeCultureData} /></ScrollReveal>
      <ScrollReveal><HappyCustomers customerMedia={data.customerMedia} /></ScrollReveal>
      <ScrollReveal><OutletGallery outlets={data.outletData} /></ScrollReveal>
    </>
  );
}

export default Home;
