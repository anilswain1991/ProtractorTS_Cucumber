import { ElementFinder, element, by } from "protractor";

export class logoutPage
{
    acntDrpdn: ElementFinder;
    logOut: ElementFinder;
    logoutConf: ElementFinder;


    constructor()
    {
        this.acntDrpdn = element(by.css("a[class = 'nav-link dropdown-toggle']"));
        this.logOut = element(by.xpath("//a[@id='o_logout']"));
        this.logoutConf = element(by.xpath("//h4[@class='text-data mb-4']"));
    }

}