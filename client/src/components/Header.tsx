import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { useMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useMobile();
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Close mobile menu when screen size changes from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path: string) => {
    return location === path;
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center h-10">
              <div className="bg-wavered text-white font-heading font-bold rounded px-2 py-1 mr-2">
                WAVE<span className="text-white font-medium">TXT</span>
              </div>
              <span className="text-wavegray-700 font-medium hidden sm:inline-block">LTD</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/') && 'text-wavered'}`}>
              Home
            </Link>
            <Link href="/about" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/about') && 'text-wavered'}`}>
              About Us
            </Link>
            <Link href="/services" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/services') && 'text-wavered'}`}>
              Services
            </Link>
            <Link href="/get-quote" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/get-quote') && 'text-wavered'}`}>
              Get Quote
            </Link>
            <Link href="/contact" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/contact') && 'text-wavered'}`}>
              Contact Us
            </Link>
            <Link href="/blog" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/blog') && 'text-wavered'}`}>
              Blog
            </Link>
            <Link href="/partners" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/partners') && 'text-wavered'}`}>
              Partners
            </Link>
            <Link href="/contact" className="ml-4 bg-wavered text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors">
              Book a Consultation
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-wavegray-700 hover:text-wavered"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <Link href="/" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/') && 'text-wavered'}`}>
                Home
              </Link>
              <Link href="/about" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/about') && 'text-wavered'}`}>
                About Us
              </Link>
              <Link href="/services" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/services') && 'text-wavered'}`}>
                Services
              </Link>
              <Link href="/get-quote" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/get-quote') && 'text-wavered'}`}>
                Get Quote
              </Link>
              <Link href="/contact" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/contact') && 'text-wavered'}`}>
                Contact Us
              </Link>
              <Link href="/blog" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/blog') && 'text-wavered'}`}>
                Blog
              </Link>
              <Link href="/partners" className={`text-wavegray-700 hover:text-wavered font-medium transition-colors ${isActive('/partners') && 'text-wavered'}`}>
                Partners
              </Link>
              <Link href="/contact" className="w-full bg-wavered text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors text-center">
                Book a Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
