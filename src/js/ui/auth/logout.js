export function onLogout(event) {
  event.preventDefault();
  const isLoggedIn = localStorage.accessToken;
  if (isLoggedIn) {
    localStorage.removeItem("accessToken");
    location.reload();
  }
}
