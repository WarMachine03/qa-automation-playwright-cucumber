import { Page, expect } from "@playwright/test";

export class ProductsPage {
  constructor(private page: Page) {}

  async addFirstProductToCart() {
    await this.page.locator(".inventory_item button").first().click();
  }

  async validateCartCount(count: number) {
    await expect(this.page.locator(".shopping_cart_badge")).toHaveText(String(count));
  }

  async logout() {
    await this.page.click("#react-burger-menu-btn");
    await this.page.click("#logout_sidebar_link");
  }
}
