"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressPage = void 0;
const protractor_1 = require("protractor");
class addressPage {
    constructor() {
        this.plOrder = protractor_1.element(protractor_1.by.css("a[class='btn btn-primary w-100 wk_send_approval wk_place_order ']"));
        this.confirm = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Confirm')]"));
    }
}
exports.addressPage = addressPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9hZGRyZXNzUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxXQUFXO0lBTXhCO1FBRU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUVBQW1FLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBRUo7QUFaRCxrQ0FZQyJ9