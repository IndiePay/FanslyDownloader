const c=async s=>{for(const t of s)if(t.type==="childList")for(let a=0;a<t.addedNodes.length;a++){const o=t.addedNodes[a];if(o instanceof HTMLElement&&o.classList.contains("modal-wrapper")){const e=o.querySelector(".xdModal");e&&(console.log("Modal found: ",e),f(o))}}},r={attributes:!0,childList:!0,subtree:!0,characterData:!0},l=new MutationObserver(c);window.addEventListener("load",async()=>{const s=await chrome.runtime.sendMessage({method:"getAccountInfo"});if(s&&s.isPro)return;console.log("Fansly™ Helper: Start daily check");const t=await v();console.log("isNewDay: ",t),t&&l.observe(document.body,r)});function f(s){const t=s.querySelector(".xdModal"),e=new DOMParser().parseFromString(`<app-button-new-confirmation-modal class="active-modal" style="width:100%;">
    <div class="modal" style="width:100%;max-width:400px;">
      <div class="modal-header">
        <div class="title">Fansly™ Helper</div>
      </div>
      <div class="modal-content">
        <div class="">
          <div slot="confirmation_content">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th class="">Free</th>
                <th>
                  <div>
                    <div class="i-ant-design:crown-filled" />
                    <span>Pro</span>
                    <sup>+</sup>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EXPORT PHOTOS</td>
                <td class="font-size-lg">≤ 10</td>
                <td>
                  <div class="fa fa-check fa-xl green-1"></div>
                </td>
              </tr>
              <tr>
                <td>EXPORT VIDEOS</td>
                <td class="font-size-lg">≤ 2</td>
                <td>
                  <div class="fa fa-check fa-xl green-1"></div>
                </td>
              </tr>
              <tr>
                <td>EXPORT MESSAGES/ALL</td>
                <td>
                  <div class="fa fa-xmark fa-xl grey-1"></div>
                </td>
                <td>
                  <div class="fa fa-check fa-xl green-1"></div>
                </td>
              </tr>
            </tbody>
          </table>
            <div class="flex-row flex-space-between margin-top-1">
              <div class="flex-col">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer margin-top-1">
        <div class="btn large margin-right-2">Use Free Version</div>
        <div class="btn solid-green large">UPGRADE NOW!!</div>
      </div>
    </div>
  </app-button-new-confirmation-modal>`,"text/html").body.firstElementChild,d=e==null?void 0:e.querySelector(".btn.large"),i=e==null?void 0:e.querySelector(".btn.solid-green"),n=()=>{e&&s.removeChild(e),t==null||t.classList.remove("back-drop")};d==null||d.addEventListener("click",n),i==null||i.addEventListener("click",()=>{n(),chrome.runtime.sendMessage({method:"createWindow",payload:"/Subscribe?passCheck=1"})}),s.appendChild(e),t==null||t.classList.add("back-drop")}async function v(){const s="DAILY_TIMESTAMP",a=(await chrome.storage.local.get(s))[s],o=Date.now();return a&&(console.log("timestamp: ",a),o-a<24*60*60*1e3)?!1:(chrome.storage.local.set({[s]:o}),!0)}
