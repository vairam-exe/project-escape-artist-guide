
import React from 'react';
import { WhatsApp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  return (
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
        <WhatsApp className="h-6 w-6 text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
