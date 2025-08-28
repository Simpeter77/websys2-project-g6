const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', { 
    title: "Home Page", 
    message: "Hello, MongoDB is connected!",  
    greeting: "Welcome to your WS2 E-commerce Project!" 
  });
});

module.exports = router;
