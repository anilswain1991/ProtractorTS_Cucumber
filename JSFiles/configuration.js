"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// An example configuration file
const protractor_1 = require("protractor");
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
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
        showColors: true,
        defaultTimeoutInterval: 150000
    },
    onPrepare: function () {
        protractor_1.browser.ignoreSynchronization = true;
        //Add a screenshot reporter and store screenshots to Reports/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Reports/screenshots'
        }).getJasmine2Reporter());
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0NBQWdDO0FBQ2hDLDJDQUE2QztBQUU3QyxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUVqRCxRQUFBLE1BQU0sR0FBVztJQUMxQiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRSxJQUFJO0lBRW5CLHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELFNBQVMsRUFBRSxTQUFTO0lBRXBCLHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBRWxDLEtBQUssRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBRTVCLHlCQUF5QjtJQUd6Qix3Q0FBd0M7SUFDeEMsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7UUFDaEIsc0JBQXNCLEVBQUUsTUFBTTtLQUUvQjtJQUVELFNBQVMsRUFBRTtRQUVULG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBRXJDLDBFQUEwRTtRQUMxRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksWUFBWSxDQUFDO1lBQzVDLGFBQWEsRUFBRSxxQkFBcUI7U0FDckMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBR0YsQ0FBQyJ9