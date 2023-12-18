// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the ToolsQA Demo Page and check the menu items', function() {
    //Visit the Demo QA Website
    cy.visit("https://demoqa.com/");
    cy.wait(3000)
    //cy.get("div.card.mt-4.top-card,div.card-up").click()
    cy.contains('Elements').click()
    cy.contains('Text Box').click()
    cy.get('input#userName').type('Raj')
    cy.get("input[type='email']").type('adhawaderaj@gmail.com')
    cy.get("textarea[placeholder='Current Address']").type('Pune')
})
})