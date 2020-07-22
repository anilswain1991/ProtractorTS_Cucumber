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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Rvb0xvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcGFnZU9iamVjdHMvb2Rvby9vZG9vTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXlEO0FBR3pELE1BQWEsU0FBUztJQVdsQjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUlKO0FBdEJELDhCQXNCQyJ9