var express = require('express');
var bodyParser = require('body-parser')
var w = require('ws');
var route = require('./Route')
const path = require('path');
require('dotenv').config()
var fs = require('fs')
const bcrypt = require('bcrypt');
var cors = require('cors');
var dateFns =  require('date-fns')
var fileupload = require('express-fileupload')
var cookieParser = require('cookie-parser')
var generateUniqueId = require('generate-unique-id'); 
const { timeout, products,users } = require('./schema');
 

   

var app = express()
app.use(fileupload())
app.use(cookieParser('qj?gP?Ve@sF7dJ7yQ_c=&KZNUg5LryuPp5HJtApTe?uyVGWCx^!kNPw?a$uBE4f6NcVh8da^_UZC?GPmfXYk^TZYvC=&s_rQGGaQkM%3ZAwNG5_gc!ajF86+gy!G@+s8'))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(cors({ origin: '*'  }))
app.use(cors({ origin: 'chatsmarket.com'}))
app.use('/chatmarket', route)
app.use(express.static('Public'))



app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  // res.sendFile(path.join(__dirname, '/Html/maintainance.html'));
});
// app.listen(9000,()=>console.log("listing here"));
 app.get('/g', function (req, res) {
    products.find({},(e,d)=>res.send(JSON.stringify(d)))
});
let {addHours,differenceInHours,differenceInDays} = dateFns
var lookup = {}
const limit = 12
var phone = {}
// app.get('/exits', (req, res) => {res.send('good')})
// for sending images

//  products.deleteMany({},(e,i)=>console.log(i))

