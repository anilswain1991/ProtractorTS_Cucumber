import { Given, When, Then } from "cucumber";
import { odooLogin } from "../pageObjects/odoo/odooLogin";
import { addToCart } from "../pageObjects/odoo/addToCartPage";
import { addressPage } from "../pageObjects/odoo/addressPage";
import { orderDetailsPage } from "../pageObjects/odoo/orderDetailsPage";
import { reviewPage } from "../pageObjects/odoo/reviewPage";
import { paymentPage } from "../pageObjects/odoo/paymentPage";
import { myAccountPage } from "../pageObjects/odoo/myAccountPage";
import { logoutPage } from "../pageObjects/odoo/logoutPage"
import { browser } from "protractor";
import chai from "chai";
import { protractor } from "protractor/built/ptor";

var expect = chai.expect;

var EC = protractor.ExpectedConditions;

let od = new odooLogin();

let atc = new addToCart();

let ba = new addressPage();

let odp = new orderDetailsPage();

let rp = new reviewPage();

let pp = new paymentPage();

let map = new myAccountPage();

let lo = new logoutPage();


//********Login to MarketPlace********


Given('user launches url {string}', async (string) => {
    await browser.get(string);
    await browser.sleep(2000);

});

When('user enters email as {string}', async (string) => {

    await od.setUserId.clear();
    await od.setUserId.sendKeys(string);
});

When('user clicks on Next', async () => {
    await od.nextBtn.click();
});

When('user enters password as {string}', async (string) => {
    await od.setPaswd.sendKeys(string);
    await browser.sleep(2000);

});

When('user clicks on Login', async () => {

    await od.loginBtn.click();
    browser.wait(EC.visibilityOf(od.logo), 25000);
});

Then('user lands on portal dashboard page and verifies account as {string}', async (string) => {
    var abc = await od.logo.getText().then(function (abc) {
        expect(abc).to.equal(string);
        console.log(abc);
        browser.sleep(2000);

    });

});



// *********Add to Cart Scenario**********

Given('user clicks on shop tab', async () => {

    await atc.shopBtn.click().then(function () {
        browser.wait(EC.elementToBeClickable(atc.searchBtn), 25000);

    });

});



When('user selects QA Full Catalog', async () => {

    await browser.executeScript('window.scrollTo(0,200);').then(function () {

        var c = atc.userCtlg.getText().then(function (c) {
            if (c == "QA Full Catalog") {
                console.log("QA Full Catalog is already selected");
            }
            else {
                atc.userCtlg.click();
                browser.sleep(3000);
                var ctl = atc.fullCtlg;
                browser.actions().mouseMove(ctl).click().perform();
                browser.sleep(3000);
                
                var m = atc.yes.getText().then(function (m) {
                    if(m == "Yes!"){
                        atc.yes.click();
                    }
                    else{
                       console.log("No Pop up alert to clear the cart");
                    }
                });
                
                browser.executeScript('window.scrollTo(0,200);');
                browser.sleep(2000);
            }
        });



    });


});


Then('user searches for {string} in search bar', async (string) => {

    await atc.searchBtn.sendKeys(string).then(function () {
        var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        enter.perform();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,600);');

    });

});


Then('user adds it to the cart', async () => {
    await browser.wait(EC.elementToBeClickable(atc.shopCart), 25000).then(function () {
        browser.sleep(2000);
        atc.shopCart.click();
        browser.wait(EC.visibilityOf(atc.myCartTxt), 15000);

    });

});


//*********Remove from Cart***************


Given('user is on {string} page', async (string) => {

    var c = await atc.myCartTxt.getText().then(function (c) {
        expect(c).to.equal(string);
        console.log(c);
    });
});




When('user clicks on Remove button to empty the cart', async () => {
    await atc.removeBtn.click().then(function () {
        browser.wait(EC.visibilityOf(atc.cartEmpty), 30000);
        browser.sleep(2000);
    });
});


Then('user clicks on home button to land on odoo Dashboard', async () => {
    await atc.homeBtn.click().then(function () {
        browser.wait(EC.visibilityOf(atc.myProfile), 30000);
    });

});



//************** Add to Wishlist ***************

Then('user adds it to the Wishlist', async () => {
    await browser.wait(EC.elementToBeClickable(atc.wishIcon), 20000).then(function () {
        atc.wishIcon.click();
        browser.sleep(3000);

    });

});



//************** Remove from Wishlist *************

Given('user lands on {string} page', async (string) => {

    await browser.wait(EC.elementToBeClickable(atc.wishListBtn), 20000).then(function () {
        atc.wishListBtn.click();
        browser.wait(EC.visibilityOf(atc.myWishTxt), 20000);
        var w = atc.myWishTxt.getText().then(function (w) {
            expect(w).to.equal(string);
            console.log(w);
        });

    });

});

When('user clicks on Remove button to remove the product', async () => {
    await browser.wait(EC.elementToBeClickable(atc.wishRmv), 10000).then(function () {
        atc.wishRmv.click();
        browser.sleep(2000);

    });
});



// *************** Sorting products by filters ******************

When('user puts the filters on  brands like Apple and Lenovo', async () => {
    await browser.sleep(5000);
    await browser.executeScript('window.scrollTo(0,1800);');
    await browser.wait(EC.elementToBeClickable(atc.chkbox), 30000).then(function () {
        atc.chkbox.click().then(function () {
            browser.sleep(5000);
            browser.executeScript('window.scrollTo(0,650);');
            browser.sleep(3000);
        });

    });

});

