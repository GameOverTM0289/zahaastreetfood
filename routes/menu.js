/************************************************
 * routes/menu.js
 ************************************************/
const express = require('express');
const router = express.Router();
const { getMenuItems } = require('../controllers/menuController');

// GET /menu
router.get('/', getMenuItems, (req, res) => {
  // We have req.menuItems from the controller
  // We'll pass 'locale' to the template if needed
  const locale = req.getLocale && req.getLocale() || 'sq';
  
  res.render('menu', {
    items: req.menuItems,
    locale
  });
});

module.exports = router;
