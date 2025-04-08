
import React from 'react';
import { ShieldCheck, Clock, Zap, Award, BookOpen, Users } from 'lucide-react';

const WhyMeSection = () => {
  return (
    <section id="why-me" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
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
          <div className="feature-card">
            <div className="mb-4 bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Fresh Graduate, Fresh Knowledge 
              <span className="emoji-bounce ml-1">🎓</span>
            </h3>
            <p className="text-gray-600">
              Graduated in 2024, which means I know current tech stacks, 
              not outdated approaches from the Jurassic era of programming.
              No dinosaurs here, just modern solutions! 🦖❌
            </p>
          </div>

          <div className="feature-card">
            <div className="mb-4 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-brand-teal" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Deadline? What Deadline? 
              <span className="emoji-bounce ml-1">⏱️</span>
            </h3>
            <p className="text-gray-600">
              Quick turnarounds because I know exactly what it's like to be 
              staring at the calendar in absolute terror. 
              Your emergency is my priority!
            </p>
          </div>

          <div className="feature-card">
            <div className="mb-4 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-brand-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Won't Break Your Bank Account 
              <span className="emoji-bounce ml-1">💰</span>
            </h3>
            <p className="text-gray-600">
              Student-friendly pricing because I remember eating ramen for weeks. 
              You need money for important things, like coffee and more coffee.
            </p>
          </div>

          <div className="feature-card">
            <div className="mb-4 bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Been Scammed, Won't Scam 
              <span className="emoji-bounce ml-1">🛡️</span>
            </h3>
            <p className="text-gray-600">
              Lost $500 to a fake "expert" service during my own project panic. 
              That experience made me vow never to do that to others. 
              Your trust = earned, not expected.
            </p>
          </div>

          <div className="feature-card">
            <div className="mb-4 bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Actually Teaches You Stuff 
              <span className="emoji-bounce ml-1">📚</span>
            </h3>
            <p className="text-gray-600">
              I won't just give you code - I'll explain it so you can 
              defend your project without looking like a deer in headlights 
              during your presentation.
            </p>
          </div>

          <div className="feature-card">
            <div className="mb-4 bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-brand-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Always Available To Chat 
              <span className="emoji-bounce ml-1">💬</span>
            </h3>
            <p className="text-gray-600">
              Not a faceless agency - I'm a real person who replies to messages, 
              even at weird hours (because I know inspiration/panic strikes at 3 AM).
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-center">
            Happy Future Students Will Say Nice Things Here! 
            <span className="ml-1">✨</span>
          </h3>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-500 italic">
              "This is where future testimonials will go once I've helped 
              people not cry into their keyboards. For now, imagine glowing 
              reviews and happy dance emojis!"
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
