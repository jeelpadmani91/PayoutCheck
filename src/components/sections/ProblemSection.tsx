'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { trackEvent } from '@/lib/analytics';

interface ProblemSectionProps {
  locale: 'en' | 'ar';
}

const content = {
  en: {
    heading: 'A single payout number hides several different calculations.',
    pos: 'Your POS records',
    settlement: 'Talabat settlement',
    bank: 'Bank deposit',
    reviewLayer: 'PayoutCheck identifies what doesn\'t match',
    cta: 'See How the Review Works',
  },
  ar: {
    heading: 'رقم تسوية واحد يخفي عدة حسابات مختلفة.',
    pos: 'سجلات نقاط البيع',
    settlement: 'تسوية طلبات',
    bank: 'إيداع البنك',
    reviewLayer: 'PayoutCheck يحدد ما لا يتطابق',
    cta: 'اعرف كيف تتم المراجعة',
  }
};

export default function ProblemSection({ locale }: ProblemSectionProps) {
  const t = content[locale];

  const handleScroll = () => {
    trackEvent('problem_scroll_click');
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white text-navy">
      <Container>
        <SectionHeading title={t.heading} align="center" className="mb-12" />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Top 3 columns */}
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6 md:gap-4 relative z-10">
            {/* POS */}
            <div className="w-full md:w-1/3 flex flex-col items-center bg-off-white border border-border-light p-6 rounded-xl shadow-sm">
              <svg className="w-10 h-10 text-emerald mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <h3 className="font-semibold text-center text-lg">{t.pos}</h3>
            </div>
            
            {/* Settlement */}
            <div className="w-full md:w-1/3 flex flex-col items-center bg-off-white border border-border-light p-6 rounded-xl shadow-sm">
              <svg className="w-10 h-10 text-amber mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <h3 className="font-semibold text-center text-lg">{t.settlement}</h3>
            </div>
            
            {/* Bank */}
            <div className="w-full md:w-1/3 flex flex-col items-center bg-off-white border border-border-light p-6 rounded-xl shadow-sm">
              <svg className="w-10 h-10 text-emerald mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
              </svg>
              <h3 className="font-semibold text-center text-lg">{t.bank}</h3>
            </div>
          </div>
          
          {/* Arrows Down */}
          <div className="hidden md:flex w-full justify-around items-center h-16 relative -mt-4 z-0">
            <div className="w-px h-16 bg-gradient-to-b from-border-light to-amber"></div>
            <div className="w-px h-16 bg-gradient-to-b from-border-light to-amber"></div>
            <div className="w-px h-16 bg-gradient-to-b from-border-light to-amber"></div>
          </div>
          
          <div className="md:hidden w-px h-12 bg-gradient-to-b from-border-light to-amber my-4"></div>
          
          {/* PayoutCheck Review Layer */}
          <div className="w-full bg-navy text-white p-6 rounded-xl shadow-lg border border-amber/30 text-center relative z-10">
            <h3 className="text-xl font-semibold mb-2">{t.reviewLayer}</h3>
            <svg className="w-6 h-6 mx-auto text-amber mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          
          <div className="mt-10">
            <Button variant="tertiary" onClick={handleScroll}>
              {t.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
