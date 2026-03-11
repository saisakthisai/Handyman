const { v4: uuidv4 } = require('uuid');

const BOOKING_STATUSES = ['pending', 'confirmed', 'in_progress', 'completed', 'cancelled'];

class Booking {
  constructor({ customerId, handymanId, serviceId, scheduledDate, address, notes }) {
    if (!customerId || !serviceId || !scheduledDate || !address) {
      throw new Error('customerId, serviceId, scheduledDate, and address are required');
    }
    const date = new Date(scheduledDate);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid scheduledDate');
    }
    if (date < new Date()) {
      throw new Error('scheduledDate must be in the future');
    }

    this.id = uuidv4();
    this.customerId = customerId;
    this.handymanId = handymanId || null;
    this.serviceId = serviceId;
    this.scheduledDate = date;
    this.address = address;
    this.notes = notes || '';
    this.status = 'pending';
    this.totalPrice = null;
    this.rating = null;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  assignHandyman(handymanId) {
    if (this.status !== 'pending') {
      throw new Error('Can only assign handyman to pending bookings');
    }
    this.handymanId = handymanId;
    this.status = 'confirmed';
    this.updatedAt = new Date();
  }

  start() {
    if (this.status !== 'confirmed') {
      throw new Error('Can only start confirmed bookings');
    }
    this.status = 'in_progress';
    this.updatedAt = new Date();
  }

  complete(totalPrice) {
    if (this.status !== 'in_progress') {
      throw new Error('Can only complete in-progress bookings');
    }
    if (typeof totalPrice !== 'number' || totalPrice < 0) {
      throw new Error('totalPrice must be a non-negative number');
    }
    this.status = 'completed';
    this.totalPrice = totalPrice;
    this.updatedAt = new Date();
  }

  cancel(reason) {
    if (['completed', 'cancelled'].includes(this.status)) {
      throw new Error('Cannot cancel completed or already cancelled bookings');
    }
    this.status = 'cancelled';
    this.notes = reason ? `${this.notes}\nCancellation reason: ${reason}` : this.notes;
    this.updatedAt = new Date();
  }

  rate(score) {
    if (this.status !== 'completed') {
      throw new Error('Can only rate completed bookings');
    }
    if (!Number.isInteger(score) || score < 1 || score > 5) {
      throw new Error('Rating must be an integer between 1 and 5');
    }
    this.rating = score;
    this.updatedAt = new Date();
  }

  toJSON() {
    return {
      id: this.id,
      customerId: this.customerId,
      handymanId: this.handymanId,
      serviceId: this.serviceId,
      scheduledDate: this.scheduledDate.toISOString(),
      address: this.address,
      notes: this.notes,
      status: this.status,
      totalPrice: this.totalPrice,
      rating: this.rating,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }
}

module.exports = { Booking, BOOKING_STATUSES };
