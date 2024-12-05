export function findCurrentBid(listing) {
  let currentBid = { amount: 0, bidder: { name: "No bids yet" } };

  if (listing.bids && listing.bids.length > 0) {
    listing.bids.forEach((bid) => {
      if (bid.amount > currentBid.amount) {
        currentBid = bid;
      }
    });
  }
  return currentBid;
}
