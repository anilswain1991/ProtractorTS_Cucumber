import { browser } from "protractor";
import { demoPage } from "./pageObjects/nextgen/demoPage";

describe('NextGen Demo', () => {


    it('Login to NextGen Portal', async () => {

        browser.ignoreSynchronization = true;

        let dp = new demoPage();

        await browser.get("https://personaportal.compucom.com/b2b/login");
        await browser.sleep(3000);
        await browser.manage().window().maximize();
        await dp.setEmailID.sendKeys("anil.swain@compucom.com");
        await browser.sleep(2000);
        await dp.nxtTab.click();
        await browser.sleep(2000);
        await dp.setPassword.sendKeys("Compucom@123");
        await browser.sleep(2000);
        await dp.signInBtn.click();
        await browser.sleep(10000);
        await dp.acntIcon.click();
        await browser.sleep(2000);
        await dp.signOut.click();
        await browser.sleep(2000);

    });


});
