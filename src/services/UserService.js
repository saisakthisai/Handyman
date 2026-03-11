const User = require('../models/User');

class UserService {
  constructor() {
    this.users = new Map();
  }

  createUser(data) {
    const user = new User(data);
    this.users.set(user.id, user);
    return user;
  }

  getUserById(id) {
    const user = this.users.get(id);
    if (!user) throw new Error(`User not found: ${id}`);
    return user;
  }

  getUserByEmail(email) {
    for (const user of this.users.values()) {
      if (user.email === email) return user;
    }
    throw new Error(`User not found with email: ${email}`);
  }

  updateUser(id, updates) {
    const user = this.getUserById(id);
    user.updateProfile(updates);
    return user;
  }

  deleteUser(id) {
    if (!this.users.has(id)) {
      throw new Error(`User not found: ${id}`);
    }
    this.users.delete(id);
  }

  listUsers({ role } = {}) {
    let users = Array.from(this.users.values());
    if (role) {
      users = users.filter((u) => u.role === role);
    }
    return users;
  }

  getHandymen() {
    return this.listUsers({ role: 'handyman' });
  }
}

module.exports = UserService;
