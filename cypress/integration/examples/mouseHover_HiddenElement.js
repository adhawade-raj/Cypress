///<reference types="cypress" />

describe('Alert Handling', function(){
    it('Alert Text Handling', function(){
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Approach 1
        // cy.get("div.mouse-hover-content").invoke('show')
        // cy.contains("Top").click()
        // cy.url('include', 'top')

        //Approach 2
        cy.contains('Top').click({force:true})
        cy.url().should('include', 'top')

    })
})