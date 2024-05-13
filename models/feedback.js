const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema( {
  good:{
    type:String,
    trim:true
  }, 
  bad:{
    type:String,
    trim:true
  } , 
  moderate:{
    type:String,
    trim:true
  }, 
  very_good:{
    type:Date,
    trim:true
  }, 
  gender:{
    type:String,
    trim:true
  }   
  

});


module.exports = mongoose.model("Registration",registrationSchema )