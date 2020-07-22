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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlBY2NvdW50UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VPYmplY3RzL29kb28vbXlBY2NvdW50UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxhQUFhO0lBWXhCO1FBRUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBRzNELENBQUM7Q0FJRjtBQTNCRCxzQ0EyQkMifQ==