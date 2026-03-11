const WEEKEND_MULTIPLIER = 1.25;
const HOLIDAY_MULTIPLIER = 1.5;
const AFTER_HOURS_MULTIPLIER = 1.3;
const EMERGENCY_MULTIPLIER = 2.0;

const HOLIDAYS = [
  '01-01', // New Year's Day
  '07-04', // Independence Day
  '12-25', // Christmas
  '12-31', // New Year's Eve
];

function isWeekend(date) {
  const day = new Date(date).getDay();
  return day === 0 || day === 6;
}

function isHoliday(date) {
  const d = new Date(date);
  const monthDay = `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  return HOLIDAYS.includes(monthDay);
}

function isAfterHours(date) {
  const hour = new Date(date).getHours();
  return hour < 8 || hour >= 18;
}

function calculateDynamicPrice(basePrice, hours, date, emergency = false) {
  let multiplier = 1.0;

  if (emergency) {
    multiplier *= EMERGENCY_MULTIPLIER;
  } else {
    if (isHoliday(date)) {
      multiplier *= HOLIDAY_MULTIPLIER;
    } else if (isWeekend(date)) {
      multiplier *= WEEKEND_MULTIPLIER;
    }
    if (isAfterHours(date)) {
      multiplier *= AFTER_HOURS_MULTIPLIER;
    }
  }

  const total = basePrice * hours * multiplier;
  return {
    basePrice,
    hours,
    multiplier: Math.round(multiplier * 100) / 100,
    total: Math.round(total * 100) / 100,
    breakdown: {
      weekend: isWeekend(date),
      holiday: isHoliday(date),
      afterHours: isAfterHours(date),
      emergency,
    },
  };
}

function calculateDiscount(totalPrice, discountType, discountValue) {
  switch (discountType) {
    case 'percentage':
      if (discountValue < 0 || discountValue > 100) {
        throw new Error('Percentage discount must be between 0 and 100');
      }
      return Math.round(totalPrice * (1 - discountValue / 100) * 100) / 100;
    case 'fixed':
      if (discountValue < 0) {
        throw new Error('Fixed discount cannot be negative');
      }
      return Math.max(0, Math.round((totalPrice - discountValue) * 100) / 100);
    default:
      throw new Error(`Unknown discount type: ${discountType}`);
  }
}

module.exports = {
  isWeekend,
  isHoliday,
  isAfterHours,
  calculateDynamicPrice,
  calculateDiscount,
  WEEKEND_MULTIPLIER,
  HOLIDAY_MULTIPLIER,
  AFTER_HOURS_MULTIPLIER,
  EMERGENCY_MULTIPLIER,
};
