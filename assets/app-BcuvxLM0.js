const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-DEf6PdqI.js","assets/bid-BigttSB-.js","assets/errorMessage-IHW2CCLv.js","assets/login-DoRv4hgD.js","assets/login-w6VOquL9.js","assets/register-CTts0x9g.js","assets/listing-BoY623v9.js","assets/getFromUrl-l7KgJi7t.js","assets/listingCreate-DtPeccK9.js","assets/profile-D6Xu_sXm.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const k="modulepreload",B=function(e){return"/Semester-Project-2/"+e},y={},f=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");r=Promise.allSettled(n.map(d=>{if(d=B(d),d in y)return;y[d]=!0;const c=d.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":k,c||(i.as="script"),i.crossOrigin="",i.href=d,l&&i.setAttribute("nonce",l),document.head.appendChild(i),c)return new Promise((E,h)=>{i.addEventListener("load",E),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return r.then(s=>{for(const l of s||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})},D=location.hostname.includes("github.io"),m=D?"/Semester-Project-2/":"/",L="efffe6d5-fb4b-4a2c-a744-5dd884d1924e",I="https://v2.api.noroff.dev",P=`${I}/auth`,te=`${P}/login`,ne=`${P}/register`,A=`${I}/auction`,v=`${A}/listings`,S=`${A}/profiles`;async function x(e=window.location.pathname){const t=`${m}`;let n;t.length>1?n=e.replace(t,"/").replace(/\/index\.html$/,"/"):n=e.replace(/\/index\.html$/,"/");let o;switch(n){case"/":o=await f(()=>import("./home-DEf6PdqI.js"),__vite__mapDeps([0,1,2]));break;case"/auth/login/":o=await f(()=>import("./login-DoRv4hgD.js"),__vite__mapDeps([3,4,2]));break;case"/auth/register/":o=await f(()=>import("./register-CTts0x9g.js"),__vite__mapDeps([5,2,4]));break;case"/listing/":o=await f(()=>import("./listing-BoY623v9.js"),__vite__mapDeps([6,1,2,7]));break;case"/listing/create/":o=await f(()=>import("./listingCreate-DtPeccK9.js"),__vite__mapDeps([8,2]));break;case"/profile/":o=await f(()=>import("./profile-D6Xu_sXm.js"),__vite__mapDeps([9,7]));break;default:o=await f(()=>import("./notFound-BNXFWLKC.js"),[])}o&&typeof o.default=="function"&&o.default()}async function re(e){return e.data.accessToken&&localStorage.setItem("accessToken",e.data.accessToken),localStorage.getItem("accessToken")}const g=localStorage.getItem("accessToken");class p extends Error{}p.prototype.name="InvalidTokenError";function M(e){return decodeURIComponent(atob(e).replace(/(.)/g,(t,n)=>{let o=n.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}function H(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return M(t)}catch{return atob(t)}}function O(e,t){if(typeof e!="string")throw new p("Invalid token specified: must be a string");t||(t={});const n=t.header===!0?0:1,o=e.split(".")[n];if(typeof o!="string")throw new p(`Invalid token specified: missing part #${n+1}`);let r;try{r=H(o)}catch(a){throw new p(`Invalid token specified: invalid base64 for part #${n+1} (${a.message})`)}try{return JSON.parse(r)}catch(a){throw new p(`Invalid token specified: invalid json for part #${n+1} (${a.message})`)}}function U(){const e=localStorage.getItem("accessToken");return e?O(e):(console.warn("Access token is missing. User is not logged in."),null)}function C(e="GET",t=!0){const n=new Headers;return e!=="GET"&&n.append("Content-Type","application/json"),t&&L&&g&&(n.append("Authorization",`Bearer ${g}`),n.append("X-Noroff-API-Key",L)),n}async function $(e,{method:t="GET",body:n,...o}={}){const r={method:t,headers:C(t),...o};t!=="GET"&&n&&(r.body=JSON.stringify(n));try{const a=await fetch(e,r);if(a.status===204||a.headers.get("Content-Length")==="0")return null;if(!a.ok){const s=await a.text();throw new Error(`HTTP error! Status: ${a.status}. ${s}`)}return await a.json()}catch(a){throw console.error("Fetching error:",a.message),a}}async function R(e,{_listings:t,_wins:n}={}){const o=new URL(`${S}/${e}`);t&&o.searchParams.append("_listings","true"),n&&o.searchParams.append("_wins","true");try{return(await $(o)).data}catch(r){throw console.error("Error fetching user profile:",r),r}}const N=document.getElementById("menu-create"),j=document.getElementById("menu-register"),G=document.getElementById("menu-login"),q=document.getElementById("menu-logout"),b=document.getElementById("menu-profile"),V=document.getElementById("burger"),_=document.getElementById("menu");async function F(){if(V.addEventListener("click",e=>{e.preventDefault(),_.classList.toggle("hidden"),_.classList.toggle("flex")}),g){const e=U();N.classList.remove("hidden"),j.classList.add("hidden"),G.classList.add("hidden"),q.classList.remove("hidden");const t=await R(e.name);b.classList.remove("hidden"),b.href=`${m}profile/?name=${t.name}`;const n=document.getElementById("menu-avatar");n.classList.remove("hidden"),n.src=t.avatar.url,n.alt=t.avatar.alt}}function K(e){e.preventDefault(),localStorage.accessToken&&(localStorage.removeItem("accessToken"),window.location.pathname===`${m}/profile/`?window.location.href=`${m}`:location.reload())}function W(){document.getElementById("menu-logout").addEventListener("click",t=>K(t))}function Y(){const e=document.createElement("div");return e.classList.add("loader","absolute","inset-0","flex","justify-center","items-center"),e.innerHTML=`
    <div class="loader-ball animate-bounce1 w-4 h-4 bg-focusBlue rounded-full"></div>
    <div class="loader-ball animate-bounce2 w-6 h-6 bg-primaryBlue rounded-full"></div>
    <div class="loader-ball animate-bounce3 w-8 h-8 bg-hoverBlue rounded-full"></div>
  `,e}function J(e){return new Date(e)<=new Date}async function z({sort:e="created",sortOrder:t="desc",limit:n=100,page:o=1,_seller:r,_bids:a=!0,_tag:s,_active:l=!0,search:d=""}={}){let c;d?(c=new URL(`${v}/search`),c.searchParams.append("q",d)):(c=new URL(`${v}`),c.searchParams.append("sort",e),c.searchParams.append("sortOrder",t),c.searchParams.append("limit",n),c.searchParams.append("page",o),s&&c.searchParams.append("_tag",s),r&&c.searchParams.append("_seller",r),a&&c.searchParams.append("_bids","true"),l&&c.searchParams.append("_active","true"));try{return(await $(c)).data.filter(h=>!J(h.endsAt))}catch(u){throw console.error("Fetching error:",u.message),u}}function X(e){const o=new Date(e)-new Date;if(o<=0)return"Expired";const r=Math.floor(o/(1e3*60*60*24)),a=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),s=Math.floor(o%(1e3*60*60)/(1e3*60));return`Ends in ${r} d ${a} h ${s} min`}function Q(e){let t={amount:0,bidder:{name:"No bids yet"}};return e.bids&&e.bids.length>0&&e.bids.forEach(n=>{n.amount>t.amount&&(t=n)}),t}function Z(e){const t=`${m}listing/index.html?id=${e.id}`;return window.location.href=t,t}function T(e,t){t.classList.add("regular-padding","grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","xl:grid-cols-4","gap-3"),e.forEach(n=>{const o=document.createElement("div");o.classList.add("flex","flex-col","gap-3","w-full","cursor-pointer"),o.onclick=function(){Z(n)};const r=document.createElement("div");r.classList.add("overflow-hidden","w-full","h-80");const a=document.createElement("img");if(a.classList.add("w-full","h-full","object-cover"),Array.isArray(n.media)&&n.media.length>0){const i=n.media[0];a.src=i.url||"https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",a.alt=i.alt||i.url||"Example image"}else a.src="https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",a.alt="Example image";const s=document.createElement("div"),l=document.createElement("h3");l.innerHTML=n.title;const d=document.createElement("p");d.innerHTML="Current bid: ";const c=document.createElement("span");c.innerHTML=Q(n).amount,c.classList.add("font-semibold"),d.appendChild(c);const u=document.createElement("p");u.innerHTML=X(n.endsAt),s.append(l,d),r.appendChild(a),o.append(r,s,u),t.appendChild(o)})}async function ee(){const e=document.querySelector("form[name='search']"),t=document.querySelector("input[name='search']"),n=document.querySelector("main");e.addEventListener("submit",async o=>{o.preventDefault();const r=t.value.trim();if(!r)return;const a=`${m}?q=${encodeURIComponent(r)}`;window.history.replaceState({},document.title,a),n.innerHTML="";const s=document.createElement("div");n.append(s);const l=document.createElement("h1");l.innerHTML="Search results for: ",l.classList.add("regular-padding");const d=document.createElement("span");d.classList.add("font-tinos","italic","text-primaryBlue"),d.innerHTML=`${r}`,l.appendChild(d);const c=document.createElement("p");n.append(c);const u=Y();s.append(u);try{const i=await z({search:r,limit:12});if(u.remove(),n.prepend(l),i.length===0){c.innerHTML=`Sorry, no results found for "${r}". Try another search.`;return}else i.length===1?(c.innerHTML=i.length+` result for "${r}".`,T(i,s)):i.length>1&&(c.innerHTML=i.length+` results for "${r}".`,T(i,s))}catch(i){console.error("Error fetching search results:",i),s.innerHTML="<p>Error fetching results. Please try again later.</p>"}})}document.addEventListener("DOMContentLoaded",async()=>{await x(window.location.pathname),await F(),W(),await ee()});const w=document.createElement("script");w.src="https://kit.fontawesome.com/7d99a0a315.js";w.crossOrigin="anonymous";document.head.appendChild(w);export{ne as A,m as B,g as a,Y as b,X as c,$ as d,te as e,Q as f,z as g,re as h,v as i,U as j,S as k,Z as l,R as m};