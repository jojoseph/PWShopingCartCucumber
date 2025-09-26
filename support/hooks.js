const { Before, After, BeforeStep, AfterStep } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// Ensure screenshot directory exists
const screenshotDir = path.join(__dirname, '..', 'reports', 'screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

Before(async function () {
    await this.launchBrowser();
    await this.newPage();
});
Before({tags: '@validation'}, async function () {   //"@foo" "@foo and @bar" "@foo or @bar"
  await this.page.goto('http://example.com'); // Replace with your app's URL
});

After(async function () {
  await this.closeBrowser();
});

BeforeStep(async function () {
  // You can add any setup needed before each step here
  });

AfterStep(async function ({ result }) {
  if (result.status === 'FAILED') {
    const screenshotPath = path.join(screenshotDir, `failure-screenshot-${Date.now()}.png`);
    const screenshot = await this.page.screenshot({ path: screenshotPath });
    this.attach(screenshot, 'image/png');
  }
});
