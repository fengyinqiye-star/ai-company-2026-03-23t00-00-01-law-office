import { render, screen } from '@testing-library/react';
import Card from '@/components/ui/Card';

describe('Card', () => {
  it('should render children', () => {
    render(<Card>テスト内容</Card>);
    expect(screen.getByText('テスト内容')).toBeInTheDocument();
  });

  it('should render as div by default', () => {
    render(<Card>テスト内容</Card>);
    const el = screen.getByText('テスト内容');
    expect(el.tagName).toBe('DIV');
  });

  it('should render as link when href is provided', () => {
    render(<Card href="/test">リンクカード</Card>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('should apply hover styles when hoverable', () => {
    render(<Card hoverable>ホバー可能</Card>);
    const el = screen.getByText('ホバー可能');
    expect(el.className).toContain('hover:shadow-lg');
  });

  it('should not apply hover styles when not hoverable', () => {
    render(<Card>通常カード</Card>);
    const el = screen.getByText('通常カード');
    expect(el.className).not.toContain('hover:shadow-lg');
  });

  it('should apply custom className', () => {
    render(<Card className="custom-class">テスト</Card>);
    const el = screen.getByText('テスト');
    expect(el.className).toContain('custom-class');
  });
});
