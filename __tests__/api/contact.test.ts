/**
 * API Route tests for /api/contact
 * These test the validation and rate limiting logic.
 * Email sending is mocked.
 */

import { contactSchema } from '@/lib/validation';
import { rateLimit } from '@/lib/rateLimit';

// Test validation logic directly (API route integration tests require more setup)
describe('/api/contact validation', () => {
  const validPayload = {
    name: '田中一郎',
    phone: '03-9876-5432',
    email: 'tanaka@example.com',
    category: 'divorce' as const,
    message: 'テスト用の相談メッセージです。離婚について相談したいです。',
    privacyAgreed: true as const,
  };

  it('should validate a correct payload', () => {
    const result = contactSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it('should reject payload with missing required fields', () => {
    const result = contactSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it('should reject payload with invalid email', () => {
    const result = contactSchema.safeParse({
      ...validPayload,
      email: 'not-an-email',
    });
    expect(result.success).toBe(false);
  });

  it('should rate limit after 3 requests from same IP', () => {
    const testIp = 'api-test-ip-' + Date.now();
    expect(rateLimit(testIp).allowed).toBe(true);
    expect(rateLimit(testIp).allowed).toBe(true);
    expect(rateLimit(testIp).allowed).toBe(true);
    expect(rateLimit(testIp).allowed).toBe(false);
  });
});
