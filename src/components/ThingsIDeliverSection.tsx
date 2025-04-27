import React from 'react'; // Remove useEffect, useRef, useState
import { useInView } from 'react-intersection-observer'; // Import useInView

import {
  FileText,
  ClipboardCheck,
  Users,
  Award,
  BookText,
  Presentation,
  GraduationCap
} from 'lucide-react';
import { Card } from '@/components/ui/card'; // Card might be used internally by FeatureCardAnimated or not needed here
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils'; // Assuming cn is used elsewhere or for utility classes

// Import the new animated card component
import FeatureCardAnimated from './FeatureCardAnimated'; // Adjust the path as needed

const ThingsIDeliverSection = () => {
  // Remove sectionRef, isVisible state, and useEffect

  // Setup Intersection Observer for the header block
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Define animation classes for the header block (Fade in + Slide Up)
  const headerAnimationClasses = (inView: boolean) =>
    `transition-all duration-700 ease-out ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;


  const featureItems = [
    {
      title: "INITIAL CONSULTATION",
      icon: <FileText className="h-7 w-7" />,
      color: "text-brand-purple",
      bgColor: "bg-brand-purple/10",
      description: "I begin by providing a concise abstract that outlines both the existing system and the proposed system, giving a clear overview of the project scope and objectives.",
      listItems: []
    },
    {
      title: "STRUCTURED REVIEW PROCESS",
      icon: <ClipboardCheck className="h-7 w-7" />,
      color: "text-brand-teal",
      bgColor: "bg-brand-teal/10",
      description: "Your project will progress through a well-organized series of reviews to ensure quality and alignment with requirements:",
      listItems: [
        { label: "First Review:", content: "A thorough examination of the initial project framework and foundational elements." },
        { label: "Second Review:", content: "Implementation of feedback from the first review and presentation of progress made." },
        { label: "Third Review:", content: "Near-completion assessment with focus on refinement and optimization." },
        { label: "Final Review:", content: "Presentation of the complete project with all requirements fulfilled." }
      ]
    },
    {
      title: "COLLABORATIVE APPROACH",
      icon: <Users className="h-7 w-7" />,
      color: "text-brand-yellow",
      bgColor: "bg-brand-yellow/10",
      description: "I maintain consistent communication throughout the project lifecycle:",
      listItems: [
        { content: "Pre-review meetings to discuss expectations, answer questions, and address any concerns" },
        { content: "Post-review meetings to go through feedback and make necessary adjustments" }
      ]
    },
    {
      title: "RESEARCH EXCELLENCE",
      icon: <Award className="h-7 w-7" />,
      color: "text-brand-red",
      bgColor: "bg-brand-red/10",
      description: "For academic and research projects:",
      listItems: [
        { content: "IEEE standard research papers with significant novelty" },
        { content: "Plagiarism rates below 13%, meeting IEEE standards" },
        { content: "Comprehensive research methodology and references" }
      ]
    },
    {
      title: "PROJECT DOCUMENTATION",
      icon: <BookText className="h-7 w-7" />,
      color: "text-green-600",
      bgColor: "bg-green-100",
      description: "For project reports:",
      listItems: [
        { content: "I will provide all the essential content components needed" },
        { content: "You will be responsible for formatting according to your specific college requirements" },
        { content: "I will assist with organizing the provided content to match your required format" }
      ]
    },
    {
      title: "COMPREHENSIVE EXPLANATIONS",
      icon: <Presentation className="h-7 w-7" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      description: "",
      listItems: [
        { content: "Clear visual representations of all project functionalities" },
        { content: "Detailed diagrams and flowcharts that simplify complex concepts" },
        { content: "Complete documentation that accurately reflects the final product" }
      ]
    }
  ];

  return (
    <section
      id="things-i-deliver"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background elements - Retain existing CSS animations if they are global or defined elsewhere */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(120, 90, 248, 0.2) 2px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-12 md:h-24 animate-wave-slow"> {/* Assumes animate-wave-slow is defined globally/elsewhere */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 w-full h-full fill-white">
          <path d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,101.3C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Block - Add ref and animation classes */}
        <div
          ref={headerRef}
          className={`text-center mb-16 ${headerAnimationClasses(headerInView)}`}
        >
          <span className="inline-block px-3 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-sm font-semibold mb-3 animate-float"> {/* Assumes animate-float is defined globally/elsewhere */}
            MY SERVICES
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-brand-purple-light to-violet-500">
            THINGS I DELIVER
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A professional approach to ensure your project meets academic standards and helps you succeed.
          </p>
          <div className="relative mt-10">
            <Separator className="absolute left-1/2 -translate-x-1/2 w-32 bg-brand-purple/30 h-1 rounded-full" />
            <Separator className="absolute left-1/2 -translate-x-1/2 w-16 bg-brand-purple h-1 rounded-full animate-pulse-custom" /> {/* Assumes animate-pulse-custom is defined globally/elsewhere */}
          </div>
        </div>

        {/* Feature Cards Grid - Map using the new animated component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <FeatureCardAnimated
              key={index}
              feature={feature}
              index={index} // Pass index if needed for future staggered delay per card
            />
          ))}
        </div>

        {/* Bottom Wave - Retain existing CSS animation if global */}
        <div className="absolute bottom-0 left-0 right-0 h-12 md:h-24 animate-wave-slow"> {/* Assumes animate-wave-slow is defined globally/elsewhere */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full fill-white transform rotate-180">
            <path d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,101.3C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
      </div>

      {/* Remove the style tag with @keyframes that were for scroll animation */}
      {/* Keep @keyframes if they are solely for background/decorative elements and not defined elsewhere */}
      {/* Based on names, animate-pulse-custom, animate-wave-slow, animate-float seem decorative */}
      {/* The others (fadeUp, fadeInRotate, pulseIcon, slideRight, fadeIn, slideInFade) seem for scroll animation */}
      {/* Let's assume pulse-custom, wave-slow, float are defined globally or in a separate CSS file */}
      {/* The rest can be removed */}
      {/*
      <style>
        {`
        @keyframes pulse-custom { ... } // Keep if not global
        @keyframes wave-slow { ... }    // Keep if not global
        @keyframes float { ... }        // Keep if not global
        `}
      </style>
      */}
    </section>
  );
};

// You would typically define FeatureCardAnimated in its own file (e.g., components/FeatureCardAnimated.tsx)
// For demonstration, it's shown above the main component, but importing is the standard practice.

export default ThingsIDeliverSection;