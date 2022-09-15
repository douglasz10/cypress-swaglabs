/// <reference types="cypress" />

describe('Accessibility  Example', () => {

    it('A11Y test', () => {
        cy.loginSwagLabs()
        cy.injectAxe()
        cy.checkA11y()
    })
})