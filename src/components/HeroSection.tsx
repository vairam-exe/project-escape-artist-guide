import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Final Year Project Got You <span className="text-brand-purple animate-pulse">Sweating</span>? 😅
              <br />
              <span 
                className="text-brand-teal inline-block"
                style={{
                  animation: isVisible ? 'slideIn 0.6s 0.3s forwards' : 'none',
                  opacity: 0,
                  transform: 'translateX(-20px)'
                }}
              >
                vairam.exe
              </span> to the Rescue!
            </h1>
            
            <p 
              className="text-lg mb-8 text-gray-700 max-w-lg"
              style={{
                animation: isVisible ? 'fadeIn 0.8s 0.5s forwards' : 'none',
                opacity: 0
              }}
            >
              Forget those shady “project centers” in T. Nagar or Ameerpet that promise you an AI masterpiece but deliver a PowerPoint from 2005. Now, I’m here to help you nail your project without selling your soul (or your semester’s pocket money). 💸
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4"
              style={{
                animation: isVisible ? 'fadeIn 0.8s 0.7s forwards' : 'none',
                opacity: 0
              }}
            >
              <Button 
                size="lg" 
                className="bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold transition-transform duration-300 hover:scale-105" 
                asChild
              >
                <a href="https://wa.link/m4d966" className="flex items-center group">
                  Rescue My Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 transition-transform duration-300 hover:scale-105" 
                asChild
              >
                <a href="#why-me">Why Trust vairam.exe?</a>
              </Button>
            </div>
          </div>
          
          <div 
            className="md:w-1/2 relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s ease-out 0.3s'
            }}
          >
            <div className="bg-gradient-to-br from-brand-purple/10 to-brand-teal/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-purple/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-teal/10 rounded-full filter blur-xl"></div>
              
              <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400">final-project.cpp</div>
                </div>
                
                <div className="space-y-2 font-mono text-sm">
                  <div><span className="text-purple-600">int</span> <span className="text-blue-600">main</span>() {'{'}</div>
                  <div className="pl-4"><span className="text-green-600">// TODO: Actually write the project</span></div>
                  <div className="pl-4"><span className="text-purple-600">if</span> (deadline.isToday()) {'{'}</div>
                  <div className="pl-8"><span className="text-red-500">panic</span>();</div>
                  <div className="pl-8">budget.spend(<span className="text-orange-500">"All of it"</span>);</div>
                  <div className="pl-4">{'}'} <span className="text-green-600">// End of despair</span></div>
                  <div>{'}'}</div>
                </div>
                
                <div className="mt-6 flex items-center text-sm">
                  <div className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                    Deadline: 48 hours ago 😱
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
