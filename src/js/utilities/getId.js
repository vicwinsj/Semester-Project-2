export function getId() {
  let url = new URLSearchParams(window.location.search);
  let id = url.get("id");
  return id;
}

export function getName() {
  let url = new URLSearchParams(window.location.search);
  let name = url.get("name");
  return name;
}
