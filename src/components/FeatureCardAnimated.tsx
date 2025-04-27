import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView
import { Card } from '@/components/ui/card'; // Assuming Card is used inside
import { Badge } from '@/components/ui/badge'; // Assuming Badge is used inside

// Define the props for the FeatureCardAnimated component
interface FeatureItem {
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description: string;
  listItems: { label?: string; content: string }[];
}

interface FeatureCardAnimatedProps {
  feature: FeatureItem;
  // We might pass the index if we want a staggered effect even with individual observers
  // but let's start without it for simplicity, as individual observers provide natural staggering.
  index: number; // Keeping index just in case for threshold or delay adjustments if needed later
}

const FeatureCardAnimated: React.FC<FeatureCardAnimatedProps> = ({ feature, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% is visible
    // We could add a delay here if we wanted a consistent delay between cards
    // delay: index * 100, // Example: 100ms delay per card
  });

  // Animation classes for the individual card (Fade in + slight Rotate/Slide)
  const cardAnimationClasses = (inView: boolean) =>
    `transition-all duration-600 ease-out ${ // Adjust duration
      inView
        ? 'opacity-100 translate-y-0 rotate-0'
        : 'opacity-0 translate-y-10 rotate(1deg)' // Start slightly below, faded, and slightly rotated
    }`;

  return (
    <div
      ref={ref} // Attach the ref to the card's container
      className={`feature-card group relative overflow-hidden ${cardAnimationClasses(inView)}`}
    >
      {/* Card content based on the feature prop */}
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
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
};

export default FeatureCardAnimated; // Export the new component