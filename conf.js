exports.config = {
  allScriptsTimeout: 60000,
  defaultTimeoutInterval: 60000,
  getPageTimeout: 60000,

  framework: 'custom',
  directConnect: true,
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'features/*.feature'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--start-maximized', 'disable-infobars', 'no-sandbox', '--disable-gpu', 'enable-logging']
    }
  },
  getPageTimeout: 60000,
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty'
  },
  onPrepare: function () {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
  }
}

