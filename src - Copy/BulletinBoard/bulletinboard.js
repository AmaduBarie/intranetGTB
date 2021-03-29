import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default () => {
 
    const header = <img alt="logo" src='logo.jpg'/>;
    

    return (
        <div className='par'>
        <h1 style={{padding:'1em',borderRadius:'10px',color:'whitesmoke'}}>BULLETIN BOARD</h1>
        <div className='btnholds'>
            <div>
                <img alt="Card" src="watch list.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                <Button icon="pi pi-download" label="Internal watchlist oct 2020" className="p-button-sm" />
            </div> 
            <div>
                <img alt="Card" src="deposite.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                <Button icon="pi pi-download" label="Time Deposite Rate" className="p-button-sm" />
            </div> 

            <div>
                <img alt="Card" src="code of conduct.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                <Button icon="pi pi-download" label="Code of Conduct" className="p-button-sm" />
            </div>  
              
            <div>
                <img alt="Card" src="promote.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                <Button icon="pi pi-download" label="Promotion List 2020 Update" className="p-button-sm" />
            </div> 
        </div>
        <div className='btnholdss'>
           
                <div>
                <img alt="Card" src="resumption time.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                <Button icon="pi pi-download" label="Resumption Time" className="p-button-sm" />
            </div> 

            <div>
                <img alt="Card" src="reassign.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                <Button icon="pi pi-download" label="Reassignment" className="p-button-sm" />
            </div>


             
            <div>
                <img alt="Card" src="security.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                <Button icon="pi pi-download" label="Security Awareness" className="p-button-sm" />
            </div> 
        </div>

        <div className='btnholdss'>
  
        <Card  header={header} title="Bank Policies" subTitle="Human Resources">
            <ol>
              <li>Absenteeism</li>
        <li>Corporate grooming</li>
        <li>Office hours policy</li>
        <li>Confirmation period policy</li>
        <li>Relocation policy</li>
            </ol>
        
        </Card>   
        <Card  header={header} title="Correspondent Banks" subTitle="GTBank SSI">
            <ol>
              <li>Absenteeism</li>
        <li>Corporate grooming</li>
        <li>Office hours policy</li>
        <li>Confirmation period policy</li>
        <li>Relocation policy</li>
            </ol>
        
        </Card>   <Card  header={header} title="Bank Policies" subTitle="Human Resources">
            <ol>
              <li>Absenteeism</li>
        <li>Corporate grooming</li>
        <li>Office hours policy</li>
        <li>Confirmation period policy</li>
        <li>Relocation policy</li>
            </ol>
        
        </Card>
        </div>
        </div>
    )
}
    