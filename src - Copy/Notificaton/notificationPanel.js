import React,{useContext} from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import Message from '../Messages/Message'
import { InputTextarea } from 'primereact/inputtextarea'; 
import { Button } from 'primereact/button';
import Select from './MultipleSelect'
import  {Context} from "../App";

export default ({send}) => {
    const {data} = useContext(Context) 
    const [txt,stxt] = React.useState({img:data?.me?.img,username:data?.me?.name, setter:data?.me?.i,room:data?.me?.department,msg:'',attendance:data.atten && [...data?.atten]})
 

    const sender =(v)=>{
        stxt({...txt,...v})
        
    }

    const sendx = ()=>{
     
        if(txt.msg && txt.attendance.length){
           send({to:'notification',msg:{...txt}}) 
        }
        
    
    }
    return (
        <div className="scrollpanel-demo"> 
                    <div style={{display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column'}} className="p-col-12 p-md-4">
                        <ScrollPanel style={{ width: '100%', height: '22em'  }} className="custombar1">
                            <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                {
                                    data.chats?.length? data.chats.map((e,i)=>{
                                  return  <div style={{flexDirection:'column',flexWrap:'nowrap',justifyContent:'center',alignItems:'center'}}>
                                      
                                        <h4 style={{alignSelf:'center',margin:'0px',margin:'0px auto'}}>{i===0 && e.date.date }</h4>                                     
                                        <h4 style={{alignSelf:'center',margin:'0px',margin:'0px auto'}}>{ e.date.date!== data.chats[i+1]?.date?.date  }</h4>                                
                                                <Message e={e}/>
                                        </div>}):<div>no message for now</div>
                                }    
                        </div>
                        </ScrollPanel>
                         <Select sender={sender} date={txt}/> 
                         <InputTextarea value={txt.msg} style={{maxHeight:'4.5em',margin:'0px 5px'}}  onChange={(e) =>sender({msg:e.target.value})} rows={3} cols={50} autoResize placeholder='Message'  />
                         <Button onClick={()=>sendx()} label="Send" className="p-button-raised" style={{margin:'5px',alignSelf:'flex-end'}} />
                    </div> 
                </div>            
    )
}