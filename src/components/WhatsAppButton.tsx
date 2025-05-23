import React from 'react';
// Import the WhatsApp icon from react-icons. We'll use the FaWhatsapp icon from the Font Awesome library.
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.link/m4d966"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="lg"
              className="rounded-full bg-brand-purple hover:bg-brand-purple/90 shadow-lg hover:scale-110 transition-transform duration-200 w-14 h-14 p-0"
            >
              {/* Replace MessageSquare with FaWhatsapp */}
              <FaWhatsapp className="h-6 w-6 text-white" />
            </Button>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click here! Your project won't fix itself 😉</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;