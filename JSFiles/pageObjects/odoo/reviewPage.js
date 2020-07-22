"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewPage = void 0;
const protractor_1 = require("protractor");
class reviewPage {
    constructor() {
        this.paymentproceed = protractor_1.element(protractor_1.by.linkText('Proceed to payment'));
        this.orderReview = protractor_1.element(protractor_1.by.xpath("//h3[@class='font-weight-bold']"));
    }
}
exports.reviewPage = reviewPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VPYmplY3RzL29kb28vcmV2aWV3UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxVQUFVO0lBTXJCO1FBRUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBRUY7QUFaRCxnQ0FZQyJ9