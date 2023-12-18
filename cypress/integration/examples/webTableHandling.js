describe('Web Table Handling', function(){
    it('Assertion in web table', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("tr td:nth-child(2)").each(($e1, index, $list) =>{

            let text = $e1.text()
            if(text.includes("Python"))
            {
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
        
                let priceText = price.text();
                expect(priceText).to.equal("25")
            })
        }

        })
    })
})