const express = require("express");
const router = express.Router();

//import model
const registration= require("../models/expence");

router.get("/expence", (req, res) => {
  res.render("expence");
});

router.post("/expence", (req, res) => {
  const expence = new registration(req.body);
  expence.save();
  console.log(expence);
//   res.redirect("paymentmanagement");
 
});

module.exports = router;


// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.post('/expence', (req, res) => {
//   const { dop, amount, description, category } = req.body;

//   // Validate the input
//   if (!dop || !amount || !description || !category) {
//     return res.status(400).send('All fields are required');
//   }

//   // Assume you have a database connection here to save the data
//   // Example using a hypothetical saveExpense function
//   saveExpense({ dop, amount, description, category })
//     .then(() => res.status(200).send('Expense added successfully'))
//     .catch((error) => res.status(500).send('Error saving expense'));

//   // For now, just logging the received data
//   console.log(req.body);
//   res.send('Expense received');
// });

// // Function to simulate saving to the database
// function saveExpense(expense) {
//   return new registraton((resolve, reject) => {
//     // Simulating async database save operation
//     setTimeout(() => {
//       console.log('Expense saved:', expense);
//       resolve();
//     }, 1000);
//   });
// }

// app.listen(3001, () => {
//   console.log('Server running on port 3001');
// });
