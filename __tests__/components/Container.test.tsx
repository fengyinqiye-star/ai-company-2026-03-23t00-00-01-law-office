import { render, screen } from '@testing-library/react';
import Container from '@/components/ui/Container';

describe('Container', () => {
  it('should render children', () => {
    render(<Container>テスト内容</Container>);
    expect(screen.getByText('テスト内容')).toBeInTheDocument();
  });

  it('should apply max-w-content class', () => {
    const { container } = render(<Container>テスト</Container>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('max-w-content');
  });

  it('should apply custom className', () => {
    const { container } = render(
      <Container className="py-10">テスト</Container>
    );
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('py-10');
  });
});
