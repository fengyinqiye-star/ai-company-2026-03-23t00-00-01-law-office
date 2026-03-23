import { render, screen } from '@testing-library/react';
import LawyerProfile from '@/components/lawyers/LawyerProfile';
import { Lawyer } from '@/types';

describe('LawyerProfile', () => {
  const defaultProps: Lawyer = {
    id: 'yamada',
    name: '山田 誠一',
    nameEn: 'Seiichi Yamada',
    title: '代表弁護士',
    barAssociation: '東京弁護士会',
    registrationNumber: '第35012号',
    photo: '/images/lawyers/yamada.webp',
    specialties: ['労働問題', '企業法務'],
    career: [
      { year: '2005年', description: '東京大学法学部卒業' },
      { year: '2008年', description: '弁護士登録' },
    ],
    message: 'テストメッセージです。',
    publications: ['テスト著書1', 'テスト論文2'],
  };

  it('should render lawyer name', () => {
    render(<LawyerProfile {...defaultProps} />);
    expect(screen.getByText('山田 誠一')).toBeInTheDocument();
  });

  it('should render English name', () => {
    render(<LawyerProfile {...defaultProps} />);
    expect(screen.getByText('Seiichi Yamada')).toBeInTheDocument();
  });

  it('should render title', () => {
    render(<LawyerProfile {...defaultProps} />);
    expect(screen.getByText('代表弁護士')).toBeInTheDocument();
  });

  it('should render bar association', () => {
    render(<LawyerProfile {...defaultProps} />);
    expect(screen.getByText(/東京弁護士会/)).toBeInTheDocument();
  });

  it('should render specialties', () => {
    render(<LawyerProfile {...defaultProps} />);
    expect(screen.getByText('労働問題')).toBeInTheDocument();
    expect(screen.getByText('企業法務')).toBeInTheDocument();
  });

  it('should render career history', () => {
    render(<LawyerProfile {...defaultProps} />);
    expect(screen.getByText('2005年')).toBeInTheDocument();
    expect(screen.getByText('東京大学法学部卒業')).toBeInTheDocument();
  });

  it('should render message', () => {
    render(<LawyerProfile {...defaultProps} />);
    expect(screen.getByText('テストメッセージです。')).toBeInTheDocument();
  });

  it('should render publications when provided', () => {
    render(<LawyerProfile {...defaultProps} />);
    expect(screen.getByText('テスト著書1')).toBeInTheDocument();
    expect(screen.getByText('テスト論文2')).toBeInTheDocument();
  });

  it('should not render publications section when empty', () => {
    render(<LawyerProfile {...defaultProps} publications={[]} />);
    expect(
      screen.queryByText('著書・論文・メディア掲載')
    ).not.toBeInTheDocument();
  });

  it('should not render publications section when undefined', () => {
    render(<LawyerProfile {...defaultProps} publications={undefined} />);
    expect(
      screen.queryByText('著書・論文・メディア掲載')
    ).not.toBeInTheDocument();
  });

  it('should render registration number', () => {
    render(<LawyerProfile {...defaultProps} />);
    expect(screen.getByText(/第35012号/)).toBeInTheDocument();
  });

  it('should render heading sections', () => {
    render(<LawyerProfile {...defaultProps} />);
    expect(screen.getByText('得意分野')).toBeInTheDocument();
    expect(screen.getByText('経歴')).toBeInTheDocument();
    expect(screen.getByText('メッセージ')).toBeInTheDocument();
  });
});
