import { render, screen } from '@testing-library/react';
import FeeTable from '@/components/fees/FeeTable';
import { FeeCategory } from '@/types';

describe('FeeTable', () => {
  const mockCategories: FeeCategory[] = [
    {
      category: '労働問題',
      items: [
        {
          service: '不当解雇',
          consultationFee: '初回無料',
          retainerFee: '20万円〜',
          successFee: '獲得金額の16%〜',
        },
        {
          service: '残業代請求',
          consultationFee: '初回無料',
          retainerFee: '20万円〜',
          successFee: '獲得金額の16%〜',
          note: '着手金分割可',
        },
      ],
    },
  ];

  it('should render category title', () => {
    render(<FeeTable categories={mockCategories} />);
    expect(screen.getByText('労働問題')).toBeInTheDocument();
  });

  it('should render table headers', () => {
    render(<FeeTable categories={mockCategories} />);
    expect(screen.getByText('内容')).toBeInTheDocument();
    expect(screen.getByText('相談料')).toBeInTheDocument();
    expect(screen.getByText('着手金')).toBeInTheDocument();
    expect(screen.getByText('報酬金')).toBeInTheDocument();
  });

  it('should render fee items', () => {
    render(<FeeTable categories={mockCategories} />);
    expect(screen.getByText('不当解雇')).toBeInTheDocument();
    expect(screen.getByText('残業代請求')).toBeInTheDocument();
  });

  it('should render fee values', () => {
    render(<FeeTable categories={mockCategories} />);
    expect(screen.getAllByText('初回無料')).toHaveLength(2);
    expect(screen.getAllByText('20万円〜')).toHaveLength(2);
  });

  it('should render note when present', () => {
    render(<FeeTable categories={mockCategories} />);
    expect(screen.getByText('着手金分割可')).toBeInTheDocument();
  });

  it('should render multiple categories', () => {
    const multiCategories: FeeCategory[] = [
      ...mockCategories,
      {
        category: '離婚問題',
        items: [
          {
            service: '協議離婚',
            consultationFee: '初回無料',
            retainerFee: '30万円〜',
            successFee: '10%〜',
          },
        ],
      },
    ];
    render(<FeeTable categories={multiCategories} />);
    expect(screen.getByText('労働問題')).toBeInTheDocument();
    expect(screen.getByText('離婚問題')).toBeInTheDocument();
  });
});
