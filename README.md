# Adactin Hotel Booking - Playwright Automation Framework

Automated testing framework built with **Playwright** and **JavaScript** for the [Adactin Hotel Booking](https://adactinhotelapp.com/) web application. The project follows the **Page Object Model (POM)** design pattern with a data-driven approach.

## What Does This Project Do?

It automates and validates the complete hotel booking workflow:

- User authentication (login/logout)
- Hotel search with filters
- Hotel selection from results
- Booking with guest and payment details
- Booking confirmation and itinerary verification

The test suite includes **end-to-end**, **positive**, and **negative** test scenarios to ensure comprehensive coverage of both happy paths and error handling.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Playwright Test | Browser automation & test runner |
| JavaScript (ES Modules) | Scripting language |
| JSON data files | External test data management |
| GitHub Actions | CI/CD pipeline |

## Folder Structure

```
├── Data/
│   ├── e2e.json                  # Data for full workflow test
│   ├── positive.json             # Data for positive scenarios
│   └── negative.json             # Data for negative scenarios
├── Pages/
│   ├── LoginPage.js              # Login screen interactions
│   ├── SearchPage.js             # Hotel search form actions
│   ├── SearchHotelPage.js        # Hotel selection from results
│   ├── BookingPage.js            # Guest & payment form handling
│   ├── ConfirmationPage.js       # Order number retrieval
│   └── ItineraryPage.js          # Booking lookup & logout
├── tests/
│   ├── endToEndBookingFlow.spec.js       # Complete booking flow test
│   ├── PositiveScenarios/
│   │   ├── successfulLogin.spec.js
│   │   ├── validHotelSearch.spec.js
│   │   ├── successfulHotelSelection.spec.js
│   │   ├── bookingConfirmation.spec.js
│   │   └── successfulLogout.spec.js
│   └── NegativeScenarios/
│       ├── loginInvalidCredentials.spec.js
│       ├── searchMissingFields.spec.js
│       ├── selectHotelWithoutChoice.spec.js
│       ├── bookingMissingDetails.spec.js
│       ├── invalidCreditCard.spec.js
│       └── logoutWithoutLogin.spec.js
├── playwright.config.js
├── package.json
└── .github/workflows/playwright.yml
```

## Architecture

### Page Object Model

Every application screen is represented by a dedicated class inside the `Pages/` directory. Each class holds the element locators and user interaction methods for that screen. This keeps selectors in one place and avoids repetition across test files.

### Data-Driven Testing

All test inputs (credentials, search filters, booking details, expected error messages) live in JSON files under `Data/`. Tests import only the data they need, making it straightforward to update values without touching test logic.

## Test Scenarios (12 Total)

### End-to-End (1 Test)

| ID | Description |
|----|-------------|
| TC01 | Complete workflow: Login → Search → Select → Book → Confirm → Itinerary → Logout |

### Positive Tests (5 Tests)

| ID | Description |
|----|-------------|
| TC02 | Login succeeds with correct credentials |
| TC03 | Hotel search returns results using valid filters |
| TC04 | Selecting a hotel navigates to the booking form |
| TC05 | Submitting a booking generates an order number |
| TC06 | User can log out after completing a booking |

### Negative Tests (6 Tests)

| ID | Description |
|----|-------------|
| TC07 | Login fails with wrong username and password |
| TC08 | Searching without selecting a location shows an error |
| TC09 | Clicking Continue without picking a hotel shows an error |
| TC10 | Submitting a booking with empty personal fields shows an error |
| TC11 | Entering an invalid credit card number shows an error |
| TC12 | Logout button is not accessible without logging in first |

## Getting Started

### Prerequisites

- **Node.js** 18 or above (LTS recommended)
- **npm** (comes with Node.js)

### Setup

```bash
# 1. Install project dependencies
npm install

# 2. Download browser binaries for Playwright
npx playwright install
```

## How to Run Tests

### Run the entire test suite

```bash
npx playwright test
```

### Run by category

```bash
# End-to-end test only
npx playwright test tests/e2e.spec.js

# All positive tests
npx playwright test tests/PositiveScenarios/

# All negative tests
npx playwright test tests/NegativeScenarios/
```

### Run a single test file

```bash
npx playwright test tests/NegativeScenarios/logoutWithoutLogin.spec.js
```

### Run with the browser visible (headed mode)

```bash
npx playwright test --headed
```

### Run on a specific browser

```bash
# Chromium only
npx playwright test --project=chromium

# Firefox only
npx playwright test --project=firefox

# WebKit only
npx playwright test --project=webkit
```

### View the HTML test report

```bash
npx playwright show-report
```

## Configuration

Key settings in `playwright.config.js`:

- **Test directory:** `./tests`
- **Parallel execution:** Enabled
- **Browser projects:** Chromium, Firefox, WebKit
- **Retries:** 2 on CI, none locally
- **Reporter:** HTML
- **Tracing:** Captured on first retry for debugging

## CI/CD

A GitHub Actions workflow (`.github/workflows/playwright.yml`) runs the full suite automatically on pushes and pull requests to `main`. Test reports are uploaded as artifacts with 30-day retention.

## License

ISC
