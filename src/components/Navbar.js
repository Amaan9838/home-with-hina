'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed w-full z-50 transition-all duration-600 ${
      scrolled ? 'bg-black' : 'backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-white h-20">
                  <Link href="/" className="navbar-brand text-4xl font-semibold">
            Home with Hina
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/properties" className="text-white hover:text-gray-200">
              Properties
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200">
              About Us
            </Link>
        
            <Link href="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white shadow-[2px_2px_0px_0px_rgb(255,255,255)] px-6 py-3 rounded-3xl border-white hover:bg-[#8d6d36] hover:opacity-80  border">
              View Listings 
              </Link>
              <Link href="/buy"  className="text-white shadow-[2px_2px_0px_0px_rgb(255,255,255)] px-6 py-3 rounded-3xl border-white bg-[#8d6d36] hover:opacity-80  border">
              Contact Us 
              </Link>
            </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/buy" className="block py-2 hover:text-primary">Buy</Link>
            <Link href="/rent" className="block py-2 hover:text-primary">Rent</Link>
            <Link href="/luxury" className="block py-2 hover:text-primary">Luxury</Link>
            <Link href="/contact" className="block py-2 hover:text-primary">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
