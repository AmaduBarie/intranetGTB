import React, {useContext, useEffect} from 'react';
import { MultiSelect } from 'primereact/multiselect';
import  {Context} from "../App";
import './Multi.css';
export default  ({sender,date}) => { 
    // const [selectedCountries, setSelectedCountries] = useState(null);
 
const {data} = useContext(Context) 
  
// date: "2021-03-17T14:30:03.746Z"
// img: "zf2vy6eiia5yd5p02ci9"
// username: "gtb"
// _id: "6052126ba89bf7241ce86a0e"
    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <img style={{maxWidth:'2em',maxHeight:'2em',height:'2em',width:'2em',minHeight:'2em',minWidth:'2em',borderRadius:'5em'}} alt={option.name} src={option.img} onError={(e) => e.target.src='person.png'} className={`flag flag`} />
                <div>{option.username}</div>
            </div>
        );
    }

    const selectedCountriesTemplate = (option) => {
        if (option) {
            return (
                <div style={{display:'flex',alignItems:'center', padding:'3px',margin:'4px'}} className="country-item country-item-value">
                    <img alt={option.username}  src={option.img} style={{maxWidth:'2em',maxHeight:'2em',borderRadius:'5em',height:'2em',width:'2em',minHeight:'2em',minWidth:'2em'}} onError={(e) => e.target.src='person.png'} className={`flag flag`} />
                    <div style={{marginLeft:'1em'}}>{option.username}</div>
                </div>
            );
        }

        return "Select people to see";
    }

    return ( 
                <MultiSelect style={{margin:'5px'}} value={date?.attendance} options={data.atten}  onChange={(e) =>sender({attendance:e.value})} optionLabel="Select people to see" placeholder="Select people to see" filter className="multiselect-custom"
                    itemTemplate={countryTemplate} selectedItemTemplate={selectedCountriesTemplate}/>
       
    );
}