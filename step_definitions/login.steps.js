const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

Given('I am on the login page', async function () {
 // this.browser = await this.browserContext.launch();
  this.page = await this.browserContext.newPage();
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('I enter {string} as username', async function (username) {
  await this.loginPage.usernameInput.waitFor({ state: 'visible' });
  await this.loginPage.usernameInput.fill(username);
});

When('I enter {string} as password', async function (password) {
  await this.loginPage.passwordInput.waitFor({ state: 'visible' });
  await this.loginPage.passwordInput.fill(password);
});

When('I click the login button', async function () {
  await this.loginPage.loginButton.waitFor({ state: 'visible' });
  await this.loginPage.loginButton.click();
});

Then('I should be logged in successfully', async function () {
  await this.page.getByRole('menuitem', { name: 'Dashboard' }).click();
  //await expect(this.page.locator('h1')).toContainText('Dashboard');
  //expect(this.page.url()).toContain('#/dashboard');
});