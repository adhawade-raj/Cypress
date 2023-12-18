const { defineConfig } = require("cypress");
// const { addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
// const { preprocessor} = require("@badeball/cypress-cucumber-preprocessor/browserify");


// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", preprocessor(config));

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }
module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  projectId: "cnr3hf",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    /**To Run test again, if it got failed */
    // retries: {
    //   runMode :1,
    // },

    
    // setupNodeEvents,

    specPattern: 'cypress/integration/examples/*.js',
    specPattern: 'cypress/integration/Framework/*.js',
    // specPattern: 'cypress/integration/BDD/*.feature'

    
  },
});
