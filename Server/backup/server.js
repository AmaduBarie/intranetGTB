const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser')
const http = require("http");
const {users,calenders} = require('./model')
const cors = require('cors')
const cookieParser = require('cookie-parser') 
const generateUniqueId = require('generate-unique-id');
const socketIo = require("socket.io");


const app = express()
mongoose.connect('mongodb://localhost/gtb', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
// db.on('error',()=>console.log("err"));
db.once('open', function() {
  console.log("connected")
}); 





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


users.findOne({$or:[{email:req.body.email}, {$and:[{username: req.body.username },{department:req.body.department}]}] }, (err, doc) => {
 if(doc){
   res.status(200).end('User exist') 
 }else{

    // delete req.body.vPassword
   console.log(req.body)
  const us = new users({...req.body,img:id,date:new Date().toISOString()})
   us.save( (err,usr)=>{
     console.log(err)
   return usr && res.status(200).end('success') || err && res.status(200).end('server error')
  
})
 }
})






}).get('/home', (req, res) => { 
    
    res.status(200).end('server error')
})
.post('/profile', (req, res) => { 
    console.log(req.body)
      res.status(200).end('server error')
}).get('/all', (req, res) => { 
   users.find({},(err,doc)=>res.status(200).send(doc)) 
}).get('/del', (req, res) => { 
  //  users.deleteMany({},(err,doc)=>console.log(doc)) 
   calenders.deleteMany({},(err,doc)=>res.status(200).send(doc)) 
}).get('/cal', (req, res) => { 
   calenders.find({},(err,doc)=>res.status(200).send(doc)) 
})
.post('/login', (req, res) => {  
  try {
     users.findOne({$and:[{email: req.body.email },{password:req.body.password}] }, async (err, doc) => {
       
      if(doc){ 
       let alldata = {}  

        users.find({ $and: [{department: doc.department},{_id:{$ne :doc._id}}]})
        .select('img date _id username')        
        .exec(function (err, atten) { 
          console.log('user area')
          console.log(atten)
          if(alldata.event){
            //  .cookie('XYZ', doc._id, {domain:"http://localhost:5000/" ,sameSite:'none', signed: true, expires: new Date(Date.now() + ( 60 * 60 * 24 * 30)), httpOnly: true })
             res.status(200).send({...alldata,me:{department:doc.department, name: doc.username, img: doc.img, i:doc._id},atten})             
          }else{
            alldata = {...alldata,me:{department:doc.department, name: doc.username, img: doc.img, i:doc._id},atten} 
          } 
         });
       calenders.find({$or:[{setter:doc._id},{"attendance._id":`${doc._id}` }]},(err,event)=>{
        if(alldata.me){
            // .cookie('XYZ', doc._id, {domain:"http://localhost:5000/" ,sameSite:'none', signed: true, expires: new Date(Date.now() + ( 60 * 60 * 24 * 30)), httpOnly: true })
            res.status(200).send({...alldata,event})             
         }else{
           alldata = {...alldata,event} 
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
  
  socket.join(socket.handshake.query['room']);
  socket.id = socket.handshake.query['id']
  socket.on("disconnect", (reason) => {
    console.log('disconnet')
    console.log(socket.id)
  });

  socket.on('message',(msg)=>{ 
    const calend = new calenders(msg.save)    
    calend.save((err,usr)=>{ 
      console.log(err)
      if(usr){
        socket.in(msg.room).emit('replydate', usr);
      }      
    })
  })
});



io.on("connect_error", (err) => {

  console.log(`connect_error due to ${err.message}`);
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})







