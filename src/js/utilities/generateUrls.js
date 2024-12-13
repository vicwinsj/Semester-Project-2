import { BASE_URL } from "../api/constants";

export function listingUrl(listing) {
  const listingUrl = `${BASE_URL}listing/index.html?id=${listing.id}`;
  window.location.href = listingUrl;
  return listingUrl;
}

export function profileUrl(user) {
  return `${BASE_URL}profile/index.html?name=${user.name}`;
}
