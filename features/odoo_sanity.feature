Feature: Marketplace ( Shopping -  e2e flow of order journey)

    # ************** Login to Marketplace (Odoo) **********************

    @sanity 
    Scenario: Verify login to odoo ecommerce portal

        Given user launches url "https://customer1.test-marketplace.compucom.com/b2b/login"
        When user enters email as "anil.k.swain1991@gmail.com"
        And user clicks on Next
        And user enters password as "user"
        And user clicks on Login
        Then user lands on portal dashboard page and verifies account as "Anil EU Swain"



    # *********** Add to Cart  & Elastic search **********

    @sanity
    Scenario: User adds a product to cart

        Given user clicks on shop tab
        When user selects QA Full Catalog
        Then user searches for "Apple HomePod - smart speaker" in search bar
        Then user adds it to the cart



    # *************** Cart checkout & Quote page ***************

    @sanity
    Scenario: Verify user is able to do Cart checkout and generate a Quote

        Given user is on the cart summary page with a product in the cart
        When user clicks on process checkout
        Then user lands on quote page and user clicks on Place Order button to land on Address page



    # ************** Address Checkout and Order details Page *********

    @sanity
    Scenario: Verify user is able to checkout from address page and go to order details page

        Given user is on address page and the desired addresses are already preselected
        When user clicks on confirm button
        Then user lands on order details page and clicks on proceed to review




    # *************** Review and Payment Page *******************

    @sanity
    Scenario: Verify user is able to proceed to payment page from Order details page

        Given user user lands on review page
        When user clicks on proceed to payment
        Then user lands on payment page




    # ***************** Order Confirmation details *******************

    @sanity
    Scenario: Verify user is able to make the payment through wire transfer and generate an order

        Given user lands on Payment page
        When user agrees to terms and conditions and clicks on Pay Now
        Then order gets submitted and an order number is generated.



    # ***************** Log Out of the Application ****************

    @sanity
    Scenario: User logs out of the application

        Given user clicks on account
        When user clicks on Log out
        Then user is able to log out of the application






