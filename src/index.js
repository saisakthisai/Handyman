const UserService = require('./services/UserService');
const ServiceCatalog = require('./services/ServiceCatalog');
const BookingService = require('./services/BookingService');
const NotificationService = require('./services/NotificationService');
const SchedulingService = require('./services/SchedulingService');

function createApp() {
  const userService = new UserService();
  const serviceCatalog = new ServiceCatalog();
  const bookingService = new BookingService(userService, serviceCatalog);
  const notificationService = new NotificationService();
  const schedulingService = new SchedulingService(bookingService, userService);

  return {
    userService,
    serviceCatalog,
    bookingService,
    notificationService,
    schedulingService,
  };
}

module.exports = { createApp };
