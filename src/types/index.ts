// 弁護士
export type Lawyer = {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  barAssociation: string;
  registrationNumber: string;
  photo: string;
  specialties: string[];
  career: { year: string; description: string }[];
  message: string;
  publications?: string[];
};

// 解決事例
export type CaseResult = {
  id: string;
  category: 'labor' | 'divorce' | 'inheritance' | 'corporate';
  categoryLabel: string;
  title: string;
  summary: string;
  result: string;
  point: string;
};

// FAQ
export type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

// 取扱業務
export type PracticeArea = {
  slug: 'labor' | 'divorce' | 'inheritance' | 'corporate';
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  commonCases: string[];
  process: { number: number; title: string; description: string }[];
  feeGuide: string;
  relatedBlogCategory: string;
};

// 料金
export type FeeCategory = {
  category: string;
  items: {
    service: string;
    consultationFee: string;
    retainerFee: string;
    successFee: string;
    note?: string;
  }[];
};

export type PaymentInfo = {
  methods: string[];
  installment: string;
};

// 事務所情報
export type OfficeInfo = {
  name: string;
  representative: string;
  address: {
    postalCode: string;
    full: string;
  };
  phone: string;
  fax: string;
  email: string;
  businessHours: {
    weekdays: string;
    saturday: string;
    closed: string;
  };
  access: {
    station: string;
    directions: string;
  };
  mapEmbedUrl: string;
};

// ブログ
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  thumbnail?: string;
  author: string;
  tags: string[];
  content: string;
};

// ナビゲーション
export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

// パンくず
export type BreadcrumbItem = {
  label: string;
  href?: string;
};

// お問い合わせフォーム
export type ContactFormData = {
  name: string;
  furigana?: string;
  phone: string;
  email: string;
  category: 'labor' | 'divorce' | 'inheritance' | 'corporate' | 'other';
  message: string;
  preferredContact?: 'phone' | 'email';
  privacyAgreed: boolean;
};

// API レスポンス
export type ApiResponse =
  | { success: true }
  | { success: false; errors?: { field: string; message: string }[] }
  | { success: false; error: string };
