import type { Metadata } from 'next';
import FAQSection from '@/components/sections/FAQSection';
import { faqItems } from '@/config/site.config';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'الأسئلة الشائعة' : 'FAQ',
    description: isAr 
      ? 'أسئلة شائعة حول خدمة PayoutCheck لمراجعة تسويات طلبات.' 
      : 'Common questions about PayoutCheck Talabat settlement review service.',
  };
}

export default function FAQPage({ params: { locale } }: Props) {
  const typedLocale = locale as 'en' | 'ar';
  
  // Generate JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": typedLocale === 'ar' ? item.questionAr : item.questionEn,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typedLocale === 'ar' ? item.answerAr : item.answerEn
      }
    }))
  };

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FAQSection locale={typedLocale} />
    </div>
  );
}
