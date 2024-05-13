const express = require("express");
const router = express.Router();

//import model
const registration = require("../models/doll");

router.get("/sell-item", (req, res) => {
  res.render("doll");
});

router.post("/sell-item", (req, res) => {
  const doll = new registration(req.body);
  doll.save();
  console.log(doll);
  res.redirect("dollList");
  // res.redirect("/index")
});

//fetching dolls from db
router.get('/dollList', async (req, res) => {
  try {
    const dolls = await registration.find();
    res.render('renderdoll', { dolls });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
