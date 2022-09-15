/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable<Subject> {

            loginSwagLabs(): Chainable<string>
            userLoggedIn(): Chainable<string>
        }
    }
}

Cypress.Commands.add('loginSwagLabs', () => {
    cy.visit('/')

    cy.get("#user-name").type(Cypress.env('nome_usuario'), {
        log: false
    })

    cy.get("#password").type(Cypress.env('senha_usuario'), {
        log: false
    })

    cy.get("#login-button").click()

})

Cypress.Commands.add('userLoggedIn', () => {
    cy.get(".title")
        .should('be.visible')
        .and('contain', 'Products')
})

export { };