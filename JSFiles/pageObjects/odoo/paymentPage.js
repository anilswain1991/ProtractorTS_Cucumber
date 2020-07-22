"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentPage = void 0;
const protractor_1 = require("protractor");
class paymentPage {
    constructor() {
        this.payTxt = protractor_1.element(protractor_1.by.css("[class='mb24']"));
        this.disc = protractor_1.element(protractor_1.by.xpath("//div[@class='wk_disclaimer mt-3 col-md-12 pt-2']"));
        this.checkbox = protractor_1.element(protractor_1.by.css("input[id='wk_disclaimer_terms']"));
        this.submitBtn = protractor_1.element(protractor_1.by.css("button[id='o_payment_form_pay']"));
        this.orderConfirm = protractor_1.element(protractor_1.by.xpath("//td[contains(text(),'Wire Transfer')]"));
    }
}
exports.paymentPage = paymentPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlT2JqZWN0cy9vZG9vL3BheW1lbnRQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLFdBQVc7SUFPcEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Q0FDSjtBQWRELGtDQWNDIn0=