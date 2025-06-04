import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-white to-gray-50 text-black">
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            GSFO Tech Private Limited proudly owns Bagara Biryani Café (BBC) — the ultimate
            destination to indulge in a mouthwatering selection of authentic Nattu-style Biryanis.
          </p>

          <h4 className="mt-6 mb-2 font-semibold">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">About</a></li>
            <li><a href="#">Franchise</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">Address:</h3>
          <p className="text-sm">
            #103/2(P), & 152/2,<br />
            5th floor Uniworld Building Neeladri Nagar Doddathogur(V),<br />
            Electronic City, Bengaluru Karnataka 560100
          </p>

          <p className="mt-4 text-sm"><strong>Email:</strong> info@gsideas.com</p>
          <p className="mt-2 text-sm"><strong>Phone No:</strong><br /> +91 9148785024<br /> +91 9538189128</p>
          <p className="mt-2 text-sm"><strong>Franchise Support:</strong><br /> +91 9538189128</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#5b3919] text-white font-medium py-6 px-[6%] flex flex-col md:flex-row justify-between items-center text-sm">
        <p className='text-lg'>© Copyright 2024 Bagara Biryani Cafe. All Rights Reserved.</p>
        <p className=" mt-2 md:mt-0">Website Developed By Nextwebi</p>
      </div>
    </footer>
  );
};

export default Footer;
