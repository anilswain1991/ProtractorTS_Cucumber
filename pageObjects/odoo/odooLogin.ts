import { ElementFinder, element, by  } from "protractor";


export class odooLogin
{
    setUserId: ElementFinder;
    nextBtn: ElementFinder;
    setPaswd: ElementFinder;
    loginBtn: ElementFinder;
    logo: ElementFinder;

    
    

    constructor()
    {
        this.setUserId = element(by.css("input[name='login']"));
        this.nextBtn = element(by.css("button[class='btn btn-primary float-left']"));
        this.setPaswd = element(by.css("input[type='password']"));
        this.loginBtn = element(by.xpath("//button[@class='btn btn-primary float-left']"));
        this.logo = element(by.xpath("//span[contains(text(),'Anil EU Swain')]"));
    }

    

}