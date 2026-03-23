import { Lawyer } from '@/types';

export const lawyers: Lawyer[] = [
  {
    id: 'yamada',
    name: '山田 誠一',
    nameEn: 'Seiichi Yamada',
    title: '代表弁護士',
    barAssociation: '東京弁護士会',
    registrationNumber: '第35012号',
    photo: '/images/lawyers/yamada.webp',
    specialties: ['労働問題', '企業法務'],
    career: [
      { year: '2005年', description: '東京大学法学部卒業' },
      { year: '2007年', description: '司法試験合格' },
      { year: '2008年', description: '弁護士登録（東京弁護士会）' },
      { year: '2008年', description: '大手法律事務所入所' },
      { year: '2015年', description: '山田・鈴木法律事務所設立' },
    ],
    message:
      '依頼者の方の立場に寄り添い、最善の解決策を一緒に考えていくことを大切にしています。労働問題や企業法務でお困りの方は、まずはお気軽にご相談ください。初回相談は無料です。',
    publications: [
      '「中小企業のための労務管理実務」（共著、法律出版社、2022年）',
      '「最新判例から学ぶ不当解雇対応」（月刊労働法、2024年3月号）',
    ],
  },
  {
    id: 'suzuki',
    name: '鈴木 美咲',
    nameEn: 'Misaki Suzuki',
    title: 'パートナー弁護士',
    barAssociation: '第二東京弁護士会',
    registrationNumber: '第38456号',
    photo: '/images/lawyers/suzuki.webp',
    specialties: ['離婚問題', '相続問題'],
    career: [
      { year: '2008年', description: '慶應義塾大学法学部卒業' },
      { year: '2010年', description: '司法試験合格' },
      { year: '2011年', description: '弁護士登録（第二東京弁護士会）' },
      { year: '2011年', description: '家事事件専門の法律事務所入所' },
      { year: '2015年', description: '山田・鈴木法律事務所共同設立' },
    ],
    message:
      '離婚や相続といった家族に関わる問題は、法的な解決だけでなく、ご本人やご家族の気持ちに寄り添うことが大切だと考えています。一人で抱え込まず、まずはお話をお聞かせください。',
    publications: [
      '「離婚問題の実務と手続き」（監修、家庭法律相談センター、2023年）',
    ],
  },
];
