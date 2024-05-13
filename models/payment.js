const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema( {
  date:{
    type:String,
    trim:true
  }, 
  name:{
    type:String,
    trim:true
  }, 
  numberOfBabies:{
    type:String,
    trim:true
  } 
  
});

module.exports = mongoose.model("Payment",registrationSchema )