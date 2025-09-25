const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  constructor() {
    this.browserContext = null;
    this.page = null;
    this.attach = null; // For Cucumber attachments
  }

  async launchBrowser() {
    this.browserContext = await chromium.launch({ headless: false });
  }

  async closeBrowser() {
    if (this.browserContext) {
      await this.browserContext.close();
      this.browserContext = null;
    }
  }

  async newPage() {
    if (!this.browserContext) {
      await this.launchBrowser();
    }
    this.page = await this.browserContext.newPage();
    return this.page;
  }
}

setWorldConstructor(CustomWorld);
