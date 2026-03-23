import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';

describe('Footer', () => {
  it('should render office name', () => {
    render(<Footer />);
    expect(screen.getByText('山田・鈴木法律事務所')).toBeInTheDocument();
  });

  it('should render phone number', () => {
    render(<Footer />);
    expect(screen.getByText('03-1234-5678')).toBeInTheDocument();
  });

  it('should render phone link as tel: link', () => {
    render(<Footer />);
    const phoneLink = screen.getByText('03-1234-5678').closest('a');
    expect(phoneLink).toHaveAttribute('href', 'tel:0312345678');
  });

  it('should render address', () => {
    render(<Footer />);
    expect(
      screen.getByText(/東京都千代田区丸の内/)
    ).toBeInTheDocument();
  });

  it('should render business hours', () => {
    render(<Footer />);
    expect(screen.getByText(/平日 9:00/)).toBeInTheDocument();
  });

  it('should render footer navigation', () => {
    render(<Footer />);
    const nav = screen.getByRole('navigation', { name: 'フッターナビゲーション' });
    expect(nav).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<Footer />);
    expect(screen.getByText('取扱業務')).toBeInTheDocument();
    expect(screen.getByText('弁護士紹介')).toBeInTheDocument();
    expect(screen.getByText('料金案内')).toBeInTheDocument();
  });

  it('should render copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/All Rights Reserved/)).toBeInTheDocument();
  });

  it('should render sitemap heading', () => {
    render(<Footer />);
    expect(screen.getByText('サイトマップ')).toBeInTheDocument();
  });

  it('should render business hours heading', () => {
    render(<Footer />);
    expect(screen.getByText('営業時間')).toBeInTheDocument();
  });
});
