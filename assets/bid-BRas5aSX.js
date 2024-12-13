import{i as c,d as i}from"./app-BxwILGkO.js";import{g as u}from"./errorMessage-IHW2CCLv.js";function f(e,d){if(Array.isArray(e.media)&&e.media.length>0){const r=document.createElement("div");r.classList.add("relative","overflow-hidden","w-full","h-96","xl:h-[30rem]");const l=document.createElement("div");if(l.classList.add("flex","transition-transform","duration-500","ease-in-out","w-full","h-full"),r.appendChild(l),e.media.forEach(o=>{const t=document.createElement("div");t.classList.add("flex-shrink-0","w-full","h-full","overflow-hidden");const a=document.createElement("img");a.src=o.url||"https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",a.alt=o.alt||"Carousel image",a.classList.add("w-full","h-full","object-cover"),t.appendChild(a),l.appendChild(t)}),e.media.length>1){const o=document.createElement("button");o.classList.add("absolute","top-1/2","-translate-y-1/2","left-3","z-10","bg-primaryBlue","bg-opacity-50","text-white","rounded-full","w-12","h-12","flex","items-center","justify-center","hover:bg-opacity-100","focus:outline-none"),o.innerHTML="&lt;";const t=document.createElement("button");t.classList.add("absolute","top-1/2","-translate-y-1/2","right-3","z-10","bg-primaryBlue","bg-opacity-50","text-white","rounded-full","w-12","h-12","flex","items-center","justify-center","hover:bg-opacity-100","focus:outline-none"),t.innerHTML="&gt;";let a=0;const s=()=>{l.style.transform=`translateX(-${a*100}%)`};o.addEventListener("click",n=>{n.stopPropagation(),a=(a-1+e.media.length)%e.media.length,s()}),t.addEventListener("click",n=>{n.stopPropagation(),a=(a+1)%e.media.length,s()}),r.append(o,t)}d.appendChild(r)}else{const r=document.createElement("img");r.src=e.media.url||"https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",r.alt=e.media.alt||e.media.url||"Example image",r.classList.add("w-full","h-full","object-cover"),d.appendChild(r)}}async function h(e,d,{_seller:r,_bids:l,amount:o}={}){e.preventDefault();const t=new URL(`${c}/${d}/bids`);r&&t.searchParams.append("_seller","true"),l&&t.searchParams.append("_bids","true");const a={amount:o};try{await i(t,{method:"POST",body:a})&&(alert("Bid placed!"),location.reload())}catch(s){const n=JSON.parse(s.message.split(". ")[1]||"{}");u(n),console.error("There was a problem with the fetch operation:",s)}}export{f as g,h as p};