import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { ScrollPanel } from 'primereact/scrollpanel';

        const items= [
                {
                    label: 'PROVINCIAL THIN CLIENT',
                    icon: 'pi pi-external-link',
                    url: ''
                },
                {
                    label: 'FREETOWN THIN CLIENT',
                    icon: 'pi pi-external-link',
                    url: ''
                }, 
                {
                    label: 'USSD ACCOUNT OPENING',
                    icon: 'pi pi-external-link',
                    url: ''
                },
                 {
                    label: 'ELECTRICITY VENDING',
                    icon: 'pi pi-external-link',
                    url: ''
                },                                                 
                {
                    label: 'DANGOTE SALES ORDER PROCESSES',
                    icon: 'pi pi-external-link',
                    url: 'http://10.99.0.37:8080/ibank_api/'
                }, 
                {
                    label: 'ONLINE PROCESSMAKER',
                    icon: 'pi pi-external-link',
                    url: 'https://10.81.0.212/syssierraleone/en/gtbank_pro/cases/main'
                }, 
                 {
                    label: 'SUCCESSFACTOR',
                    icon: 'pi pi-external-link',
                    url: 'https://sts.gtbank.com/adfs/ls/?SAMLRequest=hZLBjtowEEB%2FJTLnxI4dpGAFJFpUFWnbImB76M2xDbhNxqnHKe3fNwRW7GWXq%2FVG857G1bKPJ9ja373FmCwRbYjOw0cP2Lc27Gz447R93j7NySnGDiWlyvwMEbqmzpTWvoeImQdjWwUm076lqNqGU2c6qjQ%2BokmyCT567ZsPDoyD45z0AaRX6FCCai3KqOVu%2BeVJ8ozJ%2Bgqh%2FLzfb9LNt92eJKvB3IG6aN8lcdhzjLWCX6OTMgekDVKSrFdzsmN8prmZzVIulE4LwadpWZbT9JCLsqiF0FbUA4rY2zVgVBDnhDOep0ykfLrPCymEZHlWiuIHSb7bgOPywZAkf9sG8P2K7pZ8gyUgf39AvdzlPlFcW4fU8%2FmcnUXmw5FyxnLKCjpAFvTkTos3aEbZ7EIbdMcJWVSDiRyzw%2BLB4Sr6iq2%2BDsrr1cY3Tv9LPvnQqvh2UZ7l44sz6WFEZQ%2FYWe0OzhpCFxV9%2FSkX%2FwE%3D&RelayState=arce0c10b&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=RARqfLBEjxB7nJACYxGw9Lo7GGSvFRgSKMht0S41DGxdnvtjLj52z6Jn%2BhYPOAa5HIm93FmfWbrLhqVvVmxlEdMT%2Bi8Ax7WwA66ojkdgQKwKiLWwZZc%2F4t0Vv5l%2F3Gwa03DSD73M73U223I3lZTvn2RyLvi095pGXcISKo12Y3Rd16AlFRycCRVDwVfROcltE4SRSIC8IYYo16OvgHXYIUqzhpsaaXHTsxfPcmuVqae91u6usA%2BT61pUyvHU%2BVOBMBMCMB9GpeiTDkJowdiPt9SP6BhFmZ6uKduA5KoFu8OCQizcdaRrvhky5%2BvNZtEqNfq3NfsPyl%2Bh4q0PU1bGQQ%3D%3D'
                },
                {
                    label: 'SANCTION & PEP SCREENING',
                    icon: 'pi pi-external-link',
                    url: 'http://10.1.0.158/#bulletin'
                },
                 {
                    label: 'ACCOUNT OPENING',
                    icon: 'pi pi-external-link',
                    url: 'http://10.99.0.36:8080/GTBekyc/'
                },
                 {
                    label: 'HR ENTRY EXAM LINK',
                    icon: 'pi pi-external-link',
                    url: 'https://www.classmarker.com/online-test/start/?quiz=gka5bb267726774f'
                },
                 {
                    label: 'USD INSTANT CARD',
                    icon: 'pi pi-external-link',
                    url: 'http://10.1.0.4/EChannelsPortal/Login.aspx'
                },
                 {
                    label: 'MERCURY COLLECTION',
                    icon: 'pi pi-external-link',
                    url: 'http://ibank.gtb.sl/GTBSL_MercuryLink/Login.aspx'
                },
                 {
                    label: 'CBT ENTRANCE EXAMS',
                    icon: 'pi pi-external-link',
                    url: ''
                },
                 {
                    label: 'TECHNOLOGY TIPS',
                    icon: 'pi pi-external-link',
                    url: 'http://10.1.0.158/tips.html'
                },
                 {
                    label: 'E-STR PORTAL',
                    icon: 'pi pi-external-link',
                    url: ''
                },
                 {
                    label: 'IBANK-CLEARING APP',
                    icon: 'pi pi-external-link',
                    url: ''
                },
                 {
                    label: 'NEW INTERNET BANKING',
                    icon: 'pi pi-external-link',
                    url: 'https://ibank.gtb.sl/ibank6/'
                },
                 {
                    label: 'PROCESS MAKER FORM',
                    icon: 'pi pi-external-link',
                    url: 'http://10.1.0.158/archive/2020/August/PROCESS%20MAKER%20FORM_NEW.pdf'
                },
                 {
                    label: 'COMPLIANCE TEST',
                    icon: 'pi pi-external-link',
                    url: 'https://www.classmarker.com/online-test/start/?quiz=gdc5bf536d9e4e1b&iframe=1'
                },
                 {
                    label: 'SPLASH-CASH LOGIN',
                    icon: 'pi pi-external-link',
                    url: 'https://splash.moremagic.com/mui/login.seam'
                },
                 {
                    label: 'DO IT YOURSELF',
                    icon: 'pi pi-external-link',
                    url: 'https://splash.moremagic.com/mui/login.seam'
                },
                 {
                    label: 'TSG ISSUE LOG',
                    icon: 'pi pi-external-link',
                    url: 'http://ebank.gtb.sl/GTBSL_IssueLogged/GTBSL_IL_Issue.aspx'
                },
                 {
                    label: 'SPLASH-CASH LOGIN',
                    icon: 'pi pi-external-link',
                    url: ''
                },
                 {
                    label: 'SPLASH-CASH LOGIN',
                    icon: 'pi pi-external-link',
                    url: ''
                },
                 {
                    label: 'GTMT',
                    icon: 'pi pi-external-link',
                    url: ''
                } 
            ]
      
export default ({visible,sVisible}) => {
  

    return ( 
                <Sidebar blockScroll={true} visible={visible} baseZIndex={1000000} onHide={() => sVisible(false)}>
                      <ScrollPanel style={{ width: '100%', height: '36em'  }} className="custombar1">
                           <Menu model={items} />
                        </ScrollPanel>
                   
                     
                              </Sidebar>   
    )
}
                 