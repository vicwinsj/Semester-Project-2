export function listingUrl(listing) {
  const listingUrl = `listing/index.html?id=${listing.id}`;
  window.location.href = listingUrl;
  return listingUrl;
}

export function editListingUrl(listing) {
  const listingUrl = `/listing/edit/index.html?id=${listing.id}`;
  window.location.href = listingUrl;
  return listingUrl;
}
