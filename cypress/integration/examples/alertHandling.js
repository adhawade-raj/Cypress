///<reference types="cypress" />
describe('Alert Handling', function(){
it('Alert Text Handling', function(){

    //Approach 1 - Cypress directly handles the alert
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()

    //Approach 2 - We will trigger browser event so that cypress can have control over alert
    //We Can perform Validation
    //event name = window:alert

    cy.on('window:alert', (str)=>
    {
        //Mocha Assertion
        //We have compared two string
        //actual is stored in str & expected is hardcoded
        expect(str).to.equal("Hello , share this practice page and share your knowledge")
    
})



    })
})