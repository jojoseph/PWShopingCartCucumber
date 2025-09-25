module.exports = {
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium', headless: false  },
    },
  ],
  timeout: 30000,
  repotert:  [ ['html', { outputFolder: 'test-results', open: 'never' }] ],
};