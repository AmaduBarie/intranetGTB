import React, { useContext, useEffect,useState } from "react";
import { Avatar } from 'primereact/avatar';
import { ScrollPanel } from 'primereact/scrollpanel';
import { isBefore, parseISO } from 'date-fns'
import { Context } from "../App";
let dater = {}
export default ({ e }) => {
    const { data } = useContext(Context)
    // const [dater,sdater] = useState({})

    useEffect(() => {
        // let dr = {}
        data.atten.forEach(g => {
            dater[g._id] = g.date
        });
    //    sdater({...dr})
    //    console.log(dr)
    })
    return (
        // parinfo
        <div className={e.setter===data.me.i?"parinfome":'parinfo'}>
            
          {e.setter!==data.me.i &&  <div className="info">


                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}> <Avatar image="logo.jpg" className="p-mr-2" size="small" shape="circle" />

                    <span style={{ margin: '0px 4px', color: 'rgb(255, 255, 255)' }} >{e.username}</span>

                </div>
                <div style={{ fontWeight: '600', fontSize: 'smaller', color: 'rgb(228 222 222)' }}>{e.date.time}</div>


            </div>}
            <div style={{ width: '100%' }}>
                <div style={{ fontWeight: '500', margin: '5px 2px', color: '#e6e8e5' }}>
                    {e.msg}
                </div>
                <div style={{ padding: '0px', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between' }}>

                    <ScrollPanel style={{width:`${e.setter!==data.me.i?'100%':'70%'}`, height: '38px', padding: '0px' }} className="custombar2">
                        <div style={{ position: 'relative', top: '10%', height: 'fit-content', width: 'fit-content', display: 'flex', flexWrap: 'nowrap' }}>
                            {
                                e.attendance.map(f => {
                                    console.log("checking the read pictures")
                                    // console.log())[e.date.datesd, dater[f._id]])
                                //   return <div>{ }</div>
                                    if (isBefore(parseISO(e.date.datesd), parseISO(dater[f._id])) || data[f._id] === 'online') {
                                        return <Avatar style={{ margin: '1px' }} image="logo.jpg" size="small" shape="circle" />
                                    }
                                })



                            }

                        </div>
                    </ScrollPanel>

                    {e.setter===data.me.i &&<div style={{ fontWeight: '600', fontSize: 'smaller', color: 'rgb(228 222 222)' }}>{e.date.time}</div>}
                </div>

            </div>

        </div>

    );
}