import{d as E,A as y}from"./listingEdit-BDCl9NEo.js";function h(){localStorage.accessToken||(alert("You must be logged in to view this page"),window.location.href="/auth/login/")}async function v({title:t,description:c,endsAt:a,tags:r,media:s}){const i={title:t,description:c,endsAt:a,tags:r,media:s};try{await E(y,{method:"POST",body:i})&&(window.location.href="/")}catch(e){console.error("There was a problem with the fetch operation:",e)}}async function I(t){t.preventDefault();const c=document.getElementById("create-title"),a=document.getElementById("create-description"),r=document.getElementById("create-end-date");function s(){const d=document.querySelectorAll("input[name='img-url']");return Array.from(d).map(g=>g.value)}function i(){const d=document.querySelectorAll("input[name='tag']");return Array.from(d).map(g=>g.value)}const e=c.value,l=a.value,n=new Date(r.value).toISOString(),o=s(),m=i(),u=o.map(d=>({url:d,alt:"Product image"}));v({title:e,description:l,endsAt:n,tags:m,media:u})}h();const L=document.forms.createListing,A=document.getElementById("create-img-btn"),w=document.getElementById("create-img-urls"),B=document.getElementById("create-tag-btn"),b=document.getElementById("create-tags");function p(t,c,a="img-url",r="url",s="Enter image URL"){t.addEventListener("click",i=>{i.preventDefault();const e=document.createElement("div");e.classList.add("flex","items-center");const l=document.createElement("label");l.classList.add("hidden"),l.htmlFor=a;const n=document.createElement("input");n.name=a,n.type=r,n.classList.add("w-full"),n.placeholder=s;const o=document.createElement("button");o.classList.add("flex","items-center","justify-center","text-salmonRed","cursor-pointer","w-10","h-10"),o.addEventListener("click",u=>{u.preventDefault(),e.remove()});const m=document.createElement("i");m.classList.add("fa-solid","fa-xmark"),o.append(m),e.append(l,n,o),c.append(e)})}p(A,w,"img-url","url","Enter image URL");p(B,b,"tag","text","Enter tag");L.addEventListener("submit",t=>{I(t)});
