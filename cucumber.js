module.exports = {
  default: {
    require: [
      'step_definitions/*.js',
      'support/*.js'
    ],
    format: [
      'progress',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json'
    ]
  }
};