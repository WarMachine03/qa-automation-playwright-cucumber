import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
  await this.page.goto("https://www.saucedemo.com/");
}


  async login(user: string, pass: string) {
    await this.page.fill("#user-name", user);
    await this.page.fill("#password", pass);
    await this.page.click("#login-button");
  }

  async validateLogin() {
    await expect(this.page.locator(".title")).toHaveText("Products");
  }
}
