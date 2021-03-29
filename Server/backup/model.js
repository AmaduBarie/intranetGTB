const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username:{
      type:String,
      required:true
    },
    email:{
    type:String,
    required:true
    }, 
    img:{
    type:String,
    required:true
    },
    department:{
    type:String,
    required:true
    },
    password:{
    type:String,
    required:true
    },date:{
    type:Date,
    required:true
    }
    // posts:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}]
  })
  
  const calender = new mongoose.Schema({
    title:{type:String,required:true},
    setter:{type:String,required:true},
    attendance:{type:Array,required:true},
    start:{type:Date,required:true}, 
    description:{type:String,required:true}
  })


  exports.calenders = mongoose.model("Calender",calender)
  exports.users = mongoose.model("Users",user)
