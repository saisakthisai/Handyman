const { v4: uuidv4 } = require('uuid');

class User {
  constructor({ name, email, phone, role = 'customer' }) {
    if (!name || !email) {
      throw new Error('Name and email are required');
    }
    if (!['customer', 'handyman', 'admin'].includes(role)) {
      throw new Error('Invalid role. Must be customer, handyman, or admin');
    }
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.phone = phone || null;
    this.role = role;
    this.createdAt = new Date();
  }

  updateProfile({ name, phone }) {
    if (name) this.name = name;
    if (phone) this.phone = phone;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      role: this.role,
      createdAt: this.createdAt.toISOString(),
    };
  }
}

module.exports = User;
