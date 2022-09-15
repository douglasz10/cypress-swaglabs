/// <reference types="cypress" />

describe('Automation Example - Login', () => {

  it('Login successfully', () => {
    cy.loginSwagLabs()
    cy.userLoggedIn()
  })
})