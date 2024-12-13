const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-H-fS2Cfl.js","assets/bid-CxQ1c1Uf.js","assets/login-BR_10Ohj.js","assets/error-CnYwh7_F.js","assets/register-BuLI2f6G.js","assets/listing-DlQGCOMi.js","assets/getFromUrl-l7KgJi7t.js","assets/profile-B0NigcYV.js"])))=>i.map(i=>d[i]);
(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const S="modulepreload",k=function(t){return"/Semester-Project-2/"+t},E={},f=function(r,n,s){let e=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),i=c?.nonce||c?.getAttribute("nonce");e=Promise.allSettled(n.map(l=>{if(l=k(l),l in E)return;E[l]=!0;const a=l.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":S,a||(d.as="script"),d.crossOrigin="",d.href=l,i&&d.setAttribute("nonce",i),document.head.appendChild(d),a)return new Promise((m,h)=>{d.addEventListener("load",m),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(c){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=c,window.dispatchEvent(i),!i.defaultPrevented)throw c}return e.then(c=>{for(const i of c||[])i.status==="rejected"&&o(i.reason);return r().catch(o)})};async function B(t=window.location.pathname){const n=location.hostname.includes("github.io")?"/Semester-Project-2":"/";console.log("Original Pathname:",t),console.log("Base Path:",n);let s=t.startsWith(n)?t.slice(n.length).replace(/\/index\.html$/,"/"):t.replace(/\/index\.html$/,"/");console.log("Clean Path:",s);let e;switch(s){case"/":e=await f(()=>import("./home-H-fS2Cfl.js"),__vite__mapDeps([0,1])),console.log(s);break;case"/auth/login/":e=await f(()=>import("./login-BR_10Ohj.js"),__vite__mapDeps([2,3]));break;case"/auth/register/":e=await f(()=>import("./register-BuLI2f6G.js"),__vite__mapDeps([4,3]));break;case"/listing/":e=await f(()=>import("./listing-DlQGCOMi.js"),__vite__mapDeps([5,1,6]));break;case"/listing/create/":e=await f(()=>import("./listingCreate-B-0a3XCY.js"),[]);break;case"/profile/":e=await f(()=>import("./profile-B0NigcYV.js"),__vite__mapDeps([7,6]));break;default:e=await f(()=>import("./notFound-BNXFWLKC.js"),[])}e&&typeof e.default=="function"&&e.default()}const T="/Semester-Project-2",y="efffe6d5-fb4b-4a2c-a744-5dd884d1924e",I="https://v2.api.noroff.dev",P=`${I}/auth`,ee=`${P}/login`,te=`${P}/register`,A=`${I}/auction`,L=`${A}/listings`,D=`${A}/profiles`;async function ne(t){return t.data.accessToken&&localStorage.setItem("accessToken",t.data.accessToken),localStorage.getItem("accessToken")}const g=localStorage.getItem("accessToken");class p extends Error{}p.prototype.name="InvalidTokenError";function x(t){return decodeURIComponent(atob(t).replace(/(.)/g,(r,n)=>{let s=n.charCodeAt(0).toString(16).toUpperCase();return s.length<2&&(s="0"+s),"%"+s}))}function H(t){let r=t.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return x(r)}catch{return atob(r)}}function M(t,r){if(typeof t!="string")throw new p("Invalid token specified: must be a string");r||(r={});const n=r.header===!0?0:1,s=t.split(".")[n];if(typeof s!="string")throw new p(`Invalid token specified: missing part #${n+1}`);let e;try{e=H(s)}catch(o){throw new p(`Invalid token specified: invalid base64 for part #${n+1} (${o.message})`)}try{return JSON.parse(e)}catch(o){throw new p(`Invalid token specified: invalid json for part #${n+1} (${o.message})`)}}function O(){const t=localStorage.getItem("accessToken");return t?M(t):(console.warn("Access token is missing. User is not logged in."),null)}function U(t="GET",r=!0){const n=new Headers;return t!=="GET"&&n.append("Content-Type","application/json"),r&&y&&g&&(n.append("Authorization",`Bearer ${g}`),n.append("X-Noroff-API-Key",y)),n}async function $(t,{method:r="GET",body:n,...s}={}){const e={method:r,headers:U(r),...s};r!=="GET"&&n&&(e.body=JSON.stringify(n));try{const o=await fetch(t,e);if(o.status===204||o.headers.get("Content-Length")==="0")return null;if(!o.ok){const c=await o.text();throw new Error(`HTTP error! Status: ${o.status}. ${c}`)}return await o.json()}catch(o){throw console.error("Fetching error:",o.message),o}}async function C(t,{_listings:r,_wins:n}={}){const s=new URL(`${D}/${t}`);r&&s.searchParams.append("_listings","true"),n&&s.searchParams.append("_wins","true");try{return(await $(s)).data}catch(e){throw console.error("Error fetching user profile:",e),e}}const R=document.getElementById("menu-create"),G=document.getElementById("menu-register"),N=document.getElementById("menu-login"),j=document.getElementById("menu-logout"),b=document.getElementById("menu-profile"),q=document.getElementById("burger"),v=document.getElementById("menu");async function V(){if(q.addEventListener("click",t=>{t.preventDefault(),v.classList.toggle("hidden"),v.classList.toggle("flex")}),g){const t=O();R.classList.remove("hidden"),G.classList.add("hidden"),N.classList.add("hidden"),j.classList.remove("hidden");const r=await C(t.name);b.classList.remove("hidden"),b.href=`${T}/profile/?name=${r.name}`;const n=document.getElementById("menu-avatar");n.classList.remove("hidden"),n.src=r.avatar.url,n.alt=r.avatar.alt}}function F(t){t.preventDefault(),localStorage.accessToken&&(localStorage.removeItem("accessToken"),location.reload())}function K(){document.getElementById("menu-logout").addEventListener("click",r=>F(r))}function W(){const t=document.createElement("div");return t.classList.add("loader","absolute","inset-0","flex","justify-center","items-center"),t.innerHTML=`
    <div class="loader-ball animate-bounce1 w-4 h-4 bg-focusBlue rounded-full"></div>
    <div class="loader-ball animate-bounce2 w-6 h-6 bg-primaryBlue rounded-full"></div>
    <div class="loader-ball animate-bounce3 w-8 h-8 bg-hoverBlue rounded-full"></div>
  `,t}function Y(t){return new Date(t)<=new Date}async function J({sort:t="created",sortOrder:r="desc",limit:n=100,page:s=1,_seller:e,_bids:o=!0,_tag:c,_active:i=!0,search:l=""}={}){let a;l?(a=new URL(`${L}/search`),a.searchParams.append("q",l)):(a=new URL(`${L}`),a.searchParams.append("sort",t),a.searchParams.append("sortOrder",r),a.searchParams.append("limit",n),a.searchParams.append("page",s),c&&a.searchParams.append("_tag",c),e&&a.searchParams.append("_seller",e),o&&a.searchParams.append("_bids","true"),i&&a.searchParams.append("_active","true"));try{return(await $(a)).data.filter(h=>!Y(h.endsAt))}catch(u){throw console.error("Fetching error:",u.message),u}}function z(t){const s=new Date(t)-new Date;if(s<=0)return"Expired";const e=Math.floor(s/(1e3*60*60*24)),o=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),c=Math.floor(s%(1e3*60*60)/(1e3*60));return`Ends in ${e} d ${o} h ${c} min`}function X(t){let r={amount:0,bidder:{name:"No bids yet"}};return t.bids&&t.bids.length>0&&t.bids.forEach(n=>{n.amount>r.amount&&(r=n)}),r}function Q(t){const r=`${T}/listing/index.html?id=${t.id}`;return window.location.href=r,r}function _(t,r){r.classList.add("regular-padding","grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","xl:grid-cols-4","gap-3"),t.forEach(n=>{const s=document.createElement("div");s.classList.add("flex","flex-col","gap-3","w-full","cursor-pointer"),s.onclick=function(){Q(n)};const e=document.createElement("div");e.classList.add("overflow-hidden","w-full","h-80");const o=document.createElement("img");if(o.classList.add("w-full","h-full","object-cover"),Array.isArray(n.media)&&n.media.length>0){const d=n.media[0];o.src=d.url||"https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",o.alt=d.alt||d.url||"Example image"}else o.src="https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",o.alt="Example image";const c=document.createElement("div"),i=document.createElement("h3");i.innerHTML=n.title;const l=document.createElement("p");l.innerHTML="Current bid: ";const a=document.createElement("span");a.innerHTML=X(n).amount,a.classList.add("font-semibold"),l.appendChild(a);const u=document.createElement("p");u.innerHTML=z(n.endsAt),c.append(i,l),e.appendChild(o),s.append(e,c,u),r.appendChild(s)})}async function Z(){const t=document.querySelector("form[name='search']"),r=document.querySelector("input[name='search']"),n=document.querySelector("main");t.addEventListener("submit",async s=>{s.preventDefault();const e=r.value.trim();if(!e)return;const c=`${window.location.origin}/?q=${encodeURIComponent(e)}`;window.history.replaceState({},document.title,c),n.innerHTML="";const i=document.createElement("div");n.append(i);const l=document.createElement("h1");l.innerHTML="Search results for: ",l.classList.add("regular-padding");const a=document.createElement("span");a.classList.add("font-tinos","italic","text-primaryBlue"),a.innerHTML=`${e}`,l.appendChild(a);const u=document.createElement("p");n.append(u);const d=W();i.append(d);try{const m=await J({search:e,limit:12});if(d.remove(),n.prepend(l),m.length===0){u.innerHTML=`Sorry, no results found for "${e}". Try another search.`;return}else m.length===1?(u.innerHTML=m.length+` result for "${e}".`,_(m,i)):m.length>1&&(u.innerHTML=m.length+` results for "${e}".`,_(m,i))}catch(m){console.error("Error fetching search results:",m),i.innerHTML="<p>Error fetching results. Please try again later.</p>"}})}document.addEventListener("DOMContentLoaded",async()=>{await B(window.location.pathname),await V(),K(),await Z()});const w=document.createElement("script");w.src="https://kit.fontawesome.com/7d99a0a315.js";w.crossOrigin="anonymous";document.head.appendChild(w);export{ee as A,T as G,g as a,W as b,z as c,$ as d,ne as e,X as f,J as g,te as h,L as i,O as j,D as k,Q as l,C as m};
