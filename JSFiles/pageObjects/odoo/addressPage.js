"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressPage = void 0;
const protractor_1 = require("protractor");
class addressPage {
    constructor() {
        this.plOrder = protractor_1.element(protractor_1.by.css("a[class='btn btn-primary w-100 wk_send_approval wk_place_order ']"));
        this.confirm = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Confirm')]"));
        this.billingAddress = protractor_1.element(protractor_1.by.css("[class='o_page_header mt8']"));
    }
}
exports.addressPage = addressPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlT2JqZWN0cy9vZG9vL2FkZHJlc3NQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLFdBQVc7SUFNcEI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0NBRUo7QUFaRCxrQ0FZQyJ9