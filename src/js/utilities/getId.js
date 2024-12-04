export function getId() {
  let url = new URLSearchParams(window.location.search);
  let id = url.get("id");
  return id;
}
