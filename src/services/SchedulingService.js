class SchedulingService {
  constructor(bookingService, userService) {
    this.bookingService = bookingService;
    this.userService = userService;
  }

  getAvailableHandymen(date) {
    const handymen = this.userService.getHandymen();
    const dateStr = new Date(date).toDateString();

    return handymen.filter((h) => {
      const bookings = this.bookingService.getBookingsForHandyman(h.id);
      const dayBookings = bookings.filter(
        (b) =>
          b.scheduledDate.toDateString() === dateStr &&
          !['cancelled', 'completed'].includes(b.status)
      );
      return dayBookings.length < 3; // Max 3 bookings per day
    });
  }

  getHandymanSchedule(handymanId, startDate, endDate) {
    const bookings = this.bookingService.getBookingsForHandyman(handymanId);
    const start = new Date(startDate);
    const end = new Date(endDate);

    return bookings.filter(
      (b) =>
        b.scheduledDate >= start &&
        b.scheduledDate <= end &&
        !['cancelled'].includes(b.status)
    );
  }

  suggestTimeSlots(serviceId, date) {
    const slots = [];
    const baseDate = new Date(date);
    const timeSlots = [9, 11, 13, 15, 17]; // Available hours

    for (const hour of timeSlots) {
      const slotDate = new Date(baseDate);
      slotDate.setHours(hour, 0, 0, 0);

      if (slotDate > new Date()) {
        const available = this.getAvailableHandymen(slotDate);
        slots.push({
          time: slotDate,
          availableHandymen: available.length,
        });
      }
    }

    return slots;
  }

  autoAssign(bookingId) {
    const booking = this.bookingService.getBookingById(bookingId);
    const available = this.getAvailableHandymen(booking.scheduledDate);

    if (available.length === 0) {
      throw new Error('No handymen available for this time slot');
    }

    // Assign to the handyman with fewest current bookings
    let bestHandyman = available[0];
    let minBookings = Infinity;

    for (const handyman of available) {
      const count = this.bookingService
        .getBookingsForHandyman(handyman.id)
        .filter((b) => !['cancelled', 'completed'].includes(b.status)).length;
      if (count < minBookings) {
        minBookings = count;
        bestHandyman = handyman;
      }
    }

    return this.bookingService.assignHandyman(bookingId, bestHandyman.id);
  }
}

module.exports = SchedulingService;
