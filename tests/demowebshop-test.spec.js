// Test for Demo Web Shop using Page Object Model and External Data
const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');
const { HomePage } = require('./pages/HomePage');
const { CategoryPage } = require('./pages/CategoryPage');
const { CartPage } = require('./pages/CartPage');
const testData = require('./data/testdata.json');

test('Demo Web Shop - Add products to cart with price verification', async ({ page }) => {
  allure.severity('critical');

  const homePage = new HomePage(page);
  const categoryPage = new CategoryPage(page);
  const cartPage = new CartPage(page);

  // Step 1: Go to website
  await homePage.navigate(testData.website.url);

  // Step 2: Assert that the website opened correctly
  const title = await homePage.getTitle();
  expect(title).toContain(testData.website.title);
  await expect(page.locator('text=Welcome to our store')).toBeVisible();

  // Step 3: Navigate to categories and add products
  for (const category of testData.categories) {
    await homePage.navigateToCategory(category.name);

    // Navigate to subcategory if specified
    if (category.subcategory) {
      await homePage.navigateToSubcategory(category.subcategory);
    }

    // Add product based on method
    if (category.addMethod === 'direct') {
      await categoryPage.addFirstProductToCart();
    } else if (category.addMethod === 'byImage') {
      await categoryPage.clickProductByImageTitle(category.imageTitle);
      await expect(
        page.getByRole('heading', { name: category.imageTitle.replace('Show details for ', '') })
      ).toBeVisible();
      if (category.buttonId) {
        await categoryPage.addProductByButtonId(category.buttonId);
      }
    }
  }

  // Step 4: Search for products and add to cart
  await homePage.navigate(testData.website.url);
  await homePage.waitForPageLoad();

  for (const searchProduct of testData.searchProducts) {
    await homePage.searchProduct(searchProduct.searchTerm);

    // Check if search results are available and add first product
    const searchResults = page.locator('h2.product-title a').first();
    if (await searchResults.isVisible({ timeout: 5000 })) {
      await searchResults.click();
      await page.waitForSelector('input[value="Add to cart"]', { timeout: 10000 });
      await page.click('input[value="Add to cart"]');
      await page.waitForSelector('div.bar-notification', { state: 'visible', timeout: 5000 });
    }

    // Go back to home for next search
    await homePage.navigate(testData.website.url);
    await homePage.waitForPageLoad();
  }

  // Step 5: Go to cart page
  await homePage.clickShoppingCart();
  await page.waitForLoadState('networkidle');

  // Update quantity to specified value for all products
  await cartPage.updateQuantityForAllProducts(testData.cart.updateQuantity);

  // Wait for cart to fully refresh after quantity update
  await page.waitForTimeout(1000);
  await page.waitForLoadState('networkidle');

  // Step 6: Verify cart and price calculations
  await expect(page.locator('table.cart')).toBeVisible({ timeout: 10000 });

  const cartRows = page.locator('table.cart tbody tr').filter({ hasNot: page.locator('th') });
  const rowCount = await cartRows.count();
  expect(rowCount).toBeGreaterThan(0);

  // Price calculation assertions
  await cartPage.verifyPriceCalculations();
});
