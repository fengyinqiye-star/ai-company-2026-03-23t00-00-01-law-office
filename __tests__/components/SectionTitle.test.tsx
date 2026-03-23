import { render, screen } from '@testing-library/react';
import SectionTitle from '@/components/ui/SectionTitle';

describe('SectionTitle', () => {
  it('should render title', () => {
    render(<SectionTitle title="テストタイトル" />);
    expect(screen.getByText('テストタイトル')).toBeInTheDocument();
  });

  it('should render subtitle when provided', () => {
    render(<SectionTitle title="タイトル" subtitle="サブタイトル" />);
    expect(screen.getByText('サブタイトル')).toBeInTheDocument();
  });

  it('should not render subtitle when not provided', () => {
    const { container } = render(<SectionTitle title="タイトル" />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBe(0);
  });

  it('should center-align by default', () => {
    const { container } = render(<SectionTitle title="タイトル" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('text-center');
  });

  it('should left-align when specified', () => {
    const { container } = render(
      <SectionTitle title="タイトル" align="left" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).not.toContain('text-center');
  });

  it('should render h2 element for title', () => {
    render(<SectionTitle title="見出し" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('見出し');
  });
});
