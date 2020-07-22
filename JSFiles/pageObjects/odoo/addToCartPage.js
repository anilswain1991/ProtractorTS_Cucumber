"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = void 0;
const protractor_1 = require("protractor");
class addToCart {
    constructor() {
        this.shopBtn = protractor_1.element(protractor_1.by.xpath("//a[contains(@class,'nav-link')]//span[contains(text(),'Shop')]"));
        this.homeBtn = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Home')]"));
        this.shopTxt = protractor_1.element(protractor_1.by.xpath("//h3[contains(text(),'Shop')]"));
        this.myProfile = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'My Profile')]"));
        this.wishIcon = protractor_1.element(protractor_1.by.css("span[class='fa fa-heart']"));
        this.wishListBtn = protractor_1.element(protractor_1.by.xpath("//li[@id='my_wish']//a[1]"));
        this.myWishTxt = protractor_1.element(protractor_1.by.xpath("//h3[contains(text(),'My Wishlist')]"));
        this.wishRmv = protractor_1.element(protractor_1.by.xpath("//small[contains(text(),'Remove')]"));
        this.cartEmpty = protractor_1.element(protractor_1.by.xpath("//div[@class='js_cart_lines alert alert-info']"));
        this.userCtlg = protractor_1.element(protractor_1.by.xpath("//button[@id='user_catalogs']"));
        this.fullCtlg = protractor_1.element(protractor_1.by.css("a[data-name='QA Full Catalog']"));
        this.yes = protractor_1.element(protractor_1.by.xpath("//button[@class='swal-button swal-button--confirm btn-danger']"));
        this.searchBtn = protractor_1.element(protractor_1.by.xpath("//div[@class='shop-conatiner-header']//div//input[@placeholder='Search...']"));
        this.shopCart = protractor_1.element(protractor_1.by.xpath("//a[@class='btn btn-secondary btn-sm a-submit']"));
        this.chkbox = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Lenovo')]"));
        this.lenvProd = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Lenovo - earphones with mic')]"));
        this.prodDet = protractor_1.element(protractor_1.by.css("a[itemprop='name']"));
        this.addCart = protractor_1.element(protractor_1.by.css("a[id='add_to_cart']"));
        this.myCartTxt = protractor_1.element(protractor_1.by.xpath("//h3[contains(text(),'Cart')]"));
        this.removeBtn = protractor_1.element(protractor_1.by.css("a[title='Remove from cart']"));
        this.proCheckOut = protractor_1.element(protractor_1.by.xpath("//a[@class='btn btn-secondary float-right d-none d-xl-inline-block']"));
    }
}
exports.addToCart = addToCart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVG9DYXJ0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VPYmplY3RzL29kb28vYWRkVG9DYXJ0UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxTQUFTO0lBeUJsQjtRQUVHLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUMsQ0FBQztRQUNsSCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0VBQXNFLENBQUMsQ0FBQyxDQUFDO0lBR2hILENBQUM7Q0FJSjtBQXRERCw4QkFzREMifQ==