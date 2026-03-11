# Test Coverage Analysis — Handyman Platform

## Current Coverage Summary

| Metric     | Covered | Total | Coverage |
|------------|---------|-------|----------|
| Statements | 53      | 335   | 15.82%   |
| Branches   | 32      | 177   | 18.07%   |
| Functions  | 13      | 98    | 13.26%   |
| Lines      | 51      | 313   | 16.29%   |

**Overall verdict: Critical — the codebase is severely undertested.**

---

## Per-File Breakdown

### Models

| File        | Stmts | Branch | Funcs | Lines | Notes |
|-------------|-------|--------|-------|-------|-------|
| Booking.js  | 0%    | 0%     | 0%    | 0%    | **Completely untested** |
| Service.js  | 75%   | 85%    | 40%   | 82%   | Missing: `deactivate()`, `activate()`, `toJSON()`, negative-price edge cases |
| User.js     | 76%   | 69%    | 67%   | 87%   | Missing: `updateProfile()` method |

### Services

| File                   | Stmts | Branch | Funcs | Lines | Notes |
|------------------------|-------|--------|-------|-------|-------|
| BookingService.js      | 0%    | 0%     | 0%    | 0%    | **Completely untested** |
| NotificationService.js | 0%    | 0%     | 0%    | 0%    | **Completely untested** |
| SchedulingService.js   | 0%    | 0%     | 0%    | 0%    | **Completely untested** |
| ServiceCatalog.js      | 0%    | 0%     | 0%    | 0%    | **Completely untested** |
| UserService.js         | 62%   | 33%    | 67%   | 61%   | Missing: `getUserByEmail()`, `updateUser()`, `deleteUser()` |

### Utils

| File           | Stmts | Branch | Funcs | Lines | Notes |
|----------------|-------|--------|-------|-------|-------|
| pricing.js     | 0%    | 0%     | 0%    | 0%    | **Completely untested** |
| validators.js  | 30%   | 19%    | 38%   | 35%   | Missing: `validateAddress()`, `validateDateRange()`, `sanitizeInput()`, `validatePrice()` |

---

## Priority Recommendations

### P0 — Critical (0% coverage, core business logic)

#### 1. `Booking` model (`src/models/Booking.js`)
This is the central domain object of the platform. **Every method is untested.** Tests needed:
- Constructor validation (required fields, future date enforcement, invalid date handling)
- Full lifecycle: `pending → confirmed → in_progress → completed`
- `cancel()` from each valid state, and rejection from `completed`/`cancelled`
- `rate()` — valid scores, boundary values (1, 5), rejection on non-completed bookings
- State-transition error paths (e.g., starting a `pending` booking should throw)
- `toJSON()` serialization

#### 2. `BookingService` (`src/services/BookingService.js`)
The main orchestrator — validates users, services, and manages booking lifecycle. Tests needed:
- `createBooking()` — happy path, non-customer rejection, inactive service rejection
- `assignHandyman()` — role validation, scheduling conflict detection (≥3 bookings/day)
- Full workflow: create → assign → start → complete → rate
- `cancelBooking()` with reason appending
- Query methods: `getBookingsForCustomer()`, `getBookingsForHandyman()`, `getBookingsByStatus()`
- `getBookingStats()` — revenue calculation, average rating with/without rated bookings

#### 3. `pricing.js` (`src/utils/pricing.js`)
Financial calculations with zero coverage is a serious risk. Tests needed:
- `isWeekend()`, `isHoliday()`, `isAfterHours()` — boundary testing for each
- `calculateDynamicPrice()` — weekday, weekend, holiday, after-hours, emergency, and combined multipliers
- `calculateDiscount()` — percentage discount (0%, 50%, 100%), fixed discount, discount exceeding price (clamped to 0), invalid inputs

### P1 — High Priority (0% coverage, supporting services)

#### 4. `ServiceCatalog` (`src/services/ServiceCatalog.js`)
Tests needed:
- `addService()` / `getServiceById()` / `removeService()` (deactivation)
- `listServices()` with filtering by category and active status
- `searchServices()` — case-insensitive matching in name and description
- `getQuote()` — normal and urgent pricing, inactive service rejection

#### 5. `NotificationService` (`src/services/NotificationService.js`)
Tests needed:
- `subscribe()` / `unsubscribe()` / `notify()` — callback dispatch
- `notifyBookingCreated()` and `notifyBookingStatusChange()` — correct recipients
- `getNotificationsForUser()` with `unreadOnly` filter
- `markAsRead()` / `markAllAsRead()` — state mutation
- `getUnreadCount()`

#### 6. `SchedulingService` (`src/services/SchedulingService.js`)
Tests needed:
- `getAvailableHandymen()` — filters out fully-booked handymen
- `getHandymanSchedule()` — date range filtering, exclusion of cancelled bookings
- `suggestTimeSlots()` — only future slots, available handyman counts
- `autoAssign()` — selects least-busy handyman, throws when none available

### P2 — Medium Priority (partial coverage, gaps in existing tests)

#### 7. `User` model — add `updateProfile()` tests
- Updating name only, phone only, both
- Verifying original fields are preserved

#### 8. `Service` model — add edge case and method tests
- `deactivate()` / `activate()` toggle
- `toJSON()` serialization
- `calculatePrice()` with zero/negative hours (should throw)
- Negative `basePrice` rejection in constructor

#### 9. `UserService` — complete method coverage
- `getUserByEmail()` — found and not-found cases
- `updateUser()` — delegates to model `updateProfile()`
- `deleteUser()` — success and not-found cases

#### 10. `validators.js` — complete function coverage
- `validateAddress()` — null, short strings, valid addresses
- `validateDateRange()` — valid range, reversed range, invalid dates
- `sanitizeInput()` — XSS characters (`<`, `>`, `"`, `'`, `&`), non-string input
- `validatePrice()` — positive, zero, negative, `Infinity`, non-number

---

## Integration Test Gaps

There are currently **no integration tests** covering cross-service workflows. Recommended scenarios:

1. **End-to-end booking flow**: Create customer → create service → create booking → assign handyman → start → complete → rate → verify stats
2. **Scheduling + booking interaction**: Create multiple handymen → fill schedule → verify availability decreases → verify conflict detection
3. **Notification delivery**: Create booking → verify customer notification → change status → verify both customer and handyman are notified
4. **Pricing integration**: Create service → get quote with different date/time conditions → verify multipliers applied correctly

---

## Recommendations Summary

| Priority | Area | Current | Target | Effort |
|----------|------|---------|--------|--------|
| P0 | Booking model | 0% | 95%+ | Medium |
| P0 | BookingService | 0% | 90%+ | High |
| P0 | pricing.js | 0% | 95%+ | Low |
| P1 | ServiceCatalog | 0% | 90%+ | Medium |
| P1 | NotificationService | 0% | 85%+ | Medium |
| P1 | SchedulingService | 0% | 85%+ | Medium |
| P2 | User model gaps | 87% | 95%+ | Low |
| P2 | Service model gaps | 82% | 95%+ | Low |
| P2 | UserService gaps | 61% | 90%+ | Low |
| P2 | validators.js gaps | 35% | 95%+ | Low |
| — | Integration tests | 0% | New | High |

**Target**: Reach ≥80% line coverage overall (currently 16%) with ≥90% on all business-critical modules (Booking, BookingService, pricing).
