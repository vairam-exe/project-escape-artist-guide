
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    toast({
      title: "Message sent! 🚀",
      description: "I'll get back to you faster than your project deadline is approaching!",
      duration: 5000,
    });
    // Reset the form
    e.currentTarget.reset();
  };

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">
                  Drop me a message and I'll get back to you faster than you can say 
                  "my project is due tomorrow!" 
                  <span className="ml-1">⚡</span>
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-purple/10 rounded-lg p-2 mr-4">
                      <Mail className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">csproject@example.com</p>
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

                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Quick Tip:</span> The more details you provide about your project,
                    the more accurately I can help you. Include deadlines, technologies, and specific issues! 
                    <span className="ml-1">🧠</span>
                  </p>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label htmlFor="project-type" className="block text-sm font-medium mb-1">
                      Project Type
                    </label>
                    <Input id="project-type" placeholder="Web App, Mobile, AI, etc." required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Project Details
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project and how I can help..." 
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple/90">
                    Send SOS Signal <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
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
