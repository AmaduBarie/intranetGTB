import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default ({visible,sVisible}) => {
  

    return ( 
                <Sidebar visible={visible} baseZIndex={1000000} onHide={() => sVisible(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Left Sidebar</h1>
                    <Button type="button" onClick={() =>sVisible(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                   </Sidebar>   
    )
}
                 