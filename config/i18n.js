const i18n = require("i18n");
const path = require("path");

i18n.configure({
  locales: ["en", "sq"],
  defaultLocale: "en", // Albanian is still the default
  directory: path.join(__dirname, "../locales"),
  // queryParameter: 'lang',         // ?lang=en or ?lang=sq
  cookie: "lang", // <--- tells i18n to store language in a cookie
  autoReload: true,
  syncFiles: true,
});

module.exports = i18n;
