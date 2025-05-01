const i18n = require("i18n");
const path = require("path");

i18n.configure({
  locales: ["en", "sq"],
  defaultLocale: "en", 
  directory: path.join(__dirname, "../locales"),
  cookie: "lang",
  autoReload: true,
  syncFiles: true,
});

module.exports = i18n;
