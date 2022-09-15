/// <reference types="cypress" />

describe('Automation Example - Checkout Complete', () => {

    it('Checkout Complete', () => {
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
      cy.redirectToCheckoutCompletePage()
      cy.viewCheckoutComplete()
    })
  })