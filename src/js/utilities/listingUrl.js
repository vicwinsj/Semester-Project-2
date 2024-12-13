import { GH_BASE } from "../api/constants";

export function listingUrl(listing) {
  const listingUrl = `${GH_BASE}/listing/index.html?id=${listing.id}`;
  window.location.href = listingUrl;
  return listingUrl;
}

export function editListingUrl(listing) {
  const listingUrl = `${GH_BASE}/listing/edit/index.html?id=${listing.id}`;
  window.location.href = listingUrl;
  return listingUrl;
}

export function profileUrl(user) {
  return `${GH_BASE}/profile/index.html?name=${user.name}`;
}
