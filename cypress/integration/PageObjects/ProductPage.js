class ProductPage{

    getCheckOutBtn(){
    return cy.get("a[class='nav-link btn btn-primary']")
    }
}

export default ProductPage;



//