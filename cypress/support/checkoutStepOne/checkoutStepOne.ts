/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable<Subject> {

            fillInYourInformation(firstName, lastName, postalCode): Chainable<string>
            redirectToCheckoutStepTwoPage(): Chainable<string>
        }
    }
}

Cypress.Commands.add('fillInYourInformation', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]')
        .type(firstName)

    cy.get('[data-test="lastName"]')
        .type(lastName)

    cy.get('[data-test="postalCode"]')
        .type(postalCode)

    cy.get('[data-test="continue"]')
        .should('be.visible')

})

Cypress.Commands.add('redirectToCheckoutStepTwoPage', () => {
    cy.get('[data-test="continue"]')
        .should('be.visible')
        .click({ force: true })

    cy.get(".title")
        .should('be.visible')
        .and('contain', 'Checkout: Overview')

    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')
})

export { };