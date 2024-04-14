const express = require("express");
const router = express.Router()

//import model
const registration =require("../models/parent")

router.get("/registerparent", (req, res) => {
    res.render("parent");
  });
  
  router.post("/registerparent", (req, res) => {
    const baby = new registration(req.body)
    baby.save();
    console.log(parent)
    res.send("sucess")
    // res.redirect("/index")

});
  
module.exports = router;