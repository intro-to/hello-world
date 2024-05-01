const express = require("express");
const router = express.Router();

//import model
const registration = require("../models/registration");

router.get("/registerbaby",  (req, res) => {
  res.render("register_baby");
});

router.post( "/registerbaby", async (req, res) => {
    try {
      const baby = new registration(req.body);
      await baby.save();
      // res.redirect("registerbaby")
      console.log(baby);
      res.redirect("/babiesList");
    } catch (error) {
      res.status(400).send("sorry something went wrong");
      console.log("error registering baby", error);
    }
    
  });

//fetching babies from the db
router.get("/babiesList", async (req, res) =>{
  try {
    let babies = await registration.find()
    res.render("babiesmanagement" , {babies:babies})
  } catch (error) {

  }
  
});

router.post("/deletebaby", async (req, res) => {
  try {
    console.log (req.body.id)
    await registration.deleteOne({_id:req.body.id});
    res.redirect("back")
  } catch (error) {
    res.status(400).send("unable to delete babies from the db")
    console.log("Error deleting babies", error);
  }
});

//updating a baby in the database
router.get("/babiesUpdate/:id", async (req, res) => {
  try {
    const babyUpdate = await registration.findOne({ _id: req.params.id });
    res.render("babiesUpdate", { baby: babyUpdate });
  } catch (error) {
    console.log("error finding a baby!", error);
    res.status(400).send("unable to find baby from the db!");
  }
}); 

router.post("/babiesUpdate", async (req, res) => {
  try {
    await registration.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/babiesList");
  } catch (error) {
    res.status(404).send("unable to update baby in the db!");
  }
});

//fetching list all babies clocked in from database 
router.get("/babyrendered", async (req, res)=> {
  try {
    let babies = await registration.find({status: "ClockedIn"})
    res.render("renderBabyClockin", {babies:babies}) // to display babies from data base
    console.log("display babies clocked in", babies);

  } catch (error) {
     res.status(400).send("unable to find babies from database!");
     console.log("unable to find babies from database!...", error );
  }
  });

//clockin baby route for form in database
router.get("/babyClockin/:id", async(req, res)=> { 
  try{
     const sitters  = await registration.find()
    const babyClockin = await registration.findOne({_id: req.params.id});
    res.render("babyClockin", {
     baby:babyClockin,
     sitters:sitters
  });

  } catch(error){
     console.log("error finding a baby!", error);
     res.status(400).send("unable to find baby from the db!");  
  }
});

router.post("/babyClockin", async(req, res)=> {
  try {
     await registration.findOneAndUpdate({_id: req.query.id}, req.body);
     res.redirect("/babyrendered");

  } catch (error) {
     res.status(404).send("unable to update baby in the db!");  
  }
});

//fetching list babies clocked Out from database 
router.get("/clockingOutList", async (req, res)=> {
  try {
    let babies = await BabiesRegisterModel.find({status: "ClockedOut"})
    res.render("./babies/renderBabyClockOut", {babies:babies}) // to display babies from data base
    console.log("display babies clocked out", babies);

  } catch (error) {
     res.status(400).send("unable to find babies from database!");
     console.log("unable to find babies from database!...", error );
  }
  });

//clockOut baby route for form in database
 router.get("/ClockingOut/:id", async(req, res)=> { 
  try{  
   const sitters  = await SittersModel.find()
    const babyClockOut = await BabiesRegisterModel.findOne({_id: req.params.id});
    res.render("./babies/babyClockOut", {
     baby:babyClockOut,
     sitters:sitters
  });
  } catch(error){
     console.log("error finding a baby!", error);
     res.status(400).send("unable to find baby from the db!");  
  }
});

router.post("/ClockingOut", async(req, res)=> {
  try {
     await BabiesRegisterModel.findOneAndUpdate({_id: req.query.id}, req.body);
     res.redirect("/clockingOutList");

  } catch (error) {
     res.status(404).send("unable to update baby in the db!");  
  }
});


module.exports = router;
