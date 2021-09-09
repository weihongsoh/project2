(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a.n(c),l=(a(11),a(4)),r=a.n(l),s=a(6),o=a(2),i=a(1),u=a.n(i),d=a(0),b=function(e){return Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"col-sm-2",children:"Carpark"}),Object(d.jsx)("th",{className:"col-sm-2",children:"Category"}),Object(d.jsx)("th",{className:"col-sm-2",children:"Weekdays Rate 1"}),Object(d.jsx)("th",{className:"col-sm-2",children:"Weekdays Rate 2"}),Object(d.jsx)("th",{className:"col-sm-2",children:"Saturday Rate"}),Object(d.jsx)("th",{className:"col-sm-2",children:"Sunday and Public Holiday Rate"})]})})},j=function(e){return Object(d.jsx)("tbody",{children:e.info&&e.info.map((function(t,a){return"All"===e.select||t.category===e.select?Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.carpark}),Object(d.jsx)("td",{children:t.category}),Object(d.jsx)("td",{children:t.weekdays_rate_1}),Object(d.jsx)("td",{children:t.weekdays_rate_2}),Object(d.jsx)("td",{children:t.saturday_rate}),Object(d.jsx)("td",{children:t.sunday_publicholiday_rate})]},a):null}))})},h=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("table",{id:"myTable",className:"table table-bordered",children:[Object(d.jsx)(b,{info:e.info}),Object(d.jsx)(j,{info:e.info,select:e.select})]})})},m=function(e){return Object(d.jsx)(u.a.Fragment,{children:Object(d.jsx)("input",{type:e.type,id:e.id,placeholder:e.placeholder,onKeyUp:function(t){e.handleChange(t.target.value)}})})},O=function(e){return Object(d.jsx)(u.a.Fragment,{children:Object(d.jsxs)("select",{name:"category",id:"category",onChange:function(t){e.handleSelect(t.target.value)},children:[Object(d.jsx)("option",{value:"All",children:"All"}),Object(d.jsx)("option",{value:"Central, North & North East",children:"Central, North & North East"}),Object(d.jsx)("option",{value:"East",children:"East"}),Object(d.jsx)("option",{value:"Hotels",children:"Hotels"}),Object(d.jsx)("option",{value:"Orchard Area",children:"Orchard Area"}),Object(d.jsx)("option",{value:"Singapore Attractions",children:"Singapore Attractions"}),Object(d.jsx)("option",{value:"South & CBD",children:"South & CBD"}),Object(d.jsx)("option",{value:"West",children:"West"})]})})},y=function(e){return Object(d.jsx)(u.a.Fragment,{children:Object(d.jsx)("button",{type:e.type,className:e.className,value:e.value,onClick:function(t){e.handleSubmit(t.target.value)},children:e.name})})},p=function(e){return Object(d.jsxs)(u.a.Fragment,{children:[Object(d.jsx)(m,{type:"text",id:"myInput",placeholder:"Search carpark(s)",handleChange:e.handleChange}),Object(d.jsx)(O,{handleSelect:e.handleSelect}),Object(d.jsx)(y,{className:"button",type:"submit",name:"Weekday Day Time",value:"2",handleSubmit:e.handleSubmit}),Object(d.jsx)(y,{className:"button",type:"submit",name:"Weekday Night Time",value:"3",handleSubmit:e.handleSubmit}),Object(d.jsx)(y,{className:"button",type:"submit",name:"Saturday",value:"4",handleSubmit:e.handleSubmit}),Object(d.jsx)(y,{className:"button",type:"submit",name:"Sunday",value:"5",handleSubmit:e.handleSubmit}),Object(d.jsx)(y,{className:"button",type:"submit",name:"Public Holiday",value:"5",handleSubmit:e.handleSubmit}),Object(d.jsx)(y,{className:"indication",type:"button",name:"Indicates current rate",handleSubmit:e.handleSubmit})]})},x=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),a=(t[0],t[1]),c=Object(i.useState)("All"),n=Object(o.a)(c,2),l=n[0],u=n[1],b=Object(i.useState)(""),j=Object(o.a)(b,2),m=j[0],O=j[1],y=Object(i.useState)(!0),x=Object(o.a)(y,2),S=x[0],g=x[1],f=new Date,v=(f.toString(),Object(i.useState)(f)),k=Object(o.a)(v,2),N=k[0],A=k[1],C=Object(i.useState)(N.toDateString()),w=Object(o.a)(C,2),q=(w[0],w[1],Object(i.useState)(N.toLocaleTimeString())),D=Object(o.a)(q,2),_=(D[0],D[1],Object(i.useState)(f.getDay())),E=Object(o.a)(_,2),T=(E[0],E[1],Object(i.useState)(f.getHours())),W=Object(o.a)(T,2),H=(W[0],W[1]),I=Object(i.useState)(""),R=Object(o.a)(I,2),F=R[0],B=R[1],U=(N.toDateString(),function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://data.gov.sg/api/action/datastore_search?resource_id=85207289-6ae7-4a56-9066-e6090a3684a5&limit=357",e.prev=1,e.next=4,fetch("https://data.gov.sg/api/action/datastore_search?resource_id=85207289-6ae7-4a56-9066-e6090a3684a5&limit=357");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,c=a.result.records,O(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}());return Object(i.useEffect)((function(){U(),g(!S)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Carpark Rates (for major shopping malls, attractions and hotels)"}),Object(d.jsx)(p,{handleChange:function(e){a(e);for(var t=document.querySelector("#myInput").value.toUpperCase(),c=document.querySelector("#myTable").querySelectorAll("tr"),n="",l=0;l<c.length;l++)(n=c[l].querySelectorAll("td")[0])&&((n.textContent||n.innerText).toUpperCase().indexOf(t)>-1?c[l].style.display="":c[l].style.display="none");for(var r=1;r<c.length;r++)if(2===F){for(var s=2;s<=5;s++)c[r].querySelectorAll("td")[s].style.background="";c[r].querySelectorAll("td")[F].style.background="yellow"}else if(3===F){for(var o=2;o<=5;o++)c[r].querySelectorAll("td")[o].style.background="";c[r].querySelectorAll("td")[F].style.background="yellow"}else if(4===F){for(var i=2;i<=5;i++)c[r].querySelectorAll("td")[i].style.background="";c[r].querySelectorAll("td")[F].style.background="yellow"}else if(5===F){for(var u=2;u<=5;u++)c[r].querySelectorAll("td")[u].style.background="";c[r].querySelectorAll("td")[F].style.background="yellow"}else console.log("no such date")},handleSelect:function(e){u(e)},handleSubmit:function(e){2===(e=parseInt(e))?H(10):3===e?H(19):4===e?A(new Date("September 11, 2021 09:00:00")):5===e?A(new Date("September 12, 2021 14:00:00")):6===e&&A(new Date("December 25, 2021 09:00:00")),B(e)}}),Object(d.jsx)(h,{info:m,select:l})]})};n.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.346c712a.chunk.js.map