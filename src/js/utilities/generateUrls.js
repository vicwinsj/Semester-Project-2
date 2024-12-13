import { BASE_URL } from "../api/constants";

export function listingUrl(listing) {
  const listingUrl = `${BASE_URL}listing/index.html?id=${listing.id}`;
  window.location.href = listingUrl;
  return listingUrl;
}
