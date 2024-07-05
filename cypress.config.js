const { defineConfig } = require("cypress");
const { removeDirectory } = require("cypress-delete-downloads-folder");

module.exports = defineConfig({
  projectId: "ehfjsr",
  viewportHeight: 1200,
  viewportWidth: 1500,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", { removeDirectory });
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    env: {
      hideXhr: true,
      amazon: "https://www.amazon.de",
      google: "https://www.goodle.com",
      saucedemo: "https://www.saucdemo.com",
    },
    experimentalStudio: true,
  },
});
