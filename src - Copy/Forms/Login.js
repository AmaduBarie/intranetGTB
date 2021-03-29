import React, { useState,useContext } from 'react';
import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios'
import { Message } from 'primereact/message';
import {withRouter,Link} from 'react-router-dom'
import  {Context} from "../App";
import { Tooltip } from 'primereact/tooltip';

import Chatorg from '../ChatOrg/ChatOrg';

export default withRouter(props => {
    const [signup, sSignup] = useState({email:'',password:''});   
    const [msg,sMsg] = useState('Welcome to GTBank')
   const {  sData} = useContext(Context)
  

    const getValue = (e) =>{
        sSignup({...signup,[e.target.name]:e.target.value})  
    }

    const send = ()=>{
        let check = true
        for (const key in signup) {
           if(signup[key]){              
               if(key==='email' && signup[key].indexOf('@gtbank.com')===-1){
                   sMsg('Not a GT Bank email')
                check = false
               } 
           }else{
            
            sMsg(`${key} is empty`)
               check = false          
        }
    }
    
     if(check){
         sMsg('Welcome to GT Bank')
        axios.post('http://localhost:5000/login',signup)
          .then(function (res) {  
            if(res.data.me){
                console.log("from the login") 
                console.log(res.data)
                sData({d:res.data,role:'login'})
                setTimeout(() => {
                  props.history.push('/home')   
                }, 1000);
               
            }else{
                sMsg(res.data)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
     } 
    }

    return (
        <div style={{maxWidth:'18em',margin:'auto',marginTop:'5em'}}> 
                <Message style={{width:'100%'}}  severity={msg==='Welcome to GTBank'?'info':'error'} text={msg}/>
                    <div className="p-fluid" >
                        <div className="p-field p-col-12 p-md-6" style={{margin:'5px'}}>
                            <label htmlFor="username">Email</label>
                            <InputText id="username" type="text" name='email' onChange={getValue} />
                        </div> 
                       
                        <div className="p-field p-col-12 p-md-3" style={{margin:'5px'}}>
                            <label htmlFor="password">Password</label>
                            <InputText id="password" type="password"  name='password' onChange={getValue}/>
                        </div> 
                        <Button label="Send" onClick={send} className="p-button-raised" style={{margin:'5px',maxWidth:'17.5em',alignSelf:'flex-end'}} />
                        <Link to='/signup'   style={{margin:'5px',maxWidth:'17.5em',alignSelf:'flex-end'}}>Create account</Link>
                    </div>
        </div>
    )
})