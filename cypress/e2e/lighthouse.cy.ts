/// <reference types="cypress" />


describe('Lighthouse  Example', () => {

    it('Lighthouse test', () => {
        cy.loginSwagLabs()
        //cy.clearCookies()
       //cy.reload()

        const thresholds = {
            performance: 90,
            accessibility: 70,
            'best-practices': 80,
            seo: 50,
          }
      
          const opts = {
            formFactor: 'desktop',
            disableStorageReset: false ,
            screenEmulation: {
              mobile: false,
              disable: false,
              width: Cypress.config('viewportWidth'),
              height: Cypress.config('viewportHeight'),
              deviceScaleRatio: 1,
            },
            throttling: {
              rttMs: 40,
              throughputKbps: 11024,
              cpuSlowdownMultiplier: 1,
              requestLatencyMs: 0,
              downloadThroughputKbps: 0,
              uploadThroughputKbps: 0,
            },
          }
      
          cy.lighthouse(thresholds, opts)

    })
})