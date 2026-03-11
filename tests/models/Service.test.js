const { Service } = require('../../src/models/Service');

describe('Service Model', () => {
  test('creates a service with required fields', () => {
    const svc = new Service({ name: 'Pipe Fix', category: 'plumbing', basePrice: 50 });
    expect(svc.name).toBe('Pipe Fix');
    expect(svc.category).toBe('plumbing');
    expect(svc.basePrice).toBe(50);
    expect(svc.active).toBe(true);
  });

  test('throws on missing required fields', () => {
    expect(() => new Service({ name: 'X', category: 'plumbing' })).toThrow();
  });

  test('throws on invalid category', () => {
    expect(() => new Service({ name: 'X', category: 'magic', basePrice: 10 })).toThrow(
      'Invalid category'
    );
  });

  test('calculatePrice works', () => {
    const svc = new Service({ name: 'Fix', category: 'general', basePrice: 40 });
    expect(svc.calculatePrice(2)).toBe(80);
    expect(svc.calculatePrice(2, 1.5)).toBe(120);
  });

  // NOTE: deactivate/activate, toJSON, negative price, zero hours — NOT tested
});
