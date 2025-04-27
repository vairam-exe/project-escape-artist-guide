import React, { useEffect, useRef, useState } from 'react';
import { 
  FileText,
  ClipboardCheck,
  Users,
  Award,
  BookText,
  Presentation,
  GraduationCap
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const ThingsIDeliverSection = () => {
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
    },
    {
      title: "PROJECT DELIVERY",
      icon: <GraduationCap className="h-7 w-7" />,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      description: "I won't remote deploy your project. Instead, I teach you how to deploy your project by yourself - an extra learning opportunity that empowers you to understand and manage your own implementation.",
      listItems: []
    }
  ];

  return (
    <section 
      id="things-i-deliver" 
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-0">
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(120, 90, 248, 0.2) 2px, transparent 0)',
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
      
      {/* Curved section divider at top */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-24 animate-wave-slow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 w-full h-full fill-white">
          <path d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,101.3C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          className="text-center mb-16 transition-all duration-1000 ease-out"
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <span className="inline-block px-3 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-sm font-semibold mb-3 animate-float">
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
            <Separator className="absolute left-1/2 -translate-x-1/2 w-16 bg-brand-purple h-1 rounded-full animate-pulse-custom" />
          </div>
        </div>

        {/* Grid layout update */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              className="feature-card border-t-4 hover:shadow-xl group relative overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translateY(0) rotate(0)' 
                  : 'translateY(40px) rotate(1deg)',
                transition: `all 0.6s ease-out ${index * 0.2}s`,
                borderTopColor: `var(--${feature.color.split('-').pop()}-500)`
              }}
            >
              <div className="p-6 md:p-8">
                <div className={`mb-4 ${feature.bgColor} p-4 rounded-lg transition-all duration-500`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${feature.color}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                {feature.listItems.length > 0 && (
                  <ul className="space-y-3 text-gray-600">
                    {feature.listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className={`mr-2 ${feature.color}`}>•</span>
                        <span>{item.content}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Curved section divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 md:h-24 animate-wave-slow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full fill-white transform rotate-180">
            <path d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,101.3C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style>
        {`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: translateX(-50%) scaleX(1);
          }
          50% {
            transform: translateX(-50%) scaleX(1.2);
          }
        }
        
        @keyframes fadeInRotate {
          from {
            opacity: 0;
            transform: translateY(40px) rotate(0.5deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }
        
        @keyframes pulseIcon {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        
        @keyframes slideRight {
          from {
            transform: translateX(-15px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInFade {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse-custom {
          0%, 100% {
            transform: translateX(-50%) scaleX(1);
            opacity: 0.8;
          }
          50% {
            transform: translateX(-50%) scaleX(1.3);
            opacity: 1;
          }
        }
        
        @keyframes wave-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }
        
        .animate-pulse-custom {
          animation: pulse-custom 2s infinite;
        }
        
        .animate-wave-slow {
          animation: wave-slow 8s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        `}
      </style>
    </section>
  );
};

export default ThingsIDeliverSection;
