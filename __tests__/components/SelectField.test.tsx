import { render, screen, fireEvent } from '@testing-library/react';
import SelectField from '@/components/contact/SelectField';

describe('SelectField', () => {
  const defaultProps = {
    label: '相談カテゴリ',
    name: 'category',
    options: [
      { value: 'labor', label: '労働問題' },
      { value: 'divorce', label: '離婚問題' },
    ],
    value: '',
    onChange: jest.fn(),
  };

  it('should render label', () => {
    render(<SelectField {...defaultProps} />);
    expect(screen.getByLabelText('相談カテゴリ')).toBeInTheDocument();
  });

  it('should render required indicator when required', () => {
    render(<SelectField {...defaultProps} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should render default placeholder option', () => {
    render(<SelectField {...defaultProps} />);
    expect(screen.getByText('選択してください')).toBeInTheDocument();
  });

  it('should render all options', () => {
    render(<SelectField {...defaultProps} />);
    expect(screen.getByText('労働問題')).toBeInTheDocument();
    expect(screen.getByText('離婚問題')).toBeInTheDocument();
  });

  it('should call onChange when selection changes', () => {
    const onChange = jest.fn();
    render(<SelectField {...defaultProps} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText('相談カテゴリ'), {
      target: { value: 'labor' },
    });
    expect(onChange).toHaveBeenCalledWith('labor');
  });

  it('should display error message', () => {
    render(<SelectField {...defaultProps} error="カテゴリを選択してください" />);
    expect(screen.getByText('カテゴリを選択してください')).toBeInTheDocument();
  });

  it('should apply error styles when error is present', () => {
    render(<SelectField {...defaultProps} error="エラー" />);
    const select = screen.getByLabelText('相談カテゴリ');
    expect(select.className).toContain('border-red-500');
  });

  it('should associate label with select via htmlFor/id', () => {
    render(<SelectField {...defaultProps} />);
    const select = screen.getByLabelText('相談カテゴリ');
    expect(select).toHaveAttribute('id', 'category');
  });
});
