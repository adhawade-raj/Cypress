///<referernce types="cypress" />
describe ("My first cypress test suite", function(){
it('My Test', function(){
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get("input[placeholder='Search for Vegetables and Fruits']").type('ca')

cy.wait(2000)
cy.get("div.products").find("div.product").each(($e1, index, $list)=>
{
const list = $e1.find("h4.product-name").text()
if(list.includes("Cashews"))
    cy.wrap($e1).find("button").click()
//cy.get("img[alt='Cart']").click

})

cy.get(".cart-icon>img").click()
cy.contains("PROCEED TO CHECKOUT").click()
cy.contains("Place Order").click()



})
})