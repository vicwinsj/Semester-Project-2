import{l as E,f as B,c as y,g as w,a as T,b as H,s as A,h as D}from"./app-lBltRYgP.js";import{g as k,p as j}from"./bid-BHzpYmoR.js";function C(a,t){a.forEach(e=>{const i=document.createElement("div");i.classList.add("flex","flex-col","gap-3","shrink-0","w-80","cursor-pointer"),i.onclick=function(){E(e)};const s=document.createElement("div");s.classList.add("overflow-hidden","w-full","h-80");const n=document.createElement("img");if(n.classList.add("w-full","h-full","object-cover"),Array.isArray(e.media)&&e.media.length>0){const m=e.media[0];n.src=m.url||"https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",n.alt=m.alt||m.url||"Example image"}else n.src="https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",n.alt="Example image";const o=document.createElement("div"),c=document.createElement("h3");c.innerHTML=e.title;const l=document.createElement("p");l.innerHTML="Current bid: ";const d=document.createElement("span");d.innerHTML=B(e).amount,d.classList.add("font-semibold"),l.appendChild(d);const r=document.createElement("p");r.innerHTML=y(e.endsAt),o.append(c,l),s.appendChild(n),i.append(s,o,r),t.appendChild(i)})}async function I(){try{const a=await w();return!a||a.length===0?null:a.reduce((e,i)=>{const s=i._count?.bids||0,n=e._count?.bids||0;return s>n?i:e})}catch(a){throw console.error("Error fetching listings:",a.message),a}}async function W(a){const t=await I(),e=document.createElement("section");e.classList.add("flex","flex-col","lg:flex-row","h-full","gap-10","cursor-pointer","z-10","regular-padding","bg-transparent"),e.onclick=function(){E(t)};const i=document.createElement("div");i.classList.add("flex-[1]","overflow-hidden"),k(t,i);const s=document.createElement("div");s.classList.add("flex-[1]","flex","flex-col","justify-between");const n=document.createElement("div");n.classList.add("flex","flex-col","gap-3");const o=document.createElement("h2");o.innerText=t.title,o.onclick=function(){E(t)};const c=document.createElement("p");c.innerText=y(t.endsAt);const l=document.createElement("p");l.innerText=t.description;const d=document.createElement("div");d.classList.add("flex","flex-col","gap-3");const r=document.createElement("p");r.classList.add("flex","items-center","justify-between");const m=document.createElement("p");m.innerText=t._count.bids+" bids";const h=document.createElement("p"),b=document.createElement("span");b.classList.add("font-semibold"),h.innerText="Current bid: ",b.innerText=B(t).amount,h.appendChild(b),r.append(m,h);const u=document.createElement("form");u.name="placeBid",u.classList.add("flex","flex-col","md:flex-row","items-center","gap-3","w-full"),T||u.classList.add("hidden");const x=document.createElement("div");x.classList.add("w-full");const L=document.createElement("label");L.classList.add("hidden"),L.htmlFor="bid-amount";const p=document.createElement("input");p.classList.add("w-full"),p.name="bid-amount",p.type="number",x.append(L,p),x.addEventListener("click",g=>{g.stopPropagation()});const f=document.createElement("button");f.innerText="Make bid",f.classList.add("btn","min-w-32"),f.type="submit",f.addEventListener("click",g=>{g.stopPropagation(),g.preventDefault();const M=t.id,v=parseFloat(p.value);j(g,M,{amount:v})}),u.append(x,f),d.append(r,u),n.append(o,c,l),s.append(n,d),e.append(i,s),a.appendChild(e)}async function q(){const a=document.querySelector("main"),t=H(),e=document.getElementById("home-content"),i=document.getElementById("hottest-listing"),s=document.getElementById("latest-listings"),n=document.getElementById("expiring-listings");a.appendChild(t),A(t),await W(i);const o=await w({limit:12});await C(o,s);const c=await w({sort:"endsAt",sortOrder:"asc",limit:12});await C(c,n),e.classList.remove("hidden"),e.classList.add("flex"),D(t)}export{q as default};
