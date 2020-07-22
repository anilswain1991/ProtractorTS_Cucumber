import { ElementFinder, element, by } from "protractor";

export class addressPage {
    plOrder: ElementFinder;
    confirm: ElementFinder;
    billingAddress: ElementFinder;


    constructor() {
        this.plOrder = element(by.css("a[class='btn btn-primary w-100 wk_send_approval wk_place_order ']"));
        this.confirm = element(by.xpath("//span[contains(text(),'Confirm')]"));
        this.billingAddress = element(by.css("[class='o_page_header mt8']"));
    }

}
