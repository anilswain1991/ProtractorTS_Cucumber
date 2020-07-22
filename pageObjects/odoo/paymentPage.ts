import { ElementFinder, element, by } from "protractor";

export class paymentPage {
    payTxt: ElementFinder;
    disc: ElementFinder;
    checkbox: ElementFinder;
    submitBtn: ElementFinder;
    orderConfirm: ElementFinder;

    constructor() {
        this.payTxt = element(by.css("[class='mb24']"));
        this.disc = element(by.xpath("//div[@class='wk_disclaimer mt-3 col-md-12 pt-2']"));
        this.checkbox = element(by.css("input[id='wk_disclaimer_terms']"));
        this.submitBtn = element(by.css("button[id='o_payment_form_pay']"));
        this.orderConfirm = element(by.xpath("//td[contains(text(),'Wire Transfer')]"));
    }
}