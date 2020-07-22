"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const odooLogin_1 = require("../pageObjects/odoo/odooLogin");
const addToCartPage_1 = require("../pageObjects/odoo/addToCartPage");
const addressPage_1 = require("../pageObjects/odoo/addressPage");
const orderDetailsPage_1 = require("../pageObjects/odoo/orderDetailsPage");
const reviewPage_1 = require("../pageObjects/odoo/reviewPage");
const paymentPage_1 = require("../pageObjects/odoo/paymentPage");
const myAccountPage_1 = require("../pageObjects/odoo/myAccountPage");
const logoutPage_1 = require("../pageObjects/odoo/logoutPage");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const ptor_1 = require("protractor/built/ptor");
var expect = chai_1.default.expect;
var EC = ptor_1.protractor.ExpectedConditions;
let od = new odooLogin_1.odooLogin();
let atc = new addToCartPage_1.addToCart();
let ba = new addressPage_1.addressPage();
let odp = new orderDetailsPage_1.orderDetailsPage();
let rp = new reviewPage_1.reviewPage();
let pp = new paymentPage_1.paymentPage();
let map = new myAccountPage_1.myAccountPage();
let lo = new logoutPage_1.logoutPage();
//********Login to MarketPlace********
cucumber_1.Given('user launches url {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(string);
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('user enters email as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield od.setUserId.clear();
    yield od.setUserId.sendKeys(string);
}));
cucumber_1.When('user clicks on Next', () => __awaiter(void 0, void 0, void 0, function* () {
    yield od.nextBtn.click();
}));
cucumber_1.When('user enters password as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield od.setPaswd.sendKeys(string);
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('user clicks on Login', () => __awaiter(void 0, void 0, void 0, function* () {
    yield od.loginBtn.click();
    protractor_1.browser.wait(EC.visibilityOf(od.logo), 25000);
}));
cucumber_1.Then('user lands on portal dashboard page and verifies account as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    var abc = yield od.logo.getText().then(function (abc) {
        expect(abc).to.equal(string);
        console.log(abc);
        protractor_1.browser.sleep(2000);
    });
}));
// *********Add to Cart Scenario**********
cucumber_1.Given('user clicks on shop tab', () => __awaiter(void 0, void 0, void 0, function* () {
    yield atc.shopBtn.click().then(function () {
        protractor_1.browser.wait(EC.elementToBeClickable(atc.searchBtn), 25000);
    });
}));
cucumber_1.When('user selects QA Full Catalog', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.executeScript('window.scrollTo(0,200);').then(function () {
        var c = atc.userCtlg.getText().then(function (c) {
            if (c == "QA Full Catalog") {
                console.log("QA Full Catalog is already selected");
            }
            else {
                atc.userCtlg.click();
                protractor_1.browser.sleep(3000);
                var ctl = atc.fullCtlg;
                protractor_1.browser.actions().mouseMove(ctl).click().perform();
                protractor_1.browser.sleep(3000);
                var m = atc.yes.getText().then(function (m) {
                    if (m == "Yes!") {
                        atc.yes.click();
                    }
                    else {
                        console.log("No Pop up alert to clear the cart");
                    }
                });
                protractor_1.browser.executeScript('window.scrollTo(0,200);');
                protractor_1.browser.sleep(2000);
            }
        });
    });
}));
cucumber_1.Then('user searches for {string} in search bar', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield atc.searchBtn.sendKeys(string).then(function () {
        var enter = protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ENTER);
        enter.perform();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.executeScript('window.scrollTo(0,600);');
    });
}));
cucumber_1.Then('user adds it to the cart', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(atc.shopCart), 25000).then(function () {
        protractor_1.browser.sleep(2000);
        atc.shopCart.click();
        protractor_1.browser.wait(EC.visibilityOf(atc.myCartTxt), 15000);
    });
}));
//*********Remove from Cart***************
cucumber_1.Given('user is on {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    var c = yield atc.myCartTxt.getText().then(function (c) {
        expect(c).to.equal(string);
        console.log(c);
    });
}));
cucumber_1.When('user clicks on Remove button to empty the cart', () => __awaiter(void 0, void 0, void 0, function* () {
    yield atc.removeBtn.click().then(function () {
        protractor_1.browser.wait(EC.visibilityOf(atc.cartEmpty), 30000);
        protractor_1.browser.sleep(2000);
    });
}));
cucumber_1.Then('user clicks on home button to land on odoo Dashboard', () => __awaiter(void 0, void 0, void 0, function* () {
    yield atc.homeBtn.click().then(function () {
        protractor_1.browser.wait(EC.visibilityOf(atc.myProfile), 30000);
    });
}));
//************** Add to Wishlist ***************
cucumber_1.Then('user adds it to the Wishlist', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(atc.wishIcon), 20000).then(function () {
        atc.wishIcon.click();
        protractor_1.browser.sleep(3000);
    });
}));
//************** Remove from Wishlist *************
cucumber_1.Given('user lands on {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(atc.wishListBtn), 20000).then(function () {
        atc.wishListBtn.click();
        protractor_1.browser.wait(EC.visibilityOf(atc.myWishTxt), 20000);
        var w = atc.myWishTxt.getText().then(function (w) {
            expect(w).to.equal(string);
            console.log(w);
        });
    });
}));
cucumber_1.When('user clicks on Remove button to remove the product', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(atc.wishRmv), 10000).then(function () {
        atc.wishRmv.click();
        protractor_1.browser.sleep(2000);
    });
}));
// *************** Sorting products by filters ******************
cucumber_1.When('user puts the filters on  brands like Apple and Lenovo', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield protractor_1.browser.executeScript('window.scrollTo(0,1800);');
    yield protractor_1.browser.wait(EC.elementToBeClickable(atc.chkbox), 30000).then(function () {
        atc.chkbox.click().then(function () {
            protractor_1.browser.sleep(5000);
            protractor_1.browser.executeScript('window.scrollTo(0,650);');
            protractor_1.browser.sleep(3000);
        });
    });
}));
cucumber_1.Then('user should be able to see all the products of Lenovo like {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(atc.lenvProd), 40000);
    var p = yield atc.lenvProd.getText().then(function (p) {
        expect(p).to.equal(string);
        console.log(p);
    });
}));
// ************** Profile Update **************************** //
cucumber_1.Given('user clicks on account', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(map.myAccountdrpdn), 20000).then(function () {
        map.myAccountdrpdn.click();
    });
}));
cucumber_1.When('user clicks on My account from dropdown', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(map.myAccount), 20000).then(function () {
        map.myAccount.click();
    });
}));
cucumber_1.Then('user lands on my Profile page and clicks on edit details icon', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(map.editIcon), 20000).then(function () {
        map.editIcon.click();
        protractor_1.browser.sleep(2000);
    });
}));
cucumber_1.Then('user updates name as {string} and email as {string} and address as {string}', (string, string2, string3) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(map.editName), 30000).then(function () {
        map.editName.clear();
        map.editName.sendKeys(string);
        protractor_1.browser.sleep(2000);
        map.editEmail.clear();
        map.editEmail.sendKeys(string2);
        protractor_1.browser.sleep(2000);
        map.editAddress.clear();
        map.editAddress.sendKeys(string3);
        protractor_1.browser.sleep(2000);
        protractor_1.browser.executeScript('window.scrollTo(0,1000);');
        protractor_1.browser.sleep(2000);
    });
}));
cucumber_1.Then('user saves the changes', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(map.saveBtn), 20000).then(function () {
        map.saveBtn.click();
    });
}));
// ************* Log Out ****************//
cucumber_1.When('user clicks on Log out', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(lo.logOut), 20000).then(function () {
        protractor_1.browser.sleep(2000);
        lo.logOut.click();
        protractor_1.browser.sleep(3000);
    });
}));
cucumber_1.Then('user is able to log out of the application', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(lo.logoutConf), 20000).then(function () {
        var s = lo.logoutConf.getText().then(function (s) {
            expect(s).to.equal("Get Started");
            console.log(s);
        });
    });
}));
// ***********  Cart checkout & Quote page *******************
cucumber_1.Given('user is on the cart summary page with a product in the cart', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("User is present on cart page with a product in the Cart");
}));
cucumber_1.When('user clicks on process checkout', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(atc.proCheckOut), 25000).then(function () {
        atc.proCheckOut.click();
    });
}));
cucumber_1.Then('user lands on quote page and user clicks on Place Order button to land on Address page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(ba.plOrder), 25000).then(function () {
        ba.plOrder.click();
    });
}));
// ************* Address Checkout and Order details Page ************
cucumber_1.Given('user is on address page and the desired addresses are already preselected', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(ba.billingAddress), 25000).then(function () {
        protractor_1.browser.executeScript('window.scrollTo(0,2000);');
        console.log("User is on the Address Page");
    });
}));
cucumber_1.When('user clicks on confirm button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(ba.confirm), 25000).then(function () {
        ba.confirm.click();
    });
}));
cucumber_1.Then('user lands on order details page and clicks on proceed to review', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(odp.proceed), 25000).then(function () {
        console.log("user is on the order details page");
        odp.proceed.click();
    });
}));
// ************ Review and Payment Page ******************
cucumber_1.Given('user user lands on review page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(rp.orderReview), 25000).then(function () {
        console.log("User is on the review page");
        protractor_1.browser.executeScript('window.scrollTo(0,1200);');
    });
}));
cucumber_1.When('user clicks on proceed to payment', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(rp.paymentproceed), 25000).then(function () {
        rp.paymentproceed.click();
    });
}));
cucumber_1.Then('user lands on payment page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(pp.payTxt), 25000).then(function () {
        console.log("User is on the payment page");
    });
}));
// **************** Order Confirmation details ****************
cucumber_1.Given('user lands on Payment page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(pp.payTxt), 25000).then(function () {
        console.log("User is able to see payment Options on payment page.");
        protractor_1.browser.executeScript('window.scrollTo(0,2000);');
    });
}));
cucumber_1.When('user agrees to terms and conditions and clicks on Pay Now', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(pp.disc), 25000).then(function () {
        pp.disc.click();
        protractor_1.browser.sleep(2000);
        protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.END).perform();
        protractor_1.browser.sleep(2000);
        var chkbx = pp.checkbox;
        protractor_1.browser.actions().mouseMove(chkbx).click().perform();
        protractor_1.browser.sleep(2000);
        var sbn = pp.submitBtn;
        protractor_1.browser.actions().mouseMove(sbn).click().perform();
    });
}));
cucumber_1.Then('order gets submitted and an order number is generated.', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(pp.orderConfirm), 90000, 'Element taking too long to appear in the DOM').then(function () {
        var odc = pp.orderConfirm.getText().then(function (odc) {
            expect(odc).to.equal("Wire Transfer");
            protractor_1.browser.sleep(2000);
            console.log(odc);
        });
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsNkRBQTBEO0FBQzFELHFFQUE4RDtBQUM5RCxpRUFBOEQ7QUFDOUQsMkVBQXdFO0FBQ3hFLCtEQUE0RDtBQUM1RCxpRUFBOEQ7QUFDOUQscUVBQWtFO0FBQ2xFLCtEQUEyRDtBQUMzRCwyQ0FBcUM7QUFDckMsZ0RBQXdCO0FBQ3hCLGdEQUFtRDtBQUVuRCxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLElBQUksRUFBRSxHQUFHLGlCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFdkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFFekIsSUFBSSxHQUFHLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7QUFFMUIsSUFBSSxFQUFFLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRWpDLElBQUksRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRTFCLElBQUksRUFBRSxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRTNCLElBQUksR0FBRyxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBRTlCLElBQUksRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRzFCLHNDQUFzQztBQUd0QyxnQkFBSyxDQUFDLDRCQUE0QixFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDakQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENB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