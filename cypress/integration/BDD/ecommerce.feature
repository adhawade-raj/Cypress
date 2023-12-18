Feature : End to End Ecommerce validations
          Application Regression

Scenario: Ecommerce Product Delivery
Given I open ecommerce page
When I add items to cart
And validate the total prices
Then Select the country submit and verify Thank You
