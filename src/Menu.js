import React,{useState,useContext,useEffect} from 'react';
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar'; 
import 'primeicons/primeicons.css';
import { FileUpload } from 'primereact/fileupload';
import axios from 'axios';
import Compressor from 'compressorjs';
import { Context } from "./App";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

import { Dialog } from 'primereact/dialog';
 
export default ({sVisible}) => {
    // const toast = useRef(null);
        const { data } = useContext(Context)
    const [img,sImg] = useState(false)  
    const [ss,Sueccess] = useState(false)
    const [errImg,sErrimg] = useState('')
    console.log(errImg)
    const items = [
        {
            label: 'All',
            icon: 'pi pi-align-justify',
            command: (event) => {
                // event.originalEvent: Browser event
                // event.item: MenuItem instance
                // console.log(event.item)
                sVisible(true)
            }
        }
    ];

    
    useEffect(()=>{
        sErrimg('')
        sErrimg(data?.me.img||'person.png')
    },[ss])

     
    const start =   <img alt="outlook365.png" src="outlook365.png" style={{cursor:'pointer'}}   height="35" className="p-mr-2"/>
    const end = <img   alt='add photo' onClick={()=>sImg(true)} src={errImg} style={{border:'0px solid green', cursor:'pointer',maxWidth:'3em',height:'3em',width:'3em', maxHeight:'3em',borderRadius:'10em'}} />  
      
 


    const onBasicUploadAuto = (file) => {
        new Compressor(file, {
            quality: 0.8,
            mimeType:'jpeg',
            success(result) {
                console.log(result)
              const formData = new FormData();
         
              // The third parameter is required for server
              formData.append('file', result, result.name);
              formData.append('url',data.me.img)
         
              // Send the compressed image file to server with XMLHttpRequest.
              axios.post('/image', formData).then(() => {
                Sueccess(!ss)
              });
            },
            error(err) {
              console.log(err.message);
            },
          });
    }
 
                         

    return (
        <div>
            <div className="cards">  
            <Menubar model={items} start={start} end={end} />
             
             <Dialog  header="Profile image" visible={img} style={{ width: '50vw' }} onHide={() =>sImg(false)}> 
             <Avatar onImageError={()=>sErrimg('person.png')} image={errImg} style={{height: '9.5em',width: '10em',marginTop: '1em'}}     image={errImg} className="p-mr-2" size="xlarge" shape="circle"  /> 
                     <input onChange={e=>onBasicUploadAuto(e.target.files[0])} type='file'accept="image/*" />
                </Dialog> 
              
            </div>
        </div>
    );
}