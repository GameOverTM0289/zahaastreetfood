/************************************************
 * middlewares/language.js
 ************************************************/
exports.switchLanguage = (req, res, next) => {
  // If ?lang=sq or ?lang=en is provided, i18n automatically sets it.
  // This middleware can log or override if needed.

  // Example: If no query param is provided, ensure 'sq'?
  if (!req.query.lang && !req.cookies?.lang) {
    // Force Albanian if no language is chosen
    req.setLocale('sq');
  }

  // Or simply do nothing and let i18n handle the default
  next();
};
