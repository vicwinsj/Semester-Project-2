import{i as c,d as i}from"./app-9pFSmsfd.js";function f(e,d){if(Array.isArray(e.media)&&e.media.length>0){const o=document.createElement("div");o.classList.add("relative","overflow-hidden","w-full","h-96","xl:h-[30rem]");const l=document.createElement("div");if(l.classList.add("flex","transition-transform","duration-500","ease-in-out","w-full","h-full"),o.appendChild(l),e.media.forEach(r=>{const t=document.createElement("div");t.classList.add("flex-shrink-0","w-full","h-full","overflow-hidden");const a=document.createElement("img");a.src=r.url||"https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",a.alt=r.alt||"Carousel image",a.classList.add("w-full","h-full","object-cover"),t.appendChild(a),l.appendChild(t)}),e.media.length>1){const r=document.createElement("button");r.classList.add("absolute","top-1/2","-translate-y-1/2","left-3","z-10","bg-primaryBlue","bg-opacity-50","text-white","rounded-full","w-12","h-12","flex","items-center","justify-center","hover:bg-opacity-100","focus:outline-none"),r.innerHTML="&lt;";const t=document.createElement("button");t.classList.add("absolute","top-1/2","-translate-y-1/2","right-3","z-10","bg-primaryBlue","bg-opacity-50","text-white","rounded-full","w-12","h-12","flex","items-center","justify-center","hover:bg-opacity-100","focus:outline-none"),t.innerHTML="&gt;";let a=0;const n=()=>{l.style.transform=`translateX(-${a*100}%)`};r.addEventListener("click",s=>{s.stopPropagation(),a=(a-1+e.media.length)%e.media.length,n()}),t.addEventListener("click",s=>{s.stopPropagation(),a=(a+1)%e.media.length,n()}),o.append(r,t)}d.appendChild(o)}else{const o=document.createElement("img");o.src=e.media.url||"https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",o.alt=e.media.alt||e.media.url||"Example image",o.classList.add("w-full","h-full","object-cover"),d.appendChild(o)}}async function m(e,d,{_seller:o,_bids:l,amount:r}={}){e.preventDefault();const t=new URL(`${c}/${d}/bids`);o&&t.searchParams.append("_seller","true"),l&&t.searchParams.append("_bids","true");const a={amount:r};try{await i(t,{method:"POST",body:a})&&(alert("Bid placed!"),location.reload())}catch(n){console.error("There was a problem with the fetch operation:",n)}}export{f as g,m as p};
