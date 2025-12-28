# Senior QA Assignment - Demo Web Shop Testing

Comprehensive testing framework for Demo Web Shop including Playwright automation, API automation, and manual test cases.

## Repository Structure

This repository is organized into three main sections:

### 📱 [Playwright Automation](./playwright-automation/)
End-to-end UI automation testing using Playwright with Page Object Model (POM) architecture.

**Features:**
- Page Object Model (POM) architecture
- Data-driven testing (JSON)
- Allure reporting
- HTML reports with screenshots and videos
- CI/CD pipeline with GitHub Actions

**Quick Start:**
```bash
cd playwright-automation
npm run setup
npm test
```

### 🔌 [API Automation](./api-automation/)
Postman collections for API testing of Demo Web Shop.

**Features:**
- Postman collection for API endpoints
- Test cases for user registration, product catalog, shopping cart
- Ready to import and run in Postman

**Quick Start:**
1. Import `DemoWebShop-API.postman_collection.json` into Postman
2. Run the collection

### 📝 [Manual Test Cases](./manual-tests/)
Comprehensive manual test cases covering all major functionalities.

**Features:**
- 10+ detailed test cases
- Available in Markdown and CSV formats
- Covers functional, UI/UX, and cross-browser testing

**Quick Start:**
- Review test cases in `manual-test-cases.md`
- Execute tests following the test steps
- Document results

## Project Overview

This project provides a complete testing solution for the Demo Web Shop application:

- **UI Automation**: Automated end-to-end tests using Playwright
- **API Automation**: API testing using Postman collections
- **Manual Testing**: Comprehensive manual test cases

## Getting Started

### Prerequisites

- Node.js (v14 or higher) - [Download](https://nodejs.org/)
- npm (comes with Node.js)
- Postman (for API testing) - [Download](https://www.postman.com/downloads/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mathumitha96/senior-qa-assignment.git
   cd senior-qa-assignment
   ```

2. **For Playwright Automation:**
   ```bash
   cd playwright-automation
   npm run setup
   ```

3. **For API Automation:**
   - Open Postman
   - Import `api-automation/DemoWebShop-API.postman_collection.json`

4. **For Manual Testing:**
   - Review test cases in `manual-tests/manual-test-cases.md`

## Test Coverage

### Functional Testing
- ✅ User registration and login
- ✅ Product browsing and search
- ✅ Shopping cart operations
- ✅ Checkout process
- ✅ Price calculations

### API Testing
- ✅ User registration API
- ✅ Product catalog API
- ✅ Shopping cart API

### Manual Testing
- ✅ 10+ comprehensive test cases
- ✅ UI/UX validation
- ✅ Cross-browser compatibility

## CI/CD

The project includes a GitHub Actions CI/CD pipeline that:
- Runs automated tests on every push/PR
- Checks code formatting
- Generates test reports
- Uploads artifacts (HTML reports, screenshots, videos)

## Repository Links

- **GitHub Repository**: https://github.com/Mathumitha96/senior-qa-assignment
- **Playwright Tests**: [playwright-automation/](./playwright-automation/)
- **API Tests**: [api-automation/](./api-automation/)
- **Manual Tests**: [manual-tests/](./manual-tests/)

## Features

- ✅ Page Object Model (POM) architecture
- ✅ Data-driven testing
- ✅ Allure reporting
- ✅ HTML reports with screenshots and videos
- ✅ Prettier code formatting
- ✅ CI/CD pipeline
- ✅ Postman API collections
- ✅ Comprehensive manual test cases

## Contact

For questions or issues, please open an issue in the GitHub repository.
