import{b as B,a0 as S,g as N,a1 as $,a2 as q,m as F,af as w,z as J,a5 as Y,ag as Q,u as V,aA as P,C as h,_ as k,f as X,U as Z,p as ee,a4 as ae,s as oe,w as le,aj as A}from"./index-C0avKrge.js";import{a as z,F as R,a2 as se,a0 as m,C as _,H as I,I as C,J as y,aj as D,K as e,a3 as K,L as v,a6 as G,N as U,O as L,n as x,af as ne,W as te,a5 as re,D as ie,ai as de,Y as ue}from"./common-BIwoD4Gb.js";const T=B({modelValue:{type:[String,Number,Boolean],default:void 0},size:F,disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),ce=B({...T,border:Boolean}),M={[S]:o=>z(o)||N(o)||$(o),[q]:o=>z(o)||N(o)||$(o)},j=Symbol("radioGroupKey"),H=(o,u)=>{const s=R(),a=se(j,void 0),i=m(()=>!!a),c=m(()=>w(o.value)?o.label:o.value),r=m({get(){return i.value?a.modelValue:o.modelValue},set(n){i.value?a.changeEvent(n):u&&u(S,n),s.value.checked=o.modelValue===c.value}}),d=J(m(()=>a==null?void 0:a.size)),l=Y(m(()=>a==null?void 0:a.disabled)),t=R(!1),p=m(()=>l.value||i.value&&r.value!==c.value?-1:0);return Q({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},m(()=>i.value&&w(o.value))),{radioRef:s,isGroup:i,radioGroup:a,focus:t,size:d,disabled:l,tabIndex:p,modelValue:r,actualValue:c}},pe=_({name:"ElRadio"}),fe=_({...pe,props:ce,emits:M,setup(o,{emit:u}){const s=o,a=V("radio"),{radioRef:i,radioGroup:c,focus:r,size:d,disabled:l,modelValue:t,actualValue:p}=H(s,u);function n(){x(()=>u("change",t.value))}return(f,g)=>{var b;return I(),C("label",{class:v([e(a).b(),e(a).is("disabled",e(l)),e(a).is("focus",e(r)),e(a).is("bordered",f.border),e(a).is("checked",e(t)===e(p)),e(a).m(e(d))])},[y("span",{class:v([e(a).e("input"),e(a).is("disabled",e(l)),e(a).is("checked",e(t)===e(p))])},[D(y("input",{ref_key:"radioRef",ref:i,"onUpdate:modelValue":E=>K(t)?t.value=E:null,class:v(e(a).e("original")),value:e(p),name:f.name||((b=e(c))==null?void 0:b.name),disabled:e(l),checked:e(t)===e(p),type:"radio",onFocus:E=>r.value=!0,onBlur:E=>r.value=!1,onChange:n,onClick:h(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","checked","onFocus","onBlur","onClick"]),[[P,e(t)]]),y("span",{class:v(e(a).e("inner"))},null,2)],2),y("span",{class:v(e(a).e("label")),onKeydown:h(()=>{},["stop"])},[G(f.$slots,"default",{},()=>[U(L(f.label),1)])],42,["onKeydown"])],2)}}});var me=k(fe,[["__file","radio.vue"]]);const ve=B({...T}),be=_({name:"ElRadioButton"}),ye=_({...be,props:ve,setup(o){const u=o,s=V("radio"),{radioRef:a,focus:i,size:c,disabled:r,modelValue:d,radioGroup:l,actualValue:t}=H(u),p=m(()=>({backgroundColor:(l==null?void 0:l.fill)||"",borderColor:(l==null?void 0:l.fill)||"",boxShadow:l!=null&&l.fill?`-1px 0 0 0 ${l.fill}`:"",color:(l==null?void 0:l.textColor)||""}));return(n,f)=>{var g;return I(),C("label",{class:v([e(s).b("button"),e(s).is("active",e(d)===e(t)),e(s).is("disabled",e(r)),e(s).is("focus",e(i)),e(s).bm("button",e(c))])},[D(y("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":b=>K(d)?d.value=b:null,class:v(e(s).be("button","original-radio")),value:e(t),type:"radio",name:n.name||((g=e(l))==null?void 0:g.name),disabled:e(r),onFocus:b=>i.value=!0,onBlur:b=>i.value=!1,onClick:h(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","onFocus","onBlur","onClick"]),[[P,e(d)]]),y("span",{class:v(e(s).be("button","inner")),style:ne(e(d)===e(t)?e(p):{}),onKeydown:h(()=>{},["stop"])},[G(n.$slots,"default",{},()=>[U(L(n.label),1)])],46,["onKeydown"])],2)}}});var O=k(ye,[["__file","radio-button.vue"]]);const _e=B({id:{type:String,default:void 0},size:F,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},...X(["ariaLabel"])}),ge=M,he=_({name:"ElRadioGroup"}),Be=_({...he,props:_e,emits:ge,setup(o,{emit:u}){const s=o,a=V("radio"),i=Z(),c=R(),{formItem:r}=ee(),{inputId:d,isLabeledByFormItem:l}=ae(s,{formItemContext:r}),t=n=>{u(S,n),x(()=>u("change",n))};te(()=>{const n=c.value.querySelectorAll("[type=radio]"),f=n[0];!Array.from(n).some(g=>g.checked)&&f&&(f.tabIndex=0)});const p=m(()=>s.name||i.value);return re(j,ie({...de(s),changeEvent:t,name:p})),ue(()=>s.modelValue,()=>{s.validateEvent&&(r==null||r.validate("change").catch(n=>oe()))}),(n,f)=>(I(),C("div",{id:e(d),ref_key:"radioGroupRef",ref:c,class:v(e(a).b("group")),role:"radiogroup","aria-label":e(l)?void 0:n.ariaLabel||"radio-group","aria-labelledby":e(l)?e(r).labelId:void 0},[G(n.$slots,"default")],10,["id","aria-label","aria-labelledby"]))}});var W=k(Be,[["__file","radio-group.vue"]]);const Se=le(me,{RadioButton:O,RadioGroup:W}),Ve=A(W),ke=A(O);export{Ve as E,ke as a,Se as b};