app.post('/login', (req, res) => { 
 
  try {
     users.findOne({ $or: [{ email: req.body.email }, { name: req.body.email },{phone:{$regex : `.*${req.body.email}.*`}}] }, (err, doc) => {
    if(doc){  bcrypt.compare(req.body.password, doc.password, function (err, result) { 
      if (result){ 
        phone ={...phone,[doc._id]:{phone:doc.phone}}       
      
      }  res.status(200).send('Incorrect details')
    })}else{
      res.status(200).send('Incorrect details')
    };
  })
  } catch (error) {
    console.log(error)
  }  
 
})




 
app.post('/chat', (req, res) => {  
        if (req.signedCookies.XYZ) {
          products.findOne({ _id: req.body.prod }, function (err, doc) {
            if (doc) { 
              let id = generateUniqueId({
                length: 15,
                useLetters: true,
                useNumbers: true
              });

              let d = ''
              for(let i=0;i<5;i++){
                d = (Math.random()*10000000000000000).toString(32)
              }

              let path = `${id}${d}`

              let dir1 =  __dirname + `/Public/Chat/${req.body.prod}`;
              let dir2 =  __dirname + `/Public/Chat/${req.body.prod}/${path}`;
              if (fs.existsSync(dir1)){
                fs.mkdirSync(dir2);
              }else{
                fs.mkdirSync(dir1);
                fs.mkdirSync(dir2);
              }


              doc.chats = [{...req.body.me,cdate: `${new Date().toLocaleTimeString()}_${new Date().toDateString()}`},...doc.chats];
              doc.con = {...doc.con,[`_${req.body.prod}${req.body.me.i}`]:[{sh:false, from: 'none',id:'none',path}]}         
              doc.notif={...doc.notif,[`_${req.body.prod}${req.body.me.i}`]:{ from: 'none',count:0,cdates:`${new Date().toLocaleTimeString()}_${new Date().toDateString()}`}}
              doc.save((err, d) => {
                if (d) { 
                    d.con  =''
                    d.chats =''
                   d.notif = d.notif[`_${req.body.prod}${req.body.me.i}`]          
                  res.status(200).send(d)                   
                    lookup[doc.sellerId.i]  &&  lookup[doc.sellerId.i].send(JSON.stringify({prod:req.body.prod,pnewChat: {...req.body.me,cdate: `${new Date().toLocaleTimeString()}_${new Date().toDateString()}`}}))
                } else {
                  res.status(200).end('err')
                }
              });
            } else {
              res.status(200).send('err')
            }
          });
        } else {
          res.status(200).end('err')
        }
      })
      .put('/home', (req, res) => { 
        var items = { time: new Date().toLocaleTimeString(), date: new Date().toDateString(), seller: [], chat: [], market: [], login: '', link: { p: '', n: '' } }
        var s = false
        var c = false
        var m = false
        var l = false
    
        if (req.signedCookies.XYZ) {
          // user auth
          users.findOne({ _id: req.signedCookies.XYZ }, (err, doc) => {
            // console.log(doc)
            if(doc){
              phone ={...phone,[doc._id]:{phone:doc.phone}} 
             items.login = {numverif:doc.numVerify==='yes'?'y':'n',verif:doc.verify ==='xyz'?'y':'n', name: doc.name, photo: doc.photo, i: doc._id, phone: doc.phone, email: doc.email } 
            }
            
    
    
    
            l = true
            if (c && s && m && l) {
              res.send(items)
            }
          })
    
    
          // seller chart
          products.find({ 'sellerId.i': req.signedCookies.XYZ })
            .select('detail sellerId chats photo date time notif cdates')
            .exec(function (err, seller) {
              items.seller = seller
              s = true
              if (c && s && m && l) {
                res.send(items)
              }
            })
    
          // client chart
          products.find({ chats: { $elemMatch: { i: req.signedCookies.XYZ } } })
            .select('detail photo chats date sellerId notif ')
            .exec(function (err, chat) {
              for (let ii = 0; ii < chat.length; ii++) { 
                chat[ii].notif = chat[ii].notif[`_${chat[ii]._id}${req.signedCookies.XYZ}`]
                chat[ii].chats = chat[ii].chats.length
              }
              items.chat = chat
              c = true
              if (c && s && m && l) {
                res.send(items)
              }
            });
    
    
          // market
          if (req.body.from !== 'nolink' && req.body.from !== req.signedCookies.XYZ) {
            links.findOne({ _id: req.body.from }, (e, d) => {
              if (d) {
                items.link.photo = d.photo
                items.link.n = d.n
                products.find({ 'sellerId.i': d.i })
                  .select('detail photo date sellerId')
                  .exec(function (err, mk) {
                    items.market = mk
                    m = true
                    if (c && s && m && l) {
                      res.send(items)
                    }
                  });
              } else {
                items.link = "invalid link"
                m = true
                if (c && s && m && l) {
                  res.send(items)
                }
              }
            })
    
          } else {
            products.find({ $and: [{ chats: { $not: { $elemMatch: { i: req.signedCookies.XYZ } } } }, { $nor: [{ 'sellerId.i': req.signedCookies.XYZ }] }] })
              .select('detail photo chats date sellerId')
              .exec(function (err, docx) {
                items.total = docx.length
                for (let i = (docx.length - 1); i >= ((docx.length - limit) > -1 ? docx.length - limit : 0); i--) {
                  if (docx[i]) {
                    docx[i].chats = docx[i].chats.length
                    items.market.push(docx[i])
                  }
    
                }
                m = true
                if (c && s && m && l) {
                  res.send(items)
                }
              });
          }
    
        } else {
          if (req.body.from !== 'nolink') {
            links.findOne({ _id: req.body.from }, (e, d) => {
              if (d) {
                items.link.photo = d.photo
                items.link.n = d.n
                products.find({ 'sellerId.i': d.i })
                  .select('detail photo date sellerId')
                  .exec(function (err, mk) {
                    items.market = mk
                    m = true
                    if (c && s && m && l) {
                      res.send(items)
                    }
                  });
              } else {
                items.link = "invalid link"
    
                res.send(items)
    
              }
            })
    
          } else {
    
            products.find({})
              .select('detail chats photo date sellerId')
              .exec(function (err, docx) {
                items.total = docx.length
                for (let i = (docx.length - 1); i >= ((docx.length - limit) > -1 ? docx.length - limit : 0); i--) {
                  if (docx[i]) {
                    docx[i].chats = docx[i].chats.length
                    items.market.push(docx[i])
                  }
                }
                res.send(items)
              });
          }
    
        }
      })  


var http = require('http').createServer(app);
let s = new w.Server({ server: http });



 function noop() { }

