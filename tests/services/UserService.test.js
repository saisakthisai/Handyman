const UserService = require('../../src/services/UserService');

describe('UserService', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  test('creates and retrieves a user', () => {
    const user = userService.createUser({ name: 'Alice', email: 'alice@example.com' });
    const fetched = userService.getUserById(user.id);
    expect(fetched.name).toBe('Alice');
  });

  test('throws when user not found by ID', () => {
    expect(() => userService.getUserById('nonexistent')).toThrow('User not found');
  });

  test('lists users by role', () => {
    userService.createUser({ name: 'A', email: 'a@x.com', role: 'customer' });
    userService.createUser({ name: 'B', email: 'b@x.com', role: 'handyman' });
    userService.createUser({ name: 'C', email: 'c@x.com', role: 'customer' });

    expect(userService.listUsers({ role: 'customer' })).toHaveLength(2);
    expect(userService.getHandymen()).toHaveLength(1);
  });

  // NOTE: getUserByEmail, updateUser, deleteUser — NOT tested
});
