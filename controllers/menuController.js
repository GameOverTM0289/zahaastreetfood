/************************************************
 * controllers/menuController.js
 ************************************************/
const fs = require('fs');
const path = require('path');

exports.getMenuItems = (req, res, next) => {
  const menuPath = path.join(__dirname, '../data/menu.json');

  fs.readFile(menuPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading menu.json:', err);
      return res.status(500).send('Server Error');
    }
    try {
      const menuItems = JSON.parse(data);
      // Attach the parsed items to req, pass to next
      req.menuItems = menuItems;
      next();
    } catch (parseErr) {
      console.error('Error parsing menu.json:', parseErr);
      return res.status(500).send('Server Error');
    }
  });
};
