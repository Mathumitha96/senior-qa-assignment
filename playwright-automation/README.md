# Playwright Test Automation

Playwright JavaScript automation framework for Demo Web Shop with Page Object Model and data-driven testing.

## Prerequisites

- Node.js (v14 or higher) - [Download](https://nodejs.org/)
- npm (comes with Node.js)

## Installation

1. **Navigate to this directory:**
   ```bash
   cd playwright-automation
   ```

2. **Install dependencies and Playwright browsers:**
   ```bash
   npm run setup
   ```

## Running Tests

```bash
npm test                    # Run all tests
npm run test:ui             # Run with Playwright UI
```

## Test Reports

```bash
npm run report              # View Playwright HTML report
npm run allure:report       # View Allure report (run tests first)
```

## Available Commands

| Command                 | Description                       |
| ----------------------- | --------------------------------- |
| `npm run setup`         | Install dependencies and browsers |
| `npm test`              | Run all tests                     |
| `npm run test:ui`       | Run tests with Playwright UI      |
| `npm run report`        | View Playwright HTML report       |
| `npm run allure:report` | Generate and view Allure report   |
| `npm run clean`         | Clean generated reports           |
| `npm run format`        | Format code with Prettier         |
| `npm run format:check`  | Check code formatting             |

## Project Structure

```
tests/
├── data/
│   └── testdata.json          # Test data
├── pages/
│   ├── BasePage.js
│   ├── HomePage.js
│   ├── CategoryPage.js
│   └── CartPage.js
└── demowebshop-test.spec.js    # Main test file
```

## Test Flow

1. Navigates to demo web shop
2. Adds products from categories
3. Searches for products and adds to cart
4. Updates product quantities
5. Verifies price calculations

## Features

- Page Object Model (POM) architecture
- Data-driven testing (JSON)
- Allure reporting
- HTML reports with screenshots and videos
- Prettier code formatting (auto-format on save)
- CI/CD pipeline with GitHub Actions

## Troubleshooting

- **"Cannot find module"**: Run `npm run setup`
- **"No test results found" (Allure)**: Run `npm test` first
- **Tests fail**: Check internet connection and website accessibility

