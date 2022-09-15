/// <reference types="cypress" />

describe('Automation Example - Checkout Step One', () => {

    it('Fill In your information', () => {
      cy.loginSwagLabs()
      cy.userLoggedIn()
      cy.orderByPriceLowToHigh()
      cy.addProductsToCart()
      cy.numberProductsAddToCart()
      cy.redirectToCartPage()
      cy.viewProductsOnTheCartPage()
      cy.redirectToCheckoutStepOnePage()
      cy.fillInYourInformation('Bruce', 'Lee', '13060150')
    })
  })