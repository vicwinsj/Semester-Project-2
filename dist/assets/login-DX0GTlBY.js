import{d as n,a as s,g as a}from"./listingEdit-BDCl9NEo.js";import{a as i}from"./error-CnYwh7_F.js";async function c({email:t,password:r}){try{const e=await n(`${s}`,{method:"POST",body:{email:t,password:r}});return a(e),!0}catch(e){const o=JSON.parse(e.message.split(". ")[1]||"{}");throw console.error("Login error details:",o),i(o),e}}async function l(t){t.preventDefault();const r={email:document.getElementById("login-email").value,password:document.getElementById("login-password").value},e=document.getElementById("login-error");try{await c(r)&&(console.log("success login"),window.location.href="/")}catch(o){e.innerText=`${o.message}`}}const g=document.forms.login;g.addEventListener("submit",l);