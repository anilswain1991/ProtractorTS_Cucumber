// An example configuration file
import { Config, browser } from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export let config: Config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    //chromeOptions: {
    // args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    //}
  },

  //just maximizing window before testing
  onPrepare: function () {
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(50000);
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.

  // specs: ['../features/*.feature'],

  specs: [
    '../features/odoo_smoke.feature',
    '../features/odoo_sanity.feature'
  ],

  cucumberOpts: {

    tags: "@smoke",
    format: 'json:./cucumber_report.json',

    // require step definitions
    require: [
      './stepDefinitions/*.js' // accepts a glob
    ]
  },

  onComplete: () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: './cucumber_report.json',
      output: './cucumber_report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      name: 'oDoo Automation',
      brandTitle: 'Odoo Tests Report',

      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "TEST",
        "Browser": "Chrome  83.0.4103.106",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };

    reporter.generate(options);


  }





};
