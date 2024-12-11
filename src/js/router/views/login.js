import { onLogin } from "../../ui/auth/login.js";
console.log("login is imported");
const form = document.forms.login;

form.addEventListener("submit", onLogin);
