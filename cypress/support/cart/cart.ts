/// <reference types="cypress" />

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        interface Chainable<Subject> {

            viewProductsOnTheCartPage(): Chainable<string>
            redirectToCheckoutStepOnePage(): Chainable<string>
        }
    }
}

Cypress.Commands.add('viewProductsOnTheCartPage', () => {
    cy.get("#item_2_title_link")
        .should('be.visible')
        .and('contain', 'Sauce Labs Onesie')

    cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price')
        .should('be.visible')
        .and('contain', '$7.99')

    cy.get("#remove-sauce-labs-onesie")
        .should('be.visible')
        .and('contain', 'Remove')

    cy.get("#item_1_title_link")
        .should('be.visible')
        .and('contain', 'Sauce Labs Bolt T-Shirt')

    cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price')
        .should('be.visible')
        .and('contain', '$15.99')

    cy.get("#remove-sauce-labs-bolt-t-shirt")
        .should('be.visible')
        .and('contain', 'Remove')

})

Cypress.Commands.add('redirectToCheckoutStepOnePage', () => {
    cy.get('[data-test="checkout"]')
        .should('be.visible')
        .and('contain', 'Checkout')
        .click({ force: true })

    cy.get(".title")
        .should('be.visible')
        .and('contain', 'Checkout: Your Information')

    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
})

export { };