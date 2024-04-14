const express = require("express");
const router = express.Router()

//import model
const registration =require("../models/sitter")

router.get("/registersitter", (req, res) => {
    res.render("register-sitter");
  });
  
  router.post("/registersitter", (req, res) => {
    const baby = new registration(req.body)
    baby.save();
    console.log(baby)
    res.send("sucess")
    // res.redirect("/index")

});
  
module.exports = router;