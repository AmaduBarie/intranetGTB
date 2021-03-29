import React,{useState,useEffect,useMemo} from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Time from './Addtime'
import { InputTextarea } from 'primereact/inputtextarea';  
 import './Dialog.css';
 import { Dropdown } from 'primereact/dropdown';
 import Select from '../Notificaton/MultipleSelect'
//  import  {Context} from "../App";

export default ({open,sopen,date,sender,send,erralert,sErralert}) => {    
 const [stype,sType] = useState('')
 const type = [{task:'Meeting'},{task:'Task'}]
 


useEffect(()=>{
    sType('')
    sender({task:''})

},[date.start])
    const renderFooter = () => {
        return (
            <div>
                <Button label='Cancel' icon="pi pi-times" onClick={() => sopen(false)} className="p-button-text" />
                <Button label="Send" icon="pi pi-check" disabled={send}   onClick={() => sender('send')} autoFocus />
            </div>
        );
    }
 const renderFooters = () => {
        return (
            <div>
                <Button label='Cancel' icon="pi pi-times" onClick={() => sErralert(false)} className="p-button-text" />                
            </div>
        );
    }
    return ( 
        <Dialog  blockScroll={true} closable={false} resizable header='Event planner'  visible={open} onHide={()=>sopen(false)} maximizable modal style={{ width: '50vw',eight:'5em' }} footer={renderFooter('displayMaximizable')}>
      
      <Dialog blockScroll={true} closable={false} resizable header={"Error"} visible={erralert && true} onHide={()=>sErralert(false)} maximizable modal style={{ width: '50vw',eight:'5em' }} footer={renderFooters('displayMaximizable')}>
      <div style={{backgroundColor:`${erralert==='Event planner'?'white':'red'}`, padding:'.3em',borderRadius:'5px',width:'100%'}}>{erralert}</div>
    </Dialog> 
       <div style={{minHeight:'15em',display:'flex',flexDirection:'column',alignItems:'center'}}>
           <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexWrap:'nowrap'}}><h2>Date for the event: </h2><h2>{new Date(date.start).toLocaleDateString()}</h2></div>
           <div className="p-field p-col-12 p-md-4">
                        <span className="p-float-label">
                            <Dropdown id="dropdown" value={stype} options={type} onChange={(e) =>{ 
                                sType(e.value)
                                sender({task:e.value.task})
                                }} optionLabel="task" />
                            <label htmlFor="dropdown">Select purpose of event</label>
                        </span>
                    </div>
           <Time sender={sender}/> 

            <Select date={date} sender={sender}/>  
             <InputTextarea value={date?.description||''} style={{ margin:'10px 5px',minHeight:'12em',height:'12em'}}  onChange={(e) =>sender({description:e.target.value.slice(0,1).toUpperCase()+e.target.value.slice(1).toLowerCase()})} rows={12} cols={50} autoResize  placeholder={date.task?`Reason for ${date.task}`:'Reason message'}  />       
       </div>       
    </Dialog> 
    )
}