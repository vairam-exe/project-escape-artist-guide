
import React from 'react';
import { 
  MessageSquare,
  ClipboardCheck,
  Users,
  BookText,
  FileText,
  Easel,
  UploadCloud
} from 'lucide-react';

const ThingsIDeliverSection = () => {
  return (
    <section id="things-i-deliver" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-sm font-semibold mb-3">
            MY SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            THINGS I DELIVER
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A professional approach to ensure your project meets academic standards and helps you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Initial Consultation */}
          <div className="feature-card">
            <div className="flex items-start">
              <div className="mr-4 bg-brand-purple/10 p-3 rounded-lg">
                <MessageSquare className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">INITIAL CONSULTATION</h3>
                <p className="text-gray-600">
                  I begin by providing a concise abstract that outlines both the existing system and the proposed system, giving a clear overview of the project scope and objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Structured Review Process */}
          <div className="feature-card">
            <div className="flex items-start">
              <div className="mr-4 bg-brand-teal/10 p-3 rounded-lg">
                <ClipboardCheck className="h-6 w-6 text-brand-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">STRUCTURED REVIEW PROCESS</h3>
                <p className="text-gray-600 mb-3">
                  Your project will progress through a well-organized series of reviews to ensure quality and alignment with requirements:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">First Review:</span>
                    <span>A thorough examination of the initial project framework and foundational elements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Second Review:</span>
                    <span>Implementation of feedback from the first review and presentation of progress made.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Third Review:</span>
                    <span>Near-completion assessment with focus on refinement and optimization.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Final Review:</span>
                    <span>Presentation of the complete project with all requirements fulfilled.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Collaborative Approach */}
          <div className="feature-card">
            <div className="flex items-start">
              <div className="mr-4 bg-brand-yellow/10 p-3 rounded-lg">
                <Users className="h-6 w-6 text-brand-yellow" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">COLLABORATIVE APPROACH</h3>
                <p className="text-gray-600 mb-3">
                  I maintain consistent communication throughout the project lifecycle:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Pre-review meetings to discuss expectations, answer questions, and address any concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Post-review meetings to go through feedback and make necessary adjustments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Research Excellence */}
          <div className="feature-card">
            <div className="flex items-start">
              <div className="mr-4 bg-brand-red/10 p-3 rounded-lg">
                <BookText className="h-6 w-6 text-brand-red" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">RESEARCH EXCELLENCE</h3>
                <p className="text-gray-600 mb-3">
                  For academic and research projects:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>IEEE standard research papers with significant novelty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Plagiarism rates below 13%, meeting IEEE standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Comprehensive research methodology and references</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Documentation */}
          <div className="feature-card">
            <div className="flex items-start">
              <div className="mr-4 bg-green-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">PROJECT DOCUMENTATION</h3>
                <p className="text-gray-600 mb-3">
                  For project reports:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>I will provide all the essential content components needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>You will be responsible for formatting according to your specific college requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>I will assist with organizing the provided content to match your required format</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comprehensive Explanations */}
          <div className="feature-card">
            <div className="flex items-start">
              <div className="mr-4 bg-blue-100 p-3 rounded-lg">
                <Easel className="h-6 w-6 text-brand-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">COMPREHENSIVE EXPLANATIONS</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Clear visual representations of all project functionalities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Detailed diagrams and flowcharts that simplify complex concepts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Complete documentation that accurately reflects the final product</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Delivery */}
          <div className="feature-card md:col-span-2">
            <div className="flex items-start">
              <div className="mr-4 bg-purple-100 p-3 rounded-lg">
                <UploadCloud className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">PROJECT DELIVERY</h3>
                <p className="text-gray-600">
                  I won't remote deploy your project. Instead, I teach you how to deploy your project by yourself - an extra learning opportunity that empowers you to understand and manage your own implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsIDeliverSection;
