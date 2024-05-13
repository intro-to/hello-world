const express = require("express");
const router = express.Router()

//import model
const registration =require("../models/parent")

router.get("/registerparent", (req, res) => {
    res.render("parent");
  });
  
  router.post("/registerparent", (req, res) => {
    const parent = new registration(req.body)
    parent.save();
    console.log(parent)
    res.redirect("review")
    // res.redirect("/index")

});
//feedback
router.get("/feedback", (req, res) => {
  res.render("feedback")
});
router.post("/feedback", (req, res) => {
  const feedback = new registration(req.body)
  feedback.save();
  console.log(feedback)
  res.redirect("feedback")
});

  
module.exports = router;