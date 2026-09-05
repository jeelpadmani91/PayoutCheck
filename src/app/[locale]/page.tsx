import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import WhatWeReviewSection from '@/components/sections/WhatWeReviewSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import SampleReportSection from '@/components/sections/SampleReportSection';
import WhoItsForSection from '@/components/sections/WhoItsForSection';
import EarlyStageSection from '@/components/sections/EarlyStageSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Home', // Next.js applies the layout template automatically
};

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const typedLocale = locale as 'en' | 'ar';
  
  return (
    <>
      <HeroSection locale={typedLocale} />
      <ProblemSection locale={typedLocale} />
      <WhatWeReviewSection locale={typedLocale} />
      <HowItWorksSection locale={typedLocale} />
      <CalculatorSection locale={typedLocale} />
      <SampleReportSection locale={typedLocale} />
      <WhoItsForSection locale={typedLocale} />
      <EarlyStageSection locale={typedLocale} />
      <PricingSection locale={typedLocale} />
      <FAQSection locale={typedLocale} />
      <FinalCTASection locale={typedLocale} />
    </>
  );
}
