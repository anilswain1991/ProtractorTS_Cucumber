import { browser } from "protractor";
//import { element, by } from "protractor";
import { odooLogin } from "../pageObjects/odoo/odooLogin";
import { addToCart } from "../pageObjects/odoo/addToCartPage";
import { protractor } from "protractor/built/ptor";
import { addressPage } from "../pageObjects/odoo/addressPage";
import { orderDetailsPage } from "../pageObjects/odoo/orderDetailsPage";
import { reviewPage } from "../pageObjects/odoo/reviewPage";
import { paymentPage } from "../pageObjects/odoo/paymentPage";
import { logoutPage } from "../pageObjects/odoo/logoutPage";
import { quickOrderPage } from "../pageObjects/odoo/quickOrderPage";
import { myAccountPage } from "../pageObjects/odoo/myAccountPage";


let prop = require("../testdata/prop");


beforeAll(() => {
    describe('Browser Launch', async () => {

        browser.ignoreSynchronization = true;

        await browser.get(prop.odooURL);
        await browser.sleep(2000);
        await browser.manage().window().maximize();
    });

});

beforeEach(() => {
    describe('Valid Credentials for Login', async () => {

        let od = new odooLogin();

        browser.ignoreSynchronization = true;

        await browser.sleep(2000);
        await od.setUserId.sendKeys(prop.odoo_username);
        await od.nextBtn.click();
        await browser.sleep(3000);
        await od.setPaswd.sendKeys(prop.odoo_password);
        await od.loginBtn.click();

    });

});




describe('Automation Demo of E2E Order', () => {


    it('Login to Odoo e-Commerce Portal', async () => {

        let od = new odooLogin();

        await browser.sleep(3000);
        var abc = await od.logo.getText()
        await expect(abc).toBe("Anil EU Swain");
        await browser.sleep(3000);


    });



    it('Add to Cart', async () => {

        let atc = new addToCart();

        browser.ignoreSynchronization = true;

        await browser.sleep(3000);
        await atc.shopBtn.click();
        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,200);');
        await atc.userCtlg.click();
        await browser.sleep(2000);
        var ctl = await atc.fullCtlg;
        await browser.actions().mouseMove(ctl).click().perform();
        await browser.sleep(3000);
        await browser.executeScript('window.scrollTo(0,200);');
        await browser.sleep(2000);
        await atc.searchBtn.sendKeys(prop.homepod);
        var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        await enter.perform();
        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,2000);');
        await browser.sleep(2000);
        await atc.prodDet.click();
        await browser.sleep(2000);
        await atc.addCart.click();
        await browser.sleep(2000);
        var mc = await atc.myCartTxt.getText().then(function () {
            console.log(mc);
            expect(mc).toBe("Cart");

        });
        await browser.sleep(2000);
        await atc.proCheckOut.click();
        await browser.sleep(2000);



    });




    it('Billing n Shipping address', async () => {

        let ba = new addressPage();

        browser.ignoreSynchronization = true;

        await browser.sleep(2000);
        await ba.plOrder.click()
        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,2000);');
        await ba.confirm.click();
        await browser.executeScript('window.scrollTo(0,0);');
        await browser.sleep(2000);

    });




    it('Order Details & Review', async () => {

        let odp = new orderDetailsPage();

        browser.ignoreSynchronization = true;

        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,500);');
        await odp.proceed.click();
        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,0);');
        await browser.sleep(2000);

    });




    it('Payment Page', async () => {

        let rp = new reviewPage();

        browser.ignoreSynchronization = true;

        await browser.executeScript('window.scrollTo(0,1000);');
        await browser.sleep(2000);
        await rp.paymentproceed.click();
        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,0);');
        await browser.sleep(2000);

    });




    xit('Payment & Order Confirmation Page', async () => {

        let pp = new paymentPage();

        browser.ignoreSynchronization = true;

        await browser.executeScript('window.scrollTo(0,2000);');
        await pp.disc.click();
        await browser.sleep(2000);
        await browser.actions().sendKeys(protractor.Key.END).perform();
        await browser.sleep(3000);
        var chkbx = await pp.checkbox;
        await browser.actions().mouseMove(chkbx).click().perform();
        await browser.sleep(3000);
        var sbn = await pp.submitBtn;
        await browser.actions().mouseMove(sbn).click().perform();
        var until = protractor.ExpectedConditions;
        await browser.wait(until.presenceOf(pp.orderConfirm), 60000, 'Element taking too long to appear in the DOM');
        var odc = await pp.orderConfirm.getText();
        await expect(odc).toBe("Wire Transfer");

    });



    it('LogOut from Odoo', async () => {

        let lo = new logoutPage();

        browser.ignoreSynchronization = true;

        await browser.sleep(3000);
        await lo.acntDrpdn.click();
        await browser.sleep(2000);
        await lo.logOut.click();
        await browser.sleep(3000);
        var sg = await lo.logoutConf.getText();
        await expect(sg).toBe("Get Started");


    });


});






