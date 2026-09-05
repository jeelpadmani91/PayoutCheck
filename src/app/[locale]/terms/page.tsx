import type { Metadata } from 'next';
import { siteConfig, disclaimer } from '@/config/site.config';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'الشروط والأحكام' : 'Terms of Service',
    description: isAr ? 'الشروط والأحكام لـ PayoutCheck' : 'Terms of Service for PayoutCheck',
  };
}

export default function TermsPage({ params: { locale } }: Props) {
  const isAr = locale === 'ar';
  const typedLocale = locale as 'en' | 'ar';
  
  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 text-navy">{isAr ? 'الشروط والأحكام' : 'Terms of Service'}</h1>
      
      <div className="prose prose-slate max-w-none text-navy bg-white p-8 rounded-lg shadow-sm border border-border-light">
        <p className="text-lg mb-6">
          {isAr 
            ? 'سيتم نشر شروط الخدمة قبل أن تبدأ PayoutCheck في قبول ارتباطات العملاء.' 
            : 'Terms of service will be published before PayoutCheck begins accepting client engagements.'}
        </p>
        
        <p className="mb-8 text-slate-muted">
          {isAr
            ? 'باستخدامك للخدمة، فإنك تقر وتوافق على إخلاء المسؤولية أدناه.'
            : 'By using the service, users acknowledge the disclaimer below.'}
        </p>
        
        <div className="bg-off-white p-6 rounded-md border border-border-light">
          <h2 className="text-xl font-bold mb-4">{isAr ? 'إخلاء المسؤولية' : 'Disclaimer'}</h2>
          <p className="text-sm">
            {typedLocale === 'ar' ? disclaimer.ar : disclaimer.en}
          </p>
        </div>
      </div>
    </div>
  );
}
