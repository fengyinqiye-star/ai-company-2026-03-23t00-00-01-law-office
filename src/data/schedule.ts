export type TimeSlot = {
  start: string;
  end: string;
  label: string;
};

export type DaySchedule = {
  day: string;
  dayShort: string;
  isOpen: boolean;
  businessHours?: TimeSlot;
  freeConsultation?: TimeSlot;
  lawyers: {
    name: string;
    available: boolean;
    note?: string;
  }[];
};

export const weeklySchedule: DaySchedule[] = [
  {
    day: '月曜日',
    dayShort: '月',
    isOpen: true,
    businessHours: { start: '9:00', end: '18:00', label: '9:00 - 18:00' },
    freeConsultation: { start: '9:00', end: '12:00', label: '9:00 - 12:00' },
    lawyers: [
      { name: '山田 誠一', available: true },
      { name: '鈴木 美咲', available: true },
    ],
  },
  {
    day: '火曜日',
    dayShort: '火',
    isOpen: true,
    businessHours: { start: '9:00', end: '18:00', label: '9:00 - 18:00' },
    freeConsultation: { start: '13:00', end: '17:00', label: '13:00 - 17:00' },
    lawyers: [
      { name: '山田 誠一', available: true },
      { name: '鈴木 美咲', available: false, note: '裁判所出廷日' },
    ],
  },
  {
    day: '水曜日',
    dayShort: '水',
    isOpen: true,
    businessHours: { start: '9:00', end: '18:00', label: '9:00 - 18:00' },
    freeConsultation: { start: '9:00', end: '12:00', label: '9:00 - 12:00' },
    lawyers: [
      { name: '山田 誠一', available: true },
      { name: '鈴木 美咲', available: true },
    ],
  },
  {
    day: '木曜日',
    dayShort: '木',
    isOpen: true,
    businessHours: { start: '9:00', end: '18:00', label: '9:00 - 18:00' },
    freeConsultation: { start: '13:00', end: '17:00', label: '13:00 - 17:00' },
    lawyers: [
      { name: '山田 誠一', available: false, note: '裁判所出廷日' },
      { name: '鈴木 美咲', available: true },
    ],
  },
  {
    day: '金曜日',
    dayShort: '金',
    isOpen: true,
    businessHours: { start: '9:00', end: '18:00', label: '9:00 - 18:00' },
    freeConsultation: { start: '9:00', end: '12:00', label: '9:00 - 12:00' },
    lawyers: [
      { name: '山田 誠一', available: true },
      { name: '鈴木 美咲', available: true },
    ],
  },
  {
    day: '土曜日',
    dayShort: '土',
    isOpen: true,
    businessHours: { start: '10:00', end: '15:00', label: '10:00 - 15:00' },
    freeConsultation: { start: '10:00', end: '13:00', label: '10:00 - 13:00' },
    lawyers: [
      { name: '山田 誠一', available: true, note: '要予約' },
      { name: '鈴木 美咲', available: true, note: '要予約' },
    ],
  },
  {
    day: '日曜日',
    dayShort: '日',
    isOpen: false,
    lawyers: [
      { name: '山田 誠一', available: false },
      { name: '鈴木 美咲', available: false },
    ],
  },
];

export const scheduleNotes = [
  '初回のご相談は無料です（30分程度）。',
  '土曜日のご相談は事前予約が必要です。',
  '祝日は休業とさせていただきます。',
  '緊急のご相談は、営業時間外でもお電話にて対応いたします。',
  '裁判所出廷日は変動する場合がございます。事前にお電話でご確認ください。',
];
