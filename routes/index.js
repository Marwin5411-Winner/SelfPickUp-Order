const express = require('express');
const router = express.Router();
const userSchema = require('../schema/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.user) {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/200/300'
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        image: 'https://picsum.photos/200/300'
      },
      {
        id: 3,
        name: 'Product 3',
        price: 300,
        image: 'https://picsum.photos/200/300'
      },
      {
        id: 4,
        name: 'Product 4',
        price: 400,
        image: 'https://picsum.photos/200/300'
      },
      {
        id: 5,
        name: 'Product 5',
        price: 500,
        image: 'https://picsum.photos/200/300'
      },
      {
        id: 6,
        name: 'Product 6',
        price: 600,
        image: 'https://picsum.photos/200/300'
      }];
  res.render('index', { title: 'Express', user: req.session.user, products : products });
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
