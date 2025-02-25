/************************************************
 * middlewares/language.js
 ************************************************/
exports.forceAlbanianDefault = (req, res, next) => {
  // If the user hasn't chosen a language (no cookie),
  // we set the locale to 'sq' manually.
  if (!req.cookies.lang) {
    req.setLocale('sq');
  }
  next();
};
