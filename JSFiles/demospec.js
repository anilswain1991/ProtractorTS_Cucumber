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
const demoPage_1 = require("./pageObjects/nextgen/demoPage");
describe('NextGen Demo', () => {
    it('Login to NextGen Portal', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.ignoreSynchronization = true;
        let dp = new demoPage_1.demoPage();
        yield protractor_1.browser.get("https://personaportal.compucom.com/b2b/login");
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.manage().window().maximize();
        yield dp.setEmailID.sendKeys("anil.swain@compucom.com");
        yield protractor_1.browser.sleep(2000);
        yield dp.nxtTab.click();
        yield protractor_1.browser.sleep(2000);
        yield dp.setPassword.sendKeys("Compucom@123");
        yield protractor_1.browser.sleep(2000);
        yield dp.signInBtn.click();
        yield protractor_1.browser.sleep(10000);
        yield dp.acntIcon.click();
        yield protractor_1.browser.sleep(2000);
        yield dp.signOut.click();
        yield protractor_1.browser.sleep(2000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kZW1vc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyw2REFBMEQ7QUFFMUQsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFHMUIsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEdBQVMsRUFBRTtRQUVyQyxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUVyQyxJQUFJLEVBQUUsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUV4QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDbEUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUMsQ0FBQyJ9