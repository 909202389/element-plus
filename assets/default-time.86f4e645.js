import{g as e,h as t,t as a,_ as l,r as o,o as n,c as d,b as s,a as u,F as r}from"./app.3a2d7ab6.js";const m=e({setup(){const e=t({shortcuts:[{text:"Last week",value:()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-6048e5),[t,e]}},{text:"Last month",value:()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-2592e6),[t,e]}},{text:"Last 3 months",value:()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-7776e6),[t,e]}}],value1:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value2:""});return a(e)}}),c={class:"block"},i=s("span",{class:"demonstration"},"Default",-1),p={class:"block"},v=s("span",{class:"demonstration"},"With shortcuts",-1);var h=l(m,[["render",function(e,t,a,l,m,h){const f=o("el-date-picker");return n(),d(r,null,[s("div",c,[i,u(f,{modelValue:e.value1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value1=t),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date"},null,8,["modelValue"])]),s("div",p,[v,u(f,{modelValue:e.value2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value2=t),type:"datetimerange",shortcuts:e.shortcuts,"range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date"},null,8,["modelValue","shortcuts"])])],64)}]]),f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:h});const T=e({setup(){const e=t({shortcuts:[{text:"Today",value:new Date},{text:"Yesterday",value:()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:"A week ago",value:()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e}}],value1:"",value2:"",value3:"",defaultTime:new Date(2e3,1,1,12,0,0)});return a(e)}}),D={class:"block"},V=s("span",{class:"demonstration"},"Default",-1),g={class:"block"},w=s("span",{class:"demonstration"},"With shortcuts",-1),b={class:"block"},S=s("span",{class:"demonstration"},"With default time",-1);var _=l(T,[["render",function(e,t,a,l,m,c){const i=o("el-date-picker");return n(),d(r,null,[s("div",D,[V,u(i,{modelValue:e.value1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value1=t),type:"datetime",placeholder:"Select date and time"},null,8,["modelValue"])]),s("div",g,[w,u(i,{modelValue:e.value2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value2=t),type:"datetime",placeholder:"Select date and time",shortcuts:e.shortcuts},null,8,["modelValue","shortcuts"])]),s("div",b,[S,u(i,{modelValue:e.value3,"onUpdate:modelValue":t[2]||(t[2]=t=>e.value3=t),type:"datetime",placeholder:"Select date and time","default-time":e.defaultTime},null,8,["modelValue","default-time"])])],64)}]]),k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_});const y=e({setup(){const e=t({value1:"",value2:"",defaultTime1:[new Date(2e3,1,1,12,0,0)],defaultTime2:[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]});return a(e)}}),x={class:"block"},U=s("span",{class:"demonstration"},"Start date time 12:00:00",-1),j={class:"block"},E=s("span",{class:"demonstration"},"Start date time 12:00:00, end date time 08:00:00",-1);var z=l(y,[["render",function(e,t,a,l,m,c){const i=o("el-date-picker");return n(),d(r,null,[s("div",x,[U,u(i,{modelValue:e.value1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value1=t),type:"datetimerange","start-placeholder":"Start Date","end-placeholder":"End Date","default-time":e.defaultTime1},null,8,["modelValue","default-time"])]),s("div",j,[E,u(i,{modelValue:e.value2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value2=t),type:"datetimerange","start-placeholder":"Start Date","end-placeholder":"End Date","default-time":e.defaultTime2},null,8,["modelValue","default-time"])])],64)}]]),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});export{f as _,k as a,L as b};
