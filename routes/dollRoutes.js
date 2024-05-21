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

// Doll form
router.get("/sell-item",  (req, res) => {
  res.render("doll");
});

// Installing async function
router.post( "/sell-item",
  upload.single("itemImage"),
  async (req, res) => {
    try {
      const doll = new registration(req.body);
      doll.itemImage = req.file.path; // Sends image url to db
      console.log("Doll added", doll);
      await doll.save();
      res.redirect("/dollList");
    } catch (error) {
      res.status(400).render("addDoll");
      console.log(error);
    }
  });

// Fetching doll from the db
router.get("/dollList",
async (req, res) => {
  try {
    let dolls = await registration.find();
    res.render("renderdoll", { dolls: dolls });
    } catch (error) {
      res.status(400).send("Unable to fetch dolls from the database");
    }
  }
);


module.exports = router;

