const express = require("express");
const router = express.Router()

//import model
const Registration =require("../models/admin")

router.get("/registeradmin", (req, res) => {
    res.render("register-admin");
  });

  router.post("/registeradmin", async (req, res) => {
    try{
      const admin = new Registration(req.body);
      await Registration.register(admin,req.body.password,(err)=>{
        if(err){
            throw err
        }
        // res.redirect("/registeradmin")
      });
    //   res.redirect("registeradmin")
      console.log(admin)
      res.redirect("/login")
    } catch (error){
      res.status(400).send("sorry something went wrong")
   console.log("error registering admin", error);
    }
//   router.post("/registeradmin", (req, res) => {
//     const admin = new registration(req.body)
//     admin.save();
//     console.log(admin)
//     res.send("sucess")
//     // res.redirect("/index")

// });

});
module.exports = router;

