import{m as re,f as de,a0 as K,g as ne,a1 as H,K as X,a5 as Ee,p as J,s as ce,af as W,z as se,a4 as be,ag as Y,u as Q,C as R,ah as M,_ as Z,b as Be,e as Ie,ai as Fe,w as $e,aj as me,ad as oe,a9 as q,ac as Ne,B as Oe,aa as Te}from"./index-C0avKrge.js";import{_ as De}from"./Button-D14Q4G7_.js";import{E as Pe,a as Ue}from"./el-radio-group-CftBhpfx.js";import{i as ze,a as Ge,V as Re}from"./el-radio-button-DoD2KbX-.js";import{a as ue,a2 as z,a0 as g,Y as ve,n as pe,V as fe,F as E,b as U,m as Me,aD as ie,C as N,ab as ge,H as k,ad as ee,S as T,J as e,L,K as l,aj as j,I as V,a3 as $,a6 as le,M as he,N as I,O as w,ac as A,ae as xe,af as je,a5 as Ae,ai as Ke,y as Ye,am as qe,aE as He,R as O,aF as Xe,Q as We,au as Je}from"./common-BIwoD4Gb.js";import"./_commonjsHelpers-BosuxZz1.js";const ke={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:re,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...de(["ariaControls"])},ye={[K]:n=>ue(n)||ne(n)||H(n),change:n=>ue(n)||ne(n)||H(n)},D=Symbol("checkboxGroupContextKey"),Qe=({model:n,isChecked:b})=>{const d=z(D,void 0),s=g(()=>{var c,p;const o=(c=d==null?void 0:d.max)==null?void 0:c.value,m=(p=d==null?void 0:d.min)==null?void 0:p.value;return!X(o)&&n.value.length>=o&&!b.value||!X(m)&&n.value.length<=m&&b.value});return{isDisabled:Ee(g(()=>(d==null?void 0:d.disabled.value)||s.value)),isLimitDisabled:s}},Ze=(n,{model:b,isLimitExceeded:d,hasOwnLabel:s,isDisabled:v,isLabeledByFormItem:c})=>{const p=z(D,void 0),{formItem:o}=J(),{emit:m}=fe();function i(t){var h,y,r,x;return[!0,n.trueValue,n.trueLabel].includes(t)?(y=(h=n.trueValue)!=null?h:n.trueLabel)!=null?y:!0:(x=(r=n.falseValue)!=null?r:n.falseLabel)!=null?x:!1}function u(t,h){m("change",i(t),h)}function f(t){if(d.value)return;const h=t.target;m("change",i(h.checked),t)}async function S(t){d.value||!s.value&&!v.value&&c.value&&(t.composedPath().some(r=>r.tagName==="LABEL")||(b.value=i([!1,n.falseValue,n.falseLabel].includes(b.value)),await pe(),u(b.value,t)))}const _=g(()=>(p==null?void 0:p.validateEvent)||n.validateEvent);return ve(()=>n.modelValue,()=>{_.value&&(o==null||o.validate("change").catch(t=>ce()))}),{handleChange:f,onClickRoot:S}},el=n=>{const b=E(!1),{emit:d}=fe(),s=z(D,void 0),v=g(()=>X(s)===!1),c=E(!1),p=g({get(){var o,m;return v.value?(o=s==null?void 0:s.modelValue)==null?void 0:o.value:(m=n.modelValue)!=null?m:b.value},set(o){var m,i;v.value&&U(o)?(c.value=((m=s==null?void 0:s.max)==null?void 0:m.value)!==void 0&&o.length>(s==null?void 0:s.max.value)&&o.length>p.value.length,c.value===!1&&((i=s==null?void 0:s.changeEvent)==null||i.call(s,o))):(d(K,o),b.value=o)}});return{model:p,isGroup:v,isLimitExceeded:c}},ll=(n,b,{model:d})=>{const s=z(D,void 0),v=E(!1),c=g(()=>W(n.value)?n.label:n.value),p=g(()=>{const u=d.value;return H(u)?u:U(u)?Me(c.value)?u.map(ie).some(f=>ze(f,c.value)):u.map(ie).includes(c.value):u!=null?u===n.trueValue||u===n.trueLabel:!!u}),o=se(g(()=>{var u;return(u=s==null?void 0:s.size)==null?void 0:u.value}),{prop:!0}),m=se(g(()=>{var u;return(u=s==null?void 0:s.size)==null?void 0:u.value})),i=g(()=>!!b.default||!W(c.value));return{checkboxButtonSize:o,isChecked:p,isFocused:v,checkboxSize:m,hasOwnLabel:i,actualValue:c}},Ce=(n,b)=>{const{formItem:d}=J(),{model:s,isGroup:v,isLimitExceeded:c}=el(n),{isFocused:p,isChecked:o,checkboxButtonSize:m,checkboxSize:i,hasOwnLabel:u,actualValue:f}=ll(n,b,{model:s}),{isDisabled:S}=Qe({model:s,isChecked:o}),{inputId:_,isLabeledByFormItem:t}=be(n,{formItemContext:d,disableIdGeneration:u,disableIdManagement:v}),{handleChange:h,onClickRoot:y}=Ze(n,{model:s,isLimitExceeded:c,hasOwnLabel:u,isDisabled:S,isLabeledByFormItem:t});return(()=>{function x(){var a,C;U(s.value)&&!s.value.includes(f.value)?s.value.push(f.value):s.value=(C=(a=n.trueValue)!=null?a:n.trueLabel)!=null?C:!0}n.checked&&x()})(),Y({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},g(()=>v.value&&W(n.value))),Y({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},g(()=>!!n.trueLabel)),Y({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},g(()=>!!n.falseLabel)),{inputId:_,isLabeledByFormItem:t,isChecked:o,isDisabled:S,isFocused:p,checkboxButtonSize:m,checkboxSize:i,hasOwnLabel:u,model:s,actualValue:f,handleChange:h,onClickRoot:y}},al=N({name:"ElCheckbox"}),tl=N({...al,props:ke,emits:ye,setup(n){const b=n,d=ge(),{inputId:s,isLabeledByFormItem:v,isChecked:c,isDisabled:p,isFocused:o,checkboxSize:m,hasOwnLabel:i,model:u,actualValue:f,handleChange:S,onClickRoot:_}=Ce(b,d),t=Q("checkbox"),h=g(()=>[t.b(),t.m(m.value),t.is("disabled",p.value),t.is("bordered",b.border),t.is("checked",c.value)]),y=g(()=>[t.e("input"),t.is("disabled",p.value),t.is("checked",c.value),t.is("indeterminate",b.indeterminate),t.is("focus",o.value)]);return(r,x)=>(k(),ee(xe(!l(i)&&l(v)?"span":"label"),{class:L(l(h)),"aria-controls":r.indeterminate?r.ariaControls:null,onClick:l(_)},{default:T(()=>{var a,C,G,P;return[e("span",{class:L(l(y))},[r.trueValue||r.falseValue||r.trueLabel||r.falseLabel?j((k(),V("input",{key:0,id:l(s),"onUpdate:modelValue":B=>$(u)?u.value=B:null,class:L(l(t).e("original")),type:"checkbox",indeterminate:r.indeterminate,name:r.name,tabindex:r.tabindex,disabled:l(p),"true-value":(C=(a=r.trueValue)!=null?a:r.trueLabel)!=null?C:!0,"false-value":(P=(G=r.falseValue)!=null?G:r.falseLabel)!=null?P:!1,onChange:l(S),onFocus:B=>o.value=!0,onBlur:B=>o.value=!1,onClick:R(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[M,l(u)]]):j((k(),V("input",{key:1,id:l(s),"onUpdate:modelValue":B=>$(u)?u.value=B:null,class:L(l(t).e("original")),type:"checkbox",indeterminate:r.indeterminate,disabled:l(p),value:l(f),name:r.name,tabindex:r.tabindex,onChange:l(S),onFocus:B=>o.value=!0,onBlur:B=>o.value=!1,onClick:R(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[M,l(u)]]),e("span",{class:L(l(t).e("inner"))},null,2)],2),l(i)?(k(),V("span",{key:0,class:L(l(t).e("label"))},[le(r.$slots,"default"),r.$slots.default?A("v-if",!0):(k(),V(he,{key:0},[I(w(r.label),1)],64))],2)):A("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var nl=Z(tl,[["__file","checkbox.vue"]]);const sl=N({name:"ElCheckboxButton"}),ol=N({...sl,props:ke,emits:ye,setup(n){const b=n,d=ge(),{isFocused:s,isChecked:v,isDisabled:c,checkboxButtonSize:p,model:o,actualValue:m,handleChange:i}=Ce(b,d),u=z(D,void 0),f=Q("checkbox"),S=g(()=>{var t,h,y,r;const x=(h=(t=u==null?void 0:u.fill)==null?void 0:t.value)!=null?h:"";return{backgroundColor:x,borderColor:x,color:(r=(y=u==null?void 0:u.textColor)==null?void 0:y.value)!=null?r:"",boxShadow:x?`-1px 0 0 0 ${x}`:void 0}}),_=g(()=>[f.b("button"),f.bm("button",p.value),f.is("disabled",c.value),f.is("checked",v.value),f.is("focus",s.value)]);return(t,h)=>{var y,r,x,a;return k(),V("label",{class:L(l(_))},[t.trueValue||t.falseValue||t.trueLabel||t.falseLabel?j((k(),V("input",{key:0,"onUpdate:modelValue":C=>$(o)?o.value=C:null,class:L(l(f).be("button","original")),type:"checkbox",name:t.name,tabindex:t.tabindex,disabled:l(c),"true-value":(r=(y=t.trueValue)!=null?y:t.trueLabel)!=null?r:!0,"false-value":(a=(x=t.falseValue)!=null?x:t.falseLabel)!=null?a:!1,onChange:l(i),onFocus:C=>s.value=!0,onBlur:C=>s.value=!1,onClick:R(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[M,l(o)]]):j((k(),V("input",{key:1,"onUpdate:modelValue":C=>$(o)?o.value=C:null,class:L(l(f).be("button","original")),type:"checkbox",name:t.name,tabindex:t.tabindex,disabled:l(c),value:l(m),onChange:l(i),onFocus:C=>s.value=!0,onBlur:C=>s.value=!1,onClick:R(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[M,l(o)]]),t.$slots.default||t.label?(k(),V("span",{key:2,class:L(l(f).be("button","inner")),style:je(l(v)?l(S):void 0)},[le(t.$slots,"default",{},()=>[I(w(t.label),1)])],6)):A("v-if",!0)],2)}}});var _e=Z(ol,[["__file","checkbox-button.vue"]]);const ul=Be({modelValue:{type:Ie(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:re,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...de(["ariaLabel"])}),il={[K]:n=>U(n),change:n=>U(n)},rl=N({name:"ElCheckboxGroup"}),dl=N({...rl,props:ul,emits:il,setup(n,{emit:b}){const d=n,s=Q("checkbox"),{formItem:v}=J(),{inputId:c,isLabeledByFormItem:p}=be(d,{formItemContext:v}),o=async i=>{b(K,i),await pe(),b("change",i)},m=g({get(){return d.modelValue},set(i){o(i)}});return Ae(D,{...Fe(Ke(d),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:o}),ve(()=>d.modelValue,()=>{d.validateEvent&&(v==null||v.validate("change").catch(i=>ce()))}),(i,u)=>{var f;return k(),ee(xe(i.tag),{id:l(c),class:L(l(s).b("group")),role:"group","aria-label":l(p)?void 0:i.ariaLabel||"checkbox-group","aria-labelledby":l(p)?(f=l(v))==null?void 0:f.labelId:void 0},{default:T(()=>[le(i.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var Ve=Z(dl,[["__file","checkbox-group.vue"]]);const cl=$e(nl,{CheckboxButton:_e,CheckboxGroup:Ve});me(_e);me(Ve);const bl="/assets/secure-stripe-payment-CvN-rf3P.jpeg",ml={key:0,md:"w-xl!"},vl={key:0,class:"box-border px-3 py-2 flex items-center justify-center mb-4 w-xl space-x-1 rounded-md bg-orange-200 text-sm text-dark-50"},pl={class:"table mx-auto"},fl={class:"mt-4 flex flex-col items-center"},gl={class:"flex items-end space-x-1 mt-3 mb-2 font-bold text-red-500"},hl={class:"space-x-1"},xl={class:"text-4xl"},kl={class:"space-x-1 text-gray-500"},yl={class:"text-2xl line-through"},Cl={class:"text-gray-500"},_l={key:1,class:"space-y-2 flex flex-col items-center text-gray-600",md:"w-500px"},Vl={class:"text-base"},Sl={class:"text-current"},wl={class:"text-sm text-center"},Ll={class:"text-xs text-center"},El={key:0},Bl={key:1},Il=N({__name:"Subscribe",setup(n){const{email:b,token:d,isPro:s,isSubscribe:v,member_type:c,member_time:p}=Ye().value;oe("subscribe_page");const o=E([]),m=E([]),i=E(0);qe(async()=>{const x=await He(b,d);m.value=Object.keys(x.data),m.value.forEach(a=>{o.value.push(x.data[a])})});const u=E(!1);function f(){if(!u.value)return q({type:"warning",message:"You must accept Terms of Service"});oe("subscribe_button"),window.open("https://www.savemydayapp.com/social/subscribe/redirect.html?priceId="+o.value[i.value].priceId+"&email="+b+"&token="+d)}function S(){window.open("https://savemydayapp.com/terms-of-service/")}const _=E(""),t=E(!1);async function h(){if(!_.value)return q({type:"warning",message:"Can not submit blank feedback."});t.value=!0,await Xe({email:b,message:_.value}),t.value=!1,_.value="",q({type:"success",message:"Thank you for your feedback, we will get in touch with you as soon as possible."})}const y=Ne(),r=E(y.query.from);return(x,a)=>{var ae,te;const C=Ue,G=Pe,P=De,B=cl,Se=Oe,we=We("router-link");return l(s)?(k(),V("div",_l,[a[20]||(a[20]=e("div",{class:"i-ant-design:heart-twotone w-8 h-8 text-red-500"},null,-1)),a[21]||(a[21]=e("p",{class:"mt-2 text-xs font-bold"},"Thanks for the support!",-1)),e("p",Vl,[a[16]||(a[16]=I(" Your ")),e("strong",Sl,w(l(c)),1),I(" membership will "+w(l(v)?"renewed":"end")+" on ",1),e("p",wl,[e("strong",null,w(new Date(l(p)).toLocaleString()),1)])]),O(Se,{modelValue:l(_),"onUpdate:modelValue":a[2]||(a[2]=F=>$(_)?_.value=F:null),type:"textarea",rows:3,maxlength:"200","show-word-limit":"",placeholder:"Any problems and suggestions encountered in the process of use"},null,8,["modelValue"]),O(P,{loading:l(t),icon:"i-bi:send-fill",type:"primary",text:"Submit Feedback",onClick:h},null,8,["loading"]),e("div",Ll,[l(v)?(k(),V("div",El,[e("p",null,[O(we,{to:"/Unsubscribe",class:"text-blue-500"},{default:T(()=>a[17]||(a[17]=[I("Click here")])),_:1}),a[18]||(a[18]=I(" to cancel subscription. "))]),a[19]||(a[19]=e("p",null,"Cancellation will take effect immediately.",-1))])):(k(),V("span",Bl,"You have successfully unsubscribed."))])])):(k(),V("div",ml,[l(r)=="content"?(k(),V("div",vl," Free trial quota has been used up, welcome to support us pro membership.")):A("",!0),e("table",pl,[a[8]||(a[8]=e("thead",null,[e("tr",null,[e("th"),e("th",null,"Free"),e("th",null,[e("div",{class:"space-x-1 flex justify-center items-center text-current"},[e("div",{class:"i-ant-design:crown-filled"}),e("span",null,"Pro"),e("sup",null,"+")])])])],-1)),e("tbody",null,[e("tr",null,[a[3]||(a[3]=e("td",null,"EXPORT PHOTOS",-1)),e("td",null,"≤ "+w(l(Ge)),1),a[4]||(a[4]=e("td",null,[e("div",{class:"i-fa:check text-green-400 mx-auto"})],-1))]),e("tr",null,[a[5]||(a[5]=e("td",null,"EXPORT VIDEOS",-1)),e("td",null,"≤ "+w(l(Re)),1),a[6]||(a[6]=e("td",null,[e("div",{class:"i-fa:check text-green-400 mx-auto"})],-1))]),a[7]||(a[7]=e("tr",null,[e("td",null,"EXPORT MESSAGES/ALL"),e("td",null,[e("div",{class:"i-fa:close text-red-400 mx-auto"})]),e("td",null,[e("div",{class:"i-fa:check text-green-400 mx-auto"})])],-1))])]),e("div",fl,[a[12]||(a[12]=e("div",{class:"py-1.5 flex items-center justify-center mb-4 w-full space-x-1 rounded-md bg-yellow-200 text-base font-bold text-gray-600"},[e("span",null,"23% Off,"),e("div",{class:"i-ic:baseline-access-time-filled"}),e("span",null,"Limited time offer.")],-1)),O(G,{modelValue:l(i),"onUpdate:modelValue":a[0]||(a[0]=F=>$(i)?i.value=F:null)},{default:T(()=>[(k(!0),V(he,null,Je(l(m),(F,Le)=>(k(),ee(C,{label:Le},{default:T(()=>[I(w(F),1)]),_:2},1032,["label"]))),256))]),_:1},8,["modelValue"]),e("div",gl,[e("div",hl,[a[9]||(a[9]=e("sup",{class:"italic align-text-top"},"$",-1)),e("span",xl,w((ae=l(o)[l(i)])==null?void 0:ae.amount),1)]),e("div",kl,[a[10]||(a[10]=e("sup",{class:"italic align-text-top"},"$",-1)),e("span",yl,w((te=l(o)[l(i)])==null?void 0:te.origin),1)]),e("span",Cl,"/ "+w(l(m)[l(i)]),1)]),a[13]||(a[13]=e("p",{class:"font-bold text-red-500"},"7 days money back guarantee",-1)),O(P,{icon:"i-ic:round-shopping-cart",class:"mt-1",type:"primary",text:"Subscribe",onClick:f}),O(B,{modelValue:l(u),"onUpdate:modelValue":a[1]||(a[1]=F=>$(u)?u.value=F:null)},{default:T(()=>[a[11]||(a[11]=e("span",{class:"!text-gray-500 mr-1"},"I accept",-1)),e("a",{class:"text-blue-500",onClick:S},"Terms of Service")]),_:1},8,["modelValue"]),a[14]||(a[14]=e("p",{class:"text-gray-600 text-xs text-center"},[e("div",{class:"i-ant-design:lock-twotone inline-block text-green-500 align-text-top"}),e("span",null,[I(" We use "),e("strong",null,"Stripe"),I(" to process purchases and do not know your coupon details. ")])],-1)),a[15]||(a[15]=e("img",{class:"flex",src:bl},null,-1))])]))}}}),Pl=Te(Il,[["__scopeId","data-v-bc06fbbb"]]);export{Pl as default};