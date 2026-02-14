Feature: SauceDemo E2E flow

  Scenario: Login, add product, validate cart and logout
    Given I open the login page
    When I login with valid credentials
    Then I should see the products page
    When I add a product to the cart
    Then the cart should contain 1 item
    And I logout
