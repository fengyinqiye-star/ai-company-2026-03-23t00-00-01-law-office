import { render, screen } from '@testing-library/react';
import BlogCard from '@/components/blog/BlogCard';

describe('BlogCard', () => {
  const defaultProps = {
    slug: 'test-post',
    title: 'テスト記事のタイトル',
    date: '2026-03-15',
    category: 'labor',
    excerpt: 'テスト記事の概要文です。',
  };

  it('should render title', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.getByText('テスト記事のタイトル')).toBeInTheDocument();
  });

  it('should render date', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.getByText('2026-03-15')).toBeInTheDocument();
  });

  it('should render category badge', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.getByText('労働問題')).toBeInTheDocument();
  });

  it('should render excerpt', () => {
    render(<BlogCard {...defaultProps} />);
    expect(screen.getByText('テスト記事の概要文です。')).toBeInTheDocument();
  });

  it('should link to the blog post', () => {
    render(<BlogCard {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/blog/test-post');
  });
});
