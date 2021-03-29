import React from 'react';
import { Dialog } from 'primereact/dialog';
import '../BulletinBoard/Dialog.css';
import ChatOrg from './ChatOrg'


export default ({sch,sSch,progress} ) => {    
  
    return ( 
    <Dialog  position='top' closable blockScroll={true} resizable header="Meeting information" visible={sch} onHide={()=>sSch(false)} maximizable modal>
        <ChatOrg progress={progress}/>  
    </Dialog> 
    )
}