"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = void 0;
const protractor_1 = require("protractor");
class addToCart {
    constructor() {
        this.shopBtn = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Shop')]"));
        this.userCtlg = protractor_1.element(protractor_1.by.xpath("//button[@id='user_catalogs']"));
        this.fullCtlg = protractor_1.element(protractor_1.by.css("a[data-name='QA Full Catalog']"));
        this.searchBtn = protractor_1.element(protractor_1.by.xpath("//div[@class='shop-conatiner-header']//div//input[@placeholder='Search...']"));
        this.prodDet = protractor_1.element(protractor_1.by.css("a[itemprop='name']"));
        this.addCart = protractor_1.element(protractor_1.by.css("a[id='add_to_cart']"));
        this.myCartBtn = protractor_1.element(protractor_1.by.xpath("//h3[contains(text(),'Cart')]"));
        this.proCheckOut = protractor_1.element(protractor_1.by.xpath("//a[@class='btn btn-primary float-right d-none d-xl-inline-block']"));
    }
}
exports.addToCart = addToCart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVG9DYXJ0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2FkZFRvQ2FydFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsU0FBUztJQVlsQjtRQUVHLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUMsQ0FBQztRQUNsSCxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDLENBQUM7SUFHOUcsQ0FBQztDQUlKO0FBNUJELDhCQTRCQyJ9