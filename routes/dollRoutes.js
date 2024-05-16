const express = require("express");
const router = express.Router();
const multer = require("multer");
//import model
const registration = require("../models/doll");

//image upload
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
let upload = multer({ storage: storage });

router.get("/sell-item", (req, res) => {
  res.render("doll");
});

router.post("/sell-item", upload.single("itemImage"), async (req, res) => {
  try {
    let itemImagePath = "";
    if (req.file && req.file.path) {
      itemImagePath = req.file.path;
    }
    const doll = new registration({
      dob: req.body.dob,
      itemName: req.body.itemName,
      itemImage: req.body.itemImage,
      itemPrice: req.body.itemPrice,
      seller: req.body.seller,
      description: req.body.description,
    });
    console.log("__________________", itemImagePath)
    await doll.save();
    res.redirect("/dollList");
  } catch (error) {
    console.error("Error adding item.", error)
    res.status(400).render("doll", { title: "Add Doll" });
  }
  // res.redirect("/index")
});

//fetching dolls from db
router.get("/dollList", async (req, res) => {
  try {
    const dolls = await registration.find();
    res.render("renderdoll", {
      title: "Doll List",
      dolls: dolls,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
