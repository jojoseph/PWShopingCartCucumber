const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  this.browserContext = await chromium.launch({ headless: false });
});

After(async function () {
  if (this.browserContext) {
    await this.browserContext.close();
    this.browserContext = null; // Ensure no further access
  }
});