/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable<Subject> {

            viewProductsOnTheOverview(): Chainable<string>
            redirectToCheckoutCompletePage(): Chainable<string>
        }
    }
}

Cypress.Commands.add('viewProductsOnTheOverview', () => {
    cy.get("#item_2_title_link")
        .should('be.visible')
        .and('contain', 'Sauce Labs Onesie')

        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price')
        .should('be.visible')
        .and('contain', '$7.99')

    cy.get("#item_1_title_link")
        .should('be.visible')
        .and('contain', 'Sauce Labs Bolt T-Shirt')

        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price')
        .should('be.visible')
        .and('contain', '$15.99')

    cy.get('.summary_info > :nth-child(2)')
        .should('be.visible')
        .and('contain', 'SauceCard #31337')

    cy.get('.summary_info > :nth-child(4)')
        .should('be.visible')
        .and('contain', 'FREE PONY EXPRESS DELIVERY!')
    
    cy.get('.summary_subtotal_label')
        .should('be.visible')
        .and('contain', 'Item total: $23.98')

    cy.get('.summary_tax_label')
        .should('be.visible')
        .and('contain', 'Tax: $1.92')

    cy.get('.summary_total_label')
        .should('be.visible')
        .and('contain', 'Total: $25.90')

    cy.get('[data-test="finish"]')
        .should('be.visible')

})

Cypress.Commands.add('redirectToCheckoutCompletePage', () => {
    cy.get('[data-test="finish"]')
        .should('be.visible')
        .click({ force: true })

    cy.get(".title")
        .should('be.visible')
        .and('contain', 'Checkout: Complete!')

    cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
})

export { };