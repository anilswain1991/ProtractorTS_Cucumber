"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// An example configuration file
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
    },
    //just maximizing window before testing
    onPrepare: function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(50000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQWdDO0FBQ2hDLDJDQUE2QztBQUM3QyxpRUFBbUQ7QUFFeEMsUUFBQSxNQUFNLEdBQVc7SUFDMUIsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCx1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FJdEI7SUFFRCx1Q0FBdUM7SUFDdkMsU0FBUyxFQUFFO1FBQ1Qsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFFbEMsb0NBQW9DO0lBRXBDLEtBQUssRUFBRTtRQUNMLGdDQUFnQztRQUNoQyxpQ0FBaUM7S0FDbEM7SUFFRCxZQUFZLEVBQUU7UUFFWixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw2QkFBNkI7UUFFckMsMkJBQTJCO1FBQzNCLE9BQU8sRUFBRTtZQUNQLHdCQUF3QixDQUFDLGlCQUFpQjtTQUMzQztLQUNGO0lBRUQsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLFVBQVUsRUFBRSxtQkFBbUI7WUFFL0IsUUFBUSxFQUFFO2dCQUNSLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixrQkFBa0IsRUFBRSxNQUFNO2dCQUMxQixTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3JCO1NBQ0YsQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFHN0IsQ0FBQztDQU1GLENBQUMifQ==