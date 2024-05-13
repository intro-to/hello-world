const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema( {
  dob:{
    type:Date,
    trim:true
  },
  itemName:{
    type:String,
    trim:true
  }, 
  itemImage:{
    type:String,
    trim:true
  }, 
  itemPrice:{
    type:String,
    trim:true
  } , 
  seller:{
    type:String,
    trim:true
  },
  description:{
    type:String,
    trim:true
  }
  
});

module.exports = mongoose.model("Doll",registrationSchema )