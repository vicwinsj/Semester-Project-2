import{d as c,h as m,G as d}from"./app-DqxD9sdT.js";import{a as l}from"./error-CnYwh7_F.js";async function g({name:t,email:s,password:e,bio:a,banner:i,avatar:n}){try{const r=await c(`${m}`,{method:"POST",body:{name:t,email:s,password:e,bio:a,banner:i,avatar:n}});return!0}catch(r){const o=JSON.parse(r.message.split(". ")[1]||"{}");throw console.error("Registration error details:",o),l(o),r}}async function u(t){t.preventDefault();const s={name:document.getElementById("register-name").value,email:document.getElementById("register-email").value,password:document.getElementById("register-password").value};try{await g(s)&&(alert("Successfully registered!"),window.location.href=`${d}`)}catch(e){console.error("Error in onRegister:",e.message)}}const f=document.forms.register;f.addEventListener("submit",u);
