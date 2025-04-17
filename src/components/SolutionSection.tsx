import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section id="solution" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-purple/5 to-brand-teal/5 rounded-2xl p-8 max-w-md mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl sm:text-4xl">🦸‍♂️</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Vairam: CS Project Hero</h3>
                  <div className="flex justify-center gap-2 mb-4">
                    <Badge className="bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20 border-none">Class of 2024</Badge>
                    <Badge className="bg-brand-teal/10 text-brand-teal hover:bg-brand-teal/20 border-none">Project Survivor</Badge>
                  </div>
                  <p className="text-center text-gray-600">
                    "I'm not saying I'm a superhero, but have you ever seen me 
                    and someone who can actually fix your CS project in the same room? 🤔"
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Success Rate</span>
                      <span className="font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                      <div className="bg-brand-purple h-2 rounded-full" style={{width: "98%"}}></div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-xl">🌟</span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-purple/20 rounded-full animate-bounce-light"></div>
                <div className="absolute -bottom-8 right-20 w-16 h-16 bg-brand-teal/20 rounded-full animate-float"></div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <span className="inline-block px-3 py-1 bg-brand-teal/20 text-brand-teal rounded-full text-sm font-semibold mb-3">
              THE SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Your vairam.exe Project Superhero 
              <span className="ml-2">🦸‍♂️</span>
            </h2>
            
            <p className="text-lg mb-6 text-gray-700">
              Hi there! I'm Vairam, a 2024 CS graduate who's been through the same project hellscape you're in now. 
              I survived my own final year project AND got scammed by a "professional service" that delivered
              absolute garbage.
            </p>
            
            <p className="text-lg mb-8 text-gray-700">
              Now I'm here to be the person I needed back then - someone who:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-brand-purple mr-3 flex-shrink-0" />
                <span>Actually understands your project requirements (shocking, I know! 😱)</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-brand-purple mr-3 flex-shrink-0" />
                <span>Won't charge you the price of a small island 🏝️</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-brand-purple mr-3 flex-shrink-0" />
                <span>Will help you understand the code, not just deliver it 🧠</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-brand-purple mr-3 flex-shrink-0" />
                <span>Has actually gone through this recently (not 10 years ago) 🎓</span>
              </li>
            </ul>
            
            <p className="text-gray-700 italic">
              "The best revenge against scammers? Becoming the honest help students actually deserve." 
              <span className="block text-right mt-2">— Me, probably</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
