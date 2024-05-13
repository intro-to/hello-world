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
  Location:{
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
  nextOfKin:{
    type:String,
    trim:true
  },
  timeofArrival:{
    type:String,
    trim:true
  },  
  parentName:{
    type:String,
    trim:true
  }, 
  fees:{
    type:Number,
    trim:true
  },
  periodofStay:{
    type:String,
    trim:true
  },  
  babiesNumber:{
    type:String,
    unique:true
  },
  nameofpersontakingcare:{
    type:String,
    trim:true
  }, 
  TimeOut:{
    type:String,
    trim:true
  },
  status:{
    type:String,
    trim:true,
  } 

});


module.exports = mongoose.model("Registration",registrationSchema )