const User = require('../../src/models/User');

describe('User Model', () => {
  test('creates a user with required fields', () => {
    const user = new User({ name: 'John Doe', email: 'john@example.com' });
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
    expect(user.role).toBe('customer');
    expect(user.id).toBeDefined();
  });

  test('creates a user with all fields', () => {
    const user = new User({
      name: 'Jane',
      email: 'jane@example.com',
      phone: '555-1234',
      role: 'handyman',
    });
    expect(user.phone).toBe('555-1234');
    expect(user.role).toBe('handyman');
  });

  test('throws on missing name', () => {
    expect(() => new User({ email: 'a@b.com' })).toThrow('Name and email are required');
  });

  test('throws on missing email', () => {
    expect(() => new User({ name: 'John' })).toThrow('Name and email are required');
  });

  test('throws on invalid role', () => {
    expect(() => new User({ name: 'John', email: 'a@b.com', role: 'invalid' })).toThrow(
      'Invalid role'
    );
  });

  test('toJSON returns serialized object', () => {
    const user = new User({ name: 'John', email: 'john@example.com' });
    const json = user.toJSON();
    expect(json).toHaveProperty('id');
    expect(json).toHaveProperty('name', 'John');
    expect(json).toHaveProperty('createdAt');
  });

  // NOTE: updateProfile is NOT tested
});
