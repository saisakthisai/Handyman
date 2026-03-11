const { Booking } = require('../models/Booking');

class BookingService {
  constructor(userService, serviceCatalog) {
    this.bookings = new Map();
    this.userService = userService;
    this.serviceCatalog = serviceCatalog;
  }

  createBooking(data) {
    // Validate customer exists
    const customer = this.userService.getUserById(data.customerId);
    if (customer.role !== 'customer') {
      throw new Error('Only customers can create bookings');
    }

    // Validate service exists and is active
    const service = this.serviceCatalog.getServiceById(data.serviceId);
    if (!service.active) {
      throw new Error('Cannot book an inactive service');
    }

    const booking = new Booking(data);
    this.bookings.set(booking.id, booking);
    return booking;
  }

  getBookingById(id) {
    const booking = this.bookings.get(id);
    if (!booking) throw new Error(`Booking not found: ${id}`);
    return booking;
  }

  assignHandyman(bookingId, handymanId) {
    const booking = this.getBookingById(bookingId);
    const handyman = this.userService.getUserById(handymanId);
    if (handyman.role !== 'handyman') {
      throw new Error('Can only assign users with handyman role');
    }

    // Check for scheduling conflicts
    const conflicts = this.getBookingsForHandyman(handymanId).filter(
      (b) =>
        b.status === 'confirmed' &&
        b.scheduledDate.toDateString() === booking.scheduledDate.toDateString()
    );
    if (conflicts.length >= 3) {
      throw new Error('Handyman has too many bookings on this date');
    }

    booking.assignHandyman(handymanId);
    return booking;
  }

  startBooking(bookingId) {
    const booking = this.getBookingById(bookingId);
    booking.start();
    return booking;
  }

  completeBooking(bookingId, totalPrice) {
    const booking = this.getBookingById(bookingId);
    booking.complete(totalPrice);
    return booking;
  }

  cancelBooking(bookingId, reason) {
    const booking = this.getBookingById(bookingId);
    booking.cancel(reason);
    return booking;
  }

  rateBooking(bookingId, score) {
    const booking = this.getBookingById(bookingId);
    booking.rate(score);
    return booking;
  }

  getBookingsForCustomer(customerId) {
    return Array.from(this.bookings.values()).filter(
      (b) => b.customerId === customerId
    );
  }

  getBookingsForHandyman(handymanId) {
    return Array.from(this.bookings.values()).filter(
      (b) => b.handymanId === handymanId
    );
  }

  getBookingsByStatus(status) {
    return Array.from(this.bookings.values()).filter(
      (b) => b.status === status
    );
  }

  getPendingBookings() {
    return this.getBookingsByStatus('pending');
  }

  getBookingStats() {
    const all = Array.from(this.bookings.values());
    const completed = all.filter((b) => b.status === 'completed');
    const totalRevenue = completed.reduce((sum, b) => sum + (b.totalPrice || 0), 0);
    const rated = completed.filter((b) => b.rating !== null);
    const avgRating =
      rated.length > 0
        ? rated.reduce((sum, b) => sum + b.rating, 0) / rated.length
        : null;

    return {
      total: all.length,
      pending: all.filter((b) => b.status === 'pending').length,
      confirmed: all.filter((b) => b.status === 'confirmed').length,
      inProgress: all.filter((b) => b.status === 'in_progress').length,
      completed: completed.length,
      cancelled: all.filter((b) => b.status === 'cancelled').length,
      totalRevenue: Math.round(totalRevenue * 100) / 100,
      averageRating: avgRating,
    };
  }
}

module.exports = BookingService;
