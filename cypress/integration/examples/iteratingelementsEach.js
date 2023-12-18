//https://rahulshettyacademy.com/seleniumPractise/#/

///<reference types="cypress" />
describe('Iteration using each', function(){
it('retrive element & then click', function(){

    //BELOW CODE IS RUNNING NEATLY
    // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    // //cy.wait(2000)
    // cy.get(".products>.product").each(($e1, index, $list)=>{
    //     const text = $e1.find("h4.product-name").text()
    //     if(text.includes('Cucumber')){
    //     cy.wrap($e1).find('button').click()
    //     }
    // })

//*****************************************************************

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    //cy.wait(2000)
    cy.get(".products>.product").each(($e1, index, $list)=>{
        const text = $e1.find("h4.product-name").text()
        if(text.includes("Cucumber")){
        cy.contains("ADD TO CART").click()
        }
    })

})
})