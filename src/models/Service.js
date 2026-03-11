const { v4: uuidv4 } = require('uuid');

const VALID_CATEGORIES = [
  'plumbing',
  'electrical',
  'carpentry',
  'painting',
  'cleaning',
  'landscaping',
  'general',
];

class Service {
  constructor({ name, description, category, basePrice, estimatedDuration }) {
    if (!name || !category || basePrice === undefined) {
      throw new Error('Name, category, and basePrice are required');
    }
    if (!VALID_CATEGORIES.includes(category)) {
      throw new Error(`Invalid category. Must be one of: ${VALID_CATEGORIES.join(', ')}`);
    }
    if (typeof basePrice !== 'number' || basePrice < 0) {
      throw new Error('basePrice must be a non-negative number');
    }
    this.id = uuidv4();
    this.name = name;
    this.description = description || '';
    this.category = category;
    this.basePrice = basePrice;
    this.estimatedDuration = estimatedDuration || 60; // minutes
    this.active = true;
  }

  calculatePrice(hours, urgencyMultiplier = 1.0) {
    if (hours <= 0) throw new Error('Hours must be positive');
    if (urgencyMultiplier < 1.0) throw new Error('Urgency multiplier cannot be less than 1.0');
    return Math.round(this.basePrice * hours * urgencyMultiplier * 100) / 100;
  }

  deactivate() {
    this.active = false;
  }

  activate() {
    this.active = true;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      category: this.category,
      basePrice: this.basePrice,
      estimatedDuration: this.estimatedDuration,
      active: this.active,
    };
  }
}

module.exports = { Service, VALID_CATEGORIES };
