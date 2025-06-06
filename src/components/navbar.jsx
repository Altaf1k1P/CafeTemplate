import React, { useState } from 'react';
 import { Menu, X } from 'lucide-react'; // You can use any icon library
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Menu', link: '/menu' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact Us', link: '/contact' }
  ];

  return (
    <nav className='sticky top-0 bg-[#6e260e] w-full z-50 px-[6%] text-white shadow-md'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center w-3/5 md:w-3/12'>
        <Link to={"/"}>  
        <img src="https://www.bagarabiryanicafe.com/assets/new-img/logo.png" alt="logo" className='w-full' />
        </Link>
        
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 font-medium'>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.link} className=' md:text-xl hover:text-yellow-300'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden mt-4'>
          <ul className='flex flex-col space-y-4 font-medium'>
            {navItems.map((item) => (
              <li  key={item.name}>
                <a href={item.link} className=' blockhover:text-yellow-300' onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
