import type { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'سياسة الخصوصية' : 'Privacy Policy',
    description: isAr ? 'سياسة الخصوصية لـ PayoutCheck' : 'Privacy Policy for PayoutCheck',
  };
}

export default function PrivacyPage({ params: { locale } }: Props) {
  const isAr = locale === 'ar';
  
  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 text-navy">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</h1>
      
      <div className="prose prose-slate max-w-none text-navy bg-white p-8 rounded-lg shadow-sm border border-border-light">
        <div className="bg-amber/10 border-l-4 border-amber p-4 mb-6 rounded-r">
          <p className="m-0 text-sm">
            <strong>{isAr ? 'ملاحظة:' : 'Note:'}</strong> {isAr 
              ? 'سيتم نشر سياسة الخصوصية الكاملة قبل قبول بيانات العملاء.' 
              : 'Full privacy policy will be published before accepting client data.'}
          </p>
        </div>
        
        <ul className="space-y-4 list-disc pl-5 rtl:pr-5 rtl:pl-0">
          <li>{isAr ? 'لا نطلب أبدًا بيانات اعتماد البنك.' : 'No bank credentials requested.'}</li>
          <li>{isAr ? 'تتم مشاركة الملفات عبر طرق آمنة معتمدة.' : 'Files shared via approved secure methods.'}</li>
          <li>{isAr ? 'يتم تنقيح الملفات الحساسة حيثما أمكن ذلك.' : 'Sensitive files redacted where possible.'}</li>
          <li>{isAr ? 'يقتصر الوصول على المؤسس (Jeel Padmani).' : 'Access limited to founder (Jeel Padmani).'}</li>
          <li>{isAr ? 'ليست نصيحة قانونية / ضريبية / استثمارية.' : 'Not legal/tax/investment advice.'}</li>
          <li>{isAr ? 'غير تابع لشركة طلبات.' : 'Not affiliated with Talabat.'}</li>
          <li>{isAr ? 'لا ندعو أبدًا إلى تحميل ملفات غير آمنة للعامة.' : 'Never invite public unsecured file upload.'}</li>
        </ul>
      </div>
    </div>
  );
}
