// Home Page Object
const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  async searchProduct(productName) {
    await this.page.fill('input#small-searchterms', productName);
    await this.page.click('input.button-1.search-box-button');
    await this.page.waitForLoadState('networkidle');
  }

  async clickShoppingCart() {
    await this.page.click('a.ico-cart');
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToCategory(categoryName) {
    await this.page.click(`a:has-text("${categoryName}")`);
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToSubcategory(subcategoryTitle) {
    await this.page.getByTitle(subcategoryTitle).first().click();
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = { HomePage };

