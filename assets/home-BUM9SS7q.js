import{l as L,f as y,c as M,g as w,a as H,b as A}from"./app-BxwILGkO.js";import{g as D,p as k}from"./bid-BRas5aSX.js";import"./errorMessage-IHW2CCLv.js";function B(i,t){i.forEach(e=>{const s=document.createElement("div");s.classList.add("flex","flex-col","gap-3","shrink-0","w-80","cursor-pointer"),s.onclick=function(){L(e)};const a=document.createElement("div");a.classList.add("overflow-hidden","w-full","h-80");const n=document.createElement("img");if(n.classList.add("w-full","h-full","object-cover"),Array.isArray(e.media)&&e.media.length>0){const m=e.media[0];n.src=m.url||"https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",n.alt=m.alt||m.url||"Example image"}else n.src="https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",n.alt="Example image";const c=document.createElement("div"),o=document.createElement("h3");o.innerHTML=e.title;const d=document.createElement("p");d.innerHTML="Current bid: ";const r=document.createElement("span");r.innerHTML=y(e).amount,r.classList.add("font-semibold"),d.appendChild(r);const l=document.createElement("p");l.innerHTML=M(e.endsAt),c.append(o,d),a.appendChild(n),s.append(a,c,l),t.appendChild(s)})}async function j(){try{const i=await w();return!i||i.length===0?null:i.reduce((e,s)=>{const a=s._count?.bids||0,n=e._count?.bids||0;return a>n?s:e})}catch(i){throw console.error("Error fetching listings:",i.message),i}}async function I(i){const t=await j(),e=document.createElement("section");e.classList.add("flex","flex-col","lg:flex-row","h-full","gap-10","z-10","regular-padding","bg-transparent");const s=document.createElement("div");s.classList.add("flex-[1]","w-full","overflow-hidden","cursor-pointer"),s.onclick=function(){L(t)},D(t,s);const a=document.createElement("div");a.classList.add("flex-[1]","w-full","flex","flex-col","justify-between");const n=document.createElement("div");n.classList.add("flex","flex-col","gap-3","cursor-pointer"),n.onclick=function(){L(t)};const c=document.createElement("h2");c.classList.add("truncate"),c.innerText=t.title;const o=document.createElement("p");o.innerText=M(t.endsAt);const d=document.createElement("p");d.classList.add("truncate"),d.innerText=t.description;const r=document.createElement("div");r.classList.add("flex","flex-col","gap-3");const l=document.createElement("div");l.classList.add("flex","items-center","justify-between");const m=document.createElement("p");m.innerText=t._count.bids+" bids";const g=document.createElement("p"),x=document.createElement("span");x.classList.add("font-semibold"),g.innerText="Current bid: ",x.innerText=y(t).amount,g.appendChild(x),l.append(m,g);const p=document.createElement("form");p.name="placeBid",p.classList.add("flex","flex-col","md:flex-row","items-center","gap-3","w-full"),H||p.classList.add("hidden");const h=document.createElement("div");h.classList.add("w-full","flex","justify-end");const b=document.createElement("label");b.classList.add("hidden"),b.htmlFor="bid-amount";const u=document.createElement("input");u.classList.add("error-field"),u.name="bid-amount",u.type="number",u.placeholder="Enter amount",h.append(b,u);const f=document.createElement("button");f.innerText="Make bid",f.classList.add("btn","min-w-32"),f.type="submit",f.addEventListener("click",C=>{C.preventDefault();const v=t.id,T=parseFloat(u.value);k(C,v,{amount:T})}),p.append(h,f);const E=document.createElement("p");E.id="error-message",E.classList.add("self-end","h-3"),r.append(l,p,E),n.append(c,o,d),a.append(n,r),e.append(s,a),i.appendChild(e)}async function q(){const i=document.querySelector("main"),t=A(),e=document.getElementById("home-content"),s=document.getElementById("hottest-listing"),a=document.getElementById("latest-listings"),n=document.getElementById("expiring-listings");i.appendChild(t),await I(s);const c=await w({limit:12});await B(c,a);const o=await w({sort:"endsAt",sortOrder:"asc",limit:12});await B(o,n),e.classList.remove("hidden"),e.classList.add("flex"),t.remove()}export{q as default};