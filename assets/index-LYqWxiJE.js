import{b as q,$ as K,e as k,aD as U,aE as B,c as J,D as H,v as x,C as R,T as Q,_ as X,aL as Y,aG as ee,F as N,d as te,G as z,aH as D,aI as oe}from"./index-C0avKrge.js";import{C as O,F as ne,a0 as g,W as se,H as m,ad as b,S as I,aj as F,J as C,L as v,K as i,af as P,ae,ac as L,O as $,a6 as ie,I as A,M as le,R as V,ak as _,a as re}from"./common-BIwoD4Gb.js";const G=["success","info","warning","error"],ce=q({customClass:{type:String,default:""},dangerouslyUseHTMLString:Boolean,duration:{type:Number,default:4500},icon:{type:K},id:{type:String,default:""},message:{type:k([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:k(Function),default:()=>{}},onClose:{type:k(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...G,""],default:""},zIndex:Number}),ue={destroy:()=>!0},fe=O({name:"ElNotification"}),de=O({...fe,props:ce,emits:ue,setup(t,{expose:s}){const o=t,{ns:n,zIndex:r}=U("notification"),{nextZIndex:f,currentZIndex:d}=r,{Close:c}=Y,l=ne(!1);let a;const u=g(()=>{const e=o.type;return e&&B[o.type]?n.m(e):""}),p=g(()=>o.type&&B[o.type]||o.icon),E=g(()=>o.position.endsWith("right")?"right":"left"),j=g(()=>o.position.startsWith("top")?"top":"bottom"),W=g(()=>{var e;return{[j.value]:`${o.offset}px`,zIndex:(e=o.zIndex)!=null?e:d.value}});function S(){o.duration>0&&({stop:a}=ee(()=>{l.value&&h()},o.duration))}function M(){a==null||a()}function h(){l.value=!1}function Z({code:e}){e===N.delete||e===N.backspace?M():e===N.esc?l.value&&h():S()}return se(()=>{S(),f(),l.value=!0}),J(document,"keydown",Z),s({visible:l,close:h}),(e,ge)=>(m(),b(Q,{name:i(n).b("fade"),onBeforeLeave:e.onClose,onAfterLeave:Ce=>e.$emit("destroy"),persisted:""},{default:I(()=>[F(C("div",{id:e.id,class:v([i(n).b(),e.customClass,i(E)]),style:P(i(W)),role:"alert",onMouseenter:M,onMouseleave:S,onClick:e.onClick},[i(p)?(m(),b(i(H),{key:0,class:v([i(n).e("icon"),i(u)])},{default:I(()=>[(m(),b(ae(i(p))))]),_:1},8,["class"])):L("v-if",!0),C("div",{class:v(i(n).e("group"))},[C("h2",{class:v(i(n).e("title")),textContent:$(e.title)},null,10,["textContent"]),F(C("div",{class:v(i(n).e("content")),style:P(e.title?void 0:{margin:0})},[ie(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(m(),A(le,{key:1},[L(" Caution here, message could've been compromised, never use user's input as message "),C("p",{innerHTML:e.message},null,8,["innerHTML"])],2112)):(m(),A("p",{key:0},$(e.message),1))])],6),[[x,e.message]]),e.showClose?(m(),b(i(H),{key:0,class:v(i(n).e("closeBtn")),onClick:R(h,["stop"])},{default:I(()=>[V(i(c))]),_:1},8,["class","onClick"])):L("v-if",!0)],2)],46,["id","onClick"]),[[x,l.value]])]),_:3},8,["name","onBeforeLeave","onAfterLeave"]))}});var pe=X(de,[["__file","notification.vue"]]);const T={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},w=16;let me=1;const y=function(t={},s=null){if(!te)return{close:()=>{}};(typeof t=="string"||_(t))&&(t={message:t});const o=t.position||"top-right";let n=t.offset||0;T[o].forEach(({vm:u})=>{var p;n+=(((p=u.el)==null?void 0:p.offsetHeight)||0)+w}),n+=w;const r=`notification_${me++}`,f=t.onClose,d={...t,offset:n,id:r,onClose:()=>{ve(r,o,f)}};let c=document.body;z(t.appendTo)?c=t.appendTo:re(t.appendTo)&&(c=document.querySelector(t.appendTo)),z(c)||(c=document.body);const l=document.createElement("div"),a=V(pe,d,_(d.message)?{default:()=>d.message}:null);return a.appContext=s??y._context,a.props.onDestroy=()=>{D(null,l)},D(a,l),T[o].push({vm:a}),c.appendChild(l.firstElementChild),{close:()=>{a.component.exposed.visible.value=!1}}};G.forEach(t=>{y[t]=(s={})=>((typeof s=="string"||_(s))&&(s={message:s}),y({...s,type:t}))});function ve(t,s,o){const n=T[s],r=n.findIndex(({vm:a})=>{var u;return((u=a.component)==null?void 0:u.props.id)===t});if(r===-1)return;const{vm:f}=n[r];if(!f)return;o==null||o(f);const d=f.el.offsetHeight,c=s.split("-")[0];n.splice(r,1);const l=n.length;if(!(l<1))for(let a=r;a<l;a++){const{el:u,component:p}=n[a].vm,E=Number.parseInt(u.style[c],10)-d-w;p.props.offset=E}}function ye(){for(const t of Object.values(T))t.forEach(({vm:s})=>{s.component.exposed.visible.value=!1})}y.closeAll=ye;y._context=null;const Te=oe(y,"$notify");export{Te as E};