import "@cypress-audit/lighthouse/commands";
import "cypress-audit/commands";

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            lighthouse(thresholds:any, opts:any): Chainable<any>
        }
    }
}

export {};