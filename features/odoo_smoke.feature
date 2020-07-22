Feature: Marketplace (Shopping and Profile update)

    # ************** Login to Marketplace (Odoo) **********************

    @smoke
    Scenario: Verify login to odoo ecommerce portal

        Given user launches url "https://customer1.test-marketplace.compucom.com/b2b/login"
        When user enters email as "anil.k.swain1991@gmail.com"
        And user clicks on Next
        And user enters password as "user"
        And user clicks on Login
        Then user lands on portal dashboard page and verifies account as "Anil EU Swain"


    # *********** Add to Cart  & Elastic search **********

    @smoke 
    Scenario: User adds a product to cart

        Given user clicks on shop tab
        When user selects QA Full Catalog
        Then user searches for "Apple HomePod - smart speaker" in search bar
        Then user adds it to the cart



    #*******************Remove from Cart****************


    @smoke 
    Scenario: User removes the product from the cart

        Given user is on "Cart" page
        When user clicks on Remove button to empty the cart
        Then user clicks on home button to land on odoo Dashboard



    #***************** Add to Wishlist ***************

    @smoke
    Scenario: User adds a product to wishlist

        Given user clicks on shop tab
        When user selects QA Full Catalog
        Then user searches for "Apple iPad Air 2(Wi-Fi + Cellular) Gold" in search bar
        Then user adds it to the Wishlist



    # ************* Remove from Wishlist ************

    @smoke
    Scenario: User removes a product from wishlist

        Given user lands on "My Wishlist" page
        When user clicks on Remove button to remove the product
        Then user clicks on home button to land on odoo Dashboard



    # ************ Search products using filters *******************

    @smoke
    Scenario: User searches products using filters

        Given user clicks on shop tab
        When user selects QA Full Catalog
        Then user puts the filters on  brands like Apple and Lenovo
        Then user should be able to see all the products of Lenovo like "Lenovo - earphones with mic"



    # ************ Profile Update & Revert changes ******************

    @smoke
    Scenario Outline: User updates name and current Address and reverts to original details

      Given user clicks on account
      When user clicks on My account from dropdown
      Then user lands on my Profile page and clicks on edit details icon
      Then user updates name as "<Name>" and email as "<Email>" and address as "<Address>"
      Then user saves the changes
     

      Examples:
      | Name | Email | Address |
      | Anil Kumar Swain | anil.k.swain03@gmail.com | 13th floor, Tower B, EON Free Zone II (SEZ), Survey no. 72, Hissa no. 2/1 |
      | Anil EU Swain | anil.k.swain1991@gmail.com | Flat no - A/303, Ratan Prestige, Kharadi |




   # ***************** Log Out of the Application ****************
    
    @smoke 
    Scenario: User logs out of the application

    Given user clicks on account
     When user clicks on Log out
     Then user is able to log out of the application

