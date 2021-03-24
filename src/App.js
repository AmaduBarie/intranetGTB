import React, { useState,useRef, useEffect } from "react";
import socketIOClient from "socket.io-client"; 
import  Calender from './Calender'
import Menu from './Menu'

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css' 
const ENDPOINT = "http://localhost:5000";
 

function App() {
 

   

  return ( 
    <><Menu/>
  {/* <Calender/> */}
    </>
 
  );
}

export default App;