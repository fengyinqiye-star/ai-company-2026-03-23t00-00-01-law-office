import { render, screen, fireEvent } from '@testing-library/react';
import RadioGroup from '@/components/contact/RadioGroup';

describe('RadioGroup', () => {
  const defaultProps = {
    label: 'ご希望の連絡方法',
    name: 'preferredContact',
    options: [
      { value: 'phone', label: 'お電話' },
      { value: 'email', label: 'メール' },
    ],
    value: '',
    onChange: jest.fn(),
  };

  it('should render legend text', () => {
    render(<RadioGroup {...defaultProps} />);
    expect(screen.getByText('ご希望の連絡方法')).toBeInTheDocument();
  });

  it('should render required indicator when required', () => {
    render(<RadioGroup {...defaultProps} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should render all radio options', () => {
    render(<RadioGroup {...defaultProps} />);
    expect(screen.getByText('お電話')).toBeInTheDocument();
    expect(screen.getByText('メール')).toBeInTheDocument();
  });

  it('should render radio inputs', () => {
    render(<RadioGroup {...defaultProps} />);
    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(2);
  });

  it('should call onChange when radio is selected', () => {
    const onChange = jest.fn();
    render(<RadioGroup {...defaultProps} onChange={onChange} />);
    const radios = screen.getAllByRole('radio');
    fireEvent.click(radios[0]);
    expect(onChange).toHaveBeenCalledWith('phone');
  });

  it('should check the selected radio', () => {
    render(<RadioGroup {...defaultProps} value="email" />);
    const radios = screen.getAllByRole('radio');
    expect(radios[1]).toBeChecked();
    expect(radios[0]).not.toBeChecked();
  });

  it('should display error message', () => {
    render(<RadioGroup {...defaultProps} error="選択してください" />);
    expect(screen.getByText('選択してください')).toBeInTheDocument();
  });

  it('should use fieldset and legend for accessibility', () => {
    render(<RadioGroup {...defaultProps} />);
    const fieldset = screen.getByRole('group');
    expect(fieldset).toBeInTheDocument();
  });
});
