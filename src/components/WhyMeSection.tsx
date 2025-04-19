import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Clock, Zap, Award, BookOpen, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
            THE BENEFITS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose This Awesome Person? 
            <span className="ml-2">🤩</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's face it - you have options. There are plenty of scammers out there ready to take your money!
            So why pick me instead? (Hint: I actually help you graduate)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
              bgColor: "bg-green-100",
              title: "Fresh Graduate, Fresh Knowledge",
              emoji: "🎓",
              content: "Graduated in 2024, which means I know current tech stacks, not outdated approaches from the Jurassic era of programming. No dinosaurs here, just modern solutions! 🦖❌"
            },
            {
              icon: <Clock className="h-6 w-6 text-brand-teal" />,
              bgColor: "bg-blue-100",
              title: "Deadline? What Deadline?",
              emoji: "⏱️",
              content: "Quick turnarounds because I know exactly what it's like to be staring at the calendar in absolute terror. Your emergency is my priority!"
            },
            {
              icon: <Zap className="h-6 w-6 text-brand-purple" />,
              bgColor: "bg-purple-100",
              title: "Won't Break Your Bank Account",
              emoji: "💰",
              content: "Student-friendly pricing because I remember eating ramen for weeks. You need money for important things, like coffee and more coffee."
            },
            {
              icon: <Award className="h-6 w-6 text-orange-500" />,
              bgColor: "bg-orange-100",
              title: "Been Scammed, Won't Scam",
              emoji: "🛡️",
              content: "Lost $500 to a fake 'expert' service during my own project panic. That experience made me vow never to do that to others. Your trust = earned, not expected."
            },
            {
              icon: <BookOpen className="h-6 w-6 text-brand-red" />,
              bgColor: "bg-red-100",
              title: "Actually Teaches You Stuff",
              emoji: "📚",
              content: "I won't just give you code - I'll explain it so you can defend your project without looking like a deer in headlights during your presentation."
            },
            {
              icon: <Users className="h-6 w-6 text-brand-yellow" />,
              bgColor: "bg-yellow-100",
              title: "Always Available To Chat",
              emoji: "💬",
              content: "Not a faceless agency - I'm a real person who replies to messages, even at weird hours (because I know inspiration/panic strikes at 3 AM)."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="feature-card"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translateY(0) rotate(0)' 
                  : 'translateY(40px) rotate(1deg)',
                transition: `all 0.6s ease-out ${index * 0.2}s`
              }}
            >
              <div 
                className={`mb-4 ${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 hover:text-brand-purple">
                {item.title}
                <span className="emoji-bounce ml-1 inline-block">
                  {item.emoji}
                </span>
              </h3>
              <p className="text-gray-600">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div 
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.8s'
          }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            What Students Say About My Help 
            <span className="ml-1">💬</span>
          </h3>
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-2xl mx-auto"
          >
            <CarouselContent>
              {[
                {
                  name: "Alex Chen",
                  program: "Computer Science",
                  text: "I was struggling with my final year project until I found this service. Not only did they help me complete it, but they also made sure I understood every line of code!",
                  avatar: "AC"
                },
                {
                  name: "Sarah Johnson",
                  program: "Software Engineering",
                  text: "The explanations were crystal clear, and the support was amazing. I actually learned more from this experience than I did in some of my classes!",
                  avatar: "SJ"
                },
                {
                  name: "Mike Rodriguez",
                  program: "Web Development",
                  text: "Quick responses, patient explanations, and high-quality code. Plus, they were always available when I needed help defending my project.",
                  avatar: "MR"
                }
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 pl-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarFallback className="bg-brand-purple/10 text-brand-purple">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.program}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>

      <style>
        {`
          @keyframes bounce-light {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-6px);
            }
          }

          .emoji-bounce {
            animation: bounce-light 2s ease-in-out infinite;
          }

          .feature-card {
            @apply bg-white rounded-xl shadow-lg p-6 border border-gray-100;
            transition: all 0.3s ease-out;
          }

          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
        `}
      </style>
    </section>
  );
};

export default WhyMeSection;
