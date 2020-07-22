import { ElementFinder, element, by } from "protractor";

export class orderDetailsPage
{
    proceed: ElementFinder;

    constructor()
    {
        this.proceed = element(by.linkText('Proceed to review'));
    }

}