(this.webpackJsonpiptracker=this.webpackJsonpiptracker||[]).push([[0],{107:function(e,t,n){},128:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),s=n(16),c=n.n(s),l=(n(107),n(6)),o=n(36),r=n(14),d=n(5),m=n(87),p=n(26),u=n(44),j=n(88),b=n(89),h=n(12),x=n(90),O=n(2),g=function(e){var t=e.sender,n=Object(a.useState)(new Date),i=Object(l.a)(n,2),s=i[0],c=i[1];return Object(O.jsxs)("div",{style:{display:"flex",flexWrap:"nowrap",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)("h3",{children:"Select time: "}),Object(O.jsx)(x.Calendar,{style:{maxHeight:"2em",margin:"0px 10px"},value:s,onChange:function(e){t({title:new Date(e.value).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}),c(e.value)},timeOnly:!0,hourFormat:"12"})]})},f=n(45),v=(n(61),n(46)),w=n(91),y=(n(128),function(e){var t=e.sender,n=e.date,i=Object(a.useContext)(re).data;return Object(O.jsx)(w.MultiSelect,{style:{margin:"5px"},value:null===n||void 0===n?void 0:n.attendance,options:i.atten,onChange:function(e){return t({attendance:e.value})},optionLabel:"Select people to see",placeholder:"Select people to see",filter:!0,className:"multiselect-custom",itemTemplate:function(e){return Object(O.jsxs)("div",{className:"country-item",children:[Object(O.jsx)("img",{style:{maxWidth:"2em",maxHeight:"2em",borderRadius:"5em"},alt:e.name,src:e.img,onError:function(e){return e.target.src="person.png"},className:"flag flag"}),Object(O.jsx)("div",{children:e.username})]})},selectedItemTemplate:function(e){return e?Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"3px",margin:"4px"},className:"country-item country-item-value",children:[Object(O.jsx)("img",{alt:e.username,src:e.img,style:{maxWidth:"2em",maxHeight:"2em",borderRadius:"5em"},onError:function(e){return e.target.src="person.png"},className:"flag flag"}),Object(O.jsx)("div",{style:{marginLeft:"1em"},children:e.username})]}):"Select people to see"}})}),C=function(e){var t=e.open,n=e.sopen,i=e.date,s=e.sender,c=e.send,o=e.erralert,r=e.sErralert,d=Object(a.useState)(""),m=Object(l.a)(d,2),u=m[0],j=m[1];Object(a.useEffect)((function(){j(""),s({task:""})}),[i.start]);return Object(O.jsxs)(p.Dialog,{blockScroll:!0,closable:!1,resizable:!0,header:"Event planner",visible:t,onHide:function(){return n(!1)},maximizable:!0,modal:!0,style:{width:"50vw",eight:"5em"},footer:Object(O.jsxs)("div",{children:[Object(O.jsx)(h.Button,{label:"Cancel",icon:"pi pi-times",onClick:function(){return n(!1)},className:"p-button-text"}),Object(O.jsx)(h.Button,{label:"Send",icon:"pi pi-check",disabled:c,onClick:function(){return s("send")},autoFocus:!0})]}),children:[Object(O.jsx)(p.Dialog,{blockScroll:!0,closable:!1,resizable:!0,header:"Error",visible:o&&!0,onHide:function(){return r(!1)},maximizable:!0,modal:!0,style:{width:"50vw",eight:"5em"},footer:Object(O.jsx)("div",{children:Object(O.jsx)(h.Button,{label:"Cancel",icon:"pi pi-times",onClick:function(){return r(!1)},className:"p-button-text"})}),children:Object(O.jsx)("div",{style:{backgroundColor:"".concat("Event planner"===o?"white":"red"),padding:".3em",borderRadius:"5px",width:"100%"},children:o})}),Object(O.jsxs)("div",{style:{minHeight:"15em",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",flexWrap:"nowrap"},children:[Object(O.jsx)("h2",{children:"Date for the event: "}),Object(O.jsx)("h2",{children:new Date(i.start).toLocaleDateString()})]}),Object(O.jsx)("div",{className:"p-field p-col-12 p-md-4",children:Object(O.jsxs)("span",{className:"p-float-label",children:[Object(O.jsx)(v.Dropdown,{id:"dropdown",value:u,options:[{task:"Meeting"},{task:"Task"}],onChange:function(e){j(e.value),s({task:e.value.task})},optionLabel:"task"}),Object(O.jsx)("label",{htmlFor:"dropdown",children:"Select purpose of event"})]})}),Object(O.jsx)(g,{sender:s}),Object(O.jsx)(y,{date:i,sender:s}),Object(O.jsx)(f.InputTextarea,{value:(null===i||void 0===i?void 0:i.description)||"",style:{margin:"10px 5px",minHeight:"12em",height:"12em"},onChange:function(e){return s({description:e.target.value.slice(0,1).toUpperCase()+e.target.value.slice(1).toLowerCase()})},rows:12,cols:50,autoResize:!0,placeholder:i.task?"Reason for ".concat(i.task):"Reason message"})]})]})},k=n(47),S=n(40),N=n(206),E=n(207),T={},I=function(e){var t=e.e,n=Object(a.useContext)(re).data;return Object(a.useEffect)((function(){n.atten.forEach((function(e){T[e._id]=e.date}))})),Object(O.jsxs)("div",{className:t.setter===n.me.i?"parinfome":"parinfo",children:[t.setter!==n.me.i&&Object(O.jsxs)("div",{className:"info",children:[Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-end"},children:[" ",Object(O.jsx)(S.Avatar,{image:"logo.jpg",className:"p-mr-2",size:"small",shape:"circle"}),Object(O.jsx)("span",{style:{margin:"0px 4px",color:"rgb(255, 255, 255)"},children:t.username})]}),Object(O.jsx)("div",{style:{fontWeight:"600",fontSize:"smaller",color:"rgb(228 222 222)"},children:t.date.time})]}),Object(O.jsxs)("div",{style:{width:"100%"},children:[Object(O.jsx)("div",{style:{fontWeight:"500",margin:"5px 2px",color:"#e6e8e5"},children:t.msg}),Object(O.jsxs)("div",{style:{padding:"0px",width:"100%",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"},children:[Object(O.jsx)(k.ScrollPanel,{style:{width:"".concat(t.setter!==n.me.i?"100%":"70%"),height:"38px",padding:"0px"},className:"custombar2",children:Object(O.jsx)("div",{style:{position:"relative",top:"10%",height:"fit-content",width:"fit-content",display:"flex",flexWrap:"nowrap"},children:t.attendance.map((function(e){if(console.log("checking the read pictures"),Object(N.a)(Object(E.a)(t.date.datesd),Object(E.a)(T[e._id]))||"online"===n[e._id])return Object(O.jsx)(S.Avatar,{style:{margin:"1px"},image:"logo.jpg",size:"small",shape:"circle"})}))})}),t.setter===n.me.i&&Object(O.jsx)("div",{style:{fontWeight:"600",fontSize:"smaller",color:"rgb(228 222 222)"},children:t.date.time})]})]})]})},R=function(e){var t,n,s,c,m,p=e.send,u=Object(a.useContext)(re).data,j=i.a.useState({img:null===u||void 0===u||null===(t=u.me)||void 0===t?void 0:t.img,username:null===u||void 0===u||null===(n=u.me)||void 0===n?void 0:n.name,setter:null===u||void 0===u||null===(s=u.me)||void 0===s?void 0:s.i,room:null===u||void 0===u||null===(c=u.me)||void 0===c?void 0:c.department,msg:"",attendance:u.atten&&Object(o.a)(null===u||void 0===u?void 0:u.atten)}),b=Object(l.a)(j,2),x=b[0],g=b[1],v=function(e){g(Object(d.a)(Object(d.a)({},x),e))};return Object(O.jsx)("div",{className:"scrollpanel-demo",children:Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},className:"p-col-12 p-md-4",children:[Object(O.jsx)(k.ScrollPanel,{style:{width:"100%",height:"22em"},className:"custombar1",children:Object(O.jsx)("div",{style:{padding:"1em",lineHeight:"1.5"},children:(null===(m=u.chats)||void 0===m?void 0:m.length)?u.chats.map((function(e,t){var n,a;return Object(O.jsxs)("div",{style:{flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)("h4",{style:Object(r.a)({alignSelf:"center",margin:"0px"},"margin","0px auto"),children:0===t&&e.date.date}),Object(O.jsx)("h4",{style:Object(r.a)({alignSelf:"center",margin:"0px"},"margin","0px auto"),children:e.date.date!==(null===(n=u.chats[t+1])||void 0===n||null===(a=n.date)||void 0===a?void 0:a.date)}),Object(O.jsx)(I,{e:e})]})})):Object(O.jsx)("div",{children:"no message for now"})})}),Object(O.jsx)(y,{sender:v,date:x}),Object(O.jsx)(f.InputTextarea,{value:x.msg,style:{maxHeight:"4.5em",margin:"0px 5px"},onChange:function(e){return v({msg:e.target.value})},rows:3,cols:50,autoResize:!0,placeholder:"Message"}),Object(O.jsx)(h.Button,{onClick:function(){x.msg&&x.attendance.length&&p({to:"notification",msg:Object(d.a)({},x)})},label:"Send",className:"p-button-raised",style:{margin:"5px",alignSelf:"flex-end"}})]})})},L=n(92),P=n(10),A=n(93),B=n(94),D=n(95),F=n(30),G=n.n(F),M=function(e){var t=e._id,n=e.sel,i=e.progress,s=Object(a.useContext)(re).data,c=Object(a.useState)(n),o=Object(l.a)(c,2),r=o[0],d=o[1],m=Object(a.useRef)(null);Object(a.useEffect)((function(){}));var p=function(e){i({to:"progress",msg:e})},u=[{label:"Start",command:function(e){p({task:t,stage:0,me:s.me.i,room:s.me.department}),console.log(t)}},{label:" On-Progress ",command:function(e){p({task:t,stage:1,me:s.me.i,room:s.me.department})}},{label:"Done",command:function(e){p({task:t,stage:2,me:s.me.i,room:s.me.department})}}];return Object(O.jsxs)("div",{className:"steps-demo",children:[Object(O.jsx)(D.Toast,{ref:m}),Object(O.jsx)(B.Steps,{className:"steperCustom",model:u,activeIndex:r,onSelect:function(e){return d(e.index)},readOnly:!1})]})},W=function(e){var t=e.progress,n=Object(a.useContext)(re).data,i=Object(a.useState)([]),s=Object(l.a)(i,2),c=s[0],o=s[1];return Object(O.jsx)("div",{className:"organizationchart-demo",children:Object(O.jsx)("div",{className:"card",children:n.schedule&&Object(O.jsx)(A.OrganizationChart,{value:n.schedule,nodeTemplate:function(e){return e.label?e.label:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"node-header",children:e.username||e.Progress}),Object(O.jsx)("div",{className:"node-content",children:e.username?Object(O.jsx)("img",{alt:e.username,src:e.img,onError:function(e){return e.target.src="logo.jpg"},style:{width:"32px"}}):"Task"===e.task?Object(O.jsx)(M,{progress:t,_id:e._id,sel:e.proces}):null})]})},selection:c,selectionMode:"single",onSelectionChange:function(e){return o(e._id)},className:"company"})})})},U=function(e){var t=e.sch,n=e.sSch,a=e.progress;return Object(O.jsx)(p.Dialog,{position:"top",closable:!0,blockScroll:!0,resizable:!0,header:"Meeting information",visible:t,onHide:function(){return n(!1)},maximizable:!0,modal:!0,children:Object(O.jsx)(W,{progress:a})})},H=Object(P.e)((function(e){var t=e.load,n=e.push,s=e.open,c=e.send,o=e.sOpen,r=e.sSend,h=i.a.useState({title:"",attendance:"",start:"",description:"",task:""}),x=Object(l.a)(h,2),g=x[0],f=x[1],v=Object(a.useContext)(re),w=v.data,y=v.sData,k=Object(a.useState)(!1),S=Object(l.a)(k,2),N=S[0],E=S[1],T=i.a.useState(!1),I=Object(l.a)(T,2),P=I[0],A=I[1],B={title:"Please set the time of the ".concat(g.task||"meeting or task",". \n this time will show on the calender and if you share this ").concat(g.task||"meeting or task"," those people will see it on there calender as well, so that they will know the time of the ").concat(g.task||"meeting or task"),description:"Please write reason for the ".concat(g.task||"meeting or the task"," so that it can be easily remember. And also if you select people to see this ").concat(g.task||"meeting or task"," they will know the reason for it."),task:"Please select what you want to set either a Meeting or a Task. Please note if you select task and don't don't select people to see it. it is private to you, you are the only one that will see it. But if you select Meeting and don't select any one to see it everyone in the department will that see that meeting."},D={initialView:"dayGridMonth",plugins:[j.a,b.a,u.b],headerToolbar:{left:"dayGridMonth,timeGridWeek,timeGridDay",center:"title",right:"prev,next"},eventColor:"#522A09",dateClick:function(e){o(!0),f(Object(d.a)(Object(d.a)({},g),{},{start:e.dateStr}))},eventClick:function(e){y({role:"schedule",d:e.event.extendedProps}),E(!0)},displayEventTime:!1,customButtons:{custom1:{text:"custom 1",click:function(){alert("clicked custom button 1!")}},custom2:{text:"custom 2",click:function(){alert("clicked custom button 2!")}}}};return Object(a.useEffect)((function(){w.me||e.history.push("/")})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(C,{erralert:P,sErralert:A,open:s,sopen:o,date:g,sender:function(e){if("send"===e){var t=!0;for(var a in g)"attendance"===a||g[a]||(A(B[a]),t=!1);t&&(r(!0),A(!1),n({to:"message",msg:{save:Object(d.a)(Object(d.a)({},g),{},{setter:w.me.i,attendance:g.attendance.length?g.attendance:"Task"===g.task?[]:w.atten}),room:w.me.department}}),f({title:"",attendance:[],start:"",description:"",task:""}))}else f(Object(d.a)(Object(d.a)({},g),e))},send:c}),Object(O.jsx)(p.Dialog,{header:"Loading data...",visible:t,style:{width:"50vw"},children:Object(O.jsx)(L.ProgressSpinner,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"#EEEEEE",animationDuration:".5s"})}),Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"100%",flexWrap:"nowrap"},children:[Object(O.jsx)(m.FullCalendar,{style:{width:"100%",overFlow:"hidden"},events:w.event,options:D}),Object(O.jsxs)("div",{className:"notification",children:[Object(O.jsx)("div",{className:"chats",children:"Messages"}),Object(O.jsx)(R,{send:n})]})]}),w.schedule&&Object(O.jsx)(U,{progress:function(e){n(e)},sch:N,sSch:E})]})})),z=n(97),_=(n(160),n(161),n(98)),V=n.n(_),q=(n(166),n(167),function(e){var t,n=e.sVisible,i=Object(a.useContext)(re).data,s=Object(a.useState)(!1),c=Object(l.a)(s,2),o=c[0],d=c[1],m=Object(a.useState)(!1),u=Object(l.a)(m,2),j=u[0],b=u[1],h=Object(a.useState)(""),x=Object(l.a)(h,2),g=x[0],f=x[1];console.log(g);var v=[{label:"All",icon:"pi pi-align-justify",command:function(e){n(!0)}}];Object(a.useEffect)((function(){f(""),f((null===i||void 0===i?void 0:i.me.img)||"person.png")}),[j]);var w=Object(O.jsx)("img",{alt:"outlook365.png",src:"outlook365.png",style:{cursor:"pointer"},height:"35",className:"p-mr-2"}),y=Object(O.jsx)("img",{alt:"add photo",onClick:function(){return d(!0)},src:g,style:{border:"0px solid green",cursor:"pointer",maxWidth:"3em",maxHeight:"3em",borderRadius:"10em"}});return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"cards",children:[Object(O.jsx)(z.Menubar,{model:v,start:w,end:y}),Object(O.jsxs)(p.Dialog,{header:"Profile image",visible:o,style:{width:"50vw"},onHide:function(){return d(!1)},children:[Object(O.jsx)(S.Avatar,(t={onImageError:function(){return f("person.png")},image:g,style:{height:"9.5em",width:"10em",marginTop:"1em"}},Object(r.a)(t,"image",g),Object(r.a)(t,"className","p-mr-2"),Object(r.a)(t,"size","xlarge"),Object(r.a)(t,"shape","circle"),t)),Object(O.jsx)("input",{onChange:function(e){return t=e.target.files[0],void new V.a(t,{quality:.8,mimeType:"jpeg",success:function(e){console.log(e);var t=new FormData;t.append("file",e,e.name),t.append("url",i.me.img),G.a.post("/image",t).then((function(){b(!j)}))},error:function(e){console.log(e.message)}});var t},type:"file",accept:"image/*"})]})]})})}),K=n(49),Z=function(){var e=Object(O.jsx)("img",{alt:"logo",src:"logo.jpg"}),t=function(e){var t=document.createElement("a");t.setAttribute("href",e),document.body.appendChild(t),t.click(),document.body.removeChild(t)};return Object(O.jsxs)("div",{className:"par",children:[Object(O.jsx)("h1",{style:{padding:"1em",borderRadius:"10px",color:"whitesmoke"},children:"BULLETIN BOARD"}),Object(O.jsxs)("div",{className:"btnholds",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{alt:"Card",src:"watchlist.png",onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"}}),Object(O.jsx)(h.Button,{onClick:function(){return t("http://10.1.0.158/archive/2020/October/Internal%20Watchlist%20%20%20OCT%209%202020.xls")},icon:"pi pi-download",label:"Internal watchlist oct 2020",className:"p-button-sm"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{alt:"Card",src:"deposite.png",onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"}}),Object(O.jsx)(h.Button,{onClick:function(){return t("http://10.1.0.158/archive/2021/March/TIME%20DEPOSIT%20RATE%2005.03.2021.pdf")},icon:"pi pi-download",label:"Time Deposite Rate",className:"p-button-sm"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{alt:"Card",src:"codeofconduct.png",onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"}}),Object(O.jsx)(h.Button,{onClick:function(){return t("http://10.1.0.158/archive/2020/June/CODE%20OF%20CONDUCT.pptx")},icon:"pi pi-download",label:"Code of Conduct",className:"p-button-sm"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{alt:"Card",src:"promote.png",onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"}}),Object(O.jsx)(h.Button,{onClick:function(){return t("http://10.1.0.158/archive/2020/June/PROMOTION%20LIST%202020%20UPDATED.pdf")},icon:"pi pi-download",label:"Promotion List 2020 Update",className:"p-button-sm"})]})]}),Object(O.jsxs)("div",{className:"btnholdss",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{alt:"Card",src:"resumptiontime.png",onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"}}),Object(O.jsx)(h.Button,{onClick:function(){return t("http://10.1.0.158/archive/2020/August/RESUMPTION%20TIME-100820.pdf")},icon:"pi pi-download",label:"Resumption Time",className:"p-button-sm"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{alt:"Card",src:"reassign.png",onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"}}),Object(O.jsx)(h.Button,{onClick:function(){return t("http://10.1.0.158/archive/2020/August/REASSIGNMENT-Unisa%20Bangura.pdf")},icon:"pi pi-download",label:"Reassignment",className:"p-button-sm"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{alt:"Card",src:"security.png",onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"}}),Object(O.jsx)(h.Button,{onClick:function(){return t("http://10.1.0.158/archive/2020/September/IT_Security_awareness.pptx")},icon:"pi pi-download",label:"Security Awareness",className:"p-button-sm"})]})]}),Object(O.jsxs)("div",{className:"btnholdss",children:[Object(O.jsx)(K.Card,{header:e,title:"Bank Policies",subTitle:"Human Resources",children:Object(O.jsxs)("ol",{children:[Object(O.jsx)("li",{children:"Absenteeism"}),Object(O.jsx)("li",{children:"Corporate grooming"}),Object(O.jsx)("li",{children:"Office hours policy"}),Object(O.jsx)("li",{children:"Confirmation period policy"}),Object(O.jsx)("li",{children:"Relocation policy"})]})}),Object(O.jsx)(K.Card,{header:e,title:"Correspondent Banks",subTitle:"GTBank SSI",children:Object(O.jsxs)("ol",{children:[Object(O.jsx)("li",{children:"Absenteeism"}),Object(O.jsx)("li",{children:"Corporate grooming"}),Object(O.jsx)("li",{children:"Office hours policy"}),Object(O.jsx)("li",{children:"Confirmation period policy"}),Object(O.jsx)("li",{children:"Relocation policy"})]})}),"   ",Object(O.jsx)(K.Card,{header:e,title:"Bank Policies",subTitle:"Human Resources",children:Object(O.jsxs)("ol",{children:[Object(O.jsx)("li",{children:"Absenteeism"}),Object(O.jsx)("li",{children:"Corporate grooming"}),Object(O.jsx)("li",{children:"Office hours policy"}),Object(O.jsx)("li",{children:"Confirmation period policy"}),Object(O.jsx)("li",{children:"Relocation policy"})]})})]})]})},J=n(99),Y=n(100),X=[{label:"PROVINCIAL THIN CLIENT",icon:"pi pi-external-link",url:""},{label:"FREETOWN THIN CLIENT",icon:"pi pi-external-link",url:""},{label:"USSD ACCOUNT OPENING",icon:"pi pi-external-link",url:""},{label:"ELECTRICITY VENDING",icon:"pi pi-external-link",url:""},{label:"DANGOTE SALES ORDER PROCESSES",icon:"pi pi-external-link",url:"http://10.99.0.37:8080/ibank_api/"},{label:"ONLINE PROCESSMAKER",icon:"pi pi-external-link",url:"https://10.81.0.212/syssierraleone/en/gtbank_pro/cases/main"},{label:"SUCCESSFACTOR",icon:"pi pi-external-link",url:"https://sts.gtbank.com/adfs/ls/?SAMLRequest=hZLBjtowEEB%2FJTLnxI4dpGAFJFpUFWnbImB76M2xDbhNxqnHKe3fNwRW7GWXq%2FVG857G1bKPJ9ja373FmCwRbYjOw0cP2Lc27Gz447R93j7NySnGDiWlyvwMEbqmzpTWvoeImQdjWwUm076lqNqGU2c6qjQ%2BokmyCT567ZsPDoyD45z0AaRX6FCCai3KqOVu%2BeVJ8ozJ%2Bgqh%2FLzfb9LNt92eJKvB3IG6aN8lcdhzjLWCX6OTMgekDVKSrFdzsmN8prmZzVIulE4LwadpWZbT9JCLsqiF0FbUA4rY2zVgVBDnhDOep0ykfLrPCymEZHlWiuIHSb7bgOPywZAkf9sG8P2K7pZ8gyUgf39AvdzlPlFcW4fU8%2FmcnUXmw5FyxnLKCjpAFvTkTos3aEbZ7EIbdMcJWVSDiRyzw%2BLB4Sr6iq2%2BDsrr1cY3Tv9LPvnQqvh2UZ7l44sz6WFEZQ%2FYWe0OzhpCFxV9%2FSkX%2FwE%3D&RelayState=arce0c10b&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=RARqfLBEjxB7nJACYxGw9Lo7GGSvFRgSKMht0S41DGxdnvtjLj52z6Jn%2BhYPOAa5HIm93FmfWbrLhqVvVmxlEdMT%2Bi8Ax7WwA66ojkdgQKwKiLWwZZc%2F4t0Vv5l%2F3Gwa03DSD73M73U223I3lZTvn2RyLvi095pGXcISKo12Y3Rd16AlFRycCRVDwVfROcltE4SRSIC8IYYo16OvgHXYIUqzhpsaaXHTsxfPcmuVqae91u6usA%2BT61pUyvHU%2BVOBMBMCMB9GpeiTDkJowdiPt9SP6BhFmZ6uKduA5KoFu8OCQizcdaRrvhky5%2BvNZtEqNfq3NfsPyl%2Bh4q0PU1bGQQ%3D%3D"},{label:"SANCTION & PEP SCREENING",icon:"pi pi-external-link",url:"http://10.1.0.158/#bulletin"},{label:"ACCOUNT OPENING",icon:"pi pi-external-link",url:"http://10.99.0.36:8080/GTBekyc/"},{label:"HR ENTRY EXAM LINK",icon:"pi pi-external-link",url:"https://www.classmarker.com/online-test/start/?quiz=gka5bb267726774f"},{label:"USD INSTANT CARD",icon:"pi pi-external-link",url:"http://10.1.0.4/EChannelsPortal/Login.aspx"},{label:"MERCURY COLLECTION",icon:"pi pi-external-link",url:"http://ibank.gtb.sl/GTBSL_MercuryLink/Login.aspx"},{label:"CBT ENTRANCE EXAMS",icon:"pi pi-external-link",url:""},{label:"TECHNOLOGY TIPS",icon:"pi pi-external-link",url:"http://10.1.0.158/tips.html"},{label:"E-STR PORTAL",icon:"pi pi-external-link",url:""},{label:"IBANK-CLEARING APP",icon:"pi pi-external-link",url:""},{label:"NEW INTERNET BANKING",icon:"pi pi-external-link",url:"https://ibank.gtb.sl/ibank6/"},{label:"PROCESS MAKER FORM",icon:"pi pi-external-link",url:"http://10.1.0.158/archive/2020/August/PROCESS%20MAKER%20FORM_NEW.pdf"},{label:"COMPLIANCE TEST",icon:"pi pi-external-link",url:"https://www.classmarker.com/online-test/start/?quiz=gdc5bf536d9e4e1b&iframe=1"},{label:"SPLASH-CASH LOGIN",icon:"pi pi-external-link",url:"https://splash.moremagic.com/mui/login.seam"},{label:"DO IT YOURSELF",icon:"pi pi-external-link",url:"https://splash.moremagic.com/mui/login.seam"},{label:"TSG ISSUE LOG",icon:"pi pi-external-link",url:"http://ebank.gtb.sl/GTBSL_IssueLogged/GTBSL_IL_Issue.aspx"},{label:"SPLASH-CASH LOGIN",icon:"pi pi-external-link",url:""},{label:"SPLASH-CASH LOGIN",icon:"pi pi-external-link",url:""},{label:"GTMT",icon:"pi pi-external-link",url:""}],Q=function(e){var t=e.visible,n=e.sVisible;return Object(O.jsx)(J.Sidebar,{blockScroll:!0,visible:t,baseZIndex:1e6,onHide:function(){return n(!1)},children:Object(O.jsx)(Y.Menu,{model:X})})},$=n(29),ee=n(48),te=n(31),ne=Object(P.e)((function(e){var t=Object(a.useState)({username:"",email:"",department:"",password:"",vPassword:""}),n=Object(l.a)(t,2),i=n[0],s=n[1],c=Object(a.useState)(null),o=Object(l.a)(c,2),m=o[0],p=o[1],u=Object(a.useState)("Welcome to GTBank"),j=Object(l.a)(u,2),b=j[0],x=j[1],g=function(e){s(Object(d.a)(Object(d.a)({},i),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(O.jsxs)("div",{style:{maxWidth:"18em",margin:"auto",marginTop:"5em"},children:[Object(O.jsx)(ee.Message,{style:{width:"100%"},severity:"Welcome to GTBank"===b?"info":"error",text:b}),Object(O.jsx)("div",{}),Object(O.jsxs)("div",{className:"p-fluid",children:[Object(O.jsxs)("div",{className:"p-field p-col-12 p-md-6",style:{margin:"5px"},children:[Object(O.jsx)("label",{htmlFor:"username",children:"User name"}),Object(O.jsx)($.InputText,{id:"username",type:"text",name:"username",onChange:g})]}),Object(O.jsxs)("div",{className:"p-field p-col-12 p-md-6",style:{margin:"5px"},children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)($.InputText,{id:"email",type:"email",name:"email",onChange:g})]}),Object(O.jsxs)("div",{className:"p-field p-col-12 p-md-3",style:{margin:"5px"},children:[Object(O.jsx)("label",{htmlFor:"state",children:"Department"}),Object(O.jsx)(v.Dropdown,{inputId:"state",value:m,options:[{name:"Administration"},{name:"Clearing"},{name:"Call Center"},{name:"CRM Unit"},{name:"Compliance"},{name:"Cash Management"},{name:"Domops"},{name:"E-Business"},{name:"Fincon"},{name:"HR"},{name:"Marketing"},{name:"Operations"},{name:"Siscon"},{name:"Treasury"},{name:"Technology"}],onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{department:e.value.name})),p(e.value)},placeholder:"Select",optionLabel:"name"})]}),Object(O.jsxs)("div",{className:"p-field p-col-12 p-md-3",style:{margin:"5px"},children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)($.InputText,{id:"password",type:"password",name:"password",onChange:g})]}),Object(O.jsxs)("div",{className:"p-field p-col-12 p-md-3",style:{margin:"5px"},children:[Object(O.jsx)("label",{htmlFor:"vPassword",children:"Verify Password"}),Object(O.jsx)($.InputText,{id:"vPassword",type:"password",name:"vPassword",onChange:g})]}),Object(O.jsx)(h.Button,{label:"Send",onClick:function(){var t=!0;for(var n in i)i[n]?(console.log("in"),"email"===n&&-1===i[n].indexOf("@gtbank.com")&&(x("Not a GT Bank email"),t=!1),"password"!==n&&"vPassword"!==n||i.password===i.vPassword||(x("Password not match"),t=!1),i.password.length<5&&(x("Password is too short"),t=!1)):(x("".concat(n," is empty")),t=!1,"vPassword"===n&&x("Verify password is empty"));t&&(x("Welcome to GT Bank"),G.a.post("http://localhost:5000/signup",i).then((function(t){console.log(t.data),"success"===t.data?e.history.push("/"):x(t.data)})).catch((function(e){console.log(e)})))},className:"p-button-raised",style:{margin:"5px",maxWidth:"17.5em",alignSelf:"flex-end"}}),Object(O.jsx)(te.b,{to:"/",style:{margin:"5px",maxWidth:"17.5em",alignSelf:"flex-end"},children:"Have account"})]})]})})),ae=n(101),ie=n.n(ae),se=(n(201),Object(P.e)((function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(l.a)(t,2),i=n[0],s=n[1],c=Object(a.useState)("Welcome to GTBank"),o=Object(l.a)(c,2),m=o[0],p=o[1],u=Object(a.useContext)(re).sData,j=function(e){s(Object(d.a)(Object(d.a)({},i),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(O.jsxs)("div",{style:{maxWidth:"18em",margin:"auto",marginTop:"5em"},children:[Object(O.jsx)(ee.Message,{style:{width:"100%"},severity:"Welcome to GTBank"===m?"info":"error",text:m}),Object(O.jsxs)("div",{className:"p-fluid",children:[Object(O.jsxs)("div",{className:"p-field p-col-12 p-md-6",style:{margin:"5px"},children:[Object(O.jsx)("label",{htmlFor:"username",children:"Email"}),Object(O.jsx)($.InputText,{id:"username",type:"text",name:"email",onChange:j})]}),Object(O.jsxs)("div",{className:"p-field p-col-12 p-md-3",style:{margin:"5px"},children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)($.InputText,{id:"password",type:"password",name:"password",onChange:j})]}),Object(O.jsx)(h.Button,{label:"Send",onClick:function(){var t=!0;for(var n in i)i[n]||(p("".concat(n," is empty")),t=!1,"email"===n&&p("Username or Email is empty"));t&&(p("Welcome to GT Bank"),G.a.post("http://localhost:5000/login",i).then((function(t){t.data.me?(console.log("from the login"),console.log(t.data),u({d:t.data,role:"login"}),setTimeout((function(){e.history.push("/home")}),1e3)):p(t.data)})).catch((function(e){console.log(e)})))},className:"p-button-raised",style:{margin:"5px",maxWidth:"17.5em",alignSelf:"flex-end"}}),Object(O.jsx)(te.b,{to:"/signup",style:{margin:"5px",maxWidth:"17.5em",alignSelf:"flex-end"},children:"Create account"})]})]})}))),ce=(n(202),function(e,t){switch(t.role){case"login":return e=Object(d.a)(Object(d.a)({},e),t.d);case"status":return e=Object(d.a)(Object(d.a)({},e),{},Object(r.a)({},t.d.id,t.d.sts));case"schedule":console.log("in schedule"),console.log(t);var n={},a=t.d.attendance.filter((function(e){return e.expanded=!0,e.username=e.username.slice(0,1).toUpperCase()+e.username.slice(1).toLowerCase(),e._id!==t.d.setter}));if(e.me.i===t.d.setter)n.username=e.me.name.slice(0,1).toUpperCase()+e.me.name.slice(1).toLowerCase(),n.img=e.me.img,n._id=e.me.i;else{var i=e.atten.find((function(e){return e._id===t.d.setter}));n.username=i.username.slice(0,1).toUpperCase()+i.username.slice(1).toLowerCase(),n.img=i.img;var s=e.me.name.slice(0,1).toUpperCase()+e.me.name.slice(1).toLowerCase();a.push(Object(d.a)(Object(d.a)({},e.me),{},{expanded:!0,username:s}))}return n.className="p-person",n.type="person",n.expanded=!0,n.children=[{label:t.d.description,className:"department-cfo",expanded:!0,children:t.d.attendance}],console.log("attendance"),console.log(n),console.log("role heere"),console.log(e),Object(d.a)(Object(d.a)({},e),{},{schedule:[n]});case"progress":var c=e.event.findIndex((function(e){return e._id===t.d.msg.task}));return e.event[c].attendance=Object(o.a)(t.d.val.attendance),e=Object(d.a)({},e);case"saved":return Object(d.a)(Object(d.a)({},e),{},{event:[].concat(Object(o.a)(e.event),[t.d])});case"chats":return e=Object(d.a)(Object(d.a)({},e),{},{chats:[].concat(Object(o.a)(e.chats),[t.d])})}}),le=ie()("http://localhost:5000",{transports:["websocket","polling","flashsocket"]}),oe="",re=i.a.createContext();var de=function(){var e=Object(a.useReducer)(ce,{me:""}),t=Object(l.a)(e,2),n=t[0],s=t[1],c=i.a.useState(!1),o=Object(l.a)(c,2),r=o[0],d=o[1],m=i.a.useState(!0),p=Object(l.a)(m,2),u=p[0],j=p[1],b=i.a.useState(!1),h=Object(l.a)(b,2),x=h[0],g=h[1],f=i.a.useState(!1),v=Object(l.a)(f,2),w=v[0],y=v[1];return le.on("connect",(function(){j(!1)})),Object(a.useEffect)((function(){n.me&&le.emit("oauth",{_id:n.me.i,room:n.me.department})}),[n.me]),Object(a.useEffect)((function(){n.me&&le.on("replydate",(function(e){(e.setter===n.me.i||e.attendance.find((function(e){return e._id===n.me.i})))&&(y(!1),g(!1),oe!==e._id&&(s({d:e,role:"saved"}),oe=e._id)),console.log(e)})),n.me&&le.on("progress",(function(e){oe!==e._id&&(oe=e._id,s({d:e,role:"progress"}))})),n.me&&le.on("view",(function(e){console.log("view"),console.log(e),s({d:e,role:"status"})})),n.me&&le.on("notification",(function(e){console.log("notificaton come back"),console.log(e),(e.setter===n.me.i||e.attendance.find((function(e){return e._id===n.me.i})))&&oe!==e._id&&(oe=e._id,s({d:e,role:"chats"}),e.setter!==n.me.i&&le.emit("view",{_id:n.me.i,room:n.me.department}))}))})),Object(O.jsx)(re.Provider,{value:{data:n,sData:s},children:Object(O.jsxs)(te.a,{children:[Object(O.jsx)(P.a,{path:"/signup",children:Object(O.jsx)(ne,{})}),Object(O.jsx)(P.a,{exact:!0,path:"/",children:Object(O.jsx)(se,{})}),Object(O.jsxs)(P.a,{path:"/home",children:[Object(O.jsx)(Q,{visible:r,sVisible:d}),Object(O.jsx)(q,{sVisible:d}),Object(O.jsx)(H,{open:x,sOpen:g,send:w,sSend:y,load:u,push:function(e){le.emit(e.to,e.msg)}}),Object(O.jsx)(Z,{})]})]})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,208)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(de,{})}),document.getElementById("root")),me()},61:function(e,t,n){}},[[203,1,2]]]);
//# sourceMappingURL=main.14dd2287.chunk.js.map