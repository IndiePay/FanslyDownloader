import{_ as P}from"./Button-Ap4-f9jj.js";import{_ as z,a as U}from"./GoogleAuth.vue_vue_type_script_setup_true_lang-BnN7hFmx.js";import{ae as O,aa as a,a9 as Z,ad as $,ac as H}from"./index-X_YfJgbe.js";import{C as K,D as M,F as m,a2 as j,I as w,J as u,T as n,K as s,P as i,Q as h,ae as R,U as T,a4 as F,aB as G,aD as J,S as Q,H as C}from"./common-C5Ua-Zla.js";import{e as W}from"./index-DSRwS_1G.js";const L={class:"space-y-3 w-full",md:"w-lg!"},X={class:"w-full space-y-3"},Y=u("p",{text:"sm center"},"or",-1),ee={key:0,class:"text-sm"},te={key:1,class:"text-sm text-dark"},se={class:"flex items-center space-x-3"},oe={class:"text-sm font-bold text-dark-50 text-center"},ce=K({__name:"Reset",setup(ae){O("Register");function k(t){return t=t.trim(),/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/.test(t)}const D=F(H),e=M({email:D.value,password:"",code:""});let p=m(!1);const g=m(!1);let l=j(()=>{if(!e.email)return null;const t=W.run({email:e.email});if(g.value=!1,t){const o=e.email.split("@")[1];return t.domain!=o?{originDomain:o,suggestedDomain:t.domain}:null}else return null});const A=()=>{l.value&&(e.email=e.email.replace(l.value.originDomain,l.value.suggestedDomain))},_=m(!1),y=m("SEND CODE");function I(){if(e.email==""){a({type:"error",message:"Can't send code without email."});return}else{k(e.email)?t():a({type:"error",message:"Incorrect email address."});return}function t(){_.value=!0,G({email:e.email}).then(o=>{const{code:v,msg:c}=o;if(v==200){let d=function(){f>0?(y.value=f--+"s RESEND",setTimeout(d,1e3)):(y.value="SEND CODE",p.value=!1)};p.value=!0;let f=60;d()}else a({type:"error",message:c})}).catch(()=>{a({type:"error",message:"Send failed, please check your network connection and try again."})}),_.value=!1}}const E=Z(),x=m(!1);async function N(){if(e.email==""){a({type:"error",message:"Email is required."});return}else if(!k(e.email)){a({type:"error",message:"Incorrect email address."});return}if(e.password==""){a({type:"error",message:"Password is required."});return}x.value=!0;try{(await J(e)).code==200&&(D.value=e.email,E.push("/login"))}catch(t){console.log(t)}x.value=!1}const b=$();function q(){var t;E.push(((t=b.query)==null?void 0:t.next)||"/"),console.log("Auth successful.")}function B(t){console.log("Auth faild",t.message)}return(t,o)=>{var V,S;const v=U,c=z,d=P,f=Q("router-link");return C(),w("div",L,[u("div",X,[n(v,{onSuccess:q,onError:B}),Y,n(c,{modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),icon:"i-ant-design:mail-twotone text-blue-500",placeholder:"Email address",required:""},null,8,["modelValue"]),s(l)&&!s(g)?(C(),w("p",ee,[i("Are you sure the domain name is "),u("span",{class:"underline text-blue-500 cursor-pointer",onClick:o[1]||(o[1]=r=>g.value=!0)},h((V=s(l))==null?void 0:V.originDomain),1),i(" and not "),u("span",{class:"underline text-green-500 cursor-pointer",onClick:A},h((S=s(l))==null?void 0:S.suggestedDomain),1),i("?")])):R("",!0),s(p)?(C(),w("p",te,"Code sent. If not received in 1 min, check email address.")):R("",!0),u("div",se,[n(c,{class:"w-2/3",modelValue:s(e).code,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).code=r),icon:"i-bi:send-check-fill text-green-500",placeholder:"Verification code sent to your email",required:""},null,8,["modelValue"]),n(d,{class:"max-w-1/3",type:"primary",size:"large",loading:s(_),onClick:I,disabled:s(p)},{default:T(()=>[i(h(s(y)),1)]),_:1},8,["loading","disabled"])]),n(c,{modelValue:s(e).password,"onUpdate:modelValue":o[3]||(o[3]=r=>s(e).password=r),icon:"i-ant-design:lock-twotone text-orange-500",placeholder:"New Password",required:""},null,8,["modelValue"]),n(d,{loading:s(x),onClick:N,type:"primary",icon:"i-fluent:key-reset-24-filled",text:"RESET PASSWORD"},null,8,["loading"]),u("p",oe,[i(" Have an account? "),n(f,{to:"/login",class:"text-current underline underline-current"},{default:T(()=>[i("Sign in now.")]),_:1})])])])}}});export{ce as default};