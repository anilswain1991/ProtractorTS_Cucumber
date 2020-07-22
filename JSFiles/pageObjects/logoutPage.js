"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutPage = void 0;
const protractor_1 = require("protractor");
class logoutPage {
    constructor() {
        this.acntDrpdn = protractor_1.element(protractor_1.by.css("a[class = 'nav-link dropdown-toggle']"));
        this.logOut = protractor_1.element(protractor_1.by.xpath("//a[@id='o_logout']"));
        this.logoutConf = protractor_1.element(protractor_1.by.xpath("//h4[@class='text-data mb-4']"));
    }
}
exports.logoutPage = logoutPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2xvZ291dFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsVUFBVTtJQU9uQjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FFSjtBQWRELGdDQWNDIn0=