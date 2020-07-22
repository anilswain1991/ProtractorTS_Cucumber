"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.odooLogin = void 0;
const protractor_1 = require("protractor");
class odooLogin {
    constructor() {
        this.setUserId = protractor_1.element(protractor_1.by.css("input[name='login']"));
        this.nextBtn = protractor_1.element(protractor_1.by.css("button[class='btn btn-primary float-left']"));
        this.setPaswd = protractor_1.element(protractor_1.by.css("input[type='password']"));
        this.loginBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary float-left']"));
        this.logo = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Anil EU Swain')]"));
    }
}
exports.odooLogin = odooLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Rvb0xvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvb2Rvb0xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5RDtBQUd6RCxNQUFhLFNBQVM7SUFXbEI7UUFFSSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Q0FJSjtBQXRCRCw4QkFzQkMifQ==