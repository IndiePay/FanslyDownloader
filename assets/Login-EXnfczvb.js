import{_ as V}from"./Button-Ap4-f9jj.js";import{_ as v,a as C}from"./GoogleAuth.vue_vue_type_script_setup_true_lang-BnN7hFmx.js";import{C as h,a4 as S,D as b,F as q,S as B,H as w,I as x,T as r,K as a,J as m,U as N,P as y,aA as R,ap as $}from"./common-C5Ua-Zla.js";import{ac as I,a9 as E,aa as c,ad as P}from"./index-X_YfJgbe.js";function U(n){return n=n.trim(),/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/.test(n)}const z={class:"space-y-3"},D={class:"mt-1! block text-right font-bold text-current"},L=h({__name:"EmailAuth",emits:["success","error"],setup(n,{emit:i}){const l=i,o=S(I),e=b({email:o==null?void 0:o.value,password:""}),t=q(!1),f=async()=>{if(e.email){if(!U(e.email)){c({type:"error",message:"Incorrect email address."});return}}else{c({type:"error",message:"Email is required."});return}if(!e.password){c({type:"error",message:"Password is required."});return}t.value=!0;try{const s=await R(e);$(s),l("success",s)}catch(s){s.code===10002?c({type:"error",message:"Email or password is incorrect."}):c({type:"error",message:"Network error please check and retry."}),l("error",s.msg)}t.value=!1},d=E();async function p(){await d.push("/register")}return(s,u)=>{const g=v,k=B("RouterLink"),A=V;return w(),x("div",z,[r(g,{modelValue:a(e).email,"onUpdate:modelValue":u[0]||(u[0]=_=>a(e).email=_),type:"text",icon:"i-line-md:email-twotone-alt text-blue-500",placeholder:"Enter your email address.",autofocus:"",required:""},null,8,["modelValue"]),r(g,{modelValue:a(e).password,"onUpdate:modelValue":u[1]||(u[1]=_=>a(e).password=_),type:"password",icon:"i-ant-design:lock-twotone text-orange-500",placeholder:"Enter your password.",required:""},null,8,["modelValue"]),m("p",D,[r(k,{class:"hover:underline hover:underline-current",to:"/resetPsw"},{default:N(()=>[y("Forget Password?")]),_:1})]),r(A,{loading:a(t),icon:"i-ic:twotone-security",type:"success",text:"Sign in with Email",onClick:f},null,8,["loading"]),m("p",{class:"text-sm font-bold text-dark-50 text-center"},[y(" New to SaveMyDayApp? "),m("span",{class:"text-current underline underline-current cursor-pointer",onClick:p},"Create my account.")])])}}}),Z={space:"y-3",md:"w-lg!"},F=m("p",{text:"sm center"},"or",-1),G=h({__name:"Login",setup(n){const i=E(),l=P();function o(){var t;i.push(((t=l.query)==null?void 0:t.next)||"/"),console.log("Auth successful.")}function e(t){console.log("Auth faild",t)}return(t,f)=>{const d=C,p=L;return w(),x("div",Z,[r(d,{onSuccess:o,onError:e}),F,r(p,{onSuccess:o,onError:e})])}}});export{G as default};