//create Auth router and export it to be used in app.js
const express = require("express");
const router = express.Router();

const Users = require("../schema/users")

router.post("/login", async (req, res) => {
  if (req.body) {
    //Find user in DB
    const { phone, pin } = req.body
    await Users.findOne({ phone: phone, pin: pin}, (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).send;
      } else if (!user) {
        console.log("User not found");
        res.status(401).send("Invalid Credentials");
      } else {
        console.log(user);
        //Create login session
        req.session.user = user;
        res.status(200).redirect("/");
      }
    }).clone();
  } else {
    res.status(400).send("Request body is missing");
  }
});

router.post("/register", (req, res) => {
  if (req.body) {
    const { name, pin, phone } = req.body;
    console.log(name, pin, phone);
    //Insert Data to mongoose
    const user = new Users({ name: name, pin: pin, phone: phone });
    user.save((err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
    res.redirect("/");
    req.sessions.user = { name, pin, phone };
  } else {
    res.redirect("/register");
  }
});

module.exports = router;
