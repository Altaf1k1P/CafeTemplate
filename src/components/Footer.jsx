import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
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

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-white text-black pt-16 overflow-hidden">
      {/* Floating Decorative Spices */}
      <motion.img
        src="https://www.bagarabiryanicafe.com/assets/new-img/ele.png"
        alt="spice"
        className="hidden md:block invert absolute bottom-20 left-10 w-20 opacity-50 z-0"
        variants={spiceFloat}
        animate="animate"
      />
      <motion.img
        src="https://www.bagarabiryanicafe.com/assets/new-img/ele.png"
        alt="spice"
        className="hidden md:block invert absolute top-24 right-5 w-20 opacity-50 z-0"
        variants={spiceFloat}
        animate="animate"
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 z-10 relative">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            GSFO Tech Private Limited proudly owns Bagara Biryani Café (BBC) — the ultimate
            destination to indulge in a mouthwatering selection of authentic Nattu-style Biryanis.
          </p>

          <h4 className="mt-6 mb-2 font-semibold text-base">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><a href="#" className="hover:text-[#8a5a2c] transition">About</a></li>
            <li><a href="#" className="hover:text-[#8a5a2c] transition">Franchise</a></li>
            <li><a href="#" className="hover:text-[#8a5a2c] transition">Menu</a></li>
            <li><a href="#" className="hover:text-[#8a5a2c] transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-700">
            <strong>Address:</strong><br />
            #103/2(P), & 152/2, 5th floor Uniworld Building<br />
            Neeladri Nagar, Doddathogur(V),<br />
            Electronic City, Bengaluru, Karnataka 560100
          </p>
          <p className="mt-4 text-sm"><strong>Email:</strong> info@gsideas.com</p>
          <p className="mt-4 text-sm"><strong>Phone:</strong><br />+91 9148785024<br />+91 9538189128</p>
          <p className="mt-4 text-sm"><strong>Franchise Support:</strong><br />+91 9538189128</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#5b3919] text-white font-medium py-3 px-[6%] mt-10 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="md:text-lg">© Copyright 2024 Bagara Biryani Cafe. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">Website Developed By Nextwebi</p>
      </div>
    </footer>
  );
};

export default Footer;
