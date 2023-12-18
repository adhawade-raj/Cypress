beforeEach(() =>{
    cy.fixture('Framework.json').then(function(data){
        this.data=data
    })
});