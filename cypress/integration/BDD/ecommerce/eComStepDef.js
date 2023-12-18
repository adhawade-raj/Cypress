import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage"
import ProductPage from "../PageObjects/ProductPage"

const homePage = new HomePage();
const productPage = new ProductPage();

Given('I open ecommerce page', function()
{
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

When('I add items to cart' , ()=>{

    homePage.getShopTab().click()
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element)    
    });

    productPage.getCheckOutBtn().click()
})

And('validate the total prices', ()=>{
    var sum = 0
cy.get("tr >td:nth-child(4)>strong").each(($el, index, $list)=>{

const amount = $el.text()
var res = amount.split(" ");
res =res[1].trim()
sum = Number(sum)+Number(res)
}).then(function(element){
    cy.log(sum)
})

cy.get("h3 >strong").then(function(element){
    const amount = element.text()
    var res = amount.split(" ")
    var total = res[1].trim()
    expect(Number(total)).to.equal(Number(sum))
})
})


Then('Select the country submit and verify Thank You', ()=>{

    cy.get(".btn.btn-success").click()
    cy.get("input[id='country']").type("India")
    
    Cypress.config('defaultCommandTimeout',8000)
    cy.get(".suggestions > ul>li").click()
    cy.get("#checkbox2").click({force:true})
    cy.get("input[type='submit']").click()
    
    //cy.get('.alert').should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")
    
    cy.get('.alert').then(function(element){
    
        const actualText= element.text()
        expect(actualText.includes("Success")).to.be.true
    })

})




