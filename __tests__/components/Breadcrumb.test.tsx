import { render, screen } from '@testing-library/react';
import Breadcrumb from '@/components/layout/Breadcrumb';

// Mock JsonLd component
jest.mock('@/components/seo/JsonLd', () => {
  return function MockJsonLd() {
    return null;
  };
});

describe('Breadcrumb', () => {
  it('should render home link', () => {
    render(<Breadcrumb items={[{ label: 'テストページ' }]} />);
    expect(screen.getByText('ホーム')).toBeInTheDocument();
  });

  it('should render all items', () => {
    render(
      <Breadcrumb
        items={[
          { label: '取扱業務', href: '/practice-areas' },
          { label: '労働問題' },
        ]}
      />
    );
    expect(screen.getByText('ホーム')).toBeInTheDocument();
    expect(screen.getByText('取扱業務')).toBeInTheDocument();
    expect(screen.getByText('労働問題')).toBeInTheDocument();
  });

  it('should render last item without link', () => {
    render(<Breadcrumb items={[{ label: '現在のページ' }]} />);
    const currentPage = screen.getByText('現在のページ');
    expect(currentPage.tagName).not.toBe('A');
    expect(currentPage).toHaveAttribute('aria-current', 'page');
  });

  it('should render middle items with links', () => {
    render(
      <Breadcrumb
        items={[
          { label: '親ページ', href: '/parent' },
          { label: '現在のページ' },
        ]}
      />
    );
    const parentLink = screen.getByText('親ページ');
    expect(parentLink.closest('a')).toHaveAttribute('href', '/parent');
  });
});
