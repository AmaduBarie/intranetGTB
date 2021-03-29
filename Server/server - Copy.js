const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser')
const http = require("http");
const {users,calenders,notifications} = require('./model')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser') 
const fileUpload = require('express-fileupload')
const generateUniqueId = require('generate-unique-id');
const socketIo = require("socket.io");


const app = express()
mongoose.connect('mongodb://localhost/gtb', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
// db.on('error',()=>console.log("err"));
db.once('open', function() {
  console.log("connected")
}); 




app.use(fileUpload({
  limits: { fileSize: 5000 * 1024 * 1024 },
}));
// console.log(path.join(__dirname, 'profile')) 
// app.use(express.static(path.join(__dirname, 'profile')))
app.use(cookieParser('KZNUg5LryuPp5HJtApTe?uyVGWCNPw$uBE4f6NcVh8dZC?GPmfXYk^TZYvQGGaQkM%3ZAwNG5jF8'))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({ origin: '*'}))
const port = process.env.PORT || 5000


// const us = new User({username:'masie',email:'masie@gmail.com'})
// us.save( (err,usr)=>{
//   const us = new Post({title:'q masie',body:'stay at mas',user:usr._id})
//   us.save( (err,po)=>{
//     console.log(po)
//   })
// })

// Post.find({username:'alex'},(err,obj)=>{
//   const us = new Post({title:'alex 1',body:'stay at lex 1',user:obj._id})
//     us.save( (err,po)=>{
//       console.log(po)
//     })
// })


// 60509e8eb186f531ec7530cf
// users.find({ $and: [{department: "Technology" }, {$nor: { $elemMatch: { _id:'60509e8eb186f531ec7530cf'}}}]})
// ( { qty: { $ne: 20 } } )



  
//   console.log(event)
// })


// User.deleteMany((err,doc)=>console.log(doc))
app.post('/signup', (req, res) => {

  const id = generateUniqueId({
    length: 20
  });
app.get('/profile/:img', (req, res) => {
console.log("yes am hit")
  });

users.findOne({$or:[{email:req.body.email}, {$and:[{username: req.body.username },{department:req.body.department}]}] }, (err, doc) => {
 if(doc){
   res.status(200).end('User exist') 
 }else{

    // delete req.body.vPassword
   console.log(req.body)
  const us = new users({...req.body,img:`${id}.jpeg`,date:new Date().toISOString()})
   us.save( (err,usr)=>{
     console.log(err)
   return usr && res.status(200).end('success') || err && res.status(200).end('server error')
  
})
 }
})






}).get('/home', (req, res) => { 
    
    res.status(200).end('server error')
}).post('/image', (req, res) => { 
  
    req.files.file.mv(__dirname+'/profile/'+req.body.url)
   console.log() 
    res.status(200).end('server seccess')
})
.post('/profile', (req, res) => { 
    console.log(req.body)
      res.status(200).end('server error')
}).get('/all', (req, res) => { 
   users.find({},(err,doc)=>res.status(200).send(doc)) 
}).post('/progress', (req, res) => { 
  // console.log(req.body) 
  calenders.findOne({_id:req.body.task},(err,doc)=>{
    doc.attendance = doc.attendance.map(e => {
       
        if(e._id===req.body.me){
          e = {...e,process:req.body.stage}
        }         
        return e
      });
      
  })
 
  //   console.log("attendance")
  //   console.log(doc.attendance)
  // // let change = doc[0].attendance.forEach(e => {
  // //   if(e._id===req.body.me){
  // //     e[process] = req.body.stage
  // //   }
  // //   return e
  // // });
  // // docs={...doc[0],attendance:change}

  // console.log(docs)
  // }) 
}).get('/del', (req, res) => { 
   users.deleteMany({},(err,doc)=>console.log(doc)) 
   calenders.deleteMany({},(err,doc)=>console.log(doc)) 
   notifications.deleteMany({},(err,doc)=>res.status(200).send(doc)) 
}).get('/cal', (req, res) => { 
   calenders.find({},(err,doc)=>res.status(200).send(doc)) 
})
.post('/login', (req, res) => {  
  try {
     users.findOne({$and:[{email: req.body.email },{password:req.body.password}] }, async (err, doc) => {
       
      if(doc){ 
       let alldata = {}  

        users.find({ $and: [{department: doc.department},{_id:{$ne:doc._id}}]})
        .select('img date _id username')        
        .exec(function (err, atten) { 
          // console.log('user area')
          // console.log(atten)
          if(alldata.event && alldata.chats ){
            //  .cookie('XYZ', doc._id, {domain:"http://localhost:5000/" ,sameSite:'none', signed: true, expires: new Date(Date.now() + ( 60 * 60 * 24 * 30)), httpOnly: true })
             res.status(200).send({...alldata,me:{department:doc.department, name: doc.username, img: doc.img, i:doc._id},atten})             
          }else{
            alldata = {...alldata,me:{department:doc.department, name: doc.username, img: doc.img, i:doc._id},atten} 
          } 
         });
       calenders.find({$or:[{setter:doc._id},{"attendance._id":`${doc._id}` }]},(err,event)=>{
        if(alldata.me && alldata.chats){
            // .cookie('XYZ', doc._id, {domain:"http://localhost:5000/" ,sameSite:'none', signed: true, expires: new Date(Date.now() + ( 60 * 60 * 24 * 30)), httpOnly: true })
            res.status(200).send({...alldata,event})             
         }else{
           alldata = {...alldata,event} 
         }
        })

          notifications.find({$or:[{setter:doc._id},{"attendance._id":`${doc._id}` }]},(err,chats)=>{
        if(alldata.me && alldata.event){
            // .cookie('XYZ', doc._id, {domain:"http://localhost:5000/" ,sameSite:'none', signed: true, expires: new Date(Date.now() + ( 60 * 60 * 24 * 30)), httpOnly: true })
            res.status(200).send({...alldata,chats})             
         }else{
           alldata = {...alldata,chats} 
         }
        })
               // [{ 'sellerId.i': req.signedCookies.XYZ }]
     }else{
      res.status(200).send('Incorrect details')
    };
  })
  } catch (error) {
    console.log(error)
  }  
 
})
 