Then('user should be able to see all the products of Lenovo like {string}', async (string) => {
    await browser.wait(EC.elementToBeClickable(atc.lenvProd), 40000);
    var p = await atc.lenvProd.getText().then(function (p) {
        expect(p).to.equal(string);
        console.log(p);
    });

});




// ************** Profile Update **************************** //


Given('user clicks on account', async () => {
    await browser.wait(EC.elementToBeClickable(map.myAccountdrpdn), 20000).then(function () {
        map.myAccountdrpdn.click();
    });
});

When('user clicks on My account from dropdown', async () => {
    await browser.wait(EC.elementToBeClickable(map.myAccount), 20000).then(function () {
        map.myAccount.click();
    });
});

Then('user lands on my Profile page and clicks on edit details icon', async () => {
    await browser.wait(EC.elementToBeClickable(map.editIcon), 20000).then(function () {
        map.editIcon.click();
        browser.sleep(2000);
    });

});

Then('user updates name as {string} and email as {string} and address as {string}', async (string, string2, string3) => {
    await browser.wait(EC.visibilityOf(map.editName), 30000).then(function () {
        map.editName.clear();
        map.editName.sendKeys(string);
        browser.sleep(2000);
        map.editEmail.clear();
        map.editEmail.sendKeys(string2);
        browser.sleep(2000);
        map.editAddress.clear();
        map.editAddress.sendKeys(string3);
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);');
        browser.sleep(2000);

    });

});

Then('user saves the changes', async () => {
    await browser.wait(EC.elementToBeClickable(map.saveBtn), 20000).then(function () {
        map.saveBtn.click();
    });
});



// ************* Log Out ****************//

When('user clicks on Log out', async () => {
    await browser.wait(EC.elementToBeClickable(lo.logOut), 20000).then(function () {
        browser.sleep(2000);
        lo.logOut.click();
        browser.sleep(3000);

    });

});


Then('user is able to log out of the application', async () => {
    await browser.wait(EC.visibilityOf(lo.logoutConf), 20000).then(function () {
        var s = lo.logoutConf.getText().then(function (s) {
            expect(s).to.equal("Get Started");
            console.log(s);
        });
    });

});




// ***********  Cart checkout & Quote page *******************


Given('user is on the cart summary page with a product in the cart', async () => {
    console.log("User is present on cart page with a product in the Cart");
});

When('user clicks on process checkout', async () => {
    await browser.wait(EC.elementToBeClickable(atc.proCheckOut), 25000).then(function () {
        atc.proCheckOut.click();
    });
});

Then('user lands on quote page and user clicks on Place Order button to land on Address page', async () => {
    await browser.wait(EC.elementToBeClickable(ba.plOrder), 25000).then(function () {
        ba.plOrder.click();
    });
});




// ************* Address Checkout and Order details Page ************

Given('user is on address page and the desired addresses are already preselected', async () => {
    await browser.wait(EC.visibilityOf(ba.billingAddress), 25000).then(function () {
        browser.executeScript('window.scrollTo(0,2000);');
        console.log("User is on the Address Page");

    });
});

When('user clicks on confirm button', async () => {
    await browser.wait(EC.elementToBeClickable(ba.confirm), 25000).then(function () {
        ba.confirm.click();
    });

});

Then('user lands on order details page and clicks on proceed to review', async () => {
    await browser.wait(EC.elementToBeClickable(odp.proceed), 25000).then(function () {
        console.log("user is on the order details page");
        odp.proceed.click();
    });
});




// ************ Review and Payment Page ******************

Given('user user lands on review page', async () => {
    await browser.wait(EC.visibilityOf(rp.orderReview), 25000).then(function () {
        console.log("User is on the review page");
        browser.executeScript('window.scrollTo(0,1200);');

    });
});

When('user clicks on proceed to payment', async () => {
    await browser.wait(EC.elementToBeClickable(rp.paymentproceed), 25000).then(function () {
        rp.paymentproceed.click();

    });
});

Then('user lands on payment page', async () => {
    await browser.wait(EC.visibilityOf(pp.payTxt), 25000).then(function () {
        console.log("User is on the payment page");
    });
});




// **************** Order Confirmation details ****************

Given('user lands on Payment page', async () => {
    await browser.wait(EC.visibilityOf(pp.payTxt), 25000).then(function () {
        console.log("User is able to see payment Options on payment page.")
        browser.executeScript('window.scrollTo(0,2000);');
    });
});

When('user agrees to terms and conditions and clicks on Pay Now', async () => {
    await browser.wait(EC.visibilityOf(pp.disc), 25000).then(function () {
        pp.disc.click();
        browser.sleep(2000);
        browser.actions().sendKeys(protractor.Key.END).perform();
        browser.sleep(2000);
        var chkbx = pp.checkbox;
        browser.actions().mouseMove(chkbx).click().perform();
        browser.sleep(2000);
        var sbn = pp.submitBtn;
        browser.actions().mouseMove(sbn).click().perform();

    });
});

Then('order gets submitted and an order number is generated.', async () => {
    await browser.wait(EC.visibilityOf(pp.orderConfirm), 90000, 'Element taking too long to appear in the DOM').then(function () {
        var odc = pp.orderConfirm.getText().then(function (odc) {
            expect(odc).to.equal("Wire Transfer");
            browser.sleep(2000);
            console.log(odc);
        });
    });

});