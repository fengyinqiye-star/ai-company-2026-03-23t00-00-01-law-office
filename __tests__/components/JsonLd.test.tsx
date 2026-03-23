import { render } from '@testing-library/react';
import JsonLd from '@/components/seo/JsonLd';

describe('JsonLd', () => {
  it('should render script tag with type application/ld+json', () => {
    const data = { '@type': 'LegalService', name: 'テスト法律事務所' };
    const { container } = render(<JsonLd data={data} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
  });

  it('should contain JSON-stringified data', () => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: '山田・鈴木法律事務所',
    };
    const { container } = render(<JsonLd data={data} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const expected = JSON.stringify(data).replace(/</g, '\\u003c');
    expect(script?.innerHTML).toBe(expected);
  });

  it('should handle nested data structures', () => {
    const data = {
      '@type': 'LocalBusiness',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '丸の内1-1-1',
      },
    };
    const { container } = render(<JsonLd data={data} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    // The innerHTML has \u003c instead of <, but JSON.parse still works
    const parsed = JSON.parse(script?.innerHTML || '{}');
    expect(parsed.address['@type']).toBe('PostalAddress');
  });

  it('should escape < characters to prevent XSS', () => {
    const data = {
      '@type': 'Article',
      name: '</script><script>alert(1)</script>',
    };
    const { container } = render(<JsonLd data={data} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script?.innerHTML).not.toContain('</script>');
    expect(script?.innerHTML).toContain('\\u003c');
  });
});
