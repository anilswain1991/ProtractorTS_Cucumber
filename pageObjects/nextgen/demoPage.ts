import { ElementFinder, element, by  } from "protractor";

export class demoPage
{
   setEmailID: ElementFinder;
   nxtTab: ElementFinder;
   setPassword: ElementFinder;
   signInBtn: ElementFinder;
   acntIcon: ElementFinder;
   signOut: ElementFinder;

  constructor()
  {
    this.setEmailID = element(by.css("input[id='mail']"));
    this.nxtTab = element(by.xpath("//button[@class='mat-button mat-button-base']"));
    this.setPassword = element(by.css("input[type='password']"));
    this.signInBtn = element(by.xpath("//button[@class='mat-button mat-button-base']"));
    this.acntIcon = element(by.xpath("//i[@class='material-icons has-drop-down-cls']"));
    this.signOut = element(by.xpath("//li[contains(text(),'Signout')]"));
    
  }

}