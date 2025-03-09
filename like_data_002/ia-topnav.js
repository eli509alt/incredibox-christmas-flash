// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-v3.0
(()=>{var M=(w,c,u)=>new Promise((g,d)=>{var f=i=>{try{a(u.next(i))}catch(y){d(y)}},r=i=>{try{a(u.throw(i))}catch(y){d(y)}},a=i=>i.done?g(i.value):Promise.resolve(i.value).then(f,r);a((u=u.apply(w,c)).next())});var ce=["audio","images","software","texts","video","web","more"],j=location.hostname==="localhost"||location.host.substr(0,4)==="www-"||location.host.substr(0,4)==="cat-"||location.host.substr(0,11)==="ia-petabox-"?console.log.bind(console):()=>{};document.addEventListener("DOMContentLoaded",()=>{let w=document.querySelector("ia-topnav");if(!w)return;let c=document.querySelector("ia-topnav primary-nav"),u=document.querySelector("ia-topnav search-menu .search-menu-inner"),g=c.querySelector("nav-search"),d=c.querySelector("media-menu"),f=document.querySelector("ia-topnav media-slider"),r=document.querySelector("ia-topnav user-menu"),a=document.querySelector("ia-topnav .user-info"),i=document.querySelector("signed-out-dropdown nav"),y=d.querySelector(".media-menu-container"),O=w.querySelector("desktop-subnav"),E="usermenu",o=[],v=0,q=null,A=null,$=!1,U=!1;function D(e){j("<ia-topnav>:",e)}function R({event:e}){if(!window.archive_analytics)return;let[t,s]=e.split("|");window.archive_analytics.send_event_no_sampling(t,s,window.location.pathname)}function b(){document.querySelector("#close-layer").classList.add("visible")}function V(){g.querySelector(".search-activated").classList.add("search-inactive"),g.querySelector(".search-activated").classList.remove("flex")}function p(){V(),u.classList.add("closed"),u.setAttribute("aria-hidden","true")}function h(e=!0){d.querySelectorAll("media-button a.selected").forEach(t=>{U&&t.focus(),t.classList.remove("selected")}),f.querySelectorAll(".open").forEach(t=>t.classList.remove("open")),e&&(y.classList.remove("open"),X()),U=!1,K("hidden")}function K(e=""){let t=f.querySelector(".information-menu");t.style.visibility=e}function C(e=""){r.querySelector("nav").setAttribute("aria-hidden",!!e),r.style.visibility=e}function L(){if(i==null||i.classList.add("initial"),i==null||i.classList.remove("open"),!r)return;let e=r.querySelector("nav");e.classList.contains("open")&&(C("hidden"),$?a.querySelector("button.user-menu").focus():a.querySelector("button.user-menu").blur()),e.classList.add("initial"),e.classList.remove("open"),$=!1}function x(){h(),L(),u.classList.remove("closed"),u.setAttribute("aria-hidden",!1),b()}function z(){g.querySelector(".search-activated").classList.remove("search-inactive"),g.querySelector(".search-activated").classList.add("flex"),b()}function B(){if(i==null||i.classList.add("open"),i==null||i.classList.remove("initial"),!r)return;let e=r.querySelector("nav");e.classList.add("open"),e.classList.remove("initial"),e.setAttribute("aria-hidden",!1),b(),r.querySelectorAll("a").forEach(t=>t.setAttribute("tabindex","")),C()}function G(e){p(),h(!1),L(),K(),f.querySelectorAll(".closed").forEach(t=>t.classList.toggle("open")),f.querySelectorAll("media-subnav").forEach(t=>t.classList.add("hidden")),f.querySelector(`media-subnav[menu=${e}]`).classList.remove("hidden"),b()}function Z(){var e,t,s;D("adding tracking event listeners"),w.addEventListener("trackClick",({detail:n})=>{R(n),D(`Analytics click fired: ${n.event}`)}),w.addEventListener("trackSubmit",({detail:n})=>{R(n),D(`Analytics submit fired: ${n.event}`)}),window.addEventListener("pageshow",n=>{n.persisted&&window.location.reload()}),g.querySelector("input[type=text]").addEventListener("focus",x),u.querySelector("a.advanced-search").addEventListener("focus",x),(e=a==null?void 0:a.querySelector("a.dropdown-toggle"))==null||e.addEventListener("click",()=>{i.classList.contains("open")?L():(h(),p(),B(),b())}),(t=a==null?void 0:a.querySelector("button.user-menu"))==null||t.addEventListener("click",()=>M(this,null,function*(){E="usermenu",o=yield I(r),console.log(o[1]),setTimeout(()=>{o[1].focus()},100)})),(s=c.querySelector(".user-menu"))==null||s.addEventListener("click",()=>{r.querySelector("nav").classList.contains("open")?L():(h(),p(),B(),b())});for(let n of ce){let m=d.querySelector(`media-button[data-mediatype=${n}] a`);m.addEventListener("click",l=>M(this,null,function*(){m.classList.contains("selected")?h(!1):(G(n),m.classList.add("selected"),y.classList.add("open"),F()),E="mediamenu";let S=f.querySelector(`media-subnav[menu=${n}]:not(.hidden)`);return o=yield I(S),setTimeout(()=>{o[0].focus()},100),l&&l.preventDefault&&l.preventDefault(),l&&l.stopPropagation&&l.stopPropagation(),!1}))}document.querySelector("#close-layer").addEventListener("click",()=>{h(),p(),L(),document.querySelector("#close-layer").classList.remove("visible")}),c.querySelector("button.hamburger").addEventListener("click",()=>{p(),L(),y.classList.contains("open")?(h(),X()):(y.classList.add("open"),b(),F())}),c.querySelector(".search-trigger").addEventListener("click",()=>{z(),x()}),c.querySelector("a.upload").addEventListener("focus",()=>p()),O.querySelector("a.desktop-subnav").addEventListener("focus",()=>p())}let H=e=>{console.log("Keydown detected:",e.key),Q(e)};function I(e){return M(this,null,function*(){W(e);let s=e.querySelectorAll("a, input, select, button");return o=s,v=0,E==="mediamenu"&&(q||(q=H,e.addEventListener("keydown",q))),E==="usermenu"&&(A||(A=H,e.addEventListener("keydown",A))),Array.from(s).filter(n=>!n.hasAttribute("disabled"))})}function W(e){q&&(e.removeEventListener("keydown",q),q=null),A&&(e.removeEventListener("keydown",A),A=null)}function Q(e){let{key:t}=e;["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(t)?(Y(t),e.preventDefault()):t==="Tab"?(ne(e),e.preventDefault()):t==="Escape"&&(se(e),e.preventDefault())}function Y(e){["ArrowDown","ArrowRight"].includes(e)?te():ee()}function ee(){var e;o.length!==0&&(v=(v-1+o.length)%o.length,(e=o[v])==null||e.focus())}function te(){var e;o.length!==0&&(v=(v+1)%o.length,(e=o[v])==null||e.focus())}function ne(e){var s,n,m,l,P;let t=e.shiftKey;if(E==="usermenu"&&r.querySelector(".user-menu.open")!==null){let S=t?d.querySelector("media-button[data-mediatype=images] a"):document.querySelector("a.upload");S&&S.focus()}if(E==="mediamenu"){(s=o[v])==null||s.blur();let S=["web","texts","video","audio","software","images"],k=-1;S.forEach((ae,le)=>{d.querySelector(`media-button a.${ae}.selected`)&&(k=le)});let re=t?k-1:k+1,J=S[re%S.length];t&&k===5?(n=d.querySelector(`media-button a.${J}`))==null||n.focus():k===5?document.querySelector(".user-menu")?(m=document.querySelector(".user-menu"))==null||m.focus():(l=a.querySelectorAll("span a.login-button")[0])==null||l.focus():k!==-1&&((P=d.querySelector(`media-button a.${J}`))==null||P.focus())}e.preventDefault(),e.stopPropagation()}function se(e){(e.key==="Escape"||e.keyCode===27)&&($=!0,U=!0,p(),h(!0,!0),L())}function ie(){var t,s,n;let e=JSON.parse((s=(t=document.querySelector(".js_nav_tweaks"))==null?void 0:t.value)!=null?s:!1);e&&(e.hideSearch&&(c.querySelector("nav-search").classList.add("hidden"),c.querySelector("button.search-trigger").classList.add("hidden")),e.uploadURL&&((n=c.querySelector("a.upload"))==null||n.setAttribute("href",e.uploadURL)))}function _(e){let t=r.querySelector("ul"),s=document.createElement("li");for(s.role="presentation",s.classList="style-scope user-menu divider",t.append(s);e.length;){let n=e.shift();s=document.createElement("li"),s.classList="style-scope user-menu",s.innerHTML=n.url?`<a href="${n.url}" class="style-scope user-menu"
            data-event-click-tracking="TopNav|${n.analyticsEvent}">${n.title}</a>`:`<span class="style-scope user-menu info-item">${n.title}</span`,t.append(s)}}function oe(){var m,l;let e=JSON.parse((l=(m=document.querySelector(".js_user_menu_links"))==null?void 0:m.value)!=null?l:!1);if(!e)return;let{identifier:t,uploader:s,biblio:n}=e;_([{title:"ADMINS:"},{title:"item:"},{url:`/editxml/${t}`,title:"edit xml",analyticsEvent:"AdminUserEditXML"},{url:`/edit.php?redir=1&identifier=${t}`,title:"edit files",analyticsEvent:"AdminUserEditFiles"},{url:`/download/${t}/`,title:"download",analyticsEvent:"AdminUserDownload"},{url:`/metadata/${t}/`,title:"metadata",analyticsEvent:"AdminUserMetadata"},{url:`https://catalogd.archive.org/history/${t}`,title:"history",analyticsEvent:"AdminUserHistory"},{url:`/manage/${t}`,title:"manage",analyticsEvent:"AdminUserManager"},{url:`/manage/${t}#make_dark`,title:"curate",analyticsEvent:"AdminUserCurate"},{url:`/manage/${t}#modify_xml`,title:"modify xml",analyticsEvent:"AdminUserModifyXML"},{url:`/services/flags/admin.php?identifier=${t}`,title:"manage flags",analyticsEvent:"AdminUserManageFlags"}]),n&&_([{url:`${n}&ignored=${t}`,title:"biblio",analyticsEvent:"AdminUserBiblio"},{url:`/bookview.php?mode=debug&identifier=${t}`,title:"bookview",analyticsEvent:"AdminUserBookView"},{url:`/download/${t}/format=Single Page Processed JP2 ZIP`,title:"jp2 zip",analyticsEvent:"AdminUserJP2Zip"}]),s&&_([{title:"uploader:"},{title:s},{url:`https://catalogd.archive.org/control/useradmin.php?email=${s}`,title:"user admin",analyticsEvent:"AdminUserUserAdmin"},{url:`https://catalogd.archive.org/control/setadmin.php?user=${s}&ignore=${t}`,title:"user privs",analyticsEvent:"AdminUserUserPrivs"}])}let N="icon-hamburger svg:nth-child(1)",T="icon-hamburger-x";function F(){try{let e=document.getElementsByTagName("icon-hamburger")[0];document.getElementById(T)||(document.querySelector(N).style.display="none",e.innerHTML=e.innerHTML+'<svg id="'+T+'" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-labelledby="closeTitleID closeDescID" style="fill:white;width:4rem;height:4rem;"><title id="closeTitleID">Close icon</title><desc id="closeDescID">A line drawing of an X</desc><path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"></path></svg>')}catch(e){console.error({error:e})}}function X(){var e;try{document.querySelector(N).style.display="",(e=document.getElementById(T))==null||e.remove()}catch(t){console.error({error:t})}}Z(),oe(),ie(),j("IA topnav has loaded.")});})();
// @license-end
//# sourceMappingURL=ia-topnav.min.js.map
