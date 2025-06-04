import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4 text-center">
      <AlertTriangle className="w-20 h-20 text-red-500 mb-4" />
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-[#6e200a] text-white px-6 py-2 rounded hover:bg-[#501607] transition">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
