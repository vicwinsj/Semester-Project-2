import { API_AUCTION_LISTINGS } from "../api/constants.js";
import { doFetch } from "./doFetch.js";
import { getId } from "./getId.js";

export async function getListing({ id, _seller = true, _bids = true }) {
  const url = new URL(`${API_AUCTION_LISTINGS}/${id}`);
  if (_seller) url.searchParams.append("_seller", _seller);
  if (_bids) url.searchParams.append("_bids", "true");
  try {
    const response = await doFetch(url, {
      method: "GET",
    });
    const listing = response.data;
    return listing;
  } catch (error) {
    console.error("Fetching error:", error.message);
  }
}

// export async function getListing({ id, _seller, _bids = true }) {
//   if (!id) {
//     throw new Error("Listing ID is required to fetch the listing.");
//   }

//   const url = new URL(`${API_AUCTION_LISTINGS}/${id}`);
//   if (_seller) url.searchParams.append("_seller", _seller);
//   if (_bids) url.searchParams.append("_bids", "true");

//   try {
//     const response = await doFetch(url, {
//       method: "GET",
//     });

//     // Assume response is the listing object itself (not wrapped in `data`)
//     return response;
//   } catch (error) {
//     console.error("Fetching error:", error.message);
//     throw error; // Rethrow to handle it at a higher level
//   }
// }
