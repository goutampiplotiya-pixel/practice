const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://www.adobe.com',
    chromeWebSecurity: false

  },
});
