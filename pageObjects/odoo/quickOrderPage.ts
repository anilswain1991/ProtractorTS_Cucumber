import { ElementFinder, element, by } from "protractor";

export class quickOrderPage
{
  qckorderBtn: ElementFinder;
  searchBox: ElementFinder;
  prodDes: ElementFinder;
  


  constructor()
  {
      this.qckorderBtn = element(by.css("a[id='lanfConfig']"));
      this.searchBox = element(by.xpath("//input[@placeholder='Search...']"));
      this.prodDes = element(by.partialLinkText("Apple Watch Series 3"));
     

  }

}