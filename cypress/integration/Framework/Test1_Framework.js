///<reference types="cypress" />
import HomePage from "../PageObjects/HomePage"
import ProductPage from "../PageObjects/ProductPage"

describe('Framework Test', function(){
before(function(){
    cy.fixture('Framework.json').then(function(data){
        this.data=data
    })
})
it('My Fixture Test', function(){
    //OBJECT CREATION
    const homePage = new HomePage();
    const productPage = new ProductPage();

cy.visit("https://rahulshettyacademy.com/angularpractice/")
homePage.getEditBox().type(this.data.name)
homePage.getGender().select(this.data.gender)

//Assertions
homePage.getEditBox().should('have.value', this.data.name)
homePage.getTwoWayDataBinding().should('have.value', this.data.name)
homePage.getEditBox().should('have.attr','minlength',2)
homePage.getEntreprneur().should('be.disabled')
homePage.getShopTab().click()

//Approach 1 to select multiple product - repeatinhg same line of code again
// cy.selectProduct("Blackberry")   
//cy.selectProduct("Nokia Edge")  

//Approach 2 to select multiple product - Generic form
this.data.productName.forEach(function(element) {
    cy.selectProduct(element)    
});

productPage.getCheckOutBtn().click()

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

})
