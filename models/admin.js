const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

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
  email:{
    type:String,
    trim:true
  },  
  nin:{
    type:String,
    trim:true
  },  
  phone:{
    type:String,
    trim:true
  },
  role:{
    type:String,
    trim:true
  }, 

});

registrationSchema.plugin(passportLocalMongoose ,{
    usernameField:"email"
})
module.exports = mongoose.model("Register",registrationSchema )