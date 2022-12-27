import "@cypress-audit/lighthouse/commands";


declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        interface Chainable<Subject> {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            lighthouse(thresholds:any, opts:any): Chainable<any>
        }
    }
}

export {};