import React, { useState, useEffect,useContext } from 'react';
import { FullCalendar } from 'primereact/fullcalendar';
import  {Context} from "./App";
import { Dialog } from 'primereact/dialog'; 
import dayGridPlugin from '@fullcalendar/daygrid';
// import socketIOClient from "socket.io-client"; 
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Adddate from './BulletinBoard/AddDate'
import Notification from './Notificaton/notificationPanel'
import { ProgressSpinner } from 'primereact/progressspinner';
import {withRouter} from 'react-router-dom'
import ChatOrg from './ChatOrg/Schedule'

 let ids = ''
 
export default withRouter(props => {
  const {load,push,open,send,sOpen,sSend} = props
  const [date,sDate] = React.useState({title:'',attendance:'',start:'',description:'',task:''}) 
  const {data,sData} = useContext(Context) 
  const [schedule,sSchedule] = useState(false)  
  const [erralert,sErralert] = React.useState(false)
  
  const messgs = {
    title:`Please set the time of the ${date.task||'meeting or task'}. \n this time will show on the calender and if you share this ${date.task||'meeting or task'} those people will see it on there calender as well, so that they will know the time of the ${date.task||'meeting or task'}`,
   description:`Please write reason for the ${date.task||'meeting or the task'} so that it can be easily remember. And also if you select people to see this ${date.task||'meeting or task'} they will know the reason for it.`,
   task:"Please select what you want to set either a Meeting or a Task. Please note if you select task and don't don't select people to see it. it is private to you, you are the only one that will see it. But if you select Meeting and don't select any one to see it everyone in the department will that see that meeting."}


   
    const options = { 
      
        initialView:"dayGridMonth",
        plugins: [ timeGridPlugin, interactionPlugin,dayGridPlugin],
        headerToolbar: {
            left: 'dayGridMonth,timeGridWeek,timeGridDay',
            center: 'title',
            right: 'prev,next'
          } , 
          // expandRows: true,
          eventColor: '#522A09', 
          dateClick:(info)=> {
            sOpen(true)
            // console.log(info.time)
            // // alert('Clicked on: ' + new Date(info.date).toDateString());
            // // alert('Clicked on: ' + 
            // // sDate({date:}) info.dateStr;
            sDate({...date,start:info.dateStr}) 
          //  console.log(info)
            // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            // alert('Current view: ' + info.view.type);
            // change the day's background color just for fun
            // info.dayEl.style.backgroundColor = '#DD9547';
          },
          eventClick: function(info) {          
            sData({role:'schedule',d:info.event.extendedProps})
            sSchedule(true)          
          } ,
          displayEventTime :false, 
          customButtons: {
            custom1: {
              text: 'custom 1',
              click: function() {
                alert('clicked custom button 1!');
              }
            },
            custom2: {
              text: 'custom 2',
              click: function() {
                alert('clicked custom button 2!');
              }
            }
          }
    };
 
// useEffect(()=>console.log(date))

   const sender =(val)=>{ 

      if(val==='send'){

         
        let go = true
        for (const key in date) {
          if(key!=='attendance' && !date[key]){
            sErralert(messgs[key])
            go=false
          }
        }
        if(go){
          sSend(true) 
          sErralert(false)
         push({to:'message',msg:{save:{...date,setter:data.me.i,attendance:date.attendance.length?date.attendance:date.task==='Task'?[]:data.atten},room:data.me.department}})
          sDate({title:'',attendance:[],start:'',description:'',task:''})
        }
      }else{
       sDate({...date,...val}) 
      }
       
     }
     
   const progress =(v)=>{
     push(v)
   }  

    useEffect(() => {     
    
      if(!data.me){
        props.history.push('/')
      }      
      // data.me && socket.on('question',msg=>console.log(msg))
      // data.me && socket.emit('message', 'yes')
       
    }); 
    
    
    return (
      <>
      <Adddate erralert={erralert} sErralert={sErralert} open={open} sopen={sOpen} date={date} sender={sender} send={send}/>    
     
      <Dialog  header="Loading data..." visible={load} style={{ width: '50vw' }}> 
          <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>  
      </Dialog>  

      <Dialog  header="Loading data..." visible={load} style={{ width: '50vw' }}> 
         
      </Dialog> 
                <div style={{display:'flex',flexDirection:'row',width:'100%',flexWrap:"nowrap"}}>
         <FullCalendar style={{width:'100%',overFlow:'hidden'}}  events={data.event} options={options} />
       {/* <Calender/>  */}
       <div className='notification' >
         <div className='chats'>Messages</div>
         <Notification send={push}/>
      </div>     
       </div>
      {data.schedule && <ChatOrg progress={progress} sch={schedule} sSch={sSchedule} />}
                </>
          
    );
})