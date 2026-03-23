import { practiceAreas } from '@/data/practiceAreas';

describe('practiceAreas data', () => {
  it('should have 4 practice areas', () => {
    expect(practiceAreas).toHaveLength(4);
  });

  it('should include all required categories', () => {
    const slugs = practiceAreas.map((area) => area.slug);
    expect(slugs).toContain('labor');
    expect(slugs).toContain('divorce');
    expect(slugs).toContain('inheritance');
    expect(slugs).toContain('corporate');
  });

  it('should have required fields for each practice area', () => {
    practiceAreas.forEach((area) => {
      expect(area.title).toBeTruthy();
      expect(area.shortDescription).toBeTruthy();
      expect(area.fullDescription).toBeTruthy();
      expect(area.commonCases.length).toBeGreaterThan(0);
      expect(area.process.length).toBeGreaterThan(0);
      expect(area.feeGuide).toBeTruthy();
    });
  });

  it('should have 3-5 common cases per area', () => {
    practiceAreas.forEach((area) => {
      expect(area.commonCases.length).toBeGreaterThanOrEqual(3);
      expect(area.commonCases.length).toBeLessThanOrEqual(5);
    });
  });

  it('should have process steps with sequential numbers', () => {
    practiceAreas.forEach((area) => {
      area.process.forEach((step, index) => {
        expect(step.number).toBe(index + 1);
        expect(step.title).toBeTruthy();
        expect(step.description).toBeTruthy();
      });
    });
  });
});
