const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema( {
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
  },
  totalPayment:{
    type:String,
    trim:true
  }  
  
});

module.exports = mongoose.model("Payment",paymentSchema )