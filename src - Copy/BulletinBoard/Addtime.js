import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar'; 

export default ({sender}) => { 
    const [date9, setDate9] = useState(new Date());
       

    return (                <div style={{display:'flex',flexWrap:'nowrap',justifyContent:'center',alignItems:'center'}}>
                            <h3>{`Select time: `}</h3>
                          <Calendar style={{maxHeight:'2em',margin:'0px 10px'}} value={date9} onChange={(e) => {
                            sender({title:new Date(e.value).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',  hour12: true })})
                            setDate9(e.value)
                            }} timeOnly hourFormat="12" />  
                        </div>
                        
           
    );
}