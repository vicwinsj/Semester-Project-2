export function findCurrentBid(listing) {
  let highestBid = 0;

  if (listing.bids && listing.bids.length > 0) {
    listing.bids.forEach((bid) => {
      if (bid.amount > highestBid) {
        highestBid = bid.amount;
      }
    });
  }
  return highestBid;
}
