const r=async e=>{for(const t of e)if(t.type==="childList")for(let a=0;a<t.addedNodes.length;a++){const s=t.addedNodes[a];s instanceof HTMLElement&&s.classList.contains("modal-wrapper")&&s.querySelector(".xdModal")&&m(s)}},c={attributes:!0,childList:!0,subtree:!0,characterData:!0},l=new MutationObserver(r);window.addEventListener("load",async()=>{const e=await chrome.runtime.sendMessage({method:"getAccountInfo"});if(e&&e.isPro)return;await f()&&l.observe(document.body,c)});function m(e){const t=e.querySelector(".xdModal"),d=new DOMParser().parseFromString(`<app-button-new-confirmation-modal class="active-modal" style="width:100%;">
    <div class="modal" style="width:100%;max-width:400px;">
      <div class="modal-header">
        <div class="title">Fansly™ Downloader</div>
      </div>
      <div class="modal-content">
        <div class="">
          <div slot="confirmation_content">
            <table class="table">
              <thead>
                <tr>
                  <th></th>
                  <th style="padding: 1em 0.5em">Free</th>
                  <th style="padding: 1em 0.5em">
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
                  <td style="padding: 0.5em 0.5em">EXPORT PHOTOS</td>
                  <td style="padding: 0.5em 0.5em" class="font-size-lg">≤ 10</td>
                  <td style="padding: 0.5em 0.5em">
                    <div class="fa fa-check fa-xl green-1"></div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0.5em 0.5em">EXPORT VIDEOS</td>
                  <td style="padding: 0.5em 0.5em" class="font-size-lg">≤ 2</td>
                  <td style="padding: 0.5em 0.5em">
                    <div class="fa fa-check fa-xl green-1"></div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0.5em 0.5em">EXPORT MESSAGES/ALL</td>
                  <td style="padding: 0.5em 0.5em">
                    <div class="fa fa-xmark fa-xl grey-1"></div>
                  </td>
                  <td style="padding: 0.5em 0.5em">
                    <div class="fa fa-check fa-xl green-1"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal-footer margin-top-2">
        <div class="btn large margin-right-2 keep-free">KEEP FREE</div>
        <div class="btn solid-green large upgrade">UPGRADE</div>
      </div>
    </div>
  </app-button-new-confirmation-modal>`,"text/html").body.firstElementChild,i=d==null?void 0:d.querySelector(".btn.keep-free"),n=d==null?void 0:d.querySelector(".btn.upgrade"),o=()=>{d&&e.removeChild(d),t==null||t.classList.remove("back-drop")};i==null||i.addEventListener("click",o),n==null||n.addEventListener("click",()=>{o(),chrome.runtime.sendMessage({method:"navigateTo",payload:"/Subscribe?passCheck=1"})}),e.appendChild(d),t==null||t.classList.add("back-drop")}async function f(){const e="DAILY_TIMESTAMP",a=(await chrome.storage.local.get(e))[e],s=Date.now();return a&&s-a<24*60*60*1e3?!1:(chrome.storage.local.set({[e]:s}),!0)}
