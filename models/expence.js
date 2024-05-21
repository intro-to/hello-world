const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema( {
  dop:{
    type:String,
    trim:true
  }, 
  amount:{
    type:String,
    trim:true
  }, 
  description:{
    type:String,
    trim:true
  },
  category:{
    type:String,
    trim:true
  }  
  
});

module.exports = mongoose.model("Expence",registrationSchema )