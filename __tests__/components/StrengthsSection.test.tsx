import { render, screen } from '@testing-library/react';
import StrengthsSection from '@/components/sections/StrengthsSection';

describe('StrengthsSection', () => {
  it('should render section title', () => {
    render(<StrengthsSection />);
    expect(screen.getByText('当事務所の強み')).toBeInTheDocument();
  });

  it('should render subtitle', () => {
    render(<StrengthsSection />);
    expect(
      screen.getByText('依頼者様に選ばれる3つの理由')
    ).toBeInTheDocument();
  });

  it('should render three strength items', () => {
    render(<StrengthsSection />);
    expect(screen.getByText('豊富な実績')).toBeInTheDocument();
    expect(screen.getByText('専門チーム体制')).toBeInTheDocument();
    expect(screen.getByText('初回相談無料')).toBeInTheDocument();
  });

  it('should render descriptions for each strength', () => {
    render(<StrengthsSection />);
    expect(screen.getByText(/1,000件以上の相談実績/)).toBeInTheDocument();
    expect(screen.getByText(/2名の弁護士/)).toBeInTheDocument();
    expect(
      screen.getByText(/初回のご相談は無料です/)
    ).toBeInTheDocument();
  });
});
