'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { contactInfo } from '@/data/contactInfo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to make header sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    <header>
      {/* Top info bar */}
      <div className="bg-green-700 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:block text-lg font-medium">
            <span>Premium Agricultural Exports</span>
          </div>
          <div className="flex items-center space-x-6 text-base font-medium w-full md:w-auto justify-end">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center hover:text-green-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-green-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header - sticky on scroll */}
      <div 
        className={`bg-white shadow-md transition-all duration-300 ${
          isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Sourceseed Logo" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <span className="text-2xl font-bold text-green-700">SourceSeed</span> 
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-6">
                <Link href="/" className="text-gray-700 hover:text-green-600 font-medium text-base py-2">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium text-base py-2">
                  About
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-green-600 font-medium text-base py-2">
                  Products
                </Link>
                <Link href="/farms" className="text-gray-700 hover:text-green-600 font-medium text-base py-2">
                  Farms
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium text-base py-2">
                  Contact
                </Link>
              </div>
              <Link 
                href="/contact?type=quote" 
                className="bg-green-600 text-white px-5 py-2.5 rounded-md hover:bg-green-700 transition-colors font-medium text-base"
              >
                Get a Quote
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 space-y-4 pb-4">
              <Link 
                href="/" 
                className="block text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/products" 
                className="block text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/farms" 
                className="block text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Farms
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/contact?type=quote" 
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          )}
        </div>
      </div>
      
      {/* Spacer for fixed header */}
      {isScrolled && <div className="h-[72px]"></div>}
    </header>
  );
} 