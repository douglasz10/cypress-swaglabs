/// <reference types="cypress" />

describe('Automation Example - Inventory', () => {

    it('Add two different products to cart', () => {
      cy.loginSwagLabs()
      cy.userLoggedIn()
      cy.orderByPriceLowToHigh()
      cy.addProductsToCart()
      cy.numberProductsAddToCart()
    })
  })