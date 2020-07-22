"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    // This hook will be executed before all scenarios
});
cucumber_1.Before({ tags: "@foo" }, function () {
    // This hook will be executed before scenarios tagged with @foo
});
cucumber_1.Before({ tags: "@foo and @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
});
cucumber_1.Before({ tags: "@foo or @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo or @bar
});
// You can use the following shorthand when only specifying tags
cucumber_1.Before("@foo", function () {
    // This hook will be executed before scenarios tagged with @foo
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBK0M7QUFDL0MsMkNBQXFDO0FBRXJDLGlCQUFNLENBQUM7SUFDTCxrREFBa0Q7QUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxFQUFFO0lBQ3JCLCtEQUErRDtBQUNqRSxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDLEVBQUU7SUFDOUIsd0VBQXdFO0FBQzFFLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsRUFBRTtJQUM3Qix1RUFBdUU7QUFDekUsQ0FBQyxDQUFDLENBQUM7QUFFSCxnRUFBZ0U7QUFDaEUsaUJBQU0sQ0FBQyxNQUFNLEVBQUU7SUFDYiwrREFBK0Q7QUFDakUsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLFVBQWdCLFFBQVE7O1FBQzVCLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUksaUJBQU0sQ0FBQyxNQUFNLEVBQzFDO1lBQ0UsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRWhELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO0lBRUgsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9