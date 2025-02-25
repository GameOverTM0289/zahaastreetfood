/************************************************
 * routes/index.js
 ************************************************/
const express = require('express');
const router = express.Router();

// Home
router.get('/', (req, res) => {
  // Renders home.ejs, which uses __('HOME_TITLE'), etc.
  res.render('home');
});

// About
router.get('/about', (req, res) => {
  res.render('about');
});

// Contact
router.get('/contact', (req, res) => {
  res.render('contact');
});

// Gallery
router.get('/gallery', (req, res) => {
  res.render('gallery');
});

/************************************************
 * routes/lang.js (or inside index.js)
 ************************************************/
router.get('/lang/:locale', (req, res) => {
  const { locale } = req.params;

  // Only allow 'en' or 'sq' to prevent invalid locales
  if (['en', 'sq'].includes(locale)) {
    // Manually set the i18n locale on this request
    req.setLocale(locale);

    // Also store it in a cookie so future requests use it
    // Expires in 30 days (for example)
    res.cookie('lang', locale, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

    // log & debug
    // console.log(`Language switched to: ${locale}`);
  }

  // Redirect back to where the user came from, or to home if none
  // res.redirect('back'); //old express gives warning
  const referer = req.get('Referer') || '/';
  res.redirect(referer);

});



module.exports = router;
