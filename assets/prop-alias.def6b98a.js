import{_ as e,r as t,o as a,c as l,b as o,a as n,w as r,j as d,F as s,d as u,f as i}from"./app.3a2d7ab6.js";const f={data:()=>({data:(e=>{const t=[];for(let a=1;a<=15;a++)t.push({key:a,label:`Option ${a}`,disabled:a%4==0});return t})(),rightValue:[1],leftValue:[1],renderFunc:(e,t)=>e("span",null,t.key," - ",t.label)}),methods:{handleChange(e,t,a){console.log(e,t,a)}}},c=o("p",{style:{"text-align":"center",margin:"0 0 20px"}}," Customize data items using render-content ",-1),h={style:{"text-align":"center"}},g=u("Operation"),p=u("Operation"),m=o("p",{style:{"text-align":"center",margin:"50px 0 20px"}}," Customize data items using scoped slot ",-1),b={style:{"text-align":"center"}},k=u("Operation"),_=u("Operation");var V=e(f,[["render",function(e,u,i,f,V,y){const C=t("el-button"),x=t("el-transfer");return a(),l(s,null,[c,o("div",h,[n(x,{modelValue:V.leftValue,"onUpdate:modelValue":u[0]||(u[0]=e=>V.leftValue=e),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":V.renderFunc,titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:V.data,onChange:y.handleChange},{"left-footer":r((()=>[n(C,{class:"transfer-footer",size:"small"},{default:r((()=>[g])),_:1})])),"right-footer":r((()=>[n(C,{class:"transfer-footer",size:"small"},{default:r((()=>[p])),_:1})])),_:1},8,["modelValue","render-content","data","onChange"]),m,o("div",b,[n(x,{modelValue:V.rightValue,"onUpdate:modelValue":u[1]||(u[1]=e=>V.rightValue=e),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:V.data,onChange:y.handleChange},{default:r((({option:e})=>[o("span",null,d(e.key)+" - "+d(e.label),1)])),"left-footer":r((()=>[n(C,{class:"transfer-footer",size:"small"},{default:r((()=>[k])),_:1})])),"right-footer":r((()=>[n(C,{class:"transfer-footer",size:"small"},{default:r((()=>[_])),_:1})])),_:1},8,["modelValue","data","onChange"])])])],64)}]]),y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});var C=e({data:()=>({data:(e=>{const t=[];for(let a=1;a<=15;a++)t.push({value:a,desc:`Option ${a}`,disabled:a%4==0});return t})(),value:[]})},[["render",function(e,l,o,n,r,d){const s=t("el-transfer");return a(),i(s,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=e=>r.value=e),props:{key:"value",label:"desc"},data:r.data},null,8,["modelValue","data"])}]]),x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});export{y as _,x as a};
