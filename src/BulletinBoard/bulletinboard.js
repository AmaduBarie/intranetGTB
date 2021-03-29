import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default () => {

    const header = <img alt="logo" src='logo.jpg' />;

    const download = (link) => {
        //creating an invisible element
        var element = document.createElement('a');
        element.setAttribute('href', link);
        //   element.setAttribute('download', file);

        // Above code is equivalent to
        // <a href="path of file" download="file name">

        document.body.appendChild(element);

        //onClick property
        element.click();

        document.body.removeChild(element);
    }

    return (
        <div>
        <div className='par'>
            <h1 style={{ padding: '1em', borderRadius: '10px', color: 'whitesmoke' }}>BULLETIN BOARD</h1>
            <div className='btnholds'>
                <div>
                    <img alt="Card" src="watchlist.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    <Button onClick={() => download('http://10.1.0.158/archive/2020/October/Internal%20Watchlist%20%20%20OCT%209%202020.xls')} icon="pi pi-download" label="Internal watchlist oct 2020" className="p-button-sm" />
                </div>
                <div>
                    <img alt="Card" src="deposite.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    <Button onClick={() => download('http://10.1.0.158/archive/2021/March/TIME%20DEPOSIT%20RATE%2005.03.2021.pdf')} icon="pi pi-download" label="Time Deposite Rate" className="p-button-sm" />
                </div>
                <div>
                    <img alt="Card" src="codeofconduct.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    <Button onClick={() => download('http://10.1.0.158/archive/2020/June/CODE%20OF%20CONDUCT.pptx')} icon="pi pi-download" label="Code of Conduct" className="p-button-sm" />
                </div>

                <div>
                    <img alt="Card" src="promote.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    <Button onClick={() => download('http://10.1.0.158/archive/2020/June/PROMOTION%20LIST%202020%20UPDATED.pdf')} icon="pi pi-download" label="Promotion List 2020 Update" className="p-button-sm" />
                </div>
            </div>
            <div className='btnholdss'>

                <div>
                    <img alt="Card" src="resumptiontime.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    <Button onClick={() => download('http://10.1.0.158/archive/2020/August/RESUMPTION%20TIME-100820.pdf')} icon="pi pi-download" label="Resumption Time" className="p-button-sm" />
                </div>

                <div>
                    <img alt="Card" src="reassign.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    <Button onClick={() => download('http://10.1.0.158/archive/2020/August/REASSIGNMENT-Unisa%20Bangura.pdf')} icon="pi pi-download" label="Reassignment" className="p-button-sm" />
                </div>



                <div>
                    <img alt="Card" src="security.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    <Button onClick={() => download('http://10.1.0.158/archive/2020/September/IT_Security_awareness.pptx')} icon="pi pi-download" label="Security Awareness" className="p-button-sm" />
                </div>
            </div>

            <div className='btnholdss'>

                <Card header={header} title="Bank Policies" subTitle="Human Resources">
                    <ol >
                        <li><a href='#'>Absenteeism</a></li>
                        <li><a href='#'>Corporate grooming</a></li>
                        <li><a href='#'>Office hours policy</a></li>
                        <li><a href='#'>Confirmation period policy</a></li>
                        <li><a href='#'>Relocation policy</a></li>
                    </ol>

                </Card>
                <Card header={header} title="Correspondent Banks" subTitle="GTBank SSI">
                    <ol>
                        <li><a href='#'>Absenteeism</a></li>
                        <li><a href='#'>Corporate grooming</a></li>
                        <li><a href='#'>Office hours policy</a></li>
                        <li><a href='#'>Confirmation period policy</a></li>
                        <li><a href='#'>Relocation policy</a></li>
                    </ol>

                </Card>   <Card header={header} title="Bank Policies" subTitle="Human Resources">
                    <ol>
                        <li><a href='#'>Absenteeism</a></li>
                        <li><a href='#'>Corporate grooming</a></li>
                        <li><a href='#'>Office hours policy</a></li>
                        <li><a href='#'>Confirmation period policy</a></li>
                        <li><a href='#'>Relocation policy</a></li>
                    </ol>

                </Card>
            </div>
        </div>









        
        </div> 
    )
}
