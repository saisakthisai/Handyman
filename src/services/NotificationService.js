class NotificationService {
  constructor() {
    this.notifications = [];
    this.subscribers = new Map();
  }

  subscribe(userId, channel, callback) {
    const key = `${userId}:${channel}`;
    if (!this.subscribers.has(key)) {
      this.subscribers.set(key, []);
    }
    this.subscribers.get(key).push(callback);
  }

  unsubscribe(userId, channel) {
    const key = `${userId}:${channel}`;
    this.subscribers.delete(key);
  }

  notify(userId, message, type = 'info') {
    const notification = {
      userId,
      message,
      type,
      read: false,
      createdAt: new Date(),
    };
    this.notifications.push(notification);

    // Dispatch to subscribers
    for (const [key, callbacks] of this.subscribers.entries()) {
      if (key.startsWith(`${userId}:`)) {
        callbacks.forEach((cb) => cb(notification));
      }
    }

    return notification;
  }

  notifyBookingCreated(booking) {
    this.notify(booking.customerId, `Your booking ${booking.id} has been created.`, 'booking');
    if (booking.handymanId) {
      this.notify(booking.handymanId, `New booking assigned: ${booking.id}`, 'booking');
    }
  }

  notifyBookingStatusChange(booking) {
    this.notify(
      booking.customerId,
      `Your booking ${booking.id} status changed to: ${booking.status}`,
      'booking'
    );
    if (booking.handymanId) {
      this.notify(
        booking.handymanId,
        `Booking ${booking.id} status changed to: ${booking.status}`,
        'booking'
      );
    }
  }

  getNotificationsForUser(userId, { unreadOnly = false } = {}) {
    let userNotifs = this.notifications.filter((n) => n.userId === userId);
    if (unreadOnly) {
      userNotifs = userNotifs.filter((n) => !n.read);
    }
    return userNotifs;
  }

  markAsRead(userId, index) {
    const userNotifs = this.notifications.filter((n) => n.userId === userId);
    if (index < 0 || index >= userNotifs.length) {
      throw new Error('Invalid notification index');
    }
    userNotifs[index].read = true;
  }

  markAllAsRead(userId) {
    this.notifications
      .filter((n) => n.userId === userId)
      .forEach((n) => {
        n.read = true;
      });
  }

  getUnreadCount(userId) {
    return this.notifications.filter((n) => n.userId === userId && !n.read).length;
  }
}

module.exports = NotificationService;
