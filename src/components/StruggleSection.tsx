
import React, { useEffect, useRef, useState } from 'react';
import { Clock, DollarSign, AlertTriangle, Coffee } from 'lucide-react';

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
            Let's be honest, your final year project is basically the final boss of your degree.
            And just like video games, there are opportunistic NPCs trying to scam you...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="h-6 w-6 text-brand-red" />,
              bgColor: "bg-red-100",
              title: "Deadlines Looming Like Final Bosses",
              emoji: "⏰",
              content: "Remember when you thought \"I have months to finish this\"? Yeah, that was funny. Now you're sacrificing sleep, social life, and sanity as the deadline approaches at warp speed."
            },
            {
              icon: <DollarSign className="h-6 w-6 text-brand-purple" />,
              bgColor: "bg-purple-100",
              title: "\"Professional Help\" Costs A Kidney",
              emoji: "💸",
              content: "So you've found an agency promising to save your project? Great! That'll be the price of a used car, please. Oh, and they might just disappear with your money. Cool, right?"
            },
            {
              icon: <AlertTriangle className="h-6 w-6 text-brand-yellow" />,
              bgColor: "bg-yellow-100",
              title: "Scam Agencies Are Everywhere",
              emoji: "🚨",
              content: "\"We'll deliver a perfect project in 24 hours!\" Sure, and I'm the next CEO of Google. These scammers prey on your panic and deliver nothing but heartbreak and emptier wallets."
            },
            {
              icon: <Coffee className="h-6 w-6 text-brand-teal" />,
              bgColor: "bg-blue-100",
              title: "Caffeine Is Now Your Primary Nutrient",
              emoji: "☕",
              content: "Your blood is now 90% coffee/energy drinks. Your search history is full of \"how to code X in 5 minutes\" and \"can you survive on no sleep for a month?\""
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
                I Feel Your Pain (No, Really, I Do) 
                <span className="emoji-bounce ml-1">🤝</span>
              </h3>
              <p className="text-gray-600 mb-4">
                I was right where you are in 2023. Panic-googling at 3 AM. Considering dropping out 
                to become a goat farmer. Then I got scammed by a "professional service" that took my money 
                and delivered absolute garbage that wouldn't even compile.
              </p>
              <p className="text-gray-700 font-medium">
                But I survived, graduated in 2024, and now I'm here to be the person I needed back then.
              </p>
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
