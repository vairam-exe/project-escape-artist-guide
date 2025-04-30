
import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerChildren } from '@/lib/animation-utils';

const WhyMeSection = () => {
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
    <section ref={sectionRef} id="why-me" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-purple rounded-full text-sm font-semibold mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What People Say About My Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it - here's what students have to say about their experience
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                name: "Sravani Venkata Sai",
                program: "Nizamabad",
                text: "Naku first doubt vachindi—'Evaro malli oka scam aa?' But anna actually replied with clarity, no drama. No fake promises, no disappearing acts. Just genuine help. For once, felt safe trusting someone with my project.Thank you anna",
                avatar: "SV",
                color: "bg-purple-100",
                borderColor: "border-t-[#9b87f5]"
              },
              {
                name: "Rajalakshmi Yadagiri",
                program: "Vijayawada",
                text: "Vairam anna line-by-line explain chesadu, like my own classmate sitting beside me. Not just gave project and vanished like those project centers. I actually understood what I submitted!",
                avatar: "RY",
                color: "bg-blue-100",
                borderColor: "border-t-[#36BFFA]"
              },
              {
                name: "Gokul",
                program: "Chennai",
                text: "I thought project-na ₹15K minimum aagum nu. But Vairam anna gave Reasonable price, zero gimmicks. Anna vum oru student dhan nu feeling vandhuchu. I felt like I was talking to a senior, not a salesperson.Thanks na!",
                avatar: "GK",
                color: "bg-green-100",
                borderColor: "border-t-[#22C55E]"
              },
              {
                name: "Akshay Kumar",
                program: "Madurai",
                text: "Vairam anna was always there when I needed help, no matter the time. Late night doubts? No problem. I could message anytime, and he'd reply with proper solutions, not just 'Google it'. Real support from start to finish!",
                avatar: "AK",
                color: "bg-yellow-100",
                borderColor: "border-t-[#FFC53D]"
              }
            ].map((testimonial, index) => (
              <div 
                className="testimonial-card-wrapper"
                key={index}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${index * 0.15}s`
                }}
              >
                <Card className={`h-full hover:shadow-lg transition-shadow duration-300 hover:-translate-y-2 border-t-4 ${testimonial.borderColor}`}>
                  <CardHeader className="pb-3 flex flex-row items-center gap-4">
                    <Avatar className="h-14 w-14">
                      <AvatarFallback className={`${testimonial.color} text-brand-purple font-semibold text-lg`}>
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg leading-none">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.program}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Quote className="h-6 w-6 text-gray-300 absolute -left-2 -top-2 opacity-70" />
                      <p className="text-gray-600 italic pl-4 pt-1">{testimonial.text}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float-subtle {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
          }

          .testimonial-card-wrapper:hover {
            animation: float-subtle 3s ease-in-out infinite;
          }

          .testimonial-card-wrapper:nth-child(odd) {
            animation-delay: 0.5s;
          }
        `}
      </style>
    </section>
  );
};

export default WhyMeSection;
