const express = require("express");
const router = express.Router()

//import model
const registration =require("../models/registration")

router.get("/registerbaby", (req, res) => {
    res.render("register_baby");
  });
  
  router.post("/registerbaby", async (req, res) => {
    try{
      const baby = new registration(req.body)
      await baby.save();
      // res.redirect("registerbaby")
      console.log(baby)
      res.send("sucess")
    } catch (error){
      res.status(400).send("sorry something went wrong")
   console.log("error registering baby", error);
    }
    // const baby = new registration(req.body)
    // baby.save();
    // console.log(baby)
    // res.send("sucess")
    // res.redirect("/index")
   
  });
  
  module.exports = router;
  