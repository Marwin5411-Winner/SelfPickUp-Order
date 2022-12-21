const express = require('express');
const router = express.Router();
const userSchema = require('../schema/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.user) {
  res.render('index', { title: 'Express', user: req.session.user });
  } else {
    res.redirect('/login');
  }
});

/* GET login page. */
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' }); 
})



router.get('/shop', (req, res) => {
  res.render('shop', { title: 'Shop' });
})

router.get('/cart', (req, res) => {
  res.render('cart', { title: 'Cart' });
})

router.get('/checkout', (req, res) => {
  if (req.session.user) {
  res.render('checkout', { title: 'Checkout' });
  } else {
    res.redirect('/login');
  }
})

router.get('/test', (req, res) => {
  res.send('test');
})



module.exports = router;
