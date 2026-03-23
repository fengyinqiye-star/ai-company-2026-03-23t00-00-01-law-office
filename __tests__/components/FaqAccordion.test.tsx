import { render, screen, fireEvent } from '@testing-library/react';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { FaqItem } from '@/types';

const mockItems: FaqItem[] = [
  {
    question: 'テスト質問1',
    answer: 'テスト回答1',
    category: '一般',
  },
  {
    question: 'テスト質問2',
    answer: 'テスト回答2',
    category: '一般',
  },
  {
    question: '費用に関する質問',
    answer: '費用に関する回答',
    category: '費用',
  },
];

describe('FaqAccordion', () => {
  it('should render all questions', () => {
    render(<FaqAccordion items={mockItems} />);
    expect(screen.getByText('テスト質問1')).toBeInTheDocument();
    expect(screen.getByText('テスト質問2')).toBeInTheDocument();
    expect(screen.getByText('費用に関する質問')).toBeInTheDocument();
  });

  it('should group items by category', () => {
    render(<FaqAccordion items={mockItems} />);
    expect(screen.getByText('一般に関するご質問')).toBeInTheDocument();
    expect(screen.getByText('費用に関するご質問')).toBeInTheDocument();
  });

  it('should not show answers by default', () => {
    render(<FaqAccordion items={mockItems} />);
    expect(screen.queryByText('テスト回答1')).not.toBeInTheDocument();
  });

  it('should show answer when question is clicked', () => {
    render(<FaqAccordion items={mockItems} />);
    fireEvent.click(screen.getByText('テスト質問1'));
    expect(screen.getByText('テスト回答1')).toBeInTheDocument();
  });

  it('should hide answer when question is clicked again', () => {
    render(<FaqAccordion items={mockItems} />);
    const questionButton = screen.getByText('テスト質問1').closest('button')!;
    fireEvent.click(questionButton);
    expect(screen.getByText('テスト回答1')).toBeInTheDocument();
    fireEvent.click(questionButton);
    expect(screen.queryByText('テスト回答1')).not.toBeInTheDocument();
  });

  it('should have aria-expanded attribute on buttons', () => {
    render(<FaqAccordion items={mockItems} />);
    const button = screen.getByText('テスト質問1').closest('button')!;
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});