function heartbeat() {
  this.isAlive = true;
}



s.on('connection', function (ws,r) {
  console.log("connected")
  try {

    ws.isAlive = true;
    ws.on('pong', heartbeat);


const surl = r.url.split('/?id=')
  //surl[1])
 
    if(surl[0]!=='/'){

         //"new connection")
         //surl[1])
    ws.id = surl[1]  
    //"ids h s%",ws.di)
    ws.d= new Date().toDateString()
    ws.a= false
    ws.t= new Date().toLocaleTimeString()
    // const resend = lookup[surl[1]]&&lookup[surl[1]].resend||''
    if(lookup[surl[1]]){
      ws.resend = lookup[surl[1]].resend||''
      delete lookup[surl[1]]
    }
  //  ws.resend =  resend
  ws.phone =  (lookup[surl[1]] && lookup[surl[1]].phone) || null
    lookup[surl[1]] = ws
   
    ws.send(JSON.stringify({confirm:surl[1]}))
   

   if(ws.id!==''&&surl[1] !== 'undefined' && surl[1]!== undefined){
     ws.timer =  setInterval(async ()=>{
      console.log('checking idss %s', ws.id )
      console.log(ws.id)
       
          if (ws.isAlive === false){
              //"ids check")
              //ws.id)
             
              clearInterval(ws.timer)
              return ws.terminate();
          }
          ws.isAlive = false;
        await  ws.ping(noop);  

  }, 10000);
   }else{
     ws.id= false
   }
   
}
 b(s,ws)   

    
 

    ws.on('message', (e) => {
// //e)
// ws.send(JSON.stringify('me can go')) 
      const msg = JSON.parse(e)
      //msg)
// //msg)
 
      if (msg.i) { 
        //"new connection")
        ws.id = msg.i
        //"id %s",ws.id)
        ws.d= new Date().toDateString()
        ws.t= new Date().toLocaleTimeString()     
        ws.phone = (lookup[msg.i] && lookup[msg.i].phone) 
        if(lookup[msg.i]){
          delete lookup[msg.i]
        }
       ws.resend = ''
       b(s, ws)
       ws.a = false
        lookup[msg.i] = ws
   
        if(msg.i !== 'none' && msg.i !== undefined){
          ws.timer =  setInterval(async ()=>{
            console.log('checking idss %s', ws.id )
            console.log(ws.id)
       
          if (ws.isAlive === false){
              //"ids check")
              //ws.id)
             
              clearInterval(ws.timer)
              return ws.terminate();
          }
          ws.isAlive = false;
        await  ws.ping(noop);  

  }, 10000);
        }else{
          ws.id= false
        }
          
     
      // } else if (msg.ii) { 
      //   lookup[msg.to].send(JSON.stringify({ iid: msg.ii, m: 'online' }))
     
      } else if (msg.msgdb) {
   //"msgdb")
   //msg)
  //  console.log("msgdb")
  //  console.log(msg)
  try {
    let sx = true
   let c = true
   if(lookup[msg.seller] && lookup[msg.seller].resend===msg.id){
     sx = false
   } 
   if(lookup[msg.me] && lookup[msg.me].resend===msg.id){
    c = false
   }
   if(sx && c){
        // message for real send message
        products.findOne({ _id:msg.prod }, function (err, doc) {
        
          
          if (doc) { 
          
            if(doc.notif[`_${msg.prod}${msg.me}`].from===msg.from){
              let d = doc.notif[`_${msg.prod}${msg.me}`].count + 1
              doc.notif[`_${msg.prod}${msg.me}`].count = d
            }else{           
              // //msg.from)
              doc.notif[`_${msg.prod}${msg.me}`].from=msg.from
              doc.notif[`_${msg.prod}${msg.me}`].count = 1
            }

             doc.notif[`_${msg.prod}${msg.me}`].cdates = `${new Date().toLocaleTimeString()}_${new Date().toDateString()}`
             doc.cdates = `${new Date().toLocaleTimeString()}_${new Date().toDateString()}`
     
           
              
            // for (let ite = 0; ite <doc.chats.length; ite++) {
            //   if(doc.chats[ite].i===msg.me){
            //     doc.chats[ite].cdate===`${new Date().toLocaleTimeString()}_${new Date().toDateString()}`
            //   }              
            // } 
            
          if( doc.con[`_${msg.prod}${msg.me}`][doc.con[`_${msg.prod}${msg.me}`].length-1].date !== new Date().toDateString()){
              
              doc.con[`_${msg.prod}${msg.me}`] = [...doc.con[`_${msg.prod}${msg.me}`], {today:'Today', from: msg.from, msg: msg.msgdb,  date:new Date().toDateString(),time: new Date().toLocaleTimeString() }];
                        
            }else{
              doc.con[`_${msg.prod}${msg.me}`] = [...doc.con[`_${msg.prod}${msg.me}`], { from: msg.from, msg: msg.msgdb,  date:new Date().toDateString(),time: new Date().toLocaleTimeString() }];
            
            }
         
            // }
           
            const ob = new products(doc)
            ob.save(() => {
              //'saved here')           
             //o)
              const obj = {count: doc.notif[`_${msg.prod}${msg.me}`].count,from: doc.notif[`_${msg.prod}${msg.me}`].from,chats: doc.con[`_${msg.prod}${msg.me}`]}
              ws.send(JSON.stringify({idxx:msg.id,ret:'ret',m:obj, to:msg.prod,me: msg.me}))
          
              if(msg.from==='chat'){  
               if( lookup[msg.me]){
                 lookup[msg.me].resend=msg.id
               }  
              

    //  if(lookup[msg.seller] &&   lookup[msg.seller].a && lookup[msg.seller].after  &&  differenceInHours(new Date(),dateFns.parseISO(lookup[msg.seller].after))) {
    //               lookup[msg.seller].after = addHours(new Date(),2)
    //               project.sendMessage({
    //                 to_number: phone[msg.seller].phone, 
    //                 content: 'Chat Market. \n You have lot of unread messages in your shop from clients' 
    //                 }, function(err, message) {
                      
    //                 })}
    //               ws.a= true
    // ws.after = new Date().toISOString()
                  lookup[msg.seller] && lookup[msg.seller].send(JSON.stringify({ids:'i'}))
              }else if(msg.from==='shop'){  
                if(lookup[msg.seller]){
                    lookup[msg.seller].resend=msg.id  
                }

              // console.log(lookup[msg.me] && lookup[msg.me].after && lookup[msg.me].a &&  differenceInSeconds(dateFns.parseISO(lookup[msg.me].after)))
             
                 
            
              
              // if(lookup[msg.me] && lookup[msg.me].a && lookup[msg.me].after &&  differenceInHours(new Date(),dateFns.parseISO(lookup[msg.me].after))){
              //       lookup[msg.me].after = addHours(new Date(),2)
              //       project.sendMessage({
              //         to_number: phone[msg.me].phone, 
              //         content: 'Chat Market. \n You have lot of unread messages from sellers' 
              //         }, function(err, message) {
                        
              //         })}
              
                        
                lookup[msg.me] && lookup[msg.me].send(JSON.stringify({ids:'i'}))
              }
            });
          }  
        })
      }else{
        //"resending here")
        ws.send(JSON.stringify({idxx:msg.id,resend:'ret'}))             
      }
  } catch (error) {
    
  }
   
      } else if (msg.msgfind) {   
 
        products.findOne({ _id:msg.prod  }, function (err, obj) {
       
          if (obj) {
            // shop
            // chat

 
           const focus =  `${msg.prod}${msg.c||msg.me}`
          
            // var count = obj.count 
              // //"msg am finding")
              // //msg)
        
            
            // // if(msg.msgfind!==obj.from){
            //   console.log("logging the obj")
            //   console.log(obj)
            //   console.log(obj.notif[`_${focus}`].from)
              if(msg.msgfind!==obj.notif[`_${focus}`].from){
                // obj.count=0
                obj.notif[`_${focus}`].count = 0
                if(msg.res){
                  // count = 0
                }
            } 
          const sobj = new products(obj)
            sobj.save((err, o) => {  
                
              if (o) {
             //"o is here")
                // objec.count = count     
                // o.notif[`_${focus}`].count = count   
                const me = {fm:msg.msgfind,count: o.notif[`_${focus}`].count,from: o.notif[`_${focus}`].from,chats: o.con[`_${focus}`],id:focus,prod:msg.prod}
                // const me = {count:o.notif[`_${focus}`].count, from: o.notif[`_${focus}`].from,chats: o.con[`_${focus}`],id:focus,prod:msg.prod}
                  let collector = { }

                    if(msg.c){
                      var done = {c:false,s:false}
                      
                       timeout.findOne({ _id:msg.c }, (err, os) => {
                        collector.c = os                        
                        // if (os) {                          
                          done.c=true
                          if(done.c && done.s){
                            lookup[msg.c] &&
                            lookup[msg.c].send(JSON.stringify({date:new Date().toDateString(),time: new Date().toLocaleTimeString(), msg: { me, collector } }))
                             ws.send(JSON.stringify({idxx:msg.id,date:new Date().toDateString(),time: new Date().toLocaleTimeString(), msg: { me, collector } }))
                         
                              
                             
                          // }
                           }  
                      })
                      timeout.findOne({ _id: msg.me }, (err, os) => {
                        collector.s = os
                        // if (os) {
                          done.s= true
                          if(done.c && done.s){
                            lookup[msg.c] &&
                            lookup[msg.c].send(JSON.stringify({date:new Date().toDateString(),time: new Date().toLocaleTimeString(), msg: { me, collector } }))
                             ws.send(JSON.stringify({idxx:msg.id,date:new Date().toDateString(),time: new Date().toLocaleTimeString(), msg: { me, collector } }))
                         
                              
                            
                           
                        // }
                      }
                      })

                      // from chat
                    }else if(msg.s){
                      var done = {c:false,s:false}
                    
                       timeout.findOne({ _id:msg.s }, (err, os) => {
                      
                        collector.s = os
                        // if (os) { 
                          done.s=true
                          if(done.c && done.s){

                            ws.send(JSON.stringify({idxx:msg.id,date:new Date().toDateString(),time: new Date().toLocaleTimeString(), msg: { me, collector } }))
                             lookup[msg.s] &&
                                lookup[msg.s].send(JSON.stringify({date:new Date().toDateString(),time: new Date().toLocaleTimeString(), msg: { me, collector } }))
                         
                             
                          // }
                           }  
                      })
                      timeout.findOne({ _id: msg.me }, (err, os) => {
                        collector.c = os
                        // if (os) {
                          done.c= true
                          if(done.c && done.s){
                            ws.send(JSON.stringify({idxx:msg.id,date:new Date().toDateString(),time: new Date().toLocaleTimeString(), msg: { me, collector } }))
                             lookup[msg.s] &&
                                lookup[msg.s].send(JSON.stringify({date:new Date().toDateString(),time: new Date().toLocaleTimeString(), msg: { me, collector } }))
                         
                        // } 
                      }
                      })
                    } 
              }
            })
          }
        })
      // }else{
        
      //   ws.send(JSON.stringify({idxx:msg.id,resend:'ret'})) 
      //   //'resending here')  
      // }
    }else if(msg.img){
      

    // let sRepeat =  msg.me   
   console.log('here prod')
     console.log(msg.prod)
    //msg) 
    if(lookup[msg.me] && lookup[msg.me].resend!==msg.id){
      return
    products.findOne({ _id:msg.prod }, function (err, doc) {
 
    if (doc) { 
      console.log("the find product")
      console.log(doc._id)
     
      // console.log(doc)
      if(doc.notif[`_${msg.prod}${msg.mee||msg.me}`].from===msg.from){    
        var d = doc.notif[`_${msg.prod}${msg.mee||msg.me}`].count + 1
        doc.notif[`_${msg.prod}${msg.mee||msg.me}`].count = d
      }else{
    
        doc.notif[`_${msg.prod}${msg.mee||msg.me}`].from=msg.from
        doc.notif[`_${msg.prod}${msg.mee||msg.me}`].count = 1
      }
     
  //  console.log(msg)
    // console.log(doc.con)
    const len = doc.con[`_${msg.prod}${msg.mee||msg.me}`].length  
    const path = doc.con[`_${msg.prod}${msg.mee||msg.me}`][0].path  

  
    let id = generateUniqueId({
      length: 10,
      useLetters: true,
      useNumbers: true
    });
      let filename = `Chat/${doc._id}/${path}/${id}.jpeg`
      console.log(path)
      console.log(filename)
      // return
      fs.writeFile(__dirname + `/Public/${filename}`,  msg.img, { encoding: 'base64' }, function (err) {
     

        
        
          // return res.status(400).send(err);    

        if( doc.con[`_${msg.prod}${msg.mee||msg.me}`][doc.con[`_${msg.prod}${msg.mee||msg.me}`].length-1].date !== new Date().toDateString()){
          doc.con[`_${msg.prod}${msg.mee||msg.me}`] = [...doc.con[`_${msg.prod}${msg.mee||msg.me}`], {today:'Today',photo:`http://localhost:5000/${filename}` , from: msg.from, msg: msg.msg||'',  date:new Date().toDateString(),time: new Date().toLocaleTimeString() }];
                   
          }else{
            doc.con[`_${msg.prod}${msg.mee||msg.me}`] = [...doc.con[`_${msg.prod}${msg.mee||msg.me}`], {photo:`http://localhost:5000/${filename}` , from: msg.from, msg: msg.msg||'',  date:new Date().toDateString(),time: new Date().toLocaleTimeString() }];
       
          }

          const ob = new products(doc)
          ob.save((err, o) => {
            // console.log(o)
           if(o){
            ws.send(JSON.stringify({idxx:msg.id,img:'ret'}))      
             
                if(lookup[msg.s||msg.mee]){
                  lookup[msg.s||msg.mee].resend = msg.id
                } 3
               
              
           }
          });
     

              

            })

   
   
      // }
         }  
       })
      
     
   
    }}})

  



    ws.on('error', () => {
      //"error")
    })
 

 



    ws.on('close', () => {
      //ws.id)
      // ws.a = true
      c(s, ws.id)
    })

  } catch (error) {
    //error)
  }




})






