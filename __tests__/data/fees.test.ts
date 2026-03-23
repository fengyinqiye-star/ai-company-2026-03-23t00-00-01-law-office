import { feeCategories, paymentInfo } from '@/data/fees';

describe('fees data', () => {
  it('should have 4 fee categories', () => {
    expect(feeCategories).toHaveLength(4);
  });

  it('should include all required categories', () => {
    const categories = feeCategories.map((c) => c.category);
    expect(categories).toContain('労働問題');
    expect(categories).toContain('離婚問題');
    expect(categories).toContain('相続問題');
    expect(categories).toContain('企業法務');
  });

  it('should have items in each category', () => {
    feeCategories.forEach((cat) => {
      expect(cat.items.length).toBeGreaterThan(0);
    });
  });

  it('should have required fee fields for each item', () => {
    feeCategories.forEach((cat) => {
      cat.items.forEach((item) => {
        expect(item.service).toBeTruthy();
        expect(item.consultationFee).toBeTruthy();
        expect(item.retainerFee).toBeTruthy();
        expect(item.successFee).toBeTruthy();
      });
    });
  });

  it('should have payment info with methods', () => {
    expect(paymentInfo.methods.length).toBeGreaterThan(0);
  });

  it('should have installment information', () => {
    expect(paymentInfo.installment).toBeTruthy();
  });
});
