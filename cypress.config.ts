import { defineConfig } from 'cypress'
import { lighthouse, prepareAudit } from "cypress-audit"


export default defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {
        name: '',
        family: 'chromium',
        channel: '',
        displayName: '',
        version: '',
        majorVersion: '',
        path: '',
        isHeaded: false,
        isHeadless: false
      }, launchOptions) => {
				prepareAudit(launchOptions);
			});

      on("task", {
				lighthouse: lighthouse((lighthouseReport: any) => {
					console.log(lighthouseReport);
				}),
			});
    }, 
  },
});
