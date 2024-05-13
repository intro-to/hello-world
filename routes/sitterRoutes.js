const express = require("express");
const router = express.Router()

//import model
const registration =require("../models/sitter")

router.get("/registersitter", (req, res) => {
    res.render("register-sitter");
  });
  
  router.post("/registersitter", async (req, res) => {
    try {
      const sitter = new registration(req.body)
      await sitter.save();
      console.log(sitter)
      res.redirect("/sittersList")
    } catch (error) {
      res.status(400).send("sorry something went wrong");
      console.log("error registering sitter", error);
    }
   
    // res.redirect("/index")

});

//fetching sitters from the db
router.get("/sittersList", async (req, res) =>{
  try {
    let sitters = await registration.find()
    res.render("sittermanagement" , {sitters:sitters})
  } catch (error) {

  }

  });

router.post("/deletesitter", async (req, res) => {
  try {
    console.log (req.body.id)
    await registration.deleteOne({_id:req.body.id});
    res.redirect("back")
  } catch (error) {
    res.status(400).send("unable to deletesitter from the db")
    console.log("Error deleting sitters", error);
  }
});

//updating a sitter in the database
router.get("/sittersUpdate/:id", async (req, res) => {
  try {
    const sitterUpdate = await registration.findOne({ _id: req.params.id });
    res.render("sittersUpdate", {sitter: sitterUpdate });
  } catch (error) {
    console.log("error finding a sitter!", error);
    res.status(400).send("unable to find sitter from the db!");
  }
}); 

router.post("/sittersUpdate", async (req, res) => {
  try {
    await registration.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/sittersList");
  } catch (error) {
    res.status(404).send("unable to update sitter in the db!");
  }
});

//fetching list all sitters clocked in from database 
router.get("/sitterrendered", async (req, res)=> {
  try {
    let sitters = await registration.find({status: "clockedin"})
    res.render("renderSitterClockin", {sitters:sitters}) // to display sitters from data base
    console.log("display sitter clocked in", sitters);

  } catch (error) {
     res.status(400).send("unable to find sitters from database!");
     console.log("unable to find sitter from database!...", error );
  }
  });

//clockin sitter route for form in database
router.get("/sitterClockin/:id", async(req, res)=> { 
  try{
     const sitters  = await registration.find()
    const sitterClockin = await registration.findOne({_id: req.params.id});
    res.render("sitterClockin", {
     sitter:sitterClockin,
     sitters:sitters
  });

  } catch(error){
     console.log("error finding a sitter!", error);
     res.status(400).send("unable to find sitter from the db!");  
  }
});

router.post("/sitterClockin", async(req, res)=> {
  try {
     await registration.findOneAndUpdate({_id: req.query.id}, req.body);
     res.redirect("/sitterrendered");

  } catch (error) {
     res.status(404).send("unable to update sitter in the db!");  
  }
});

//fetching list sitters clocked Out from database 
router.get("/sitterrenderedout", async (req, res)=> {
  try {
    let sitters = await registration.find({status: "clockedout"})
    res.render("renderSitterClockout", {sitters:sitters}) // to display sitters from data base
    console.log("display sitter clocked out", sitters);

  } catch (error) {
     res.status(400).send("unable to find babies from database!");
     console.log("unable to find babies from database!...", error );
  }
  });

//clockOut sitter route for form in database
 router.get("/sitterClockout/:id", async(req, res)=> { 
  try{  
   const sitters  = await registration.find()
    const sitterClockout = await registration.findOne({_id: req.params.id});
    res.render("sitterClockout", {
     sitter:sitterClockout,
     sitters:sitters
  });
  } catch(error){
     console.log("error finding a sitter!", error);
     res.status(400).send("unable to find sitter from the db!");  
  }
});

router.post("/sitterClockout", async(req, res)=> {
  try {
     await registration.findOneAndUpdate({_id: req.query.id}, req.body);
     res.redirect("/sitterrenderedout");

  } catch (error) {
     res.status(404).send("unable to update sitter in the db!");  
  }
});

  
module.exports = router;