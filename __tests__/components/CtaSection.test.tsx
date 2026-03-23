import { render, screen } from '@testing-library/react';
import CtaSection from '@/components/sections/CtaSection';

describe('CtaSection', () => {
  it('should render default variant with heading', () => {
    render(<CtaSection />);
    expect(
      screen.getByText('まずはお気軽にご相談ください')
    ).toBeInTheDocument();
  });

  it('should render CTA button linking to contact', () => {
    render(<CtaSection />);
    const ctaLink = screen.getByText('無料相談を申し込む');
    expect(ctaLink.closest('a')).toHaveAttribute('href', '/contact');
  });

  it('should render phone number', () => {
    render(<CtaSection />);
    expect(screen.getByText('03-1234-5678')).toBeInTheDocument();
  });

  it('should render compact variant', () => {
    render(<CtaSection variant="compact" />);
    expect(screen.getByText('まずは無料相談から')).toBeInTheDocument();
  });

  it('should render compact variant CTA button', () => {
    render(<CtaSection variant="compact" />);
    const ctaLink = screen.getByText('無料相談を申し込む');
    expect(ctaLink.closest('a')).toHaveAttribute('href', '/contact');
  });

  it('should render business hours in default variant', () => {
    render(<CtaSection />);
    expect(screen.getByText(/平日 9:00/)).toBeInTheDocument();
  });

  it('should render description text in default variant', () => {
    render(<CtaSection />);
    expect(
      screen.getByText(/初回相談は無料です/)
    ).toBeInTheDocument();
  });
});
