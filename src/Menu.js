import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
 
 
export default () => {
    const items = [
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            command: (event) => {
                // event.originalEvent: Browser event
                // event.item: MenuItem instance
                console.log(event.item)
            }
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil' 
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user' 
        },
        {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar' 
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    const start = <img alt="logo" src="logo.jpg"  height="40" className="p-mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" />;

    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>
        </div>
    );
}