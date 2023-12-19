///<reference types="cypress"/>
describe('practive browser navigation',() => {
    it ('should verify the new  tab', () => {

        cy.visit('https://tablepress.org/demo/')
        // cy.get('#tablepress-demo td')
        //     .contains('Barry')
        //     .should('have.text', 'Barry')
     
        cy.get('#tablepress-demo td').first().should('have.text', 'Gloria')

        cy.get('#tablepress-demo td').last().should('have.text', '$20')



    });
    
});