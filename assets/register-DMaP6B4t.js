import{d as c,i as m}from"./app-lBltRYgP.js";import{a as d}from"./error-CnYwh7_F.js";async function g({name:t,email:o,password:e,bio:a,banner:i,avatar:n}){try{const r=await c(`${m}`,{method:"POST",body:{name:t,email:o,password:e,bio:a,banner:i,avatar:n}});return!0}catch(r){const s=JSON.parse(r.message.split(". ")[1]||"{}");throw console.error("Registration error details:",s),d(s),r}}async function l(t){t.preventDefault();const o={name:document.getElementById("register-name").value,email:document.getElementById("register-email").value,password:document.getElementById("register-password").value};try{await g(o)&&(window.location.href="/")}catch(e){console.error("Error in onRegister:",e.message)}}const u=document.forms.register;u.addEventListener("submit",l);
