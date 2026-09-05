import type { Metadata } from 'next';
import PricingSection from '@/components/sections/PricingSection';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'الأسعار' : 'Pricing',
    description: isAr 
      ? 'أسعار شفافة لخدمات مراجعة تسويات طلبات.' 
      : 'Transparent pricing for Talabat settlement review services.',
  };
}

export default function PricingPage({ params: { locale } }: Props) {
  const typedLocale = locale as 'en' | 'ar';
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 pt-12 pb-8 text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-navy">
          {typedLocale === 'ar' ? 'خطط أسعار شفافة' : 'Transparent Pricing Plans'}
        </h1>
        <p className="text-slate-muted text-lg">
          {typedLocale === 'ar' 
            ? 'اختر الخطة التي تناسب احتياجاتك. لا توجد رسوم خفية. (إخلاء مسؤولية: الأسعار الموضحة هي لأغراض العرض التوضيحي فقط)' 
            : 'Choose the plan that fits your needs. No hidden fees. (Disclaimer: Prices shown are for illustrative purposes only)'}
        </p>
      </div>
      <PricingSection locale={typedLocale} />
    </div>
  );
}
