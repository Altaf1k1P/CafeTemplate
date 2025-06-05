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

function Home() {
  const { data } = useData();

  if (!data) return <p>Loading...</p>;

  return (
    <>
    <Hero/>
      <FoodScrollMenu items={data.menu.Biryani} text="Explore Our Menu" />
      <FoodScrollMenu items={data.menu.KebabsAndDesserts} text="Kebabs & Desserts" bgColor="bg-[#f5f0e9]" />
      <BiryaniSpeciality data={data.biryaniSpecialData} />
      <FranchisePromo />
      <BrandUniqueness features={data.biryaniUniqueData.features} sliderImages={data.biryaniUniqueData.sliderImages} />
      <CafeCulture content={data.cafeCultureData} />
      <HappyCustomers customerMedia={data.customerMedia} />
      <OutletGallery outlets={data.outletData} />
    </>
  );
}

export default Home;
