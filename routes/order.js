const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    if (req.session.name && req.session.pin) {   
        res.render('cart', { title: 'Cart' });  
    }
})

router.post('/', (req, res) => {
})

//Add order to cart and redirect to / 
router.post('/add', (req, res) => {
    if (req.session.user) {
        if (req.body) {
            req.session.order = req.body
            res.redirect('/')
        } else {
            res.redirect('/cart')
        }
    } else {
        res.redirect('/login')
    }
})

router.get('/add/:id', (req, res) => {
    if (req.session.user) {
        if (req.params.id) {
            req.session.order = req.params.id
            res.redirect('/')
        } else {
            res.redirect('/cart')
        }
    } else {
        res.redirect('/login')
    }
})


module.exports = router;