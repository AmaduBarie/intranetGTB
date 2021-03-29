import React, { useState,useRef } from 'react'; 
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import { Button } from 'primereact/button';
import axios from 'axios'
import { Message } from 'primereact/message';
import {withRouter,Link} from 'react-router-dom'

export default withRouter(props=> {
    const [signup, sSignup] = useState({username:'',email:'',department:'',password:'',vPassword:''});  
    const [selectedState, setSelectedState] = useState(null);
    const [msg,sMsg] = useState('Welcome to GTBank')
   
 
    let states =  [
        {name: 'Administration'},
        {name: 'Clearing'},
        {name: 'Call Center'},
        {name: 'CRM Unit'},
        {name: 'Compliance' },
        {name: 'Cash Management'},
        {name: 'Domops'},
        {name: 'E-Business' },
        {name: 'Fincon'},
        {name: 'HR' },
        {name: 'Marketing'},
        {name: 'Operations',},
        {name: 'Siscon'},
        {name: 'Treasury'},
        {name: 'Technology' },
];



    const onStateChange = (e) => {
         sSignup({...signup,'department':e.value.name})
        setSelectedState(e.value);
    }

    const getValue = (e) =>{
        sSignup({...signup,[e.target.name]:e.target.value})  
    }

    const send = ()=>{

        let check = true
        for (const key in signup) {
           if(signup[key]){  
               console.log("in")             
               if(key==='email' && signup[key].indexOf('@gtbank.com')===-1){
                   sMsg('Not a GT Bank email')
                check = false
               }
               if((key==='password' || key==='vPassword') && signup.password !== signup.vPassword ){
                sMsg('Password not match')
                check = false
               }
                if(signup.password.length<5 ){
                sMsg('Password is too short')
                check = false
               }
           }else{
            
            sMsg(`${key} is empty`)
               check = false
           
           if(key==='vPassword'){
               sMsg(`Verify password is empty`)
           }
        }


    }
     if(check){
         sMsg('Welcome to GT Bank')
        axios.post('http://localhost:5000/signup',signup)
          .then(function (res) { 
              console.log(res.data)
            if(res.data === 'success'){
                // window.location('/')
                props.history.push('/')
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
                    <div>
                        
                    </div>
                    <div className="p-fluid" >
                        <div className="p-field p-col-12 p-md-6" style={{margin:'5px'}}>
                            <label htmlFor="username">User name</label>
                            <InputText id="username" type="text" name='username' onChange={getValue} />
                        </div>
                        <div className="p-field p-col-12 p-md-6" style={{margin:'5px'}}>
                            <label htmlFor="email">Email</label>
                            <InputText id="email" type="email"  name='email' onChange={getValue} />
                        </div>  
                        <div className="p-field p-col-12 p-md-3" style={{margin:'5px'}}>
                            <label htmlFor="state">Department</label>
                            <Dropdown inputId="state" value={selectedState} options={states} onChange={onStateChange} placeholder="Select" optionLabel="name"/>
                        </div>
                        <div className="p-field p-col-12 p-md-3" style={{margin:'5px'}}>
                            <label htmlFor="password">Password</label>
                            <InputText id="password" type="password"  name='password' onChange={getValue}/>
                        </div>
                        <div className="p-field p-col-12 p-md-3" style={{margin:'5px'}}>
                            <label htmlFor="vPassword">Verify Password</label>
                            <InputText id="vPassword" type="password"  name='vPassword' onChange={getValue}/>
                        </div>
                        <Button label="Send" onClick={send} className="p-button-raised" style={{margin:'5px',maxWidth:'17.5em',alignSelf:'flex-end'}} />
                        <Link to='/'   style={{margin:'5px',maxWidth:'17.5em',alignSelf:'flex-end'}}>Have account</Link>
                    </div>
        </div>
    )
})