import { useState } from 'react'
import Navbar from './components/navbar.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'; // Assuming you have some global styles


function App() {

  return (
    <>
    {/* <h1 className='bg-amber-950 h-dvh text-white'>hii my name is altaf</h1> */}
    <Navbar/>
    <div className='min-h-[calc(100vh-80px)]'>
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default App
