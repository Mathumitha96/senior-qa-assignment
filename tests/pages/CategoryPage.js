// Category Page Object
const { BasePage } = require('./BasePage');

class CategoryPage extends BasePage {
  async addFirstProductToCart() {
    const addToCartBtn = this.page.locator('input[value="Add to cart"]').first();
    if (await addToCartBtn.isVisible()) {
      await addToCartBtn.click();
      await this.page.waitForSelector('div.bar-notification', { state: 'visible', timeout: 5000 });
    }
  }

  async clickProductByImageTitle(imageTitle) {
    await this.page.locator(`//div[@class='product-item']//img[@title='${imageTitle}']`).click();
    await this.page.waitForLoadState('networkidle');
  }

  async addProductByButtonId(buttonId) {
    const addButton = this.page.locator(`#${buttonId}:visible`).first();
    if (await addButton.isVisible()) {
      await addButton.click();
      await this.page.waitForSelector('div.bar-notification', { state: 'visible', timeout: 5000 });
    }
  }
}

module.exports = { CategoryPage };

