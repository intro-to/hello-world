const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema( {
 health_rating:{
    type:String,
    trim:true
  }, 
  feeding_rating:{
    type:String,
    trim:true
  } , 
  core_activities_rating:{
    type:String,
    trim:true
  }, 
 discipline_rating:{
    type:Date,
    trim:true
  }
 

});


module.exports = mongoose.model("Registration",registrationSchema )