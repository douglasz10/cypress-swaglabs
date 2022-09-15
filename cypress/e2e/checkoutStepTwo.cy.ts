/// <reference types="cypress" />

describe('Automation Example - Checkout Step Two', () => {

    it('Checkout Overview', () => {
      cy.loginSwagLabs()
      cy.userLoggedIn()
      cy.orderByPriceLowToHigh()
      cy.addProductsToCart()
      cy.numberProductsAddToCart()
      cy.redirectToCartPage()
      cy.viewProductsOnTheCartPage()
      cy.redirectToCheckoutStepOnePage()
      cy.fillInYourInformation('Bruce', 'Lee', '13060150')
      cy.redirectToCheckoutStepTwoPage()
      cy.viewProductsOnTheOverview()
    })
  })