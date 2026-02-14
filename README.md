# QA Automation Challenge – SauceDemo E2E

This repository contains an end-to-end (E2E) automated test solution developed as part of a QA Automation challenge.
The objective is to validate a critical user flow on the SauceDemo web application using modern automation tools and good testing practices.

The solution focuses on clarity, maintainability, and reliability rather than over-engineering.

---

## Scope of the Test

**Application under test:** https://www.saucedemo.com

**Feature:** SauceDemo E2E flow

**Scenario covered:** Login, add product, validate cart and logout

The automated test validates the following business flow:

1. Navigate to the SauceDemo login page
2. Authenticate using valid user credentials
3. Verify that the Products page is successfully loaded
4. Add a product to the shopping cart
5. Validate that the cart contains exactly one item
6. Log out from the application

This scenario represents a core user journey and provides confidence that the main application flow is working as expected.

---

##  Technology Stack

- Playwright – Browser automation and assertions
- Cucumber.js – BDD framework for readable test scenarios
- TypeScript – Strong typing and maintainable code
- Node.js – JavaScript runtime

---

##  Project Structure

```
qa-playwright-cucumber/
├── features/
│   └── saucedemo.feature
├── src/
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   └── ProductsPage.ts
│   ├── steps/
│   │   └── saucedemo.steps.ts
│   └── support/
│       ├── hooks.ts
│       └── world.ts
├── reports/
├── cucumber.js
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

##  How to Run the Tests

### Prerequisites

- Node.js v18 or higher
- npm

### Installation

```bash
npm install
npx playwright install
```

### Execute the test suite

```bash
npm test
```

---

##  Test Report

After execution, a Cucumber HTML report is generated automatically.

**Report location:**

```
reports/cucumber-report.html
```

Open this file in any web browser to review:

- Scenario execution status
- Step-by-step results
- Execution time and environment details

---

##  Execution Results

Example results from a successful execution:

- 1 scenario executed
- 100% passed
- All steps completed successfully
- Execution time under 3 seconds on Windows

This confirms that the E2E flow works as expected and that the test is stable.

---

##  Design Decisions

- Page Object Model (POM) is used to separate test logic from UI interaction details
- Global Cucumber timeout is configured to avoid flaky behavior during E2E execution
- No hard waits or artificial delays are used
- Playwright’s built-in auto-waiting and assertions are leveraged for stability
- Clear separation between feature files, step definitions, and page logic

The goal was to keep the framework simple, readable, and easy to extend.

---

##  Possible Improvements

- Scenario Outline with multiple user credentials
- Screenshot capture on test failure
- CI integration using GitHub Actions
- Additional page objects (Cart, Checkout)
- JSON or JUnit report export for CI pipelines

---

##  Author

QA Automation Challenge - Isaac Murillo +505-88035391