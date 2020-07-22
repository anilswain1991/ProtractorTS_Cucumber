import { ElementFinder, element, by } from "protractor";

export class myAccountPage
{
  myAccountdrpdn: ElementFinder;
  myAccount: ElementFinder;
  editIcon: ElementFinder;
  editName: ElementFinder;
  editEmail: ElementFinder;
  editAddress: ElementFinder;
  saveBtn: ElementFinder;
  


  constructor()
  {
     this.myAccountdrpdn = element(by.css("a[class='nav-link dropdown-toggle']"));
     this.myAccount = element(by.xpath("//a[contains(text(),'My Account')]"));
     this.editIcon = element(by.css("a[class='btn btn-link float-right p-0 js_edit_address no-decoration']"));
     this.editName = element(by.xpath("//input[@name='name']"));
     this.editEmail = element(by.xpath("//input[@name='email']"));
     this.editAddress = element(by.css("input[name='street']"));
     this.saveBtn = element(by.css("button[type='submit']"));
    

  }



}