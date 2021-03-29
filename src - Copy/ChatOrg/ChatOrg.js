import React, { useState, useContext } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import  {Context} from "../App";
import Progress from './Progress' 

export default ({progress}) => {
    const {data} = useContext(Context) 
    const [selection, setSelection] = useState([]); 



    const nodeTemplate = (node) => {
   
      if (node.label) return node.label
            return (
                <div>
                    <div className="node-header">{node.username||node.Progress}</div>
                    <div className="node-content">
                       {node.username? <img alt={node.username} src={node.img} onError={(e) => e.target.src='logo.jpg'} style={{ width: '32px' }} />
                       :node.task==='Task'?<Progress progress={progress}  _id={node._id} sel={node.proces}/>:null
                       }
                        {/* <div>{node.data}</div> */}
                        
                    </div>
                </div>
            );
      

      
    }

     

    return (
        <div className="organizationchart-demo">
            <div className="card">
              {data.schedule &&  <OrganizationChart value={data.schedule} nodeTemplate={nodeTemplate} selection={selection} selectionMode="single"
                    onSelectionChange={event => setSelection(event._id)} className="company"/>    }      
            </div>
        </div>
    )
}
    