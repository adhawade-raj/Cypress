///<reference types="cypress" />

describe('Alert Handling', function(){
    it('Alert Text Handling', function(){

        //Approach 1
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").invoke('removeAttr','target').click();

        //Aproach 2
        //About Page        
    //     cy.origin("https://www.qaclickacademy.com",()=>
    //    {
    //     cy.get("#navbarSupportedContent a[href*='about']").click();
    //     cy.get(".mt-50 h2").should('contain','QAClick Academy');

    
        //Courses Page
        cy.origin("https://www.qaclickacademy.com",()=>
       {
        //div#navbarSupportedContent a[href*='testing-minds']
        cy.get("div#navbarSupportedContent li:nth-of-type(2)").click();
        cy.get("div h1").should('contain','QAClick Academy');
        
 
       })

    })
})