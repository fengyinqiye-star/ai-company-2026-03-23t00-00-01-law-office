import { rateLimit } from '@/lib/rateLimit';

describe('rateLimit', () => {
  it('should allow first request', () => {
    const result = rateLimit('test-ip-1');
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(2);
  });

  it('should allow up to 3 requests within 5 minutes', () => {
    const ip = 'test-ip-2';
    expect(rateLimit(ip).allowed).toBe(true);
    expect(rateLimit(ip).allowed).toBe(true);
    expect(rateLimit(ip).allowed).toBe(true);
  });

  it('should block 4th request within 5 minutes', () => {
    const ip = 'test-ip-3';
    rateLimit(ip);
    rateLimit(ip);
    rateLimit(ip);
    const result = rateLimit(ip);
    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it('should track IPs independently', () => {
    const ip1 = 'test-ip-4';
    const ip2 = 'test-ip-5';
    rateLimit(ip1);
    rateLimit(ip1);
    rateLimit(ip1);

    const result = rateLimit(ip2);
    expect(result.allowed).toBe(true);
  });
});
