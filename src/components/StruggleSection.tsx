
import React, { useEffect, useRef, useState } from 'react';
import { Clock, DollarSign, AlertTriangle, Coffee, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StruggleSection = () => {
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
      id="struggle" 
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className="text-center mb-12 md:mb-16 transition-all duration-1000"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-purple rounded-full text-sm font-semibold mb-3">
            THE PAIN IS REAL
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Struggle is So Real It Hurts 😭
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Your final year project? It's that “999999 games in 1” CD from childhood.
          But what do you get? The same 6 broken scams, renamed 999999 times by different “project agencies.”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="h-6 w-6 text-brand-red" />,
              bgColor: "bg-red-100",
              title: "The Clock is Ticking !",
              emoji: "⏰",
              content: "Remember when you thought \"I have months to finish this\"? Yeah, that was funny. Now you're sacrificing sleep, social life, and sanity as the deadline approaches at warp speed."
            },
            {
              icon: <DollarSign className="h-6 w-6 text-brand-purple" />,
              bgColor: "bg-purple-100",
              title: "Project Agencies Be Like: \"Trust Us, Bro.\" ",
              emoji: "💸",
              content: " “IEEE-Level Output,” they said.\nTranslation: ₹18,000 gone, plus GST, for a project your senior submitted two years ago — renamed and re-skinned."
            },
            {
              icon: <AlertTriangle className="h-6 w-6 text-brand-yellow" />,
              bgColor: "bg-yellow-100",
              title: "Scam Agencies Are Everywhere",
              emoji: "🚨",
              content: "\"We'll deliver a perfect project in 24 hours!\" I’m directing the next Rajamouli blockbuster. These scammers prey on your panic and They serve pre-written garbage and emptier wallets."
            },
            {
              icon: <Coffee className="h-6 w-6 text-brand-teal" />,
              bgColor: "bg-blue-100",
              title: "Caffeine and Constant Panic",
              emoji: "☕",
              content: "Googling “how to fake a machine learning project” while your HOD’s “submit by Monday” email haunts your inbox."
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
              <div className={`mb-4 ${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110`}>
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

          <div 
            className="md:col-span-2 lg:col-span-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? 'translateY(0) rotate(0)' 
                : 'translateY(40px) rotate(-1deg)',
              transition: 'all 0.8s ease-out 0.8s'
            }}
          >
            <div className="feature-card h-full bg-gradient-to-br from-brand-purple/10 to-brand-teal/10">
              <h3 className="text-xl font-bold mb-3">
              I’ve Been You, and I’ve Got Your Back 
                <span className="emoji-bounce ml-1">🤝</span>
              </h3>
              <p className="text-gray-600 mb-4">
              In 2023, I was panic-googling at 2:47 AM with 3 days to review, one dead laptop, and an even deader will to live.
I trusted a “professional service” that delivered a Python project that ran only on their laptop and crashed on mine. Spoiler alert: They ghosted me faster than my toxic ex.
              </p>
              <p className="text-gray-700 font-medium mb-4">
                But I survived, graduated in 2024, and now I'm here to be the person I needed back then.
              </p>
              
              <a
                href="https://wa.link/m4d966"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple/90 transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Midnight Thoughts Being a CHAIWALA outside Vijayawada’s bus stand? Been there! Let's chat before you consider that chai stall career.☕
                </span>
              </a>
            </div>
          </div>
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

export default StruggleSection;
