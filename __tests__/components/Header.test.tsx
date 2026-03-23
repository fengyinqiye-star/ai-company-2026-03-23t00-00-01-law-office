import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/layout/Header';

// Mock MobileMenu
jest.mock('@/components/layout/MobileMenu', () => {
  return function MockMobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return isOpen ? (
      <div data-testid="mobile-menu">
        <button onClick={onClose}>閉じる</button>
      </div>
    ) : null;
  };
});

describe('Header', () => {
  it('should render office name as logo', () => {
    render(<Header />);
    expect(screen.getByText('山田・鈴木法律事務所')).toBeInTheDocument();
  });

  it('should render logo as link to home', () => {
    render(<Header />);
    const logo = screen.getByText('山田・鈴木法律事務所').closest('a');
    expect(logo).toHaveAttribute('href', '/');
  });

  it('should render desktop navigation', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation', { name: 'メインナビゲーション' });
    expect(nav).toBeInTheDocument();
  });

  it('should render CTA button', () => {
    render(<Header />);
    expect(screen.getByText('無料相談はこちら')).toBeInTheDocument();
  });

  it('should render phone number', () => {
    render(<Header />);
    expect(screen.getByText('03-1234-5678')).toBeInTheDocument();
  });

  it('should render hamburger menu button', () => {
    render(<Header />);
    expect(
      screen.getByRole('button', { name: 'メニューを開く' })
    ).toBeInTheDocument();
  });

  it('should open mobile menu on hamburger click', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
  });

  it('should render navigation links (excluding contact)', () => {
    render(<Header />);
    expect(screen.getByText('取扱業務')).toBeInTheDocument();
    expect(screen.getByText('弁護士紹介')).toBeInTheDocument();
  });
});
