/// <reference types="cypress" />

describe('Automation Example - Cart', () => {

    it('Products with correct information in the cart', () => {
      cy.loginSwagLabs()
      cy.userLoggedIn()
      cy.orderByPriceLowToHigh()
      cy.addProductsToCart()
      cy.numberProductsAddToCart()
      cy.redirectToCartPage()
      cy.viewProductsOnTheCartPage()
    })
  })