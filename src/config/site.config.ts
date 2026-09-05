// =============================================================
// PayoutCheck Site Configuration
// =============================================================
// All placeholders marked [REPLACE BEFORE LAUNCH] must be
// updated with real values before deploying to production.
// =============================================================

export const siteConfig = {
  name: 'PayoutCheck',
  founder: 'Jeel Padmani',

  // ── Contact details ────────────────────────────────────────
  whatsappNumber: '919313728387',
  googleCalendarUrl: 'https://calendar.app.google/PA2guVJ6WzdioUKA9',
  salesEmail: 'jeelpadmani9@gmail.com',
  domain: 'https://calendar.app.google/PA2guVJ6WzdioUKA9',
  analyticsId: '[REPLACE BEFORE LAUNCH]', // e.g. 'G-XXXXXXXXXX'

  // ── WhatsApp pre-filled messages ──────────────────────────
  whatsappMessageEn:
    'Hi, I\'d like a free payout health check for my restaurant.',
  whatsappMessageAr:
    'مرحبًا، أريد فحص صحة تسوية مجاني لمطعمي.',

  // ── Social / SEO ──────────────────────────────────────────
  seo: {
    titleDefault:
      'PayoutCheck | Talabat Settlement Review for Kuwait Restaurants',
    titleDefaultAr:
      'PayoutCheck | مراجعة تسويات طلبات لمطاعم الكويت',
    descriptionDefault:
      'PayoutCheck helps Kuwait restaurants review Talabat settlement files, compare deductions with available records, identify potential discrepancies, and prepare clear follow-up evidence.',
    descriptionDefaultAr:
      'يساعد PayoutCheck مطاعم الكويت على مراجعة ملفات تسويات طلبات، ومقارنة الخصومات بالسجلات المتاحة، وتحديد الفروقات المحتملة، وتجهيز أدلة واضحة للمتابعة.',
  },
} as const;

// =============================================================
// Pricing Configuration
// =============================================================
// Modify values here — layout code reads from this object.
// =============================================================

export interface PricingTier {
  id: string;
  nameEn: string;
  nameAr: string;
  priceEn: string;
  priceAr: string;
  descriptionEn: string;
  descriptionAr: string;
  featuresEn: string[];
  featuresAr: string[];
  highlight?: boolean;
  badge?: { en: string; ar: string };
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'initial-review',
    nameEn: 'Initial Payout Health Check',
    nameAr: 'فحص صحة التسوية الأولي',
    priceEn: 'Free',
    priceAr: 'مجاني',
    descriptionEn:
      'A quick review of your most recent settlement file to identify whether a deeper analysis is worth pursuing.',
    descriptionAr:
      'مراجعة سريعة لأحدث ملف تسوية لديك لتحديد ما إذا كان التحليل المعمّق يستحق المتابعة.',
    featuresEn: [
      'Review of one settlement period',
      'High-level discrepancy scan',
      'No obligation to proceed',
      'Results shared via WhatsApp or call',
    ],
    featuresAr: [
      'مراجعة فترة تسوية واحدة',
      'مسح سريع للفروقات الرئيسية',
      'بدون التزام بالمتابعة',
      'النتائج عبر واتساب أو مكالمة',
    ],
    badge: { en: 'Free', ar: 'مجاني' },
  },
  {
    id: 'claim-ready-flat',
    nameEn: 'Claim-Ready Report (Flat Fee)',
    nameAr: 'تقرير جاهز للمطالبة (رسوم ثابتة)',
    priceEn: '100 KWD',
    priceAr: '١٠٠ د.ك',
    descriptionEn:
      'Full analysis with a claim-ready report when the identified potential discrepancy is under 300 KWD.',
    descriptionAr:
      'تحليل كامل مع تقرير جاهز للمطالبة عندما تكون الفروقات المحتملة أقل من ٣٠٠ د.ك.',
    featuresEn: [
      'Detailed line-by-line review',
      'Claim-ready evidence report',
      'Applicable for discrepancies under 300 KWD',
      'One-time flat fee',
    ],
    featuresAr: [
      'مراجعة تفصيلية سطرًا بسطر',
      'تقرير أدلة جاهز للمطالبة',
      'للفروقات أقل من ٣٠٠ د.ك',
      'رسوم ثابتة لمرة واحدة',
    ],
  },
  {
    id: 'claim-ready-percentage',
    nameEn: 'Claim-Ready Report (Success-Based)',
    nameAr: 'تقرير جاهز للمطالبة (على أساس النتيجة)',
    priceEn: '30% of identified discrepancy',
    priceAr: '٣٠٪ من الفروقات المحددة',
    descriptionEn:
      'Full analysis with a claim-ready report when the identified potential discrepancy is 300 KWD or more.',
    descriptionAr:
      'تحليل كامل مع تقرير جاهز للمطالبة عندما تكون الفروقات المحتملة ٣٠٠ د.ك أو أكثر.',
    featuresEn: [
      'Detailed line-by-line review',
      'Claim-ready evidence report',
      'Applicable for discrepancies of 300+ KWD',
      'Fee based on identified amount',
    ],
    featuresAr: [
      'مراجعة تفصيلية سطرًا بسطر',
      'تقرير أدلة جاهز للمطالبة',
      'للفروقات ٣٠٠ د.ك أو أكثر',
      'رسوم على أساس المبلغ المحدد',
    ],
    highlight: true,
    badge: { en: 'Most Popular', ar: 'الأكثر طلبًا' },
  },
  {
    id: 'ongoing-monthly',
    nameEn: 'Ongoing Monthly Review',
    nameAr: 'مراجعة شهرية مستمرة',
    priceEn: '40 KWD / month',
    priceAr: '٤٠ د.ك / شهر',
    descriptionEn:
      'Monthly settlement review to catch discrepancies as they happen, not months later.',
    descriptionAr:
      'مراجعة شهرية للتسويات لاكتشاف الفروقات فور حدوثها وليس بعد أشهر.',
    featuresEn: [
      'Monthly settlement file review',
      'Ongoing discrepancy monitoring',
      'Priority WhatsApp support',
      'Monthly summary report',
    ],
    featuresAr: [
      'مراجعة ملف التسوية شهريًا',
      'مراقبة مستمرة للفروقات',
      'دعم أولوية عبر واتساب',
      'تقرير ملخص شهري',
    ],
  },
  {
    id: 'multi-branch',
    nameEn: 'Multi-Branch Package',
    nameAr: 'باقة الفروع المتعددة',
    priceEn: '400 KWD / year',
    priceAr: '٤٠٠ د.ك / سنة',
    descriptionEn:
      'Annual settlement review package for restaurant groups with 2–5 branches on Talabat.',
    descriptionAr:
      'باقة مراجعة تسويات سنوية لمجموعات المطاعم التي لديها ٢-٥ فروع على طلبات.',
    featuresEn: [
      'All branches covered under one plan',
      'Quarterly deep reviews',
      'Consolidated reporting across branches',
      'Priority support and onboarding',
    ],
    featuresAr: [
      'جميع الفروع تحت خطة واحدة',
      'مراجعات معمّقة ربع سنوية',
      'تقارير موحدة لجميع الفروع',
      'دعم وتأهيل بأولوية',
    ],
  },
];

