import{M as m,I as p,d as c,a9 as i,r as u,N as e,k as l}from"./entry.59ef630e.js";import{u as d}from"./asyncData.8e389e7a.js";import f from"./Ellipsis.ada64ea3.js";import _ from"./ComponentPlaygroundData.1cfa31ed.js";import"./TabsHeader.10c127a0.js";import"./ComponentPlaygroundProps.b43b4e36.js";import"./ProseH4.5347368b.js";import"./ProseCodeInline.0a5f5719.js";import"./Badge.8909392d.js";import"./MDCSlot.9ae778cc.js";import"./slot.909451f1.js";import"./ProseP.2b13bbcb.js";import"./index.43c2f511.js";import"./ComponentPlaygroundSlots.vue.bf2af830.js";import"./ComponentPlaygroundTokens.vue.3fa5b46c.js";async function y(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=l(g,[["__scopeId","data-v-51227037"]]);export{V as default};