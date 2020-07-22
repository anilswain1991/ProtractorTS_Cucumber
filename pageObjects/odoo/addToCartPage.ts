import { ElementFinder, element, by } from "protractor";

export class addToCart 
{
  shopBtn: ElementFinder;
  homeBtn: ElementFinder;
  shopTxt: ElementFinder;
  myProfile: ElementFinder; 
  wishIcon: ElementFinder;
  wishListBtn: ElementFinder;
  myWishTxt: ElementFinder;
  wishRmv: ElementFinder;
  cartEmpty: ElementFinder;
  userCtlg: ElementFinder;
  fullCtlg: ElementFinder;
  yes: ElementFinder;
  searchBtn: ElementFinder;
  chkbox: ElementFinder;
  lenvProd: ElementFinder;
  prodDet: ElementFinder;
  shopCart: ElementFinder;
  addCart: ElementFinder;
  myCartTxt: ElementFinder;
  removeBtn: ElementFinder;
  proCheckOut: ElementFinder;


    constructor() 
    {
       this.shopBtn = element(by.xpath("//a[contains(@class,'nav-link')]//span[contains(text(),'Shop')]"));
       this.homeBtn = element(by.xpath("//span[contains(text(),'Home')]"));
       this.shopTxt = element(by.xpath("//h3[contains(text(),'Shop')]"));
       this.myProfile = element(by.xpath("//span[contains(text(),'My Profile')]"));
       this.wishIcon = element(by.css("span[class='fa fa-heart']"));
       this.wishListBtn = element(by.xpath("//li[@id='my_wish']//a[1]"));
       this.myWishTxt = element(by.xpath("//h3[contains(text(),'My Wishlist')]"));
       this.wishRmv = element(by.xpath("//small[contains(text(),'Remove')]"));
       this.cartEmpty = element(by.xpath("//div[@class='js_cart_lines alert alert-info']"));
       this.userCtlg = element(by.xpath("//button[@id='user_catalogs']"));
       this.fullCtlg = element(by.css("a[data-name='QA Full Catalog']"));
       this.yes = element(by.xpath("//button[@class='swal-button swal-button--confirm btn-danger']"));
       this.searchBtn = element(by.xpath("//div[@class='shop-conatiner-header']//div//input[@placeholder='Search...']"));
       this.shopCart = element(by.xpath("//a[@class='btn btn-secondary btn-sm a-submit']"));
       this.chkbox = element(by.xpath("//span[contains(text(),'Lenovo')]"));
       this.lenvProd = element(by.xpath("//a[contains(text(),'Lenovo - earphones with mic')]"));
       this.prodDet = element(by.css("a[itemprop='name']"));
       this.addCart = element(by.css("a[id='add_to_cart']"));
       this.myCartTxt = element(by.xpath("//h3[contains(text(),'Cart')]"));
       this.removeBtn = element(by.css("a[title='Remove from cart']"));
       this.proCheckOut = element(by.xpath("//a[@class='btn btn-secondary float-right d-none d-xl-inline-block']"));


    }



}