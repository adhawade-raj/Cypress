describe('Assertion Test',function(){
    it('Testing should assertion', function(){

        cy.visit("https://demoqa.com/");
        cy.wait(3000)
        cy.contains('Elements').click()
        cy.get("ul.menu-list>li:visible").should('have.length',9)


    })
})