
import React from 'react';
import { Clock, DollarSign, AlertTriangle, Coffee } from 'lucide-react';

const StruggleSection = () => {
  return (
    <section id="struggle" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
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
          <div className="feature-card" data-aos="fade-up">
            <div className="mb-4 bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Deadlines Looming Like Final Bosses 
              <span className="emoji-bounce ml-1">⏰</span>
            </h3>
            <p className="text-gray-600">
              Remember when you thought "I have months to finish this"? 
              Yeah, that was funny. Now you're sacrificing sleep, social life, and sanity 
              as the deadline approaches at warp speed.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-brand-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              "Professional Help" Costs A Kidney 
              <span className="emoji-bounce ml-1">💸</span>
            </h3>
            <p className="text-gray-600">
              So you've found an agency promising to save your project? Great! 
              That'll be the price of a used car, please. Oh, and they might 
              just disappear with your money. Cool, right?
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="mb-4 bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-brand-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Scam Agencies Are Everywhere 
              <span className="emoji-bounce ml-1">🚨</span>
            </h3>
            <p className="text-gray-600">
              "We'll deliver a perfect project in 24 hours!" Sure, and I'm the 
              next CEO of Google. These scammers prey on your panic and deliver nothing 
              but heartbreak and emptier wallets.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div className="mb-4 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <Coffee className="h-6 w-6 text-brand-teal" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Caffeine Is Now Your Primary Nutrient 
              <span className="emoji-bounce ml-1">☕</span>
            </h3>
            <p className="text-gray-600">
              Your blood is now 90% coffee/energy drinks. 
              Your search history is full of "how to code X in 5 minutes" and 
              "can you survive on no sleep for a month?"
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-2" data-aos="fade-up" data-aos-delay="400">
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
    </section>
  );
};

export default StruggleSection;
