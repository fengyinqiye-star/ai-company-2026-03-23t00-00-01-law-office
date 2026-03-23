import { contactSchema } from '@/lib/validation';

describe('contactSchema', () => {
  const validData = {
    name: '山田太郎',
    phone: '03-1234-5678',
    email: 'test@example.com',
    category: 'labor' as const,
    message: 'テスト用の相談内容です。10文字以上必要です。',
    privacyAgreed: true as const,
  };

  it('should accept valid data', () => {
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should accept valid data with optional fields', () => {
    const result = contactSchema.safeParse({
      ...validData,
      furigana: 'ヤマダ タロウ',
      preferredContact: 'phone',
    });
    expect(result.success).toBe(true);
  });

  it('should reject empty name', () => {
    const result = contactSchema.safeParse({ ...validData, name: '' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toContain('お名前');
    }
  });

  it('should reject whitespace-only name', () => {
    const result = contactSchema.safeParse({ ...validData, name: '   ' });
    expect(result.success).toBe(false);
  });

  it('should reject name over 50 characters', () => {
    const result = contactSchema.safeParse({
      ...validData,
      name: 'あ'.repeat(51),
    });
    expect(result.success).toBe(false);
  });

  it('should reject invalid furigana (non-katakana)', () => {
    const result = contactSchema.safeParse({
      ...validData,
      furigana: 'やまだたろう',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toContain('カタカナ');
    }
  });

  it('should accept empty furigana', () => {
    const result = contactSchema.safeParse({ ...validData, furigana: '' });
    expect(result.success).toBe(true);
  });

  it('should reject invalid phone number', () => {
    const result = contactSchema.safeParse({
      ...validData,
      phone: '12345',
    });
    expect(result.success).toBe(false);
  });

  it('should accept phone number with hyphens', () => {
    const result = contactSchema.safeParse({
      ...validData,
      phone: '090-1234-5678',
    });
    expect(result.success).toBe(true);
  });

  it('should reject invalid email', () => {
    const result = contactSchema.safeParse({
      ...validData,
      email: 'invalid-email',
    });
    expect(result.success).toBe(false);
  });

  it('should reject invalid category', () => {
    const result = contactSchema.safeParse({
      ...validData,
      category: 'invalid',
    });
    expect(result.success).toBe(false);
  });

  it('should reject message under 10 characters', () => {
    const result = contactSchema.safeParse({
      ...validData,
      message: '短い',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toContain('10文字');
    }
  });

  it('should reject message over 2000 characters', () => {
    const result = contactSchema.safeParse({
      ...validData,
      message: 'あ'.repeat(2001),
    });
    expect(result.success).toBe(false);
  });

  it('should reject when privacyAgreed is false', () => {
    const result = contactSchema.safeParse({
      ...validData,
      privacyAgreed: false,
    });
    expect(result.success).toBe(false);
  });

  it('should accept all valid categories', () => {
    const categories = ['labor', 'divorce', 'inheritance', 'corporate', 'other'];
    categories.forEach((category) => {
      const result = contactSchema.safeParse({ ...validData, category });
      expect(result.success).toBe(true);
    });
  });
});
