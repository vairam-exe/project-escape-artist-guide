import React from 'react';
import { Heart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-display font-bold text-xl text-brand-purple mb-2">
              vairam.exe
            </div>
            <p className="text-gray-600 text-sm">
              Helping CS students survive their final year projects with real-world experience 
              from a 2024 graduate
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#struggle" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">The Struggle</a>
            <a href="#solution" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">The Solution</a>
            <a href="#things-i-deliver" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">Things I Deliver</a>
            <a href="#why-me" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">Why Me?</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-6 md:mt-0">
          <a
            href="https://wa.link/m4d966"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple/90 transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="text-sm font-medium">Still reading? Drop a message, I'm only slightly judgy 😏</span>
          </a>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} vairam.exe. Made with 
            <Heart className="inline-block h-4 w-4 text-brand-red mx-1" /> 
            and too much caffeine.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
