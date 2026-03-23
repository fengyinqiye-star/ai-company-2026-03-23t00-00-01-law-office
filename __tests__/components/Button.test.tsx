import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/ui/Button';

describe('Button', () => {
  it('should render children text', () => {
    render(<Button>テスト</Button>);
    expect(screen.getByText('テスト')).toBeInTheDocument();
  });

  it('should render as button by default', () => {
    render(<Button>テスト</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render as link when href is provided', () => {
    render(<Button href="/contact">リンク</Button>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/contact');
  });

  it('should apply primary variant styles by default', () => {
    render(<Button>テスト</Button>);
    expect(screen.getByRole('button').className).toContain('bg-navy');
  });

  it('should apply cta variant styles', () => {
    render(<Button variant="cta">テスト</Button>);
    expect(screen.getByRole('button').className).toContain('bg-cta');
  });

  it('should apply outline variant styles', () => {
    render(<Button variant="outline">テスト</Button>);
    expect(screen.getByRole('button').className).toContain('border-navy');
  });

  it('should apply size styles', () => {
    render(<Button size="lg">テスト</Button>);
    expect(screen.getByRole('button').className).toContain('px-8');
  });

  it('should apply fullWidth style', () => {
    render(<Button fullWidth>テスト</Button>);
    expect(screen.getByRole('button').className).toContain('w-full');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>テスト</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should call onClick handler', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>テスト</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should set type attribute', () => {
    render(<Button type="submit">送信</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
