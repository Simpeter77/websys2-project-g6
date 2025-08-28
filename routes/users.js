const express = require('express');
const userController = require('../controllers/user.controller.js');

const router = express.Router();

// Show registration form
router.get('/register', (req, res) => {
  res.render('register', { title: "Register" });
});

// Handle registration form submission
router.post('/register', userController.createUser);

module.exports = router;
