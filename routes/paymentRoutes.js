const express = require("express");
const router = express.Router();

//import model
const Payment= require("../models/payment");

router.get("/payment", (req, res) => {
  res.render("payment");
});

router.post("/payment", (req, res) => {
  const payment = new registration(req.body);
  payment.save();
  console.log(payment);
  res.redirect("paymentmanagement");
  // res.redirect("/index")
});

//fetching payments from the db
router.get("/paymentmanagement", async (req, res) =>{
    try {
      let payments = await Payment.find()
      console.log("this are the payments:" + payments)
      res.render("paymentmanagement" , {payments:payments})
    } catch (error) {
      console.log(error)
  
    }
    
  });
  router.post("/deletepayment", async (req, res) => {
    try {
      console.log (req.body.id)
      await registration.deleteOne({_id:req.body.id});
      res.redirect("back")
    } catch (error) {
      res.status(400).send("unable to delete payment from the db")
      console.log("Error deleting payment", error);
    }
  });
module.exports = router;
