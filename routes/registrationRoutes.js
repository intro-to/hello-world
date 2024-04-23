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

  router.get("/baby", (req, res) =>{
    res.render(babymanagement)
  });

  //updating a baby in the database
  router.get("/babiesUpdate/:id", async(req, res) =>{
    try{
       const babyUpdate = await babymagrment.findOne({_id: req.params.id});
       res.render("babiesUpdate", {baby:babyUpdate});
    } catch(error){
      console.log("error finding a baby!", error);
      res.status(400).send("unable to find baby from the db!");
    }
  })

  router.post("/babiesUpdate", async(req, res) =>{
    try{
        await babymagrment.findOneAndUpdate({_id: req.query.id}, req.body);
        res.redirect("/babies");
    } catch(error) {
      res.status(404).send("unable to update baby in the db!");
    }
  })

  
  // fetching babies from the database
  
  module.exports = router;
  