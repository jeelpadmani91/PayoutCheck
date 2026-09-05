import type { Metadata } from 'next';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import { getCalendarUrl, getWhatsAppUrl } from '@/config/site.config';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'كيف يعمل' : 'How It Works',
    description: isAr 
      ? 'تعرف على كيفية قيام PayoutCheck بمراجعة ملفات تسوية طلبات الخاصة بك خطوة بخطوة.' 
      : 'Learn how PayoutCheck reviews your Talabat settlement files step by step.',
  };
}

export default function HowItWorksPage({ params: { locale } }: Props) {
  const typedLocale = locale as 'en' | 'ar';
  return (
    <div className="pt-20">
      <HowItWorksSection locale={typedLocale} />
      <div className="container mx-auto px-4 py-16 text-center max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">{typedLocale === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to get started?'}</h2>
        <p className="text-slate-muted mb-8">
          {typedLocale === 'ar' ? 'تواصل معنا على واتساب لمناقشة احتياجاتك' : 'Contact us on WhatsApp to discuss your needs'}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={getWhatsAppUrl(typedLocale)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-600 transition"
          >
            {typedLocale === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
          </a>
          <a
            href={getCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-navy border border-border-light px-6 py-3 rounded-md font-medium hover:bg-off-white transition"
          >
            {typedLocale === 'ar' ? 'حجز استشارة' : 'Book a Consultation'}
          </a>
        </div>
      </div>
    </div>
  );
}
