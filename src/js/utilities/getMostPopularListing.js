import { getListings } from "./fetchListings.js";

export async function getListingWithMostBids() {
  try {
    const listings = await getListings();

    if (!listings || listings.length === 0) {
      return null;
    }

    const listingWithMostBids = listings.reduce((highest, listing) => {
      const currentBidCount = listing._count?.bids || 0;
      const highestBidCount = highest._count?.bids || 0;
      return currentBidCount > highestBidCount ? listing : highest;
    });

    return listingWithMostBids;
  } catch (error) {
    console.error("Error fetching listings:", error.message);
    throw error;
  }
}
