/// <reference types="cypress" />

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        interface Chainable<Subject> {

            viewCheckoutComplete(): Chainable<string>
        }
    }
}

Cypress.Commands.add('viewCheckoutComplete', () => {
    cy.get(".complete-header")
        .should('be.visible')
        .and('contain', 'THANK YOU FOR YOUR ORDER')

    cy.get('.complete-text')
        .should('be.visible')
        .and('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')

    cy.get(".pony_express")
        .should('be.visible')
        .and('have.attr', 'src', '/static/media/pony-express.46394a5d.png')

    cy.get('[data-test="back-to-products"]')
        .should('be.visible')

})

export { };