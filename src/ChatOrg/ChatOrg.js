import React, { useState, useContext } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import  {Context} from "../App";
import { Button } from 'primereact/button';
// import Progress from './Progress' 
import axios from 'axios';

export default ({sTitle,ss}) => {
    const {data} = useContext(Context) 
    const [selection, setSelection] = useState([]); 
    let  setter = ''
    const [task,sTask] = useState('')
    const {sData} = useContext(Context) 
    const [me,sme] = useState(false)
 

    const deleter = ()=>{
        axios.post('/delete', {_id:setter}).then((res) => {
            if(res.data==='success'){
                console.log('success')
                sData({role:'succDel',d:setter})
                ss(false)
            }
            // Sueccess(!ss)
          });
    }


    const nodeTemplate = (node) => {
        if(node.setter){
             if(node.setter===data.me.i){
                 setter=node._id
                 sme(true)
             }
            
            sTask(node.task)
            sTitle(node.task)
        }
      if (node.label) return node.label
            return (
                <div>
                    <div className="node-header">{node.username||node.Progress}</div>
                    <div className="node-content">
                       {node.username && <img alt={node.username} src={node.img} onError={(e) => e.target.src='logo.jpg'} style={{ width: '32px' }} />
                    //    :node.task==='Task'?<Progress progress={progress}  _id={node._id} sel={node.proces}/>
                    //    :null
                       }
                       
                        
                    </div>
                </div>
            );
      

      
    }

     

    return (
        <div className="organizationchart-demo" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',flexWrap:'nowrap'}}>
            <div className="card">
              {data.schedule &&  <OrganizationChart value={data.schedule} nodeTemplate={nodeTemplate} selection={selection} selectionMode="single"
                    onSelectionChange={event => setSelection(event._id)} className="company"/>    }      
            </div>
           { me && <Button onClick={deleter} label={`Delete ${task}`} className="p-button-rounded p-button-danger" />}
        </div>
    )
}
    