async function b(s, ids) {
 try {
    s.clients.forEach((client) => {
    // && client.readyState === ws.OPEN
    // if (client.id !== id) {
      if (client.readyState === client.OPEN) {
       client.send(JSON.stringify({ m: 'online', id: ids.id }));
      client.id && client.id!=='none'  &&  ids.send(JSON.stringify({ m: 'online', id: client.id }));
      }
      
    // }
  })
 } catch (err) {
   //err)
 }
 
}




async function c(s, ws) {
  if (ws) {
    timeout.findOne({ _id: ws }, function (err, obj) {
      if (obj) {
       obj.date=new Date().toDateString()
        obj.time= new Date().toLocaleTimeString()     
        obj.save((err, objec) => {
          // //objec)
          if (objec) {
            s.clients.forEach((client) => {
              if (client.id !== ws && client.readyState === client.OPEN) {
                client.send(JSON.stringify({ m: 'offline', id: ws,   date:new Date().toDateString(),
                time: new Date().toLocaleTimeString() }));
              }
            })
            lookup[ws].a=true
            lookup[ws].after= addHours(new Date(),2).toISOString()
          }
        })
      } else {
        const tout = new timeout({
          _id: ws,
          date:new Date().toDateString(),
          time: new Date().toLocaleTimeString()
        })
        tout.save((err, ob) => {
          if (ob) {
            s.clients.forEach((client) => {
              if (client.id !== ws && client.readyState === client.OPEN) {
                client.send(JSON.stringify({ m: 'offline', id: ws , date:new Date().toDateString(),
                time: new Date().toLocaleTimeString() }));
              }
            })
             lookup[ws].a=true
             lookup[ws].after= addHours(new Date(),2).toISOString()
          }
        })
      }
     
    })

// setTimeout(() => {
//   console.log('id is here')
// console.log(lookup[ws].id)  
// }, 2000);



  }


}



http.listen(5000,'127.0.0.1', () =>console.log("running"))






