let v=(t,e)=>{var n,o;const s=t.getElementsByClassName("modal-close-button")[0];if(e.classList.contains("video-element-wrapper")&&(e=e.querySelector(".video")),!e.closest(".preview")&&((n=e.parentNode)==null?void 0:n.querySelector(".modal-download-button"))==null&&s!=null){const r=E(s);r.addEventListener("click",C),h(r),(o=e.parentNode)==null||o.insertBefore(r,e.nextSibling)}},h=t=>{t.style.setProperty("display","flex","important"),t.style.setProperty("opacity","1","important")},E=t=>{const e=document.createElement("div");let s=[];t.classList.forEach(o=>s.push(o)),e.classList.add(...s),e.classList.add("modal-download-button","modal-pulse"),e.setAttribute(t.attributes[0].name,t.attributes[0].value);const n=document.createElement("i");return n.classList.add("fas","fa-down","fa-2x"),n.setAttribute(t.attributes[0].name,t.attributes[0].value),e.appendChild(n),e};const b=t=>{const e=t.path||t.composedPath&&t.composedPath();if(!e){console.log("Unable to get path information from browser.");return}return e};let C=t=>{var r,a,l;const e=b(t);let s="";const n=[...e[2].querySelectorAll(".image")].filter(i=>i.src);if(e[2].querySelector("video")?s="vid:"+((r=e[2].querySelector("video"))==null?void 0:r.src):n.length>0&&(s="img:"+n.at(-1).src),!s)return;const o=((l=(a=document.querySelector(".active-modal"))==null?void 0:a.querySelector(".display-name"))==null?void 0:l.textContent)||"fansly";if(s.startsWith("img:"))fetch(s.substring(4)).then(i=>i.text()).then(i=>{const c=y(i.slice(0,10)),d=o+"-"+Math.random().toString(36).substring(2)+c;f(s.substring(4),d)});else return chrome.runtime.sendMessage({method:"createWindow",payload:"/export"})},L=t=>{var r;if(q(t)==!1)return;const s=t.getElementsByClassName("feed-item-stats").length-1,n=t.getElementsByClassName("feed-item-stats")[s];if(!n||n.querySelectorAll(".download").length>0)return;const o=n.getElementsByClassName("tips")[0];if(o!=null){const a=x(o);a.addEventListener("click",S),h(a),(r=o.parentNode)==null||r.insertBefore(a,o.nextSibling)}},x=t=>{const e=document.createElement("div"),s=[];t.classList.forEach(a=>s.push(a)),e.classList.add(...s),e.classList.replace("tips","download"),e.setAttribute(t.attributes[0].name,t.attributes[0].value);const n=document.createElement("div"),o=[];t.children[0].classList.forEach(a=>o.push(a)),n.classList.add(...o),n.classList.replace("green","pink"),n.setAttribute(t.attributes[0].name,t.attributes[0].value),e.appendChild(n),e.appendChild(document.createTextNode("Download"));const r=document.createElement("i");return r.classList.add("fas","fa-down"),r.setAttribute(t.attributes[0].name,t.attributes[0].value),n.appendChild(r),e},S=t=>{t.stopPropagation();const s=b(t)[2].closest(".feed-item-content"),n=s.querySelector(".display-name").textContent.replace(/\s+/g,""),o=s.querySelectorAll(".feed-item-preview")[0];if(!o.classList.contains("single-preview")){o.querySelectorAll(".image")[0].click();return}A(s).forEach(a=>{var l;if(a.startsWith("img:"))fetch(a.substring(4)).then(i=>i.text()).then(i=>{const c=y(i.slice(0,10)),d=n+"-"+Math.random().toString(36).substring(2)+c;f(a.substring(4),d)});else{const i=n+"-"+((l=a.split("/").at(-1))==null?void 0:l.split("?")[0]);f(a.substring(4),i)}})};const y=t=>{let e=".png";return t.includes("GIF")?e=".gif":t.includes("JPG")?e=".jpg":t.includes("JPEG")?e=".jpeg":t.includes("ftyp")&&(e=".mp4"),e};let q=t=>{let e=!0;const s=t.querySelector(".feed-item-preview");if(s){let n=0;const o=s.querySelectorAll(".image");for(let r=0;r<o.length;r++){const a=o[r].querySelector(".image");a!=null&&a.src!=null&&n++}n==0&&(e=!1)}else s||(e=!1);return e},A=t=>{let e=[];const s=t.querySelector(".feed-item-preview");let n=!1;s.querySelectorAll(".video").length>0&&(n=!0);const o=s.querySelectorAll(".image");for(let r=0;r<o.length;r++)if(o[r].querySelector(".image")!=null){const a=o[r].querySelector(".image");(a==null?void 0:a.src)!=null&&!n?e.push("img:"+a.src):s.querySelectorAll(".video, .video video").forEach(l=>{l.getAttribute("src")&&e.push("vid:"+l.getAttribute("src"))})}return e},f=async(t,e)=>{var l;const s=await chrome.runtime.sendMessage({method:"getAccountInfo"});if(console.log("acctInfo",s),s){const{isPro:i,quota:c}=s;if(!i){if(c<=0)return chrome.runtime.sendMessage({method:"createWindow",payload:"/subscribe?from=content"});await chrome.runtime.sendMessage({method:"updateQuota"})}}const n=["jpg","jpeg","png","gif"],o=["mp4","avi","mov","mkv"],r=i=>new RegExp(`\\.(${n.join("|")})`,"i").test(i);if((i=>new RegExp(`\\.(${o.join("|")})`,"i").test(i))(e)){k(t,e);return}else if(r(e)){const i=document.createElement("a");i.href=t,i.setAttribute("download",e),document.body.appendChild(i),i.click(),(l=i.parentNode)==null||l.removeChild(i)}else return chrome.runtime.sendMessage({method:"createWindow",payload:"/export"})},M=t=>{const e=document.createElement("div");e.classList.add("item"),e.innerText=t;const s=document.createElement("div");s.classList.add("progress");const n=document.createElement("div");return s.appendChild(n),e.appendChild(s),e},I=(t,e)=>{const s=Math.round(t.loaded/t.total*100)+"%";e.style.width=s,e.innerText=s},N=()=>{const t=document.createElement("div");t.setAttribute("id","progress-container"),document.body.insertBefore(t,document.body.firstChild)},P=(t,e)=>{e.innerText="Finished download!",t.style.transition="opacity 1s ease-in 3s",t.style.opacity="0",setTimeout(()=>{var s;(s=t.parentNode)==null||s.removeChild(t)},4e3)},k=async(t,e)=>{var i;const s=await fetch(t,{cache:"no-store",headers:new Headers({Origin:location.origin}),mode:"cors"}),n=s.headers.get("content-length"),o=parseInt(n,10);let r=0;const l=await new Response(new ReadableStream({async start(c){const d=s.body.getReader(),m=M(e),u=document.getElementById("progress-container");u==null||u.insertBefore(m,u.firstChild);const g=m.querySelector(".progress").firstChild;for(;;){const{done:w,value:p}=await d.read();if(w)break;r+=p.byteLength,I({loaded:r,total:o},g),c.enqueue(p)}c.close(),P(m,g)}})).blob();if(l.size!=0){let c=window.URL.createObjectURL(l);const d=document.createElement("a");d.href=c,d.setAttribute("download",e),document.body.appendChild(d),d.click(),(i=d.parentNode)==null||i.removeChild(d)}},B=()=>{N()},D=t=>{t.forEach(e=>{if(e.addedNodes)for(let s=0;s<e.addedNodes.length;s++){const n=e.addedNodes[s],o=n.classList;if(o==null)return;if(o.contains("image")){const r=n.closest(".feed-item-content");r&&L(r);const a=n.closest(".active-modal");a&&v(a,n)}}})};const T={attributes:!0,childList:!0,subtree:!0,characterData:!0},j=new MutationObserver(D);window.addEventListener("load",function(){j.observe(document.body,T),B()});