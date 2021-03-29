import React from 'react';
import { Dialog } from 'primereact/dialog';
import '../BulletinBoard/Dialog.css';
import ChatOrg from './ChatOrg'


export default ({sch,sSch} ) => {    
  const [title,sTitle] = React.useState('')
  const [s,ss] = React.useState(true)
    return ( 
    <Dialog  position='top' closable blockScroll={true} closable resizable header={`${title} information`} visible={sch && s} onHide={()=>sSch(false)} maximizable modal>
        <ChatOrg ss={ss} sTitle={sTitle} />  
    </Dialog> 
    )
}