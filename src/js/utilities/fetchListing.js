import { API_AUCTION_LISTINGS } from "../api/constants.js";
import { doFetch } from "./doFetch.js";

export async function getListing({ id, _seller = true, _bids = true }) {
  const url = new URL(`${API_AUCTION_LISTINGS}/${id}`);
  if (_seller) url.searchParams.append("_seller", _seller);
  if (_bids) url.searchParams.append("_bids", "true");
  try {
    const response = await doFetch(url);
    const listing = response.data;
    return listing;
  } catch (error) {
    console.error("Fetching error:", error.message);
  }
}
