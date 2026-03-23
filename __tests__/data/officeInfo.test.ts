import { officeInfo } from '@/data/officeInfo';

describe('officeInfo data', () => {
  it('should have office name', () => {
    expect(officeInfo.name).toBe('山田・鈴木法律事務所');
  });

  it('should have representative', () => {
    expect(officeInfo.representative).toBeTruthy();
  });

  it('should have full address with postal code', () => {
    expect(officeInfo.address.postalCode).toMatch(/^\d{3}-\d{4}$/);
    expect(officeInfo.address.full).toBeTruthy();
  });

  it('should have valid phone number format', () => {
    expect(officeInfo.phone).toMatch(/^[\d-]+$/);
  });

  it('should have fax number', () => {
    expect(officeInfo.fax).toBeTruthy();
  });

  it('should have email', () => {
    expect(officeInfo.email).toContain('@');
  });

  it('should have business hours', () => {
    expect(officeInfo.businessHours.weekdays).toBeTruthy();
    expect(officeInfo.businessHours.saturday).toBeTruthy();
    expect(officeInfo.businessHours.closed).toBeTruthy();
  });

  it('should have access information', () => {
    expect(officeInfo.access.station).toBeTruthy();
    expect(officeInfo.access.directions).toBeTruthy();
  });

  it('should have map embed URL', () => {
    expect(officeInfo.mapEmbedUrl).toBeTruthy();
  });
});
