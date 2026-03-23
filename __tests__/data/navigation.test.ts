import { mainNavigation } from '@/data/navigation';

describe('navigation data', () => {
  it('should have required navigation items', () => {
    const labels = mainNavigation.map((item) => item.label);
    expect(labels).toContain('ホーム');
    expect(labels).toContain('取扱業務');
    expect(labels).toContain('弁護士紹介');
    expect(labels).toContain('事務所概要');
    expect(labels).toContain('料金案内');
    expect(labels).toContain('無料相談');
  });

  it('should have correct hrefs', () => {
    const homeItem = mainNavigation.find((item) => item.label === 'ホーム');
    expect(homeItem?.href).toBe('/');

    const contactItem = mainNavigation.find((item) => item.label === '無料相談');
    expect(contactItem?.href).toBe('/contact');
  });

  it('should have blog navigation', () => {
    const blogItem = mainNavigation.find((item) => item.label === 'ブログ');
    expect(blogItem?.href).toBe('/blog');
  });
});
