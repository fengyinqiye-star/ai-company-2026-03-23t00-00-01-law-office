import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '@/components/contact/ContactForm';

// Mock next/navigation
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFetch.mockReset();
  });

  it('should render all form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/お名前/)).toBeInTheDocument();
    expect(screen.getByLabelText(/フリガナ/)).toBeInTheDocument();
    expect(screen.getByLabelText(/電話番号/)).toBeInTheDocument();
    expect(screen.getByLabelText(/メールアドレス/)).toBeInTheDocument();
    expect(screen.getByLabelText(/相談カテゴリ/)).toBeInTheDocument();
    expect(screen.getByLabelText(/ご相談内容/)).toBeInTheDocument();
  });

  it('should render the submit button', () => {
    render(<ContactForm />);
    expect(
      screen.getByRole('button', { name: /無料相談を申し込む/ })
    ).toBeInTheDocument();
  });

  it('should render privacy policy checkbox', () => {
    render(<ContactForm />);
    expect(screen.getByText(/プライバシーポリシー/)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should show validation errors when submitting empty form', async () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', {
      name: /無料相談を申し込む/,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/お名前を入力してください/)).toBeInTheDocument();
    });
  });

  it('should update field values on input', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/お名前/) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: '山田太郎' } });
    expect(nameInput.value).toBe('山田太郎');
  });

  it('should show category options', () => {
    render(<ContactForm />);
    const select = screen.getByLabelText(/相談カテゴリ/) as HTMLSelectElement;
    expect(select).toBeInTheDocument();
    expect(screen.getByText('労働問題')).toBeInTheDocument();
    expect(screen.getByText('離婚問題')).toBeInTheDocument();
    expect(screen.getByText('相続問題')).toBeInTheDocument();
    expect(screen.getByText('企業法務')).toBeInTheDocument();
    expect(screen.getByText('その他')).toBeInTheDocument();
  });

  it('should show preferred contact radio buttons', () => {
    render(<ContactForm />);
    expect(screen.getByText('お電話')).toBeInTheDocument();
    expect(screen.getByText('メール')).toBeInTheDocument();
  });

  it('should redirect to thanks page on successful submission', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<ContactForm />);

    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/お名前/), {
      target: { value: '山田太郎' },
    });
    fireEvent.change(screen.getByLabelText(/電話番号/), {
      target: { value: '03-1234-5678' },
    });
    fireEvent.change(screen.getByLabelText(/メールアドレス/), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/相談カテゴリ/), {
      target: { value: 'labor' },
    });
    fireEvent.change(screen.getByLabelText(/ご相談内容/), {
      target: { value: 'テスト用の相談内容です。10文字以上必要です。' },
    });
    fireEvent.click(screen.getByRole('checkbox'));

    fireEvent.click(
      screen.getByRole('button', { name: /無料相談を申し込む/ })
    );

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/contact/thanks');
    });
  });

  it('should show server error message on API failure', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ success: false, error: 'サーバーエラー' }),
    });

    render(<ContactForm />);

    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/お名前/), {
      target: { value: '山田太郎' },
    });
    fireEvent.change(screen.getByLabelText(/電話番号/), {
      target: { value: '03-1234-5678' },
    });
    fireEvent.change(screen.getByLabelText(/メールアドレス/), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/相談カテゴリ/), {
      target: { value: 'labor' },
    });
    fireEvent.change(screen.getByLabelText(/ご相談内容/), {
      target: { value: 'テスト用の相談内容です。10文字以上必要です。' },
    });
    fireEvent.click(screen.getByRole('checkbox'));

    fireEvent.click(
      screen.getByRole('button', { name: /無料相談を申し込む/ })
    );

    await waitFor(() => {
      expect(screen.getByText('サーバーエラー')).toBeInTheDocument();
    });
  });

  it('should show fallback error message on network failure', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    render(<ContactForm />);

    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/お名前/), {
      target: { value: '山田太郎' },
    });
    fireEvent.change(screen.getByLabelText(/電話番号/), {
      target: { value: '03-1234-5678' },
    });
    fireEvent.change(screen.getByLabelText(/メールアドレス/), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/相談カテゴリ/), {
      target: { value: 'labor' },
    });
    fireEvent.change(screen.getByLabelText(/ご相談内容/), {
      target: { value: 'テスト用の相談内容です。10文字以上必要です。' },
    });
    fireEvent.click(screen.getByRole('checkbox'));

    fireEvent.click(
      screen.getByRole('button', { name: /無料相談を申し込む/ })
    );

    await waitFor(() => {
      expect(
        screen.getByText(/送信に失敗しました/)
      ).toBeInTheDocument();
    });
  });

  it('should show field-level errors from API validation response', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        success: false,
        errors: [{ field: 'email', message: 'メールが無効です' }],
      }),
    });

    render(<ContactForm />);

    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/お名前/), {
      target: { value: '山田太郎' },
    });
    fireEvent.change(screen.getByLabelText(/電話番号/), {
      target: { value: '03-1234-5678' },
    });
    fireEvent.change(screen.getByLabelText(/メールアドレス/), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/相談カテゴリ/), {
      target: { value: 'labor' },
    });
    fireEvent.change(screen.getByLabelText(/ご相談内容/), {
      target: { value: 'テスト用の相談内容です。10文字以上必要です。' },
    });
    fireEvent.click(screen.getByRole('checkbox'));

    fireEvent.click(
      screen.getByRole('button', { name: /無料相談を申し込む/ })
    );

    await waitFor(() => {
      expect(screen.getByText('メールが無効です')).toBeInTheDocument();
    });
  });

  it('should clear field error when user updates the field', async () => {
    render(<ContactForm />);

    // Submit empty to trigger errors
    fireEvent.click(
      screen.getByRole('button', { name: /無料相談を申し込む/ })
    );

    await waitFor(() => {
      expect(screen.getByText(/お名前を入力してください/)).toBeInTheDocument();
    });

    // Update the name field - error should clear
    fireEvent.change(screen.getByLabelText(/お名前/), {
      target: { value: '山田太郎' },
    });

    expect(
      screen.queryByText(/お名前を入力してください/)
    ).not.toBeInTheDocument();
  });
});
