// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './login/login'
import './inventory/inventory'
import './cart/cart'
import './checkoutStepOne/checkoutStepOne'
import './checkoutStepTwo/checkoutStepTwo'
import './checkoutComplete/checkoutComplete'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import 'cypress-axe'
import "@cypress-audit/lighthouse/commands"
import 'cypress-audit/commands'