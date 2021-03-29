import React, { useReducer,useEffect } from "react";
import  Calender from './Calender'
import Menu from './Menu' 
import Bulletin from './BulletinBoard/bulletinboard'
import Sidebar from './BulletinBoard/Sidebar'
import Signup from './Forms/signup'
import socketIOClient from "socket.io-client"; 
// import Chatorg from './Forms/ErrCalender'
import Login from './Forms/Login'
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css' 
 
 const logic = (data,role)=>{
  //  console.log("out")
   
  switch (role.role) { 
case 'login':     
    data={...data,...role.d}
return data
case 'status':     
    data={...data,[role.d.id]:role.d.sts}
    // console.log("check if online")
    // console.log(data)
return data
case 'schedule':     
     console.log("in schedule")
     console.log(role)
let schedule = {}

let attendance = role.d.attendance.filter(e=>{
  e.expanded =true  
  e.username = e.username.slice(0,1).toUpperCase()+e.username.slice(1).toLowerCase()
  //  e.children= role.d.task==='Task'?[{
  //   Progress: 'Task progress',
  //   className: 'department-cfo',
  //   _id:role.d._id,
  //   proces:e.proces,
  //   task:role.d.task,
  //   expanded: true ,    
  // }]:[] 
  return  e._id !==role.d.setter
})
    if(data.me.i===role.d.setter){
      schedule.username=data.me.name.slice(0,1).toUpperCase()+data.me.name.slice(1).toLowerCase()
      schedule.img=data.me.img
       schedule._id= data.me.i
      }else{ 
        let topMeet =data.atten.find(e=>e._id===role.d.setter)
       schedule.username=topMeet.username.slice(0,1).toUpperCase()+topMeet.username.slice(1).toLowerCase()
      schedule.img=topMeet.img 
      let usr = data.me.name.slice(0,1).toUpperCase()+data.me.name.slice(1).toLowerCase()
      attendance.push({...data.me,expanded:true,username:usr})
      }

      schedule.className= 'p-person'       
      schedule.type= 'person'
      schedule['expanded']= true
      schedule.children=[{
        label: role.d.description, 
        className: 'department-cfo',
        expanded: true,
        children:  role.d.attendance 
      }]
      console.log("attendance")
      console.log(schedule)
      
   
    console.log("role heere")
    console.log(data)
return {...data,schedule:[schedule]}

case 'progress':     
    const index = data.event.findIndex(e=>e._id===role.d.msg.task)

   data.event[index].attendance=[...role.d.val.attendance]

   data={...data}
return data
case 'saved':  
return {...data,event:[...data.event,role.d]}
case 'chats':   
data= {...data,chats:[...data.chats,role.d]} 
return data


    default:
      break;
  }
 }

// query: {room:data.me?.department||'',id:data.me?.i||''},
let socket = socketIOClient('http://localhost:5000', {transports: ['websocket', 'polling', 'flashsocket']});

let ids = ''
export const Context = React.createContext()

function App() {
 const [data,sData] = useReducer(logic,{me:''})
const [visible,sVisible] = React.useState(false)
 const [load,sLoad] = React.useState(true)   
 const [open,sOpen] = React.useState(false)
 const [send,sSend] = React.useState(false)

 socket.on("connect", () => {
        sLoad(false) 
        // socket.emit('message', {me:'good'})
     
      }); 

 const sender =(v)=>{
  socket.emit(v.to,v.msg)
 }
 useEffect(()=>{
 data.me &&  socket.emit('oauth',{_id:data.me.i,room:data.me.department})  
 },[data.me])

 useEffect(()=>{
 
  data.me && socket.on('replydate',msg=>{
    if(msg.setter===data.me.i || msg.attendance.find(e=>e._id===data.me.i)){
      sSend(false)
      sOpen(false)
     if(ids!==msg._id){
      sData({d:msg,role:'saved'})
      ids=msg._id          
    }
    }
    
     console.log(msg)    
  })

  data.me && socket.on('progress',msg=>{
    if(ids!==msg._id){
    ids = msg._id
    sData({d:msg,role:'progress'})
    }
  })

  data.me && socket.on('view',(msg)=>{ 
    console.log("view")
    console.log(msg)
    sData({d:msg,role:'status'}) 
  })
  
 data.me && socket.on('notification',msg=>{ 
   console.log("notificaton come back")
   console.log(msg)
  if(msg.setter===data.me.i || msg.attendance.find(e=>e._id===data.me.i)){
  if(ids!==msg._id){
  ids = msg._id
    sData({d:msg,role:'chats'})
    if(msg.setter!==data.me.i){
      socket.emit('view',{_id:data.me.i,room:data.me.department})
    }

  }

  }
  
  
  })
 })
 
  return ( 
    <Context.Provider value={{data,sData}}>
    
      <Router>
        <Route path="/signup"><Signup/></Route>
      {/* <button onClick={()=>sDate({role:"invite"})}>{data.name}</button> */}
      {/* <Chatorg/> */}
        <Route exact path="/"><Login/></Route>    
    <Route  path="/home">  
      <Sidebar visible={visible} sVisible={sVisible}/>
     <Menu sVisible={sVisible}/>
    {/* <div style={{display:'flex',flexDirection:'row',width:'100%',flexWrap:"nowrap"}}> */}
       <Calender open={open} sOpen={sOpen} send={send} sSend={sSend} load={load} push={sender}/> 
         <Bulletin/>  
        </Route> 
        </Router>
    </Context.Provider>
 
  );
}

export default App;