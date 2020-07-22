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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VPYmplY3RzL29kb28vbG9nb3V0UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxVQUFVO0lBT25CO1FBRUksSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUVKO0FBZEQsZ0NBY0MifQ==