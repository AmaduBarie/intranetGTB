
var express = require('express')
require('dotenv').config()
var mongoose = require('mongoose')
var dateFns = require('date-fns')
const path = require('path');
var fs = require('fs');
var rmdir = require('rimraf');
var nodemailer = require('nodemailer');
var generateUniqueId = require('generate-unique-id');
const bcrypt = require('bcrypt');
const saltRnds = 10;
const domain = 'http://chatsmarket.com/' 



const limit = 12


const { users, products, links } = require('./schema');



mongoose.connect('mongodb://localhost/Chatmarket', { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
  console.log('connected')
}).catch(() => console.log('error'))

//  

let {isPast, addMinutes,differenceInDays} = dateFns
 

 
var route = express.Router()
route
  
  .post('/signup', (req, res) => {
    let verify  = generateUniqueId({
      length: 6,
      includeSymbols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      excludeSymbols: [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      useLetters: true,
      useNumbers: true
    }); 
    users.findOne({ $or: [{ email: req.body.email }, { name: req.body.name }] }, (err, doc) => {
      if (doc) return res.status(200).send('User name or email exist')
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chatmarket.chats@gmail.com',
          pass: '079929857'
        }
      });
      let f = req.body.name.substr(0, 1).toUpperCase();     // 'lla'
      let s = req.body.name.substr(1).toLowerCase();
      let name = `${f}${s}`
      var mailOptions = {
        from: 'chatmarket.chats@gmail.com',
        to: req.body.email,
        subject: 'chat market verify email',
        html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        
        <body>
            <div style="width: 100%; 
            display: flex;justify-content: center;align-items: center;
             ">
                <img style="height:4em;margin:0px 20%;
                       width: 5em;"
                    src="http://chatsmarket.com/logo.png" title="logo" alt='logo'
                    alt="logo" >
        
            </div>
            <div style="width: 100%;height: fit-content;">
                <p>Hi! ${name}</p>
        
            </div>
        
            <div style="width: 100%;height: fit-content;">
                <h3>Welcome!</h3>
            </div>
        
            <div style="width: 100%;height: fit-content;">
        
                <p>You have successfully
                    signup to chat market
                    you can now chat for
                    your product or chat
                    for the product you
                    want.</p>
            </div>
        
        
            <div style="width: 100%;height: fit-content;display:flex;justify-content: center;align-items: center;">
                <a style="text-decoration: none; border-radius: .2em; padding: .5em 1em; background-color: rgba(238,91,23,0.79) !important;color: palegoldenrod;" href="http://chatsmarket.com/chatmarket/confirm/${verify}">Confirm</a>
        
            </div>
            </div>
        
            <div style="align-self:center;width:100%;display:flex;justify-content:flex-end;align-item:flex-end">
                <p style="font-size:2em">&#129331;</p>
                <p style="font-size:1em;margin-top:.6em">&copy;<a href="http://chatsmarket.com/">chatmarket</a></p>
      
        </body>
        
        </html>`
      }

      transporter.sendMail(mailOptions, function () {
        bcrypt.hash(req.body.password, saltRnds, function (err, hash) {
          let id = generateUniqueId({
            length: 15,
            useLetters: true,
            useNumbers: true
          });
          if (hash) {
            req.body.password = hash
            req.body.verify = verify
            req.body.expirydate = new Date().toISOString()
            let d = ''
            for(let i=0;i<5;i++){
              d = (Math.random()*10000000000000000).toString(32)
            }
            let filename = `${id}${d}.jpeg`
            req.body.photo = `http://chatsmarket.com/Profile/${filename}`
            const user = new users({ ...req.body, date: new Date().toDateString(), time: new Date().toLocaleTimeString() })
            user.save((err, docx) => {
              if (docx) return res.status(200).send('Success')
            })             
          } else {
            return res.status(200).send('User name or email exist')
          }
        });
      });

    })
  })
  .post('/sendemail', (req, res) => {
    let verify  = generateUniqueId({
      length: 10,
      includeSymbols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      // excludeSymbols: [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      useLetters: true,
      useNumbers: true
    }); 
    var mailOptions = {
      from: 'chatmarket.chats@gmail.com',
      to: req.body.email,
      subject: 'Password recovery',
      html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    
    <body>
        <div style="width: 100%; 
        display: flex;justify-content: center;align-items: center;
         ">
            <img style="height:4em;margin:0px 20%;
                   width: 5em;"
                src="http://chatsmarket.com/logo.png" title="logo" alt='logo'
                alt="logo" >
    
        </div>
       
        <div style="width: 100%;height: fit-content;">
    
          <p>Enter the code below to login and change your password.</p>
      </div>
    
        <div style="width: 100%; display: flex;flex-direction: row;flex-wrap: nowrap;">
          <h3 >Password:</h3> <h3 style="color: green;margin-left: 5px;">${verify}</h3>
        </div>
    
        <div style="width: 100%;height: fit-content;">
    
            <p>You also click the link below to login and change your password.</p>
        </div>
    
    
        <div style="width: 100%;height: fit-content;display:flex;justify-content: flex-start;align-items: center;">
            <a style="text-decoration: none; border-radius: .2em; padding: .5em 1em; background-color: rgba(238,91,23,0.79) !important;color: palegoldenrod;" href="http://chatsmarket.com/chatmarket/forgetlogin/${verify}">Login</a>
    
        </div>
        </div>
        <div style="width: 100%;height: fit-content;">
    
            <p>this code will expire after 5 minutes from now</p>
            <h1>we encourage you to change your password immediately you login</>
        </div>
    
        <div style=" width:50%;display:flex;justify-content:flex-start;align-item:flex-start">
            <p style="font-size:2em">&#129331;</p>
            <p style="font-size:1em;margin-top:.6em">&copy;<a href="http://chatsmarket.com/">chatmarket</a>
            </p>
        </div>
    </body>
    
    </html>`
    }
   
    if(req.body.email){
      users.findOne(req.body, (err, doc) => {
      if (doc) {
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'chatmarket.chats@gmail.com',
            pass: '079929857'
          }
        }); 


        bcrypt.hash(verify, saltRnds, function (err, hash) {
           
          if (hash) {
            doc.password = hash
            doc.verify = verify
            doc.expirydate = addMinutes(new Date(), 1)
            doc.save((err, d) => {
              if (d) {
                transporter.sendMail(mailOptions, function () {
                  return res.status(200).send('success')
                })
              }
            }); 

          }})
      }else{
        return res.status(200).send('error')
      }
    })
    }else{
      return res.status(200).send('error')
    }
    


  }).get('/forgetlogin/:id', (req, res) => {
    let verif = {verify:req.params.id}   
    console.log(verif)
  
    if(verif.verify){
      users.findOne(verif, (err, doc) => {
       
      if (doc &&  !isPast(new Date(doc.expirydate))){         
          doc.verify = 'xyz'
          const user = new users(doc)
          user.save((err, docx) => {
            if (docx)
            return res.cookie('XYZ', doc._id, {sameSite:'strict', signed: true, expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)), httpOnly: true }).status(200).sendFile(__dirname + '/Html/Confirm.html');      
          })
  
      }else{
        if(req.body.code) return res.status(200).send('exp')        
        return res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'));      
      
      }
    })
  } 
  })
  .post('/forgetlogin', (req, res) => {
    console.log(req.body)
    let verif = {verify:req.body.code}   
    console.log(verif)
  
    if(verif.verify){
      users.findOne(verif, (err, doc) => {       
      if (doc &&  !isPast(new Date(doc.expirydate))){         
          doc.verify = 'xyz'
          const user = new users(doc)
          user.save((err, docx) => {
            if (docx)
            return res.cookie('XYZ', doc._id, {sameSite:'strict', signed: true, expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)), httpOnly: true }).status(200).send("finish");      
          })  
      }else{
        if(req.body.code) return res.status(200).send('exp')        
        return res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'));            
      }
    })
  } 
  })
  .post('/link', (req, res) => {
    if (req.signedCookies.XYZ) {
      // console.log(req.body)
      links.findOne({ i: req.signedCookies.XYZ }, (err, doc) => {
        if (doc) {
          return res.status(200).send(`http://134.209.179.52:3000/?id=${doc._id}`)
        } else {
          const lks = new links({
            i: req.body.n.i,
            photo: req.body.n.photo ? req.body.n.photo : 'no',
            n: req.body.n.n
          })
          lks.save((err, info) => {
            if (info) {
              res.status(200).send(`http://134.209.179.52:3000/?id=${info._id}`)
            } else {
              res.status(200).send(`err`)
            }
          })
        }
      })
    }
  })
  .post('/deletechat', (req, res) => {
    if (req.signedCookies.XYZ) {
      products.findOne({ _id: req.body.id }, function (err, doc) {
        if (doc) {
          const m = doc.chats.filter(e => {
            return e.i !== req.body.me
          })

          doc.chats = [...m];
          delete doc.con[`_${req.body.id}${req.body.me}`]
          delete doc.notif[`_${req.body.id}${req.body.me}`]

          doc.save((err, d) => {
            if (d) {
              res.status(200).send(req.body.id)
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
  .put('/deleteitem', (req, res) => {
    if (req.signedCookies.XYZ) {
      // coming
      let dir = `${__dirname}/Public/Chat/${req.body.id}`;
      if (fs.existsSync(dir)) {

        products.deleteOne({ _id: req.body.id }, (err, doc) => {

          if (doc.deletedCount) {
            rmdir(dir, function (err) {
              if (!err) {
                // console.log(doc)
                res.status(200).send('success')
              } else {
                res.status(500).send('err')
              }
            });
          }

        });
      }

    } else {
      res.status(200).end('err')
    }
  })
  .put('/editattr', (req, res) => {
    if (req.signedCookies.XYZ) {
      products.findOne({ _id: req.body.prod }, function (err, doc) {
        if (doc) {
          var dx = doc.detail
          doc.detail = []
          if (req.body.type) {
            dx = [...dx, { n: req.body.n, v: req.body.val }]
          } else if (req.body.val) {
            dx[req.body.pos].v = req.body.val;
          } else {
            dx = dx.filter(e => {
              return e.n != req.body.n
            })

          }

          doc.detail = dx
          doc.save((err, d) => {
            if (err) throw err
         
            if (d) {
              console.log("saved")
              res.status(200).send(d)
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
  .get('/logout', (req, res) => {
    return res.cookie('XYZ', req.signedCookies.XYZ, { sameSite: 'strict', path: '/', signed: true, maxAge: 0, httpOnly: true }).status(200).send('logout')

  })
  .post('/photo', (req, res) => {
    if (req.signedCookies.XYZ) {
      users.findOne({ _id: req.signedCookies.XYZ }, (err, doc) => {
        if (doc) {
          doc.date = new Date().toDateString()
          doc.time = new Date().toLocaleTimeString()
          let filename = doc.photo.slice(domain.length)
          const rm = __dirname + `/Public/${filename}`
          fs.writeFile(rm, req.body.img, { encoding: 'base64' }, function (err) {
            if (err) throw err
            res.send(doc.photo)

          })
        }
      })
    }
  })
  .put('/editpersinfo', (req, res) => {
    
    if (req.signedCookies.XYZ) {

      users.findOne({ _id: req.signedCookies.XYZ }, (err, doc) => {
        if (doc) {
          doc.date = new Date().toDateString()
          doc.time = new Date().toLocaleTimeString()
          if (req.body.obj.p) {
            bcrypt.compare(req.body.obj.p, doc.password, function (err, result) {
              if (result) {
                bcrypt.hash(req.body.obj.n, saltRnds, function (err, hash) {
                 
                  if (hash) {
                    doc.password = hash

                    const ob = new users(doc)
                    ob.save((err, ob) => {
                      if (ob) {
                        return res.send('Successfully changed')
                      } else {
                        return res.send('error')
                      }
                    })
                    //  console.log(doc)
                  } else {
                    return res.status(200).send('Incorrect password')
                  }
                });
              } else {
                return res.status(200).send('Incorrect password')
              }
            });

          } else {

            doc[req.body.obj.key] = req.body.obj.val


            users.findOne({ [req.body.obj.key]: req.body.obj.val }, (err, x) => {
              if (x) {
                return res.send('already taken')
              } else {
                const ob = new users(doc)
                ob.save((err, ob) => {
                  console.log(err)
                  if (ob) {
                    return res.send('success')
                  } else {
                    return res.send('error')
                  }
                })
              }
            })




          }

        } else {
          return res.send('err')
        }
      })


    } else {
      return res.send('err')
    }
  })

  .post('/sellnow/:from', (req, res) => {
    if (req.signedCookies.XYZ) {
      let base64Image = req.body.img.split(';base64,').pop();
      if (req.params.from === 'edit') {

        fs.writeFile(__dirname + `/Public/Chat/${req.body.info}/${req.body.info}.png`, base64Image, { encoding: 'base64' }, function () {
          fs.writeFile(__dirname + `/Public/Chat/${req.body.info}/${req.body.info}_big.jpeg`, req.body.bi, { encoding: 'base64' }, function () {
            return res.status(200).send('Success')
          })
        })
      } else {

        const product = new products({
          detail: req.body.info,
          photo: `http://localhost:5000/Chat/`,
          chats: [],
          con: {},
          sellerId: req.body.sinfo,
          sold: false,
          time: new Date().toLocaleTimeString(),
          date: new Date().toDateString(),
          cdates: `${new Date().toLocaleTimeString()}_${new Date().toDateString()}`
        })

        product.save((err, doc) => {

          if (doc) {
            var dir = __dirname + `/Public/Chat/${doc._id}`;

            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir);
            }
            fs.writeFile(__dirname + `/Public/Chat/${doc._id}/${doc._id}.png`, base64Image, { encoding: 'base64' }, function () {
              fs.writeFile(__dirname + `/Public/Chat/${doc._id}/${doc._id}_big.jpeg`, req.body.bi, { encoding: 'base64' }, function () {
                return res.status(200).send(doc)
              })
            })
          }

        });
      }
    }
  })
  .put('/search', (req, res) => {
    if (req.signedCookies.XYZ) {
      products.find({ $and: [{ [req.body.val]: req.body.val }, { chats: { $not: { $elemMatch: { i: req.signedCookies.XYZ } } } }, { $nor: [{ 'sellerId.i': req.signedCookies.XYZ }] }] })
        .select('detail photo date sellerId')
        .exec(function (err, itm) {
          res.status(200).send({ itm, total: itm.length })
        });
    } else {
      products.find({ [req.body.val]: req.body.val })
        .select('detail photo date sellerId')
        .exec(function (err, itm) {
          res.status(200).send({ itm, total: itm.length })
        });
    }
  })
  .put('/markets', (req, res) => {

    if (req.body.ar && req.body.ar.length) {
      if (req.signedCookies.XYZ) {
        products.find({ $and: [{ $and: req.body.ar }, { chats: { $not: { $elemMatch: { i: req.signedCookies.XYZ } } } }, { $nor: [{ 'sellerId.i': req.signedCookies.XYZ }] }] })
          .select('detail photo date sellerId')
          .exec(function (err, mk) { 
            let itm = []
            let total = mk.length 
            for (let i = (mk.length - (req.body.start || 0)) - 1; i >= (mk.length - (req.body.start + limit || limit)); i--) {
              mk[i] && itm.push(mk[i]);
            }
            res.status(200).send({ itm, total })
          });
      } else {
        products.find({ $and: req.body.ar })
          .select('detail photo date sellerId')
          .exec(function (err, mk) { 
            let itm = []
            let total = mk.length
            // console.log(req.body.stop||0)
            for (let i = (mk.length - (req.body.start || 0)) - 1; i >= (mk.length - (req.body.start + limit || limit)); i--) {
              mk[i] && itm.push(mk[i]);
            }
            res.status(200).send({ itm, total })
          });
      }
    } else {
      if (req.signedCookies.XYZ) {

        products.find({ $and: [{ chats: { $not: { $elemMatch: { i: req.signedCookies.XYZ } } } }, { $nor: [{ 'sellerId.i': req.signedCookies.XYZ }] }] })
          .select('detail photo date sellerId')
          .exec(function (err, mk) {
            let itm = []
            let total = mk.length
            for (let i = (mk.length - (req.body.start || 0)) - 1; i >= (mk.length - (req.body.start + limit || limit)); i--) {
              mk[i] && itm.push(mk[i]);
            }
            res.status(200).send({ itm, total })
          });
      } else {
        products.find({})
          .select('detail photo date sellerId')
          .exec(function (err, mk) {
            let itm = []
            let total = mk.length
            // console.log(mk)
            for (let i = (mk.length - (req.body.start || 0)) - 1; i >= (mk.length - (req.body.start + limit || limit)); i--) {
              mk[i] && itm.push(mk[i]);
            }
            res.status(200).send({ itm, total })
          });
      }
    }
  })
  .put('/marketsSeller', (req, res) => {
    // {'sellerId.i':get.viewed.sellerId.i}
    products.find({ $and: [{ 'sellerId.i': req.body.id }, { chats: { $not: { $elemMatch: { i: (req.signedCookies.XYZ || '') } } } }] })
      .select('detail photo date sellerId')
      .exec(function (err, mk) {
        let total = mk.length
        res.status(200).send({ itm: mk, total })
      })
  })
  .put('/suggest', (req, res) => {
    if (req.signedCookies.XYZ) {
      products.find({ $and: [{ $and: [{ 'detail.5.v': req.body.sea }, { _id: { $ne: req.body.id } }] }, { chats: { $not: { $elemMatch: { i: req.signedCookies.XYZ } } } }, { $nor: [{ 'sellerId.i': req.signedCookies.XYZ }] }] })
        .select('detail photo date sellerId')
        .exec(function (err, mk) {
          let itm = []

          for (let i = (mk.length - (req.body.start || 0)) - 1; i >= (mk.length - (req.body.stop || limit)); i--) {
            mk[i] && itm.push(mk[i]);
          }
          res.status(200).send(itm)
        });
    } else {
      products.find({ $and: [{ 'detail.5.v': req.body.sea }, { _id: { $ne: req.body.id } }] })
        .select('detail photo date sellerId')
        .exec(function (err, mk) {
          let itm = []
          // console.log(mk)
          for (let i = (mk.length - (req.body.start || 0)) - 1; i >= (mk.length - (req.body.stop || limit)); i--) {
            mk[i] && itm.push(mk[i]);
          }
          res.status(200).send(itm)
        });
    }
  })
  .get('/confirm/:id', (req, res) => {
    users.findOne({ verify: req.params.id }, (err, doc) => {
      // console.log(doc)
      if (doc) {
        doc.verify = 'xyz'
        const user = new users(doc)
        user.save((err, docx) => {
          if (docx)
            return res.sendFile(__dirname + '/Html/Confirm.html')
        })

      }
      return res.sendFile(__dirname + '/Html/Confirm.html')
    })
  })

  // if (fs.existsSync(dir)) {

  //   products.deleteOne({ _id: req.body.id }, (err, doc) => {

  //     if (doc.deletedCount) {
  //       rmdir(dir, function (err) {
  //         if (!err) {
  //           // console.log(doc)
  //           res.status(200).send('success')
  //         } else {
  //           res.status(500).send('err')
  //         }
  //       });
  //     }

  //   });
  // }
  setInterval(() => {
    // products.find({},(e,d)=>{
    //   d.forEach(e=>{
    //   //  console.log(e.con)
    //     for(const p in e.con){
    //       // if(e.con[p][0].path!==undefined){
    //         console.log(e.con[p][0].path)
    //       // }
    //       // if(differenceInDays(new Date(),new Date(e.con[p][e.con[p].length-1].date))>=1){
            
    //       // }else{
    //       //  // console.log('no')
    //       // }
    //     }
    //   })
    // })
   }, 5000);
module.exports = route
