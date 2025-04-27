import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Assuming you have react-icons installed

const CTASection = () => {
  // Your WhatsApp number in international format (without +, 00, or dashes)
  // Assuming the wa.link points to +91 97894 09303
  //const whatsappNumber = '919789409303';
  const whatsappLink = `https://wa.link/m4d966`;
  // Using the local path for the pre-generated QR code image
  const qrCodeImagePath = '/lovable-uploads/wa.link_m4d966.png'; // Path relative to the public directory

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-brand-purple/5 to-brand-teal/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
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

          <Card className="p-6 md:p-8 shadow-lg border-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Column: Email and Response Time */}
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
                      <p className="text-gray-600">nareshvairm88@gmail.com</p>
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

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              No strings attached, no high-pressure sales tactics. Just friendly, honest help from someone who gets it.
              <span className="ml-1">💯</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;