import{i as w,d as $,B as p,a as B,c as C,f as k,b as A,j as S}from"./app-bgryLbGh.js";import{g as U,p as j}from"./bid-8jyhrAv7.js";import{g as F}from"./getFromUrl-l7KgJi7t.js";async function N({id:e,_seller:r=!0,_bids:d=!0}){const t=new URL(`${w}/${e}`);r&&t.searchParams.append("_seller",r),d&&t.searchParams.append("_bids","true");try{return(await $(t)).data}catch(a){console.error("Fetching error:",a.message)}}function P(e){const r=new Date(e),d={year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return r.toLocaleString("no-NO",d).replace(",","")}function x(e){const r=e.created;return P(r)}async function _(e){const r=document.getElementById("listing-title");r.innerText=e.title;const d=document.getElementById("listing-img");U(e,d);const t=document.getElementById("listing-seller-link");t.href=`${p}/profile/index.html?name=${e.seller.name}`,B?t.href=`${p}profile/index.html?name=${e.seller.name}`:(t.href="#",t.addEventListener("click",s=>{s.preventDefault(),alert("You must be logged in to view profiles.")}));const a=document.getElementById("listing-seller-avatar");a.src=e.seller?.avatar?.url,a.alt=e.seller?.avatar?.alt||e.seller?.avatar?.url;const o=document.getElementById("listing-seller");o.innerText=e.seller.name;const l=document.getElementById("listing-description");l.innerText=e.description;const b=document.getElementById("auction-expiry");b.innerText=C(e.endsAt);const i=k(e),u=document.getElementById("listing-current-bid");u.innerText=i.amount;const I=document.getElementById("listing-current-bidder");I.innerText=i.bidder.name;const g=document.getElementById("listing-current-bidder-link");if(e.bids.length<1){const s=document.getElementById("listing-no-bids");s.innerText="No bids yet!",u.innerText=""}if(e.bids.length!==0){const s=document.getElementById("listing-current-bidder-avatar");s.src=i.bidder.avatar.url,s.alt=i.bidder.avatar.alt||i.bidder.avatar.url,B?g.href=`${p}profile/index.html?name=${i.bidder.name}`:(g.href="#",g.addEventListener("click",n=>{n.preventDefault(),alert("You must be logged in to view profiles.")}));const E=document.getElementById("listing-current-bid-date");E.innerText=x(i)}else g.classList.add("hidden");const T=document.getElementById("listing-bids-container");if(e.bids.length>1){const s=document.getElementById("listing-bids-details");s.classList.remove("hidden"),s.classList.add("flex"),e.bids.sort((n,m)=>m.amount-n.amount).forEach(n=>{const m=document.createElement("div");m.classList.add("flex","items-center","justify-between");const v=document.createElement("p");v.classList.add("font-semibold"),v.innerText=n.amount;const c=document.createElement("a");c.classList.add("flex","items-center","gap-3"),B?c.href=`${p}profile/index.html?name=${n.bidder.name}`:(c.href="#",c.addEventListener("click",D=>{D.preventDefault(),alert("You must be logged in to view profiles.")}));const y=document.createElement("div");y.classList.add("w-8","h-8","rounded-full","bg-gray-300","overflow-hidden");const f=document.createElement("img");f.classList.add("w-full","h-full","object-cover"),f.src=n.bidder.avatar.url,f.alt=n.bidder.avatar.alt||n.bidder.avatar.url,y.append(f);const h=document.createElement("p");h.classList.add("font-semibold"),h.innerText=n.bidder.name,c.append(y,h);const L=document.createElement("p");L.innerText=x(n),m.append(v,c,L),T.append(m)})}}async function O(){const e=document.getElementById("listing-content"),r=document.querySelector("main"),d=A();r.append(d);const t=F(),a=await N({id:t});document.title=`${a.title} | HammerPrice`,_(a);const o=document.forms.placeBid,l=S();l?l&&a.seller.name===l.name&&o.classList.add("hidden"):o.classList.add("hidden"),o.addEventListener("submit",b=>{const i=a.id,u=parseFloat(document.querySelector("input[name='listing-bid']").value);j(b,i,{amount:u})}),d.remove(),e.classList.remove("hidden"),e.classList.add("flex")}export{O as default};