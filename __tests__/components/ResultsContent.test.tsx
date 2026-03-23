import { render, screen, fireEvent } from '@testing-library/react';
import ResultsContent from '@/components/results/ResultsContent';

// Mock Breadcrumb
jest.mock('@/components/layout/Breadcrumb', () => {
  return function MockBreadcrumb() {
    return <nav data-testid="breadcrumb">パンくず</nav>;
  };
});

describe('ResultsContent', () => {
  it('should render the page title', () => {
    render(<ResultsContent />);
    expect(screen.getByText('解決事例')).toBeInTheDocument();
  });

  it('should render the disclaimer', () => {
    render(<ResultsContent />);
    expect(
      screen.getByText(/個人が特定されないよう/)
    ).toBeInTheDocument();
  });

  it('should render category filter buttons', () => {
    render(<ResultsContent />);
    expect(screen.getByText('すべて')).toBeInTheDocument();
    // Category names appear in both filter buttons and case cards
    expect(screen.getAllByText('労働問題').length).toBeGreaterThan(0);
    expect(screen.getAllByText('離婚問題').length).toBeGreaterThan(0);
    expect(screen.getAllByText('相続問題').length).toBeGreaterThan(0);
    expect(screen.getAllByText('企業法務').length).toBeGreaterThan(0);
  });

  it('should show all results by default', () => {
    render(<ResultsContent />);
    // Check that results from multiple categories are shown
    expect(screen.getByText('不当解雇の撤回と復職を実現')).toBeInTheDocument();
    expect(screen.getByText('養育費の適正額確保と親権獲得')).toBeInTheDocument();
  });

  it('should filter results when category is clicked', () => {
    render(<ResultsContent />);
    // Click on labor category
    const buttons = screen.getAllByText('労働問題');
    // The first one is the filter button
    fireEvent.click(buttons[0]);
    // Labor results should be visible
    expect(screen.getByText('不当解雇の撤回と復職を実現')).toBeInTheDocument();
    // Divorce results should not be visible
    expect(screen.queryByText('養育費の適正額確保と親権獲得')).not.toBeInTheDocument();
  });

  it('should render CTA button', () => {
    render(<ResultsContent />);
    expect(screen.getByText('無料相談を申し込む')).toBeInTheDocument();
  });

  it('should render case card sections', () => {
    render(<ResultsContent />);
    expect(screen.getAllByText('相談内容').length).toBeGreaterThan(0);
    expect(screen.getAllByText('解決結果').length).toBeGreaterThan(0);
    expect(screen.getAllByText('ポイント').length).toBeGreaterThan(0);
  });
});
