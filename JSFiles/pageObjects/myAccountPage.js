"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myAccountPage = void 0;
const protractor_1 = require("protractor");
class myAccountPage {
    constructor() {
        this.myAccountdrpdn = protractor_1.element(protractor_1.by.css("a[class='nav-link dropdown-toggle']"));
        this.myAccount = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'My Account')]"));
        this.editIcon = protractor_1.element(protractor_1.by.css("a[class='btn btn-link float-right p-0 js_edit_address no-decoration']"));
        this.editName = protractor_1.element(protractor_1.by.xpath("//input[@name='name']"));
        this.editEmail = protractor_1.element(protractor_1.by.xpath("//input[@name='email']"));
        this.editAddress = protractor_1.element(protractor_1.by.css("input[name='street']"));
        this.saveBtn = protractor_1.element(protractor_1.by.css("button[type='submit']"));
    }
}
exports.myAccountPage = myAccountPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlBY2NvdW50UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL215QWNjb3VudFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsYUFBYTtJQVl4QjtRQUVHLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUVBQXVFLENBQUMsQ0FBQyxDQUFDO1FBQ3pHLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUczRCxDQUFDO0NBSUY7QUEzQkQsc0NBMkJDIn0=