import { API_AUCTION_LISTINGS } from "../api/constants.js";
import { doFetch } from "./doFetch.js";
import { headers } from "../api/headers.js";
import { isExpired } from "./isExpired.js";

export async function getListings({
  sort = "created",
  sortOrder = "desc",
  limit = 100,
  page = 1,
  _seller,
  _bids = true,
  _tag,
  _active = true,
  search = "",
} = {}) {
  let url;
  if (search) {
    url = new URL(`${API_AUCTION_LISTINGS}/search`);
    url.searchParams.append("q", search); // Append search query
  } else {
    url = new URL(`${API_AUCTION_LISTINGS}`);
    url.searchParams.append("sort", sort);
    url.searchParams.append("sortOrder", sortOrder);
    url.searchParams.append("limit", limit);
    url.searchParams.append("page", page);
    if (_tag) url.searchParams.append("_tag", _tag);
    if (_seller) url.searchParams.append("_seller", _seller);
    if (_bids) url.searchParams.append("_bids", "true");
    if (_active) url.searchParams.append("_active", "true");
  }

  try {
    const response = await fetch(url, {
      headers: headers(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const validListings = data.data.filter(
      (listing) => !isExpired(listing.endsAt)
    );

    return validListings;
  } catch (error) {
    console.error("Fetching error:", error.message);
    throw error;
  }
}

// export const posts = await getPosts();
