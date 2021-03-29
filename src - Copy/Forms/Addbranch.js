import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
export default () => {
    const [selectedCity1, setSelectedCity1] = useState(null); 
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  
    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }
 

    return (          
        <div style={{display:'flex',flexWrap:'nowrap',justifyContent:'center',alignItems:'center'}}>
        <h3>{`Select department: `}</h3>  
        <Dropdown style={{margin:'0px 10px'}} value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />
        </div>
     );
}