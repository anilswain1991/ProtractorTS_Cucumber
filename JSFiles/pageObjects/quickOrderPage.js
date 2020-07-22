"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickOrderPage = void 0;
const protractor_1 = require("protractor");
class quickOrderPage {
    constructor() {
        this.qckorderBtn = protractor_1.element(protractor_1.by.css("a[id='lanfConfig']"));
        this.searchBox = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Search...']"));
        this.prodDes = protractor_1.element(protractor_1.by.partialLinkText("Apple Watch Series 3"));
    }
}
exports.quickOrderPage = quickOrderPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tPcmRlclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9xdWlja09yZGVyUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxjQUFjO0lBUXpCO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFHdkUsQ0FBQztDQUVGO0FBakJELHdDQWlCQyJ9