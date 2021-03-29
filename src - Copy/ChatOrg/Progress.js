import React, { useState, useRef, useEffect,useContext } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import axios from 'axios' 
import  {Context} from "../App";

export default ({_id,sel,progress}) => {
    const {data} = useContext(Context) 
    const [activeIndex, setActiveIndex] = useState(sel);
    const toast = useRef(null);
    useEffect(()=>{
        
    //   let find =   data.event.find(e=>e._id===_id)
    //    let fd = find.attendance.find(e=>e._id===data.me.i)
    //    console.log('search for the right')
    //    console.log(fd)
    //    setActiveIndex(fd.proces||sel)
        // console.log("logging nodoes  here")
        // console.log(sel)
    })

    const send =(v)=>{ 
        progress({to:'progress',msg:v})
    }
    const items = [
        {
            label: 'Start',
            command: (event) => {
                send({task:_id,stage:0,me:data.me.i,room:data.me.department})
                console.log(_id)
                // toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: ' On-Progress ',
            command: (event) => {
                send({task:_id,stage:1,me:data.me.i,room:data.me.department})
                // toast.current.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
            }
        },
        {
            label: 'Done',
            command: (event) => {
                send({task:_id,stage:2,me:data.me.i,room:data.me.department})
                // toast.current.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
            }
        } 
    ];

    return (
        <div className="steps-demo">
            <Toast ref={toast}></Toast> 
                <Steps className='steperCustom' model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
            </div>
    );
}