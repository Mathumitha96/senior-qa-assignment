// Cart Page Object
const { BasePage } = require('./BasePage');
const { expect } = require('@playwright/test');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.productQuantity = 'input.qty-input';
    this.updateCartButton = 'input.button-2.update-cart-button';
  }

  async updateQuantityForAllProducts(quantity) {
    const qtyInputs = this.page.locator(this.productQuantity);
    const qtyCount = await qtyInputs.count();
    
    for (let i = 0; i < qtyCount; i++) {
      await qtyInputs.nth(i).fill(quantity.toString());
    }
    
    if (qtyCount > 0) {
      await this.page.click(this.updateCartButton);
      await this.page.waitForLoadState('networkidle');
    }
  }

  parsePrice(priceText) {
    return parseFloat(priceText.replace(/[^0-9.,]/g, '').replace(',', '')) || 0;
  }

  async getProductDetails() {
    await this.page.waitForSelector('table.cart', { state: 'visible', timeout: 10000 });
    await this.page.waitForLoadState('networkidle');
    
    // Use same selector pattern as test file - filter out header rows
    const cartRows = this.page.locator('table.cart tbody tr').filter({ 
      hasNot: this.page.locator('th')
    });
    
    const rowCount = await cartRows.count();
    if (rowCount === 0) {
      throw new Error('No product rows found in cart');
    }
    
    await cartRows.first().waitFor({ state: 'visible', timeout: 10000 });
    
    const products = [];
    for (let i = 0; i < rowCount; i++) {
      const row = cartRows.nth(i);
      
      try {
        // Try multiple selector strategies for each field
        let productName = null;
        let unitPriceText = null;
        let qtyValue = null;
        let subtotalText = null;
        
        // Product name - try different selectors
        const nameSelectors = ['td.product a', 'td a', 'td:has(a)'];
        for (const selector of nameSelectors) {
          const locator = row.locator(selector).first();
          if (await locator.count() > 0) {
            productName = await locator.textContent();
            break;
          }
        }
        
        // Unit price - try different selectors
        const priceSelectors = ['td.product-unit-price', 'td[class*="price"]', 'td:nth-child(3)'];
        for (const selector of priceSelectors) {
          const locator = row.locator(selector).first();
          if (await locator.count() > 0) {
            unitPriceText = await locator.textContent();
            if (unitPriceText && unitPriceText.trim()) break;
          }
        }
        
        // Quantity
        const qtyLocator = row.locator(this.productQuantity).first();
        if (await qtyLocator.count() > 0) {
          qtyValue = await qtyLocator.getAttribute('value');
        }
        
        // Subtotal - try different selectors
        const subtotalSelectors = ['td.product-subtotal', 'td[class*="subtotal"]', 'td:nth-child(5)'];
        for (const selector of subtotalSelectors) {
          const locator = row.locator(selector).first();
          if (await locator.count() > 0) {
            subtotalText = await locator.textContent();
            if (subtotalText && subtotalText.trim()) break;
          }
        }
        
        // Only add if we have all required fields
        if (productName && unitPriceText && qtyValue && subtotalText) {
          products.push({
            name: productName.trim() || 'Unknown',
            unitPrice: this.parsePrice(unitPriceText),
            quantity: parseInt(qtyValue || '1', 10),
            subtotal: this.parsePrice(subtotalText)
          });
        }
      } catch (error) {
        continue;
      }
    }
    
    if (products.length === 0) {
      throw new Error('No product details could be extracted from cart');
    }
    
    return products;
  }

  async getCartTotal() {
    const cartTotalElement = this.page.locator('td.cart-total-right').first();
    await cartTotalElement.waitFor({ state: 'visible', timeout: 10000 });
    return this.parsePrice(await cartTotalElement.textContent());
  }

  async verifyPriceCalculations() {
    const products = await this.getProductDetails();
    let expectedTotal = 0;
    
    for (const product of products) {
      const expectedSubtotal = product.unitPrice * product.quantity;
      expect(product.subtotal).toBeCloseTo(expectedSubtotal, 2);
      expectedTotal += expectedSubtotal;
    }
    
    const actualCartTotal = await this.getCartTotal();
    expect(actualCartTotal).toBeCloseTo(expectedTotal, 2);
  }
}

module.exports = { CartPage };
