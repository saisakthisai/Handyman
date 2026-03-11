const { Service } = require('../models/Service');

class ServiceCatalog {
  constructor() {
    this.services = new Map();
  }

  addService(data) {
    const service = new Service(data);
    this.services.set(service.id, service);
    return service;
  }

  getServiceById(id) {
    const service = this.services.get(id);
    if (!service) throw new Error(`Service not found: ${id}`);
    return service;
  }

  removeService(id) {
    const service = this.getServiceById(id);
    service.deactivate();
    return service;
  }

  listServices({ category, activeOnly = true } = {}) {
    let services = Array.from(this.services.values());
    if (activeOnly) {
      services = services.filter((s) => s.active);
    }
    if (category) {
      services = services.filter((s) => s.category === category);
    }
    return services;
  }

  searchServices(query) {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.services.values()).filter(
      (s) =>
        s.active &&
        (s.name.toLowerCase().includes(lowerQuery) ||
          s.description.toLowerCase().includes(lowerQuery))
    );
  }

  getQuote(serviceId, hours, urgent = false) {
    const service = this.getServiceById(serviceId);
    if (!service.active) {
      throw new Error('Cannot get quote for inactive service');
    }
    const urgencyMultiplier = urgent ? 1.5 : 1.0;
    return {
      serviceId: service.id,
      serviceName: service.name,
      basePrice: service.basePrice,
      hours,
      urgencyMultiplier,
      totalPrice: service.calculatePrice(hours, urgencyMultiplier),
    };
  }
}

module.exports = ServiceCatalog;
