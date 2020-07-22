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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
//import { element, by } from "protractor";
const odooLogin_1 = require("../pageObjects/odoo/odooLogin");
const addToCartPage_1 = require("../pageObjects/odoo/addToCartPage");
const ptor_1 = require("protractor/built/ptor");
const addressPage_1 = require("../pageObjects/odoo/addressPage");
const orderDetailsPage_1 = require("../pageObjects/odoo/orderDetailsPage");
const reviewPage_1 = require("../pageObjects/odoo/reviewPage");
const paymentPage_1 = require("../pageObjects/odoo/paymentPage");
const logoutPage_1 = require("../pageObjects/odoo/logoutPage");
const quickOrderPage_1 = require("../pageObjects/odoo/quickOrderPage");
const myAccountPage_1 = require("../pageObjects/odoo/myAccountPage");
let prop = require("../testdata/prop");
beforeAll(() => {
    describe('Browser Launch', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.get(prop.odooURL);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.manage().window().maximize();
    }));
});
beforeEach(() => {
    describe('Valid Credentials for Login', () => __awaiter(void 0, void 0, void 0, function* () {
        let od = new odooLogin_1.odooLogin();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(2000);
        yield od.setUserId.sendKeys(prop.odoo_username);
        yield od.nextBtn.click();
        yield protractor_1.browser.sleep(3000);
        yield od.setPaswd.sendKeys(prop.odoo_password);
        yield od.loginBtn.click();
    }));
});
describe('Automation Demo of E2E Order', () => {
    it('Login to Odoo e-Commerce Portal', () => __awaiter(void 0, void 0, void 0, function* () {
        let od = new odooLogin_1.odooLogin();
        yield protractor_1.browser.sleep(3000);
        var abc = yield od.logo.getText();
        yield expect(abc).toBe("Anil EU Swain");
        yield protractor_1.browser.sleep(3000);
    }));
    it('Add to Cart', () => __awaiter(void 0, void 0, void 0, function* () {
        let atc = new addToCartPage_1.addToCart();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(3000);
        yield atc.shopBtn.click();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,200);');
        yield atc.userCtlg.click();
        yield protractor_1.browser.sleep(2000);
        var ctl = yield atc.fullCtlg;
        yield protractor_1.browser.actions().mouseMove(ctl).click().perform();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,200);');
        yield protractor_1.browser.sleep(2000);
        yield atc.searchBtn.sendKeys(prop.homepod);
        var enter = protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ENTER);
        yield enter.perform();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,2000);');
        yield protractor_1.browser.sleep(2000);
        yield atc.prodDet.click();
        yield protractor_1.browser.sleep(2000);
        yield atc.addCart.click();
        yield protractor_1.browser.sleep(2000);
        var mc = yield atc.myCartTxt.getText().then(function () {
            console.log(mc);
            expect(mc).toBe("Cart");
        });
        yield protractor_1.browser.sleep(2000);
        yield atc.proCheckOut.click();
        yield protractor_1.browser.sleep(2000);
    }));
    it('Billing n Shipping address', () => __awaiter(void 0, void 0, void 0, function* () {
        let ba = new addressPage_1.addressPage();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(2000);
        yield ba.plOrder.click();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,2000);');
        yield ba.confirm.click();
        yield protractor_1.browser.executeScript('window.scrollTo(0,0);');
        yield protractor_1.browser.sleep(2000);
    }));
    it('Order Details & Review', () => __awaiter(void 0, void 0, void 0, function* () {
        let odp = new orderDetailsPage_1.orderDetailsPage();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,500);');
        yield odp.proceed.click();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,0);');
        yield protractor_1.browser.sleep(2000);
    }));
    it('Payment Page', () => __awaiter(void 0, void 0, void 0, function* () {
        let rp = new reviewPage_1.reviewPage();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.executeScript('window.scrollTo(0,1000);');
        yield protractor_1.browser.sleep(2000);
        yield rp.paymentproceed.click();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,0);');
        yield protractor_1.browser.sleep(2000);
    }));
    xit('Payment & Order Confirmation Page', () => __awaiter(void 0, void 0, void 0, function* () {
        let pp = new paymentPage_1.paymentPage();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.executeScript('window.scrollTo(0,2000);');
        yield pp.disc.click();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.END).perform();
        yield protractor_1.browser.sleep(3000);
        var chkbx = yield pp.checkbox;
        yield protractor_1.browser.actions().mouseMove(chkbx).click().perform();
        yield protractor_1.browser.sleep(3000);
        var sbn = yield pp.submitBtn;
        yield protractor_1.browser.actions().mouseMove(sbn).click().perform();
        var until = ptor_1.protractor.ExpectedConditions;
        yield protractor_1.browser.wait(until.presenceOf(pp.orderConfirm), 60000, 'Element taking too long to appear in the DOM');
        var odc = yield pp.orderConfirm.getText();
        yield expect(odc).toBe("Wire Transfer");
    }));
    it('LogOut from Odoo', () => __awaiter(void 0, void 0, void 0, function* () {
        let lo = new logoutPage_1.logoutPage();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(3000);
        yield lo.acntDrpdn.click();
        yield protractor_1.browser.sleep(2000);
        yield lo.logOut.click();
        yield protractor_1.browser.sleep(3000);
        var sg = yield lo.logoutConf.getText();
        yield expect(sg).toBe("Get Started");
    }));
});
describe('Quick Orders', () => {
    it('Home Page', () => __awaiter(void 0, void 0, void 0, function* () {
        let od = new odooLogin_1.odooLogin();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(2000);
        var abc = yield od.logo.getText();
        yield expect(abc).toBe("Anil EU Swain");
    }));
    it('Quick Order Page', () => __awaiter(void 0, void 0, void 0, function* () {
        let qop = new quickOrderPage_1.quickOrderPage();
        let atc = new addToCartPage_1.addToCart();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(2000);
        yield qop.qckorderBtn.click();
        yield protractor_1.browser.sleep(2000);
        yield atc.userCtlg.click();
        yield protractor_1.browser.sleep(2000);
        var cat = yield atc.fullCtlg;
        yield protractor_1.browser.actions().mouseMove(cat).click().perform();
        yield protractor_1.browser.sleep(2000);
        yield qop.searchBox.sendKeys(prop.smartwatch);
        var enter = protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ENTER);
        yield enter.perform();
        yield protractor_1.browser.sleep(2000);
        yield qop.prodDes.click();
        yield protractor_1.browser.sleep(2000);
    }));
    it('Cart & Quote Page', () => __awaiter(void 0, void 0, void 0, function* () {
        let atc = new addToCartPage_1.addToCart();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,200);');
        yield protractor_1.browser.sleep(2000);
        yield atc.addCart.click();
        yield protractor_1.browser.sleep(2000);
        var mc = yield atc.myCartTxt.getText();
        console.log(mc);
        yield expect(mc).toBe("Cart");
        yield protractor_1.browser.sleep(2000);
        yield atc.proCheckOut.click();
        yield protractor_1.browser.sleep(2000);
    }));
    it('Address Page', () => __awaiter(void 0, void 0, void 0, function* () {
        let ba = new addressPage_1.addressPage();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(2000);
        yield ba.plOrder.click();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,2000);');
        yield ba.confirm.click();
        yield protractor_1.browser.executeScript('window.scrollTo(0,0);');
        yield protractor_1.browser.sleep(2000);
    }));
    it('Order Details & Review', () => __awaiter(void 0, void 0, void 0, function* () {
        let odp = new orderDetailsPage_1.orderDetailsPage();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,500);');
        yield odp.proceed.click();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,0);');
        yield protractor_1.browser.sleep(2000);
    }));
    it('Payment Page', () => __awaiter(void 0, void 0, void 0, function* () {
        let rp = new reviewPage_1.reviewPage();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.executeScript('window.scrollTo(0,1000);');
        yield protractor_1.browser.sleep(2000);
        yield rp.paymentproceed.click();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,0);');
        yield protractor_1.browser.sleep(2000);
    }));
    it('Payment & Order Confirmation Page', () => __awaiter(void 0, void 0, void 0, function* () {
        let pp = new paymentPage_1.paymentPage();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.executeScript('window.scrollTo(0,2000);');
        yield pp.disc.click();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.END).perform();
        yield protractor_1.browser.sleep(3000);
        var chkbx = yield pp.checkbox;
        yield protractor_1.browser.actions().mouseMove(chkbx).click().perform();
        yield protractor_1.browser.sleep(3000);
        var sbn = yield pp.submitBtn;
        yield protractor_1.browser.actions().mouseMove(sbn).click().perform();
        var until = ptor_1.protractor.ExpectedConditions;
        yield protractor_1.browser.wait(until.presenceOf(pp.orderConfirm), 90000, 'Element taking too long to appear in the DOM');
        var odc = yield pp.orderConfirm.getText();
        yield expect(odc).toBe("Wire Transfer");
    }));
    it('LogOut from Odoo', () => __awaiter(void 0, void 0, void 0, function* () {
        let lo = new logoutPage_1.logoutPage();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(3000);
        yield lo.acntDrpdn.click();
        yield protractor_1.browser.sleep(2000);
        yield lo.logOut.click();
        yield protractor_1.browser.sleep(3000);
        var sg = yield lo.logoutConf.getText();
        yield expect(sg).toBe("Get Started");
    }));
});
describe('Profile Update', () => {
    it('Update Details', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.ignoreSynchronization = true;
        let map = new myAccountPage_1.myAccountPage();
        yield protractor_1.browser.sleep(2000);
        yield map.myAccountdrpdn.click();
        yield protractor_1.browser.sleep(2000);
        yield map.myAccount.click();
        yield protractor_1.browser.sleep(2000);
        yield map.editIcon.click();
        yield protractor_1.browser.sleep(2000);
        yield map.editName.clear();
        yield map.editName.sendKeys(prop.updateName);
        yield protractor_1.browser.sleep(2000);
        yield map.editEmail.clear();
        yield map.editEmail.sendKeys(prop.updateEmail);
        yield protractor_1.browser.sleep(2000);
        yield map.editAddress.clear();
        yield map.editAddress.sendKeys(prop.updateAddress);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,1000);');
        yield protractor_1.browser.sleep(2000);
        yield map.saveBtn.click();
    }));
    it('Revert Changes', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.ignoreSynchronization = true;
        let map = new myAccountPage_1.myAccountPage();
        yield protractor_1.browser.sleep(2000);
        yield map.editIcon.click();
        yield protractor_1.browser.sleep(2000);
        yield map.editName.clear();
        yield map.editName.sendKeys(prop.originalName);
        yield protractor_1.browser.sleep(2000);
        yield map.editEmail.clear();
        yield map.editEmail.sendKeys(prop.originalEmail);
        yield protractor_1.browser.sleep(2000);
        yield map.editAddress.clear();
        yield map.editAddress.sendKeys(prop.originalAddress);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,1000);');
        yield protractor_1.browser.sleep(2000);
        yield map.saveBtn.click();
        yield protractor_1.browser.sleep(2000);
    }));
    it('LogOut from Odoo', () => __awaiter(void 0, void 0, void 0, function* () {
        let lo = new logoutPage_1.logoutPage();
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.sleep(3000);
        yield lo.acntDrpdn.click();
        yield protractor_1.browser.sleep(2000);
        yield lo.logOut.click();
        yield protractor_1.browser.sleep(3000);
        var sg = yield lo.logoutConf.getText();
        yield expect(sg).toBe("Get Started");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MsNkRBQTBEO0FBQzFELHFFQUE4RDtBQUM5RCxnREFBbUQ7QUFDbkQsaUVBQThEO0FBQzlELDJFQUF3RTtBQUN4RSwrREFBNEQ7QUFDNUQsaUVBQThEO0FBQzlELCtEQUE0RDtBQUM1RCx1RUFBb0U7QUFDcEUscUVBQWtFO0FBR2xFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBR3ZDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7SUFDWCxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBUyxFQUFFO1FBRWxDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBRXJDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDWixRQUFRLENBQUMsNkJBQTZCLEVBQUUsR0FBUyxFQUFFO1FBRS9DLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRXpCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBRXJDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7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