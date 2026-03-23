import { render, screen } from '@testing-library/react';
import PracticeAreaCard from '@/components/practice-areas/PracticeAreaCard';

describe('PracticeAreaCard', () => {
  const defaultProps = {
    slug: 'labor',
    title: '労働問題',
    description: '不当解雇・残業代請求・ハラスメントなど、働く方の権利を守ります。',
  };

  it('should render title', () => {
    render(<PracticeAreaCard {...defaultProps} />);
    expect(screen.getByText('労働問題')).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<PracticeAreaCard {...defaultProps} />);
    expect(
      screen.getByText(/不当解雇・残業代請求/)
    ).toBeInTheDocument();
  });

  it('should link to the practice area detail page', () => {
    render(<PracticeAreaCard {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/practice-areas/labor');
  });

  it('should show "詳しく見る" text', () => {
    render(<PracticeAreaCard {...defaultProps} />);
    expect(screen.getByText(/詳しく見る/)).toBeInTheDocument();
  });

  it('should render h3 for title', () => {
    render(<PracticeAreaCard {...defaultProps} />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('労働問題');
  });
});
