function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\+?[\d\s-()]{7,15}$/;
  return phoneRegex.test(phone);
}

function validateAddress(address) {
  if (!address || typeof address !== 'string') return false;
  return address.trim().length >= 10;
}

function validateDateRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return false;
  return start < end;
}

function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.replace(/[<>\"'&]/g, (char) => {
    const entities = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '&': '&amp;',
    };
    return entities[char];
  });
}

function validateRating(rating) {
  return Number.isInteger(rating) && rating >= 1 && rating <= 5;
}

function validatePrice(price) {
  return typeof price === 'number' && price >= 0 && isFinite(price);
}

module.exports = {
  validateEmail,
  validatePhone,
  validateAddress,
  validateDateRange,
  sanitizeInput,
  validateRating,
  validatePrice,
};
