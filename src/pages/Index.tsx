
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StruggleSection from '@/components/StruggleSection';
import SolutionSection from '@/components/SolutionSection';
import WhyMeSection from '@/components/WhyMeSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <StruggleSection />
        <SolutionSection />
        <WhyMeSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
