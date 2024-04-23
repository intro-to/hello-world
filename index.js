//dependecies
const express = require("express"); // for posting
const mongoose = require("mongoose"); //for mongodb
const path = require("path"); 
const passport = require("passport");
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


//use imported routes
app.use("/", registrationRoutes);
app.use("/", sitterRoutes);
app.use("/", parentRoutes);
app.use("/", adminRoutes);
app.use("/",authenticationRoutes );

// app.get("/", (req, res) => {
//   res.send("Homepage! Hello world.");
// });

// app.get("/about", (req, res) => {
//   res.send("About page. Nice.");
// });

// `app.Method(PATH,HANDLER);

// app.get("/course", (req, res) => {
//   res.send("you have hit the course page");
// });

// app.get("/books/:bookId", (req, res) => {
//   res.send(req.params.bookId);
//   console.log(req.params.bookid);
// });

// app.get("/students/:name", (req, res) => {
//   res.send("This iis my students name" + req.params.name);
// });

// app.get("/students/:id", (req, res) => {
//   res.send("This iis my students name" + req.params);
// });

// //querry parrams
// app.get("/student", (req, res) => {
//   res.send("This is class" + req.querry.class + "cohort" + req.querry.cohort);
// });

// app.get("/babies", (req, res) => {
//   res.send("This is class" + req.querry.class + "age" + req.querry.age);
// });

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
