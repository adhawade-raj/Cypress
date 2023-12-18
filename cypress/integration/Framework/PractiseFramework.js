///refrence <type="cypress" />
describe('My Framework practise test', function() {
it('My Practise test', function(){

cy.visit("https://rahulshettyacademy.com/angularpractice/")

cy.get("input[name='name']:nth-child(1)").type('bob')
cy.get("input[name='name']:nth-child(1)").should('have.value', 'bob')

cy.get("#inlineRadio3").should('be.disabled')

cy.get("input[name='name']:nth-child(2)").should('have.value','bob')

cy.get(":nth-child(2) > .nav-link").click()


cy.selectProduct("Blackberry")
cy.selectProduct("Nokia Edge")  
cy.get("a[class='nav-link btn btn-primary']").click()


var sum=0;
//To get Total of product
cy.get("tr td:nth-child(4) >strong").each(($el, index, $list)=> {
const amount = $el.text()
// cy.log(total)
let res = amount.split(" ")
res=res[1].trim()
sum = Number(sum)+Number(res)
}).then(function(element){
    cy.log(sum)
})


var total =0;
/** To Compare Result */
cy.get("h3>strong").then(function(element){
    const amount = element.text()
    var res = amount.split(" ")
    var total = res[1].trim()
    expect(Number(total)).to.equal(Number(sum))
})


cy.get("h3 >strong").then(function(element){
    const amount = element.text()
    var res = amount.split(" ")
    var total = res[1].trim()
    expect(Number(total)).to.equal(Number(sum))
})

})
})