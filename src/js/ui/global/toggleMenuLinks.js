export function toggleMenuLinks() {
  const profile = document.getElementById("profile-btn");
  const login = document.getElementById("login-btn");
  const register = document.getElementById("register-btn");
  const logout = document.getElementById("logout-btn");
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    profile.classList.remove("hidden");
    login.classList.add("hidden");
    register.classList.add("hidden");
    logout.classList.remove("hidden");
  } else {
    profile.classList.add("hidden");
    logout.classList.add("hidden");
  }

  if (window.location.pathname === "/auth/login/") {
    login.classList.add("hidden");
  }

  if (window.location.pathname === "/auth/register/") {
    register.classList.add("hidden");
  }
}
