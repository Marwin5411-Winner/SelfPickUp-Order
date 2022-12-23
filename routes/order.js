const express = require("express");
const router = express.Router();
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    image: "https://picsum.photos/200/300",
  },
];

router.get("/", (req, res) => {
  if (req.session.user) {
    //calculate total
    
    //convert array string to number
    req.session.order = req.session.order.map((item) => parseInt(item));
    let total = 0;
    if (req.session.order) {
        req.session.order.forEach((item) => {
        const product = products.find((product) => product.id == item);
        total += product.price;
        console.log(total);
        });
    }

    res.render("cart", { title: "Cart", user: req.session.user, order: req.session.order, products: products , total: total});
  } else {
    res.redirect("/login");
  }
});

router.post("/", (req, res) => {});

router.get("/add/:id", (req, res) => {
  if (req.session.user) {
    if (req.params.id) {
      if (req.session.order) {
        req.session.order.push(req.params.id);
      } else {
        req.session.order = [req.params.id];
      }
      res.redirect("/");
    } else {
      res.redirect("/cart");
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/remove/:id", (req, res) => {
  if (req.session.user) {
    if (req.params.id) {
      if (req.session.order) {
        req.session.order = req.session.order.filter(
          (item) => item !== req.params.id
        );
      }
      res.redirect("/cart");
    } else {
      res.redirect("/cart");
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/clear", (req, res) => {
  if (req.session.user) {
    if (req.session.order) {
      req.session.order = [];
    }
    res.redirect("/cart");
  } else {
    res.redirect("/login");
  }
});

router.get("/getSession", (req, res) => {
  if (req.session.user) {
    res.send(req.session.order);
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
