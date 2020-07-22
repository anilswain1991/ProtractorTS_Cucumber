// An example configuration file
import { Config, browser } from 'protractor';

var HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  framework: 'jasmine',

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.

  specs: ['specs/testspec.js'],

  //specs: ['demospec.js'],


  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 150000

  },

  onPrepare: function () {

    browser.ignoreSynchronization = true;

    //Add a screenshot reporter and store screenshots to Reports/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'Reports/screenshots'
    }).getJasmine2Reporter());
  }


};
