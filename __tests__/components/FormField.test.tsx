import { render, screen, fireEvent } from '@testing-library/react';
import FormField from '@/components/contact/FormField';

describe('FormField', () => {
  const defaultProps = {
    label: 'お名前',
    name: 'name',
    value: '',
    onChange: jest.fn(),
  };

  it('should render label text', () => {
    render(<FormField {...defaultProps} />);
    expect(screen.getByLabelText('お名前')).toBeInTheDocument();
  });

  it('should render required indicator when required', () => {
    render(<FormField {...defaultProps} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should not render required indicator when not required', () => {
    render(<FormField {...defaultProps} />);
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('should render text input by default', () => {
    render(<FormField {...defaultProps} />);
    const input = screen.getByLabelText('お名前');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should render textarea when type is textarea', () => {
    render(<FormField {...defaultProps} type="textarea" />);
    const textarea = screen.getByLabelText('お名前');
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('should render email input type', () => {
    render(<FormField {...defaultProps} type="email" />);
    expect(screen.getByLabelText('お名前')).toHaveAttribute('type', 'email');
  });

  it('should render tel input type', () => {
    render(<FormField {...defaultProps} type="tel" />);
    expect(screen.getByLabelText('お名前')).toHaveAttribute('type', 'tel');
  });

  it('should call onChange when value changes', () => {
    const onChange = jest.fn();
    render(<FormField {...defaultProps} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText('お名前'), {
      target: { value: 'テスト' },
    });
    expect(onChange).toHaveBeenCalledWith('テスト');
  });

  it('should display error message', () => {
    render(<FormField {...defaultProps} error="入力してください" />);
    expect(screen.getByText('入力してください')).toBeInTheDocument();
  });

  it('should apply error styles when error is present', () => {
    render(<FormField {...defaultProps} error="エラー" />);
    const input = screen.getByLabelText('お名前');
    expect(input.className).toContain('border-red-500');
  });

  it('should render placeholder text', () => {
    render(<FormField {...defaultProps} placeholder="名前を入力" />);
    expect(screen.getByPlaceholderText('名前を入力')).toBeInTheDocument();
  });

  it('should set maxLength attribute', () => {
    render(<FormField {...defaultProps} maxLength={50} />);
    expect(screen.getByLabelText('お名前')).toHaveAttribute('maxlength', '50');
  });

  it('should associate label with input via htmlFor/id', () => {
    render(<FormField {...defaultProps} />);
    const label = screen.getByText('お名前');
    expect(label).toHaveAttribute('for', 'name');
    expect(screen.getByLabelText('お名前')).toHaveAttribute('id', 'name');
  });
});
