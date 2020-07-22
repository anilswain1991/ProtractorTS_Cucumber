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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlT2JqZWN0cy9uZXh0Z2VuL2RlbW9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5RDtBQUV6RCxNQUFhLFFBQVE7SUFTbkI7UUFFRSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztJQUV2RSxDQUFDO0NBRUY7QUFwQkQsNEJBb0JDIn0=