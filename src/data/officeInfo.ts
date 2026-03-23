import { OfficeInfo } from '@/types';

export const officeInfo: OfficeInfo = {
  name: '山田・鈴木法律事務所',
  representative: '山田 誠一',
  address: {
    postalCode: '100-0005',
    full: '東京都千代田区丸の内1-1-1 丸の内パークビルディング10階',
  },
  phone: '03-1234-5678',
  fax: '03-1234-5679',
  email: 'info@yamada-suzuki-law.jp',
  businessHours: {
    weekdays: '平日 9:00〜18:00',
    saturday: '土曜 10:00〜15:00（要予約）',
    closed: '日曜・祝日',
  },
  access: {
    station: 'JR東京駅 丸の内南口 徒歩3分 / 東京メトロ丸ノ内線 東京駅 直結',
    directions:
      '東京駅丸の内南口を出て、正面の大通りを直進してください。左手に見える丸の内パークビルディングの10階が当事務所です。ビル1階のエントランスから、エレベーターで10階までお越しください。',
  },
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_MAP_EMBED_URL ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8281255985066!2d139.76454!3d35.6812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1',
};
