'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { contactSchema } from '@/lib/validation';
import FormField from './FormField';
import SelectField from './SelectField';
import RadioGroup from './RadioGroup';
import Button from '@/components/ui/Button';

const categoryOptions = [
  { value: 'labor', label: '労働問題' },
  { value: 'divorce', label: '離婚問題' },
  { value: 'inheritance', label: '相続問題' },
  { value: 'corporate', label: '企業法務' },
  { value: 'other', label: 'その他' },
];

const contactMethodOptions = [
  { value: 'phone', label: 'お電話' },
  { value: 'email', label: 'メール' },
];

type FormErrors = Record<string, string>;

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    phone: '',
    email: '',
    category: '',
    message: '',
    preferredContact: '',
    privacyAgreed: false,
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    // Client-side validation
    const parsed = contactSchema.safeParse({
      ...formData,
      furigana: formData.furigana || undefined,
      preferredContact: formData.preferredContact || undefined,
    });

    if (!parsed.success) {
      const fieldErrors: FormErrors = {};
      parsed.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          const fieldErrors: FormErrors = {};
          data.errors.forEach(
            (err: { field: string; message: string }) => {
              fieldErrors[err.field] = err.message;
            }
          );
          setErrors(fieldErrors);
        } else {
          setServerError(
            data.error ||
              '送信に失敗しました。お手数ですがお電話でお問い合わせください。'
          );
        }
        return;
      }

      router.push('/contact/thanks');
    } catch {
      setServerError(
        '送信に失敗しました。お手数ですがお電話でお問い合わせください。'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {serverError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {serverError}
        </div>
      )}

      <FormField
        label="お名前"
        name="name"
        required
        placeholder="山田 太郎"
        value={formData.name}
        onChange={(v) => updateField('name', v)}
        error={errors.name}
        maxLength={50}
      />

      <FormField
        label="フリガナ"
        name="furigana"
        placeholder="ヤマダ タロウ"
        value={formData.furigana}
        onChange={(v) => updateField('furigana', v)}
        error={errors.furigana}
        maxLength={50}
      />

      <FormField
        label="電話番号"
        name="phone"
        type="tel"
        required
        placeholder="03-1234-5678"
        value={formData.phone}
        onChange={(v) => updateField('phone', v)}
        error={errors.phone}
      />

      <FormField
        label="メールアドレス"
        name="email"
        type="email"
        required
        placeholder="example@email.com"
        value={formData.email}
        onChange={(v) => updateField('email', v)}
        error={errors.email}
      />

      <SelectField
        label="相談カテゴリ"
        name="category"
        options={categoryOptions}
        required
        value={formData.category}
        onChange={(v) => updateField('category', v)}
        error={errors.category}
      />

      <FormField
        label="ご相談内容"
        name="message"
        type="textarea"
        required
        placeholder="ご相談内容をご記入ください"
        value={formData.message}
        onChange={(v) => updateField('message', v)}
        error={errors.message}
        maxLength={2000}
      />

      <RadioGroup
        label="ご希望の連絡方法"
        name="preferredContact"
        options={contactMethodOptions}
        value={formData.preferredContact}
        onChange={(v) => updateField('preferredContact', v)}
        error={errors.preferredContact}
      />

      {/* Privacy policy */}
      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.privacyAgreed}
            onChange={(e) => updateField('privacyAgreed', e.target.checked)}
            className="mt-1 w-4 h-4 text-navy focus:ring-navy rounded"
          />
          <span className="text-sm text-gray-700">
            <Link href="/privacy-policy" className="font-semibold text-cta underline hover:text-cta-hover">プライバシーポリシー</Link>
            に同意します。ご入力いただいた個人情報は、ご相談対応のみに使用し、第三者に提供することはありません。
            <span className="text-red-500 ml-1">*</span>
          </span>
        </label>
        {errors.privacyAgreed && (
          <p className="mt-1 text-sm text-red-500">{errors.privacyAgreed}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="cta"
        size="lg"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? '送信中...' : '無料相談を申し込む'}
      </Button>
    </form>
  );
}
