
import React from 'react';
import { 
  MessageSquare,
  ClipboardCheck,
  Users,
  BookText,
  FileText,
  Presentation,
  UploadCloud,
  Award
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const ThingsIDeliverSection = () => {
  const featureItems = [
    {
      title: "INITIAL CONSULTATION",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "text-brand-purple",
      bgColor: "bg-brand-purple/10",
      description: "I begin by providing a concise abstract that outlines both the existing system and the proposed system, giving a clear overview of the project scope and objectives.",
      listItems: []
    },
    {
      title: "STRUCTURED REVIEW PROCESS",
      icon: <ClipboardCheck className="h-6 w-6" />,
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
      icon: <Users className="h-6 w-6" />,
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
      icon: <Award className="h-6 w-6" />,
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
      icon: <FileText className="h-6 w-6" />,
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
      icon: <Presentation className="h-6 w-6" />,
      color: "text-brand-teal",
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
      icon: <UploadCloud className="h-6 w-6" />,
      color: "text-brand-purple",
      bgColor: "bg-purple-100",
      description: "I won't remote deploy your project. Instead, I teach you how to deploy your project by yourself - an extra learning opportunity that empowers you to understand and manage your own implementation.",
      listItems: []
    }
  ];

  return (
    <section 
      id="things-i-deliver" 
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-sm font-semibold mb-3 animate-fade-in">
            MY SERVICES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-purple-light">
            THINGS I DELIVER
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A professional approach to ensure your project meets academic standards and helps you succeed.
          </p>
          <Separator className="mt-8 mx-auto w-24 bg-brand-purple/30 h-1 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {featureItems.map((feature, index) => (
            <Card 
              key={index}
              className={cn(
                "feature-card border-t-4 transition-all duration-300 group hover:-translate-y-2",
                index === featureItems.length - 1 ? "md:col-span-2 md:max-w-3xl md:mx-auto" : "",
                `border-t-${feature.color.split('-').pop()}-400`
              )}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start">
                  <div className={`mr-4 ${feature.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="w-full">
                    <h3 className={`text-xl font-bold mb-3 ${feature.color}`}>{feature.title}</h3>
                    {feature.description && (
                      <p className="text-gray-600 mb-3">{feature.description}</p>
                    )}
                    
                    {feature.listItems.length > 0 && (
                      <ul className="space-y-3 text-gray-600">
                        {feature.listItems.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            {item.label ? (
                              <>
                                <span className="font-semibold mr-2">{item.label}</span>
                                <span>{item.content}</span>
                              </>
                            ) : (
                              <>
                                <span className="mr-2 text-brand-purple">•</span>
                                <span>{item.content}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsIDeliverSection;
