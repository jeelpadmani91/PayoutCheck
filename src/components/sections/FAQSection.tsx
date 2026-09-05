'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import { faqItems } from '@/config/site.config';
import { trackEvent } from '@/lib/analytics';

interface FAQSectionProps {
  locale: 'en' | 'ar';
}

export default function FAQSection({ locale }: FAQSectionProps) {
  const isAr = locale === 'ar';

  const accordionItems = faqItems.map((item, index) => ({
    id: `faq-${index}`,
    question: isAr ? item.questionAr : item.questionEn,
    answer: isAr ? item.answerAr : item.answerEn,
  }));

  const handleItemOpen = (id: string) => {
    trackEvent('faq_opened', { faq_id: id });
  };

  return (
    <section id="faq" className="py-20 bg-off-white">
      <Container>
        <SectionHeading
          title={isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion items={accordionItems} onItemOpen={handleItemOpen} />
        </div>
      </Container>
    </section>
  );
}
