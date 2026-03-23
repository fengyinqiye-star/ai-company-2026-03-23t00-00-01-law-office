import { lawyers } from '@/data/lawyers';

describe('lawyers data', () => {
  it('should have 2 lawyers', () => {
    expect(lawyers).toHaveLength(2);
  });

  it('should include Yamada and Suzuki', () => {
    const names = lawyers.map((l) => l.name);
    expect(names).toContain('山田 誠一');
    expect(names).toContain('鈴木 美咲');
  });

  it('should have required fields for each lawyer', () => {
    lawyers.forEach((lawyer) => {
      expect(lawyer.id).toBeTruthy();
      expect(lawyer.name).toBeTruthy();
      expect(lawyer.nameEn).toBeTruthy();
      expect(lawyer.title).toBeTruthy();
      expect(lawyer.barAssociation).toBeTruthy();
      expect(lawyer.specialties.length).toBeGreaterThan(0);
      expect(lawyer.career.length).toBeGreaterThan(0);
      expect(lawyer.message).toBeTruthy();
    });
  });

  it('should have publications for each lawyer', () => {
    lawyers.forEach((lawyer) => {
      expect(lawyer.publications).toBeDefined();
      expect(lawyer.publications!.length).toBeGreaterThan(0);
    });
  });
});
