/************************************************
 * middlewares/language.js
 ************************************************/
exports.forceAlbanianDefault = (req, res, next) => {

  if (!req.cookies.lang) {
    req.setLocale("en");
  }
  next();
};
