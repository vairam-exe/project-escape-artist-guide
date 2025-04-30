import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView

import { Badge } from '@/components/ui/badge';
import { CheckCircle2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SolutionSection = () => {

  // --- Animation Implementation ---

  // Setup Intersection Observers for the two columns
  const [leftColRef, leftColInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const [rightColRef, rightColInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Base animation classes for columns (Fade in + Slide)
  // Left column slides up slightly, Right column slides up slightly
  const colAnimationClasses = (inView: boolean) =>
    `transition-all duration-700 ease-out ${ // Adjust duration and easing
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' // Fade in and slide up
    }`;

  // Animation classes for staggered children within the right column (text content)
  const childAnimationClasses = (inView: boolean, delay: string) =>
    `transition-all duration-700 ease-out ${delay} ${ // Apply delay
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5' // Simple fade up for children
    }`;

  // --- End Animation Implementation ---


  return (
    <section id="solution" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">

          {/* Left Column (Card) - Add ref and animation classes */}
          <div
            ref={leftColRef}
            className={`md:w-1/2 mb-10 md:mb-0 relative ${colAnimationClasses(leftColInView)}`}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-purple/5 to-brand-teal/5 rounded-2xl p-8 max-w-md mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
                    <img
                      src="/lovable-uploads/c0392daf-ab4a-451a-88ce-a57a19bba27a.png"
                      alt="Project Superhero"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">vairam.exe</h3>
                  <div className="flex justify-center gap-2 mb-4">
                    <Badge className="bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20 border-none">Class of 2024</Badge>
                    <Badge className="bg-brand-teal/10 text-brand-teal hover:bg-brand-teal/20 border-none">50+ Clients</Badge>
                  </div>
                  <p className="text-center text-gray-600">
                    "I will not just be your project guide but also be your friend if you love Thala Ajith, listen to Kanye West, and binge-watch Interstellar for the 3768th time! 🎬"
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Success Rate</span>
                      <span className="font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                      <div className="bg-brand-purple h-2 rounded-full" style={{width: "98%"}}></div> {/* Width is inline, but not animated by scroll */}
                    </div>
                  </div>

                  {/* Absolute positioned elements are part of the left column block animation */}
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-xl">🌟</span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-purple/20 rounded-full animate-bounce-light"></div> {/* These might have their own CSS animations */}
                <div className="absolute -bottom-8 right-20 w-16 h-16 bg-brand-teal/20 rounded-full animate-float"></div> {/* Retain existing keyframe animations if desired */}
              </div>
            </div>
          </div>

          {/* Right Column (Text Content) - Add ref and animation classes */}
          <div
            ref={rightColRef}
            className={`md:w-1/2 md:pl-12 ${colAnimationClasses(rightColInView)}`}
          >
            {/* Apply child animation classes with delay */}
            <span className={`inline-block px-3 py-1 bg-brand-teal/20 text-brand-teal rounded-full text-sm font-semibold mb-3 ${childAnimationClasses(rightColInView, 'delay-0')}`}>
              THE SOLUTION
            </span>
            {/* Apply child animation classes with delay */}
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${childAnimationClasses(rightColInView, 'delay-100')}`}>
              Meet vairam.exe
              <span className="ml-2">🦸‍♂️</span>
            </h2>

            {/* Apply child animation classes with delay */}
            <p className={`text-lg mb-6 text-gray-700 ${childAnimationClasses(rightColInView, 'delay-200')}`}>
              Hi there! I'm Vairam, a 2024 CS graduate who's been through the same project hellscape you're in now.
              I survived my own final year project AND got scammed by a "professional service" that delivered
              absolute garbage.
            </p>
            {/* Apply child animation classes with delay */}
            <p className={`text-lg mb-8 text-gray-700 ${childAnimationClasses(rightColInView, 'delay-300')}`}>
              Now I'm here to be the person I needed back then - <br />
              <strong>What Makes Me Not-a-Scam™:</strong>
            </p>

            {/* Apply child animation classes with delay to the ul or stagger lis */}
            {/* Animating UL is simpler; animating LIs adds more granular flow */}
            {/* Let's animate the UL first, and add LI staggering if needed */}
            <ul className={`space-y-4 mb-8 ${childAnimationClasses(rightColInView, 'delay-400')}`}>
              {/* You could add delays to individual LIs here too if desired, e.g., delay-500, delay-600, etc. */}
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-brand-purple mr-3 flex-shrink-0" />
                <span>Actually understands your project domain. (Like… really. Not just reading from a script 😱)</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-brand-purple mr-3 flex-shrink-0" />
                <span>Won't charge you the price of a small island 🏝️</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-brand-purple mr-3 flex-shrink-0" />
                <span>Helps you learn the code — so when the review panel says “Explain line 17,” you don’t black out.🧠</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-brand-purple mr-3 flex-shrink-0" />
                <span>Survived this mess just last year. Not one of those 2008 seniors still selling PHP projects.🎓</span>
              </li>
            </ul>

            {/* Apply child animation classes with delay */}
            <p className={`text-gray-700 italic mb-6 ${childAnimationClasses(rightColInView, 'delay-600')}`}>
              "The best way to roast scammers? Be the honest machi students can actually trust."
              <span className="block text-right mt-2">— Me, probably</span>
            </p>

            {/* Apply child animation classes with delay */}
            <div className={`mt-4 text-center ${childAnimationClasses(rightColInView, 'delay-700')}`}>
              <a
                href="https://wa.link/m4d966"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple/90 transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="text-sm font-medium">
                Scam avutundemo ani doubt vasthunda? come, let’s talk and find out the truth 🤝
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;