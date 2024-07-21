const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config){
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/Integration/My_Account/*.js'
  },
});