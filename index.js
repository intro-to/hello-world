//dependecies
const express = require("express"); // for posting
const mongoose = require("mongoose"); //for mongodb
const path = require("path"); 
const passport = require("passport");
const moment = require("moment")
const expressSession = require("express-session")({
  secret:"secret", 
  resave:false,
  saveUninitialized:false
}) 

require("dotenv").config();
const port = 3501;

//import register model with user details
const registration =require("./models/admin")


//import route
const registrationRoutes = require("./routes/registrationRoutes");
const sitterRoutes = require("./routes/sitterRoutes");
const parentRoutes = require("./routes/parentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authenticationRoutes = require("./routes/authenticationRoutes");
const paymentRoutes = require("./routes/paymentRoutes")
const dollRoutes= require("./routes/dollRoutes")
// const feedbackRoutes= require("./routes/feedbackRoutes")
//instantiations
const app = express();

//configgurations
mongoose.connect(process.env.DATABASE,);

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection successfully open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });

  app.locals.moment = moment
//  setting the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //specify the directory where the views are found

//middleware
app.use(express.static(path.join(__dirname, "public"))); //set directory for static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//expressSession configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//passport configs
passport.use(registration.createStrategy());
passport.serializeUser(registration.serializeUser());
passport.deserializeUser(registration.deserializeUser());


//Route
app.get("/registerbaby", (req, res) => {
  res.render("register_baby");
});
app.get("/registersitter", (req, res) => {
  res.render("register-sitter");
});
app.get("/registerparent", (req, res) => {
  res.render("parent");
});
app.get("/registeradmin", (req, res) => {
  res.render("register-admin");
});
app.get("/babiesUpdate", (req, res) => {
  res.render("babiesUpdate");
});
app.get("/babyClockin", (req, res) => {
  res.render("babyClockin");
});
app.get("/babyClockout", (req, res) => {
  res.render("babyClockout");
});
app.get("/sittersUpdate", (req, res) => {
  res.render("sittersUpdate");
});
app.get("/sitterClockin", (req, res) => {
  res.render("sitterClockin");
});
app.get("/sitterClockout", (req, res) => {
  res.render("sitterClockout");
});
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/feedback", (req, res) => {
  res.render("feedback");
});
app.get("/payment", (req, res) => {
  res.render("payment");
});
app.get("/sell-item", (req, res) => {
  res.render("doll");
});
// app.get("/feedback", (req, res) => {
//   res.render("feedback");
// });

//use imported routes
app.use("/", registrationRoutes);
app.use("/", sitterRoutes);
app.use("/", parentRoutes);
app.use("/", adminRoutes);
app.use("/",authenticationRoutes );
app.use("/", paymentRoutes);
app.use("/", dollRoutes);
// app.use("/", feedbackRoutes);
// app.use("/",daycareRoutes );



// app.get("/index", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/registerbaby", (req, res) => {
  res.sendFile(__dirname + "/register_baby.html");
});

app.post("/registerbaby", (req, res) => {
  console.log(req.body);
  let baby = req.body;
  // res.redirect("/index")
  res.json({ message: "baby registered", baby });
});

// For invalid routes
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

// Always the last line
app.listen(port, () => console.log(`listening on port ${port}`)); // new
