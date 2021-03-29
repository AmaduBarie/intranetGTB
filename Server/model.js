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
    description:{type:String,required:true},
    task:{type:String,required:true}
  })

  const notification = new mongoose.Schema({
    setter:{type:String,required:true},
    img:{type:String,required:true},
    username:{type:String,required:true},
    msg:{type:String,required:true},
    attendance:{type:Array,required:true},
    date:{type:Object,required:true}
  })

  exports.calenders = mongoose.model("Calender",calender)
  exports.users = mongoose.model("Users",user)
  exports.notifications = mongoose.model("Chats",notification)
