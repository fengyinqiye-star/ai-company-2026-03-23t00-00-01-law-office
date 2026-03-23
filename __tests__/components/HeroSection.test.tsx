import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/sections/HeroSection';

describe('HeroSection', () => {
  it('should render the main heading', () => {
    render(<HeroSection />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('should render the office name', () => {
    render(<HeroSection />);
    expect(screen.getByText('山田・鈴木法律事務所')).toBeInTheDocument();
  });

  it('should render the CTA button linking to contact', () => {
    render(<HeroSection />);
    const ctaLink = screen.getByText('無料相談を申し込む');
    expect(ctaLink.closest('a')).toHaveAttribute('href', '/contact');
  });

  it('should render stats (consultation count, years, free consultation)', () => {
    render(<HeroSection />);
    expect(screen.getByText('相談実績')).toBeInTheDocument();
    expect(screen.getByText('弁護士歴')).toBeInTheDocument();
    expect(screen.getByText('相談無料')).toBeInTheDocument();
  });

  it('should render phone number as tel link', () => {
    render(<HeroSection />);
    const phoneLink = screen.getByText('03-1234-5678').closest('a');
    expect(phoneLink).toHaveAttribute('href', 'tel:0312345678');
  });

  it('should render the tagline', () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/初回無料相談であなたの悩みに寄り添います/)
    ).toBeInTheDocument();
  });
});
