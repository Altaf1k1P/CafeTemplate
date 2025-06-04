import React from 'react'
import FoodScrollMenu from '../components/FoodScrollMenu.jsx';
import CafeCulture from '../components/CafeCulture.jsx';
import HappyCustomers from '../components/HappyCustomers.jsx';
import BrandUniqueness from '../components/BrandUniqueness.jsx';
import BiryaniSpeciality from '../components/BiryaniSpeciality.jsx';
import FranchisePromo from '../components/FranchisePromo.jsx';
import OutletGallery from '../components/OutletGallery.jsx';


const items = [
  { name: 'Biryani', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'South Indian', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'North Indian', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Rolls', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Pizza', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Cake', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Burger', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Cake', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Burger', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Burger', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Cake', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Burger', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Burger', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Cake', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' },
  { name: 'Burger', img: 'https://www.bagarabiryanicafe.com/UploadImages/5ec8f20f-2bf5-4dde-8116-8d711263df86-otherProducts.jpeg' }
];
function Home() {
  return (
    <>
     <FoodScrollMenu items={items} text={"Explore Our Menu"}/>
    <FoodScrollMenu items={items} text={"Kebabs & Desserts"} bgColor={"bg-[#f5f0e9]"}/>
    <BiryaniSpeciality/>
    <FranchisePromo/>
    <BrandUniqueness/>
    <CafeCulture/>
    <HappyCustomers/>
    <OutletGallery/>
    
   </>
  )
}

export default Home
