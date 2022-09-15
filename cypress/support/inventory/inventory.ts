/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable<Subject> {

            orderByPriceLowToHigh(): Chainable<string>
            addProductsToCart(): Chainable<string>
            numberProductsAddToCart(): Chainable<string>
            redirectToCartPage(): Chainable<string>
        }
    }
}

Cypress.Commands.add('orderByPriceLowToHigh', () => {
    cy.get('[data-test="product_sort_container"]')
        .should('be.visible')
        .and('contain', 'Name (A to Z)')
        .select('Price (low to high)')

})

Cypress.Commands.add('addProductsToCart', () => {
    cy.get("#item_2_title_link")
        .should('be.visible')
        .and('contain', 'Sauce Labs Onesie')

    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price')
        .should('be.visible')
        .and('contain', '$7.99')

    cy.get("#item_2_img_link")
        .should('be.visible')

    cy.get('#add-to-cart-sauce-labs-onesie')
        .click({ force: true })

    cy.get("#remove-sauce-labs-onesie")
        .should('be.visible')
        .and('contain', 'Remove')

    cy.get("#item_1_title_link")
        .should('be.visible')
        .and('contain', 'Sauce Labs Bolt T-Shirt')

    cy.get(':nth-child(3) > .inventory_item_description > .pricebar > .inventory_item_price')
        .should('be.visible')
        .and('contain', '$15.99')

    cy.get("#item_1_img_link")
        .should('be.visible')

    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
        .click({ force: true })

    cy.get("#remove-sauce-labs-bolt-t-shirt")
        .should('be.visible')
        .and('contain', 'Remove')

})

Cypress.Commands.add('numberProductsAddToCart', () => {
    cy.get(".shopping_cart_badge")
        .should('be.visible')
        .should('have.text', '2')
})

Cypress.Commands.add('redirectToCartPage', () => {
    cy.get('.shopping_cart_link')
        .click({ force: true })
    
    cy.get(".title")
        .should('be.visible')
        .and('contain', 'Your Cart')

    cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
})

export { };