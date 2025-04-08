
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="font-display font-bold text-xl text-brand-purple">
            CS Project Rescue
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#struggle" className="text-sm font-medium hover:text-brand-purple transition-colors">The Struggle</a>
            <a href="#solution" className="text-sm font-medium hover:text-brand-purple transition-colors">The Solution</a>
            <a href="#why-me" className="text-sm font-medium hover:text-brand-purple transition-colors">Why Me?</a>
            <Button asChild>
              <a href="#contact" className="font-semibold">Get Help Now</a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#struggle" 
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              The Struggle
            </a>
            <a 
              href="#solution" 
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              The Solution
            </a>
            <a 
              href="#why-me" 
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Why Me?
            </a>
            <Button 
              asChild 
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <a href="#contact">Get Help Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
