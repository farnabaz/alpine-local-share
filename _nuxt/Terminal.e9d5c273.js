import{u as m}from"./index.a59720c5.js";import{d as v,r as f,I as h,b as s,c as o,M as i,f as p,e,F as y,Z as k,p as C,i as g,t as x,k as I}from"./entry.d3078618.js";const c=t=>(C("data-v-f127e6fe"),t=t(),g(),t),S={key:0,class:"copied"},b=c(()=>e("div",{class:"scrim"},null,-1)),w=c(()=>e("div",{class:"content"}," Copied! ",-1)),B=[b,w],T=c(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=c(()=>e("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:_}=m(),n=f("init"),r=h(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{_(r.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(n)==="copied"?(s(),o("div",S,B)):p("",!0),T,e("div",F,[(s(!0),o(y,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[N,e("span",V,x(d),1)]))),128))]),i(n)!=="copied"?(s(),o("div",j," Click to copy ")):p("",!0)]))}});const L=I(q,[["__scopeId","data-v-f127e6fe"]]);export{L as default};
