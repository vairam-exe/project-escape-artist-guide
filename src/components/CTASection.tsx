import React, { useRef } from 'react'; // Import useRef
import { useInView } from 'react-intersection-observer'; // Import useInView

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const CTASection = () => {
  // Your WhatsApp number in international format (without +, 00, or dashes)
  // Assuming the wa.link points to +91 97894 09303
  //const whatsappNumber = '919789409303';
  const whatsappLink = `https://wa.link/m4d966`;
  // Using the local path for the pre-generated QR code image
  const qrCodeImagePath = '/lovable-uploads/wa.link_m4d966.png'; // Path relative to the public directory

  // --- Animation Implementation ---

  // Setup Intersection Observers for the main content blocks
  const [headerRef, headerInView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [footerTextRef, footerTextInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Helper function to generate dynamic animation classes
  // Applies a fade-in and slide-up effect
  const getAnimationClasses = (inView: boolean) =>
    `transition-all duration-700 ease-out ${ // Adjust duration and easing as needed
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' // Start slightly below and invisible
    }`;

  // --- End Animation Implementation ---


  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-brand-purple/5 to-brand-teal/5">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Block - Add ref and animation classes */}
        <div
          ref={headerRef}
          className={`max-w-5xl mx-auto text-center mb-12 ${getAnimationClasses(headerInView)}`}
        >
            <span className="inline-block px-3 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-sm font-semibold mb-3">
              LET'S DO THIS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Stop Crying Into Your Keyboard?
              <span className="ml-2">😭</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let's turn your project from a nightmare into something that actually works
              (and might even impress your professors!)
            </p>
          </div>

          {/* Card Component - Add ref and animation classes */}
          {/* Assuming Card component accepts a ref prop, otherwise wrap in a div */}
          <Card
            ref={cardRef as React.Ref<HTMLDivElement>}
            className={`p-6 md:p-8 shadow-lg border-0 ${getAnimationClasses(cardInView)}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Column: Email and Response Time */}
              {/* You could add more granular animations here later if desired */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Connect Directly</h3>
                <p className="text-gray-600 mb-6">
                  Reach out via email or check the typical response time.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-purple/10 rounded-lg p-2 mr-4">
                      <Mail className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">nareshvairam88@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-teal/10 rounded-lg p-2 mr-4">
                      <MessageSquare className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Response Time</h4>
                      <p className="text-gray-600">Usually within 2-4 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: WhatsApp QR Code and Button */}
              {/* You could add more granular animations here later if desired */}
              <div className="flex flex-col items-center justify-center text-center">
                 <h3 className="text-2xl font-bold mb-4">Message on WhatsApp</h3>
                 <p className="text-gray-600 mb-6">
                   Scan the QR code or click the button below to send a message!
                 </p>
                 {/* QR Code Image using the local path */}
                 <img
                   src={qrCodeImagePath} // Using the provided local path
                   alt="WhatsApp QR Code"
                   className="w-48 h-48 object-contain mb-6 rounded-md shadow-md"
                 />
                 {/* WhatsApp Button Link */}
                 <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                   <Button type="button" size="lg" className="w-full bg-green-500 hover:bg-green-600">
                     <FaWhatsapp className="mr-2 h-5 w-5" /> Send a WhatsApp Message
                   </Button>
                 </a>
               </div>
            </div>
          </Card>

          {/* Footer Text - Add ref and animation classes */}
          <div
            ref={footerTextRef}
            className={`mt-12 text-center ${getAnimationClasses(footerTextInView)}`}
          >
            <p className="text-sm text-gray-500">
              No strings attached, no high-pressure sales tactics. Just friendly, honest help from someone who gets it.
              <span className="ml-1">💯</span>
            </p>
          </div>
        </div>
      </section>
  );
};

export default CTASection;