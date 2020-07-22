import { ElementFinder, element, by } from "protractor";

export class reviewPage
{
    paymentproceed: ElementFinder;
    orderReview: ElementFinder;


  constructor()
  {
    this.paymentproceed = element(by.linkText('Proceed to payment'));
    this.orderReview = element(by.xpath("//h3[@class='font-weight-bold']"));
  }

}