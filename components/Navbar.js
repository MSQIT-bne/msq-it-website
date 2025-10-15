import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'IT Solutions & Consulting', href: '/services#it-solutions' },
        { name: 'ERP & Systems Consulting', href: '/services#erp-consulting' },
        { name: 'Managed Services', href: '/services#managed-services' },
        { name: 'IT Projects', href: '/services#it-projects' },
        { name: 'Support & Service Levels', href: '/services#support' },
      ]
    },
    { name: 'About Us', href: '/about' },
    { name: 'How We Work', href: '/how-we-work' },
    { name: 'Contact', href: '/contact' },
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <>
    <nav className={`bg-white shadow-md transition-all duration-300 ${
      isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-xl' : 'relative'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center justify-between h-auto transition-all duration-300 ${
          isScrolled ? 'md:h-16 py-2' : 'md:h-24 py-4'
        }`}>
          {/* Logo - centered on mobile, left on desktop */}
          <div className="flex justify-center md:justify-start w-full md:w-1/4">
            <Link href="/" className="flex items-center">
              <div className={`h-auto transition-all duration-300 ${
                isScrolled ? 'w-48' : 'w-72'
              }`}>
                <Image 
                  src="/MSQ-it-logo-png 1.png"
                  alt="MSQ IT Logo"
                  width={400}
                  height={133}
                  priority
                  className="w-full h-auto transition-opacity duration-200 hover:opacity-90"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop menu - centered */}
          <div className="hidden md:flex items-center justify-center w-full md:w-2/4">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name} className="relative group">
                    <button
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium inline-flex items-center"
                    >
                      {item.name}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isServicesDropdownOpen && (
                      <div
                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                        className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200"
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.name} href={item.href} className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
                    {item.name}
                  </Link>
                )
              ))}
            </div>
            {/* <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
              Get Started
            </Link> */}
          </div>
          
          {/* Empty div for balance on desktop */}
          <div className="hidden md:block w-1/4"></div>
          
          {/* Mobile menu button */}
          <div className="md:hidden absolute top-6 right-4">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={toggleServicesDropdown}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100"
                  >
                    {item.name}
                    <svg 
                      className={`h-5 w-5 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isServicesDropdownOpen && (
                    <div className="pl-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100">
                  {item.name}
                </Link>
              )
            ))}
            <Link href="/contact" className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
    {/* Spacer to prevent content jump when navbar becomes fixed */}
    {isScrolled && <div className="h-16 md:h-16"></div>}
    </>
  );
}