const server = http.createServer(app);
 

const io = socketIo(server);
// server-side
 
io.on("connection", (socket) => {   
 
  
  
  socket.on("oauth", (msg) => {
    console.log("oauth")
    console.log(msg) 
    socket.join(msg.room);
    socket.ids = msg._id      
       io.to(msg.room).emit('view',{id:msg._id,sts:'online'})
    
  })
 
  socket.on("disconnect", () => {
   let id = socket.ids
   let room = socket.room
    if(socket.id){ 
    users.updateOne({_id:id},{date:new Date().toISOString()}, function (err, docs) {

      if (err){
          console.log(err)
      }else{
        io.to(room).emit('view',{id,sts:'offline'})
        console.log(docs)
      }
  });}
   
    console.log(socket.id)
  });

  socket.on('message',(msg)=>{ 
    const calend = new calenders(msg.save)    
    calend.save((err,usr)=>{ 
      console.log(err)
      if(usr){
         io.to(msg.room).emit('replydate', usr);
       
      }      
    })
  })

  
  socket.on('view',(msg)=>{ 
     io.to(msg.room).emit('view',{id:msg._id,sts:'online'})
  })

  socket.on('notification',(msg)=>{ 
    // socket.join(msg.room);
  const obj = {img:msg.img,msg:msg.msg, username:msg.username, setter:msg.setter,attendance:msg.attendance,date:{datesd:new Date().toISOString(), date:new Date().toLocaleDateString(),time:new Date().toLocaleTimeString()}}
  console.log(new Date().toISOString())
  const notic = new notifications (obj)    
    notic.save((err,chat)=>{ 
      console.log(err)
      if(chat){
        console.log(socket.ids)
        io.to(msg.room).emit('notification', chat);
      }      
    }) 
  })
  
  socket.on('progress',(msg)=>{ 
   
    calenders.findOne({_id:msg.task},(err,doc)=>{
    
      doc.attendance = doc.attendance.map(e => {
        //  console.log(msg)
          if(e._id===msg.me){
            e = {...e,proces:msg.stage}
            
          }         
          return e
        });
        // console.log(doc)
    const calend = new calenders(doc)    
    calend.save((err,usr)=>{ 
      if(usr){       
         io.to(msg.room).emit('progress', {msg:msg,val:usr});
      }      
    })
    })
    
  })
});



io.on("connect_error", (err) => {

  console.log(`connect_error due to ${err.message}`);
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})







