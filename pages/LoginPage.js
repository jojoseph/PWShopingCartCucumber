const { chromium } = require('playwright');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[name="username"]');
    this.passwordInput = page.locator('[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Sign in' });
  }

  async navigate() {
    await this.page.goto('https://marmelab.com/react-admin-demo/');
  }
}

module.exports = LoginPage;