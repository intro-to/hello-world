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

//delete sitter from db
router.post("/delete", async (req, res) => {
  try {
    await registration.deleteOne({_id:req.body.id});
    res.redirect("back")
  } catch (error) {
    res.status(400).send("unable to delete sitter from the db")
    console.log("Error deleting sitter", error);
  }
});

//updating a sitter in the database
router.get("/sitterUpdate/:id", async (req, res) => {
  try {
    const sitterUpdate = await sittermagrment.findOne({ _id: req.params.id });
    res.render("sitterUpdate", { sitter: sitterUpdate });
  } catch (error) {
    console.log("error finding a sitter!", error);
    res.status(400).send("unable to find sitter from the db!");
  }
});

router.post("/sitterUpdate", async (req, res) => {
  try {
    await sittermagrment.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/sitter");
  } catch (error) {
    res.status(404).send("unable to update sitter in the db!");
  }
});
  
module.exports = router;