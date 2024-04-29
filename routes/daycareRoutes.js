const express = require("express");
const router = express.Router();
const passport =require("passport");

router.get("/daycare", (req, res)=>{
    res.render("daycare")
})

router.post("/daycare", passport.authenticate("local",{failureRedirect: "/daycare"}), (req, res)=> {
    res.send("success") 
 });