/// <reference types="cypress" />


describe('', () => {
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        cy.contains('Admin').click()

        cy.get("[class='oxd-icon bi-plus oxd-button-icon']").click()

        cy.get('.oxd-select-text-input')

            .eq(0)
            .click()
            .get('.oxd-select-option')
            .contains('ESS')
            .click()






    });
});






