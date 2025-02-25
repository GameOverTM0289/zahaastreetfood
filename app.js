/********************************************
 * app.js - Main Express Server Setup
 ********************************************/

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const i18n = require('./config/i18n'); // Your i18n config
const { forceAlbanianDefault } = require('./middlewares/language');


const app = express();

/**
 * 1) Use cookie-parser BEFORE i18n
 *    so i18n can read/write the "lang" cookie.
 */
app.use(cookieParser());
app.use(i18n.init);
app.use(forceAlbanianDefault);


/**
 * 2) Set up EJS as the view engine
 */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/**
 * 3) Serve static files from the "public" folder
 */
app.use(express.static('public'));

/**
 * 4) Body parsing (optional)
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// /**
//  * 5) Manual Language Switch Route
//  *    - Visiting /lang/en or /lang/sq sets the cookie and locale
//  */
// app.get('/lang/:locale', (req, res) => {
//   const { locale } = 'sq';

//   // Only allow 'en' or 'sq'
//   if (['en', 'sq'].includes(locale)) {
//     // Set the locale for this request
//     req.setLocale(locale);

//     // Also store in a cookie so future requests use it
//     // Example: 30 days expiry
//     res.cookie('lang', locale, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

//     console.log(`Language switched to: ${locale}`);
//   }

//   // Redirect back to the previous page or home if no referrer
//   res.redirect('back');
// });

/**
 * 6) Import and use your main routes
 *    - indexRoutes for Home, About, Contact, Gallery
 *    - menuRoutes for Menu page
 */
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const menuRoutes = require('./routes/menu');
app.use('/menu', menuRoutes);

/**
 * 7) Start the server
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ZAHAA server running on port ${PORT}`);
});
