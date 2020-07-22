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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tPcmRlclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlT2JqZWN0cy9vZG9vL3F1aWNrT3JkZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLGNBQWM7SUFRekI7UUFFSSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUd2RSxDQUFDO0NBRUY7QUFqQkQsd0NBaUJDIn0=