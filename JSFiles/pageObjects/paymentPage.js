"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentPage = void 0;
const protractor_1 = require("protractor");
class paymentPage {
    constructor() {
        this.disc = protractor_1.element(protractor_1.by.xpath("//div[@class='wk_disclaimer mt-3 col-md-12 pt-2']"));
        this.checkbox = protractor_1.element(protractor_1.by.css("input[id='wk_disclaimer_terms']"));
        this.submitBtn = protractor_1.element(protractor_1.by.css("button[id='o_payment_form_pay']"));
        this.orderConfirm = protractor_1.element(protractor_1.by.xpath("//td[contains(text(),'Wire Transfer')]"));
    }
}
exports.paymentPage = paymentPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9wYXltZW50UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxXQUFXO0lBT3BCO1FBRUcsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Q0FDSjtBQWRELGtDQWNDIn0=