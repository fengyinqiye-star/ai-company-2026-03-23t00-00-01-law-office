import { render, screen } from '@testing-library/react';
import MobileFixedBar from '@/components/layout/MobileFixedBar';

describe('MobileFixedBar', () => {
  it('should render phone button', () => {
    render(<MobileFixedBar />);
    expect(
      screen.getByRole('link', { name: '電話で相談する' })
    ).toBeInTheDocument();
  });

  it('should render consultation button', () => {
    render(<MobileFixedBar />);
    expect(
      screen.getByRole('link', { name: '無料相談を申し込む' })
    ).toBeInTheDocument();
  });

  it('should have tel: link for phone button', () => {
    render(<MobileFixedBar />);
    const phoneLink = screen.getByRole('link', { name: '電話で相談する' });
    expect(phoneLink).toHaveAttribute('href', 'tel:0312345678');
  });

  it('should link to contact page', () => {
    render(<MobileFixedBar />);
    const ctaLink = screen.getByRole('link', { name: '無料相談を申し込む' });
    expect(ctaLink).toHaveAttribute('href', '/contact');
  });

  it('should render button labels', () => {
    render(<MobileFixedBar />);
    expect(screen.getByText('電話相談')).toBeInTheDocument();
    expect(screen.getByText('無料相談申込')).toBeInTheDocument();
  });
});
