const { Router } = require('express');
const userSchema = require('../schema/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' }); 
})

router.post('/login', (req, res) => {
  if (req.body) {
  const { name, pin } = req.body;
  session = req.session;
  session.name = name;
  session.idNumber = idNumber;
  //Insert Data to mongoose
  const user = new userSchema({ name: name , pin: pin });
  user.save((err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });
  res.redirect('/home');
  } else {
    res.redirect('/login');
  }
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

Router.get('/test', (req, res) => {
  res.send('test');
})



module.exports = router;
