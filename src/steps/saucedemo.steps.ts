import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

const USER = "standard_user";
const PASS = "secret_sauce";

Given("I open the login page", async function (this: CustomWorld) {
  const login = new LoginPage(this.page);
  await login.goto();
});

When("I login with valid credentials", async function (this: CustomWorld) {
  const login = new LoginPage(this.page);
  await login.login(USER, PASS);
  await login.validateLogin();
});

Then("I should see the products page", async function () {});

When("I add a product to the cart", async function (this: CustomWorld) {
  const products = new ProductsPage(this.page);
  await products.addFirstProductToCart();
});

Then("the cart should contain {int} item", async function (this: CustomWorld, count: number) {
  const products = new ProductsPage(this.page);
  await products.validateCartCount(count);
});

Then("I logout", async function (this: CustomWorld) {
  const products = new ProductsPage(this.page);
  await products.logout();
});
