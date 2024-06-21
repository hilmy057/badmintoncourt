import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white bg-opacity-70 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-black">Bad</span>
              <span className="text-orange-500">Minton</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav>
              <ul className="flex space-x-6 font-semibold">
                <li><Link to="/" className="text-black hover:text-orange-500">Home</Link></li>
                <li><Link to="/booking" className="text-black hover:text-orange-500">Booking</Link></li>
                <li><Link to="/signup" className=" text-orange-500 hover:text-white hover:bg-orange-500 border border-orange-500 rounded-lg py-2 px-4 mr-2">Daftar</Link></li>
              </ul>
            </nav>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-orange-500">Home</Link>
            <Link to="/booking" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-orange-500">Booking</Link>
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-orange-500">Login</Link>
          </div>
        </div>
      )}
      {/* Placeholder to prevent content from being overlapped */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} style={{ height: '56px' }}></div>
    </header>
  );
};

export default Header;