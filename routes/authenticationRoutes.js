const express = require("express");
const router = express.Router();
const passport =require("passport");

router.get("/login", (req, res) => {
    res.render("log")
})

router.post("/login", passport.authenticate("local",{failureRedirect: "/login"}), (req, res)=> {
    console.log("logged in user: ", req.session)
    res.redirect("/registerbaby") 
 });

 router.get("/logout", (req, res) => {
    if (req.session) {
        req.session.destroy((error) => {
            if (error){
                return res.status(500).send("error logging out..")
            }
            res.redirect("login");
        });
    }
 });

 router.get("/", (req, res) => {
    res.render("index")
});

router.get("/aboutus", (req, res) => {
    res.render("aboutus")
});

router.get("/review", (req, res) => {
    res.render("review")
});

router.get("/homepage", (req, res) => {
    res.render("homepage")
});

router.get("/dashboard", (req, res) => {
    res.render("dashboard")
});

module.exports = router ;