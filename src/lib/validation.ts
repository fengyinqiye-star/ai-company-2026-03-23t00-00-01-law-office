import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'お名前を入力してください')
    .max(50, 'お名前は50文字以内で入力してください')
    .refine((v) => v.trim().length > 0, 'お名前を入力してください'),
  furigana: z
    .string()
    .max(50, 'フリガナは50文字以内で入力してください')
    .regex(/^[ァ-ヶー\s]*$/, 'フリガナはカタカナで入力してください')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .min(1, '電話番号を入力してください')
    .regex(/^[0-9\-]{10,13}$/, '電話番号の形式が正しくありません'),
  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .email('メールアドレスの形式が正しくありません'),
  category: z.enum(['labor', 'divorce', 'inheritance', 'corporate', 'other'], {
    errorMap: () => ({ message: '相談カテゴリを選択してください' }),
  }),
  message: z
    .string()
    .min(10, 'ご相談内容は10文字以上で入力してください')
    .max(2000, 'ご相談内容は2000文字以内で入力してください'),
  preferredContact: z.enum(['phone', 'email']).optional(),
  privacyAgreed: z.literal(true, {
    errorMap: () => ({ message: 'プライバシーポリシーに同意してください' }),
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
