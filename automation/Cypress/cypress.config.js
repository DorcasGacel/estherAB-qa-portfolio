const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xye6cb',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
