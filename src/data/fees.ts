import { FeeCategory, PaymentInfo } from '@/types';

export const feeCategories: FeeCategory[] = [
  {
    category: '労働問題',
    items: [
      {
        service: '不当解雇',
        consultationFee: '初回無料',
        retainerFee: '20万円〜',
        successFee: '獲得金額の16%〜',
      },
      {
        service: '残業代請求',
        consultationFee: '初回無料',
        retainerFee: '20万円〜',
        successFee: '獲得金額の16%〜',
      },
      {
        service: 'ハラスメント',
        consultationFee: '初回無料',
        retainerFee: '20万円〜',
        successFee: '獲得金額の16%〜',
      },
    ],
  },
  {
    category: '離婚問題',
    items: [
      {
        service: '協議離婚',
        consultationFee: '初回無料',
        retainerFee: '30万円〜',
        successFee: '経済的利益の10%〜',
      },
      {
        service: '調停離婚',
        consultationFee: '初回無料',
        retainerFee: '40万円〜',
        successFee: '経済的利益の10%〜',
      },
      {
        service: '訴訟離婚',
        consultationFee: '初回無料',
        retainerFee: '50万円〜',
        successFee: '経済的利益の10%〜',
      },
    ],
  },
  {
    category: '相続問題',
    items: [
      {
        service: '遺産分割協議',
        consultationFee: '初回無料',
        retainerFee: '30万円〜',
        successFee: '取得遺産額の4%〜',
      },
      {
        service: '遺言書作成',
        consultationFee: '初回無料',
        retainerFee: '10万円〜',
        successFee: '-',
      },
      {
        service: '相続放棄',
        consultationFee: '初回無料',
        retainerFee: '5万円〜',
        successFee: '-',
      },
      {
        service: '遺留分請求',
        consultationFee: '初回無料',
        retainerFee: '30万円〜',
        successFee: '獲得金額の10%〜',
      },
    ],
  },
  {
    category: '企業法務',
    items: [
      {
        service: '契約書作成・レビュー',
        consultationFee: '初回無料',
        retainerFee: '5万円〜',
        successFee: '-',
      },
      {
        service: '顧問契約',
        consultationFee: '-',
        retainerFee: '月額3万円〜',
        successFee: '-',
        note: '相談回数無制限、契約書チェック月2件まで含む',
      },
      {
        service: '債権回収',
        consultationFee: '初回無料',
        retainerFee: '10万円〜',
        successFee: '回収金額の10%〜',
      },
    ],
  },
];

export const paymentInfo: PaymentInfo = {
  methods: ['銀行振込', '現金'],
  installment:
    '分割払いにも対応しております。お気軽にご相談ください。',
};