describe('Quick Orders', () => {


    it('Home Page', async () => {

        let od = new odooLogin();

        browser.ignoreSynchronization = true;

        await browser.sleep(2000);
        var abc = await od.logo.getText()
        await expect(abc).toBe("Anil EU Swain");


    });


    it('Quick Order Page', async () => {

        let qop = new quickOrderPage();

        let atc = new addToCart();

        browser.ignoreSynchronization = true;

        await browser.sleep(2000);
        await qop.qckorderBtn.click();
        await browser.sleep(2000);
        await atc.userCtlg.click();
        await browser.sleep(2000);
        var cat = await atc.fullCtlg;
        await browser.actions().mouseMove(cat).click().perform();
        await browser.sleep(2000);
        await qop.searchBox.sendKeys(prop.smartwatch);
        var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        await enter.perform();
        await browser.sleep(2000);
        await qop.prodDes.click();
        await browser.sleep(2000);

    });



    it('Cart & Quote Page', async () => {


        let atc = new addToCart();

        browser.ignoreSynchronization = true;

        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,200);');
        await browser.sleep(2000);
        await atc.addCart.click();
        await browser.sleep(2000);
        var mc = await atc.myCartTxt.getText();
        console.log(mc);
        await expect(mc).toBe("Cart");
        await browser.sleep(2000);
        await atc.proCheckOut.click();
        await browser.sleep(2000);

    });


    it('Address Page', async () => {

        let ba = new addressPage();

        browser.ignoreSynchronization = true;

        await browser.sleep(2000);
        await ba.plOrder.click()
        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,2000);');
        await ba.confirm.click();
        await browser.executeScript('window.scrollTo(0,0);');
        await browser.sleep(2000);

    });


    it('Order Details & Review', async () => {

        let odp = new orderDetailsPage();

        browser.ignoreSynchronization = true;

        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,500);');
        await odp.proceed.click();
        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,0);');
        await browser.sleep(2000);

    });


    it('Payment Page', async () => {

        let rp = new reviewPage();

        browser.ignoreSynchronization = true;

        await browser.executeScript('window.scrollTo(0,1000);');
        await browser.sleep(2000);
        await rp.paymentproceed.click();
        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,0);');
        await browser.sleep(2000);

    });

    it('Payment & Order Confirmation Page', async () => {

        let pp = new paymentPage();

        browser.ignoreSynchronization = true;

        await browser.executeScript('window.scrollTo(0,2000);');
        await pp.disc.click();
        await browser.sleep(2000);
        await browser.actions().sendKeys(protractor.Key.END).perform();
        await browser.sleep(3000);
        var chkbx = await pp.checkbox;
        await browser.actions().mouseMove(chkbx).click().perform();
        await browser.sleep(3000);
        var sbn = await pp.submitBtn;
        await browser.actions().mouseMove(sbn).click().perform();
        var until = protractor.ExpectedConditions;
        await browser.wait(until.presenceOf(pp.orderConfirm), 90000, 'Element taking too long to appear in the DOM');
        var odc = await pp.orderConfirm.getText();
        await expect(odc).toBe("Wire Transfer");

    });


    it('LogOut from Odoo', async () => {

        let lo = new logoutPage();

        browser.ignoreSynchronization = true;

        await browser.sleep(3000);
        await lo.acntDrpdn.click();
        await browser.sleep(2000);
        await lo.logOut.click();
        await browser.sleep(3000);
        var sg = await lo.logoutConf.getText();
        await expect(sg).toBe("Get Started");

    });


});




describe('Profile Update', () => {


    it('Update Details', async () => {


        browser.ignoreSynchronization = true;

        let map = new myAccountPage();

        await browser.sleep(2000);
        await map.myAccountdrpdn.click();
        await browser.sleep(2000);
        await map.myAccount.click();
        await browser.sleep(2000);
        await map.editIcon.click();
        await browser.sleep(2000);
        await map.editName.clear();
        await map.editName.sendKeys(prop.updateName);
        await browser.sleep(2000);
        await map.editEmail.clear();
        await map.editEmail.sendKeys(prop.updateEmail);
        await browser.sleep(2000);
        await map.editAddress.clear();
        await map.editAddress.sendKeys(prop.updateAddress);
        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,1000);');
        await browser.sleep(2000);
        await map.saveBtn.click();

    });


    it('Revert Changes', async () => {


        browser.ignoreSynchronization = true;

        let map = new myAccountPage();

        await browser.sleep(2000);
        await map.editIcon.click();
        await browser.sleep(2000);
        await map.editName.clear();
        await map.editName.sendKeys(prop.originalName);
        await browser.sleep(2000);
        await map.editEmail.clear();
        await map.editEmail.sendKeys(prop.originalEmail);
        await browser.sleep(2000);
        await map.editAddress.clear();
        await map.editAddress.sendKeys(prop.originalAddress);
        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,1000);');
        await browser.sleep(2000);
        await map.saveBtn.click();
        await browser.sleep(2000);

    });


    it('LogOut from Odoo', async () => {

        let lo = new logoutPage();

        browser.ignoreSynchronization = true;

        await browser.sleep(3000);
        await lo.acntDrpdn.click();
        await browser.sleep(2000);
        await lo.logOut.click();
        await browser.sleep(3000);
        var sg = await lo.logoutConf.getText();
        await expect(sg).toBe("Get Started");

    });





});
