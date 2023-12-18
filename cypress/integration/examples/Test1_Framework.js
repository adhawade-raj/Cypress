///<reference types="cypress" />
describe('Framework Test', function(){
before(function(){
    cy.fixture('Test1_framework.json').then(function(data){
        this.data=data
    })
})
it('My Fixture Test', function(){
cy.visit("https://rahulshettyacademy.com/angularpractice/")
cy.get("input[name='name']:nth-child(2)").type(this.data.name)
cy.get('select').select(this.data.gender)



})

})
