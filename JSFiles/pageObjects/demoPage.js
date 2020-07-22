"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoPage = void 0;
const protractor_1 = require("protractor");
class demoPage {
    constructor() {
        this.setEmailID = protractor_1.element(protractor_1.by.css("input[id='mail']"));
        this.nxtTab = protractor_1.element(protractor_1.by.xpath("//button[@class='mat-button mat-button-base']"));
        this.setPassword = protractor_1.element(protractor_1.by.css("input[type='password']"));
        this.signInBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='mat-button mat-button-base']"));
        this.acntIcon = protractor_1.element(protractor_1.by.xpath("//i[@class='material-icons has-drop-down-cls']"));
        this.signOut = protractor_1.element(protractor_1.by.xpath("//li[contains(text(),'Signout')]"));
    }
}
exports.demoPage = demoPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9kZW1vUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBeUQ7QUFFekQsTUFBYSxRQUFRO0lBU25CO1FBRUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7SUFFdkUsQ0FBQztDQUVGO0FBcEJELDRCQW9CQyJ9