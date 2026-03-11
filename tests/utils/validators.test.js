const { validateEmail, validatePhone, validateRating } = require('../../src/utils/validators');

describe('Validators', () => {
  describe('validateEmail', () => {
    test('valid email returns true', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    test('invalid email returns false', () => {
      expect(validateEmail('notanemail')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('validatePhone', () => {
    test('valid phone returns true', () => {
      expect(validatePhone('+1 555-123-4567')).toBe(true);
    });

    test('invalid phone returns false', () => {
      expect(validatePhone('abc')).toBe(false);
    });
  });

  describe('validateRating', () => {
    test('valid ratings return true', () => {
      expect(validateRating(1)).toBe(true);
      expect(validateRating(5)).toBe(true);
    });

    test('invalid ratings return false', () => {
      expect(validateRating(0)).toBe(false);
      expect(validateRating(6)).toBe(false);
      expect(validateRating(3.5)).toBe(false);
    });
  });

  // NOTE: validateAddress, validateDateRange, sanitizeInput, validatePrice — NOT tested
});
