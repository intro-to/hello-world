const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema( {
  parentName:{
    type:String,
    trim:true
  }, 
  parentAge:{
    type:String,
    trim:true
  } , 
  parentLocation:{
    type:String,
    trim:true
  }, 
  parentSex:{
    type:String,
    trim:true
  },   
  parentNin:{
    type:String,
    trim:true
  },  
  parentContact:{
    type:String,
    trim:true
  },
  emergencyContact:{
    type:String,
    trim:true
  }

});


module.exports = mongoose.model("Parent",registrationSchema )