// =============================================================
// Disclaimer text — used wherever pricing or findings appear
// =============================================================

export const disclaimer = {
  en: 'PayoutCheck identifies potential discrepancies from the records provided. Findings are subject to the restaurant\'s agreement, settlement data, POS records, and supporting evidence. PayoutCheck is not affiliated with Talabat and does not guarantee refunds, credits, or claim outcomes.',
  ar: 'يحدد PayoutCheck الفروقات المحتملة من السجلات المقدمة. تخضع النتائج لاتفاقية المطعم وبيانات التسوية وسجلات نقاط البيع والأدلة الداعمة. PayoutCheck غير تابع لـ طلبات ولا يضمن استرداد الأموال أو الائتمانات أو نتائج المطالبات.',
} as const;

// =============================================================
// FAQ — 10 questions (from spec, legally careful)
// =============================================================

export interface FAQItem {
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
}

export const faqItems: FAQItem[] = [
  {
    questionEn: 'What does PayoutCheck actually do?',
    questionAr: 'ماذا يفعل PayoutCheck فعليًا؟',
    answerEn:
      'PayoutCheck reviews your Talabat settlement files alongside available POS or order records to identify potential discrepancies in commissions, refunds, cancellations, promotions, and other deductions. I then prepare a clear, claim-ready report you can use to follow up with Talabat.',
    answerAr:
      'يراجع PayoutCheck ملفات تسويات طلبات الخاصة بك إلى جانب سجلات نقاط البيع أو الطلبات المتاحة لتحديد الفروقات المحتملة في العمولات والمبالغ المستردة والإلغاءات والعروض الترويجية وغيرها من الخصومات. ثم أعدّ تقريرًا واضحًا وجاهزًا للمطالبة يمكنك استخدامه للمتابعة مع طلبات.',
  },
  {
    questionEn: 'Do I need to share bank login details?',
    questionAr: 'هل أحتاج إلى مشاركة تفاصيل تسجيل الدخول البنكية؟',
    answerEn:
      'No. PayoutCheck never asks for bank credentials. I work with your settlement files, POS exports, and order records — documents you already have access to.',
    answerAr:
      'لا. لا يطلب PayoutCheck أبدًا بيانات اعتماد البنك. أعمل مع ملفات التسوية الخاصة بك وتصديرات نقاط البيع وسجلات الطلبات — مستندات لديك وصول إليها بالفعل.',
  },
  {
    questionEn: 'Is PayoutCheck affiliated with Talabat?',
    questionAr: 'هل PayoutCheck تابع لـ طلبات؟',
    answerEn:
      'No. PayoutCheck is an independent service with no affiliation to Talabat, Delivery Hero, or any delivery platform.',
    answerAr:
      'لا. PayoutCheck خدمة مستقلة بدون أي ارتباط بطلبات أو ديليفري هيرو أو أي منصة توصيل.',
  },
  {
    questionEn: 'Do you guarantee I\'ll recover money?',
    questionAr: 'هل تضمنون أنني سأسترد أموالاً؟',
    answerEn:
      'No. PayoutCheck identifies potential discrepancies and prepares evidence for your review. Whether a claim results in a credit or refund depends on Talabat\'s review, your contract terms, and the supporting evidence. I\'m transparent about this from the start.',
    answerAr:
      'لا. يحدد PayoutCheck الفروقات المحتملة ويعد الأدلة لمراجعتك. يعتمد ما إذا كانت المطالبة ستؤدي إلى ائتمان أو استرداد على مراجعة طلبات وشروط عقدك والأدلة الداعمة. أنا شفاف بهذا الشأن من البداية.',
  },
  {
    questionEn: 'What files do I need to provide?',
    questionAr: 'ما الملفات التي أحتاج إلى تقديمها؟',
    answerEn:
      'At minimum, a recent Talabat settlement file. For a more thorough review, POS order exports and your Talabat contract/commission terms are helpful. Message me on WhatsApp and I\'ll tell you exactly what to gather — it takes most owners under 10 minutes.',
    answerAr:
      'على الأقل، ملف تسوية طلبات حديث. لمراجعة أكثر شمولاً، يكون تصدير طلبات نقاط البيع وشروط عقد/عمولة طلبات مفيدًا. راسلني على واتساب وسأخبرك بالضبط ما يجب جمعه — يستغرق ذلك أقل من ١٠ دقائق لمعظم أصحاب المطاعم.',
  },
  {
    questionEn: 'How long does a review take?',
    questionAr: 'كم يستغرق وقت المراجعة؟',
    answerEn:
      'An initial health check typically takes 1–2 business days. A full claim-ready report takes 3–5 business days depending on the volume of records and the review period.',
    answerAr:
      'يستغرق الفحص الصحي الأولي عادةً ١-٢ أيام عمل. يستغرق التقرير الكامل الجاهز للمطالبة ٣-٥ أيام عمل حسب حجم السجلات وفترة المراجعة.',
  },
  {
    questionEn: 'Which POS systems do you work with?',
    questionAr: 'ما أنظمة نقاط البيع التي تعملون معها؟',
    answerEn:
      'I can work with exports from Foodics, Syrve, POSRocket, and other common POS systems used in Kuwait. If your POS isn\'t listed, message me — I can usually work with any system that exports order-level data.',
    answerAr:
      'يمكنني العمل مع التصديرات من Foodics وSyrve وPOSRocket وأنظمة نقاط البيع الشائعة الأخرى في الكويت. إذا لم يكن نظامك مدرجًا، راسلني — يمكنني عادةً العمل مع أي نظام يصدّر بيانات على مستوى الطلب.',
  },
  {
    questionEn: 'Is my data secure?',
    questionAr: 'هل بياناتي آمنة؟',
    answerEn:
      'Yes. Files are shared only through approved secure methods. I don\'t request bank credentials, and sensitive information is redacted where possible. As a solo operator, access is limited to me personally — your data doesn\'t pass through a team or third-party tool.',
    answerAr:
      'نعم. تتم مشاركة الملفات فقط من خلال طرق آمنة معتمدة. لا أطلب بيانات اعتماد البنك، ويتم حذف المعلومات الحساسة حيثما أمكن. كمؤسس فردي، الوصول مقتصر علي شخصيًا — بياناتك لا تمر عبر فريق أو أداة طرف ثالث.',
  },
  {
    questionEn: 'What if no discrepancies are found?',
    questionAr: 'ماذا لو لم يتم العثور على فروقات؟',
    answerEn:
      'If the initial health check shows no significant discrepancies, I\'ll tell you clearly — and you owe nothing. That\'s a good outcome. It means your settlements are tracking correctly.',
    answerAr:
      'إذا لم يُظهر الفحص الصحي الأولي فروقات كبيرة، سأخبرك بوضوح — ولن تدفع شيئًا. هذه نتيجة جيدة. يعني أن تسوياتك تسير بشكل صحيح.',
  },
  {
    questionEn: 'Can PayoutCheck help with other delivery platforms?',
    questionAr: 'هل يمكن لـ PayoutCheck المساعدة مع منصات توصيل أخرى؟',
    answerEn:
      'Currently, PayoutCheck focuses exclusively on Talabat settlements for Kuwait restaurants. Support for other platforms and GCC markets is planned for future phases.',
    answerAr:
      'حاليًا، يركز PayoutCheck حصريًا على تسويات طلبات للمطاعم في الكويت. دعم المنصات الأخرى وأسواق دول مجلس التعاون الخليجي مخطط لمراحل مستقبلية.',
  },
];

// =============================================================
// Helper: generate WhatsApp URL
// =============================================================

export function getWhatsAppUrl(locale: 'en' | 'ar', customMessage?: string): string {
  const message =
    customMessage ??
    (locale === 'ar'
      ? siteConfig.whatsappMessageAr
      : siteConfig.whatsappMessageEn);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// =============================================================
// Helper: get calendar URL
// =============================================================

export function getCalendarUrl(): string {
  return siteConfig.googleCalendarUrl;
}
