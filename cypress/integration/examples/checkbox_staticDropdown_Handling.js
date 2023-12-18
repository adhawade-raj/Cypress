///<reference types="cypress" />
describe('Checbox & static Dropdown Learning', function(){
it('checkbox validations & dropdown validations', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //cy.get("#checkBoxOption1").check();
    //cy.get("#checkBoxOption1").check().should('be.checked');
    //cy.get("#checkBoxOption1").uncheck().should('not.be.checked');


    //cy.get("input[type='checkbox']").check();
    //cy.get("input[type='checkbox']").check(['option1']);
    //cy.get("input[type='checkbox']").check(['option1', 'option2']);
    

    //satic drowdown handling
    cy.get("select").select('Option1').should('have.value','option1');

    //dyanamic dropdown handling
    cy.get("input[placeholder='Type to Select Countries']").type('ind')

    cy.get(".ui-menu-item>div").each(($e1, index, $list)=>{

        if($e1.text()==="India"){
            $e1.click();
        }
    })

    cy.get("input[placeholder='Type to Select Countries']").should('have.value','India')
})
})
