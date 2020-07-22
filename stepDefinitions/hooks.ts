import {After,Before, Status } from "cucumber";
import { browser } from "protractor";

Before(function () {
  // This hook will be executed before all scenarios
});

Before({tags: "@foo"}, function () {
  // This hook will be executed before scenarios tagged with @foo
});

Before({tags: "@foo and @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
});

Before({tags: "@foo or @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo or @bar
});

// You can use the following shorthand when only specifying tags
Before("@foo", function () {
  // This hook will be executed before scenarios tagged with @foo
});

After(async function (scenario) {
  if(scenario.result.status=== Status.FAILED)
  {
    const screenshot = await browser.takeScreenshot();
    
      this.attach(screenshot,"image/png");
  }    
  
});