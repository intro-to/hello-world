const express = require("express");
const router = express.Router()

//import model
const registration =require("../models/registration")

router.get("/registerbaby", (req, res) => {
    res.render("register_baby");
  });
  
  router.post("/registerbaby", (req, res) => {
    const baby = new registration(req.body)
    baby.save();
    console.log(baby)
    res.send("sucess")
    // res.redirect("/index")
   
  });
  
  module.exports = router;
  