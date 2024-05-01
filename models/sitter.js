const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema( {
  name:{
    type:String,
    trim:true
  }, 
  age:{
    type:String,
    trim:true
  } , 
  location:{
    type:String,
    trim:true
  }, 
  dob:{
    type:Date,
    trim:true
  }, 
  gender:{
    type:String,
    trim:true
  },   
  nextOfkin:{
    type:String,
    trim:true
  },
  NIN:{
    type:String,
    trim:true
  },  
  recommendersName:{
    type:String,
    trim:true
  }, 
 religion:{
    type:String,
    trim:true
  },
  educationLevel:{
    type:String,
    trim:true
  },  
  sitterNumber:{
    type:String,
    unique:true
  },
  contacts:{
    type:String,
    trim:true
  }

});


module.exports = mongoose.model("Sitter",registrationSchema )