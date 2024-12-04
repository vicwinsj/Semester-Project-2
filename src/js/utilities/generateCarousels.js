import { calculateTimeRemaining } from "./remainingTime.js";
import { findCurrentBid } from "./currentBid.js";

export function generateListingCarousels(listings, targetContainer) {
  listings.forEach((listing) => {
    const listingContainer = document.createElement("div");
    listingContainer.classList.add(
      "flex",
      "flex-col",
      "gap-3",
      "shrink-0",
      "w-80",
      "cursor-pointer"
    );

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("overflow-hidden", "w-full", "h-80");

    const img = document.createElement("img");
    img.classList.add("w-full", "h-full", "object-cover");

    if (Array.isArray(listing.media) && listing.media.length > 0) {
      const firstMedia = listing.media[0];
      img.src =
        firstMedia.url ||
        "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      img.alt = firstMedia.alt || firstMedia.url || "Example image";
    } else {
      img.src =
        "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      img.alt = "Example image";
    }

    const bidContainer = document.createElement("div");
    const title = document.createElement("p");
    title.innerHTML = listing.title;
    const currentBid = document.createElement("p");
    currentBid.innerHTML = "Current bid: ";

    const bidValue = document.createElement("span");
    bidValue.innerHTML = findCurrentBid(listing) + " C";
    bidValue.classList.add("font-semibold");
    currentBid.appendChild(bidValue);

    const expiryContainer = document.createElement("p");
    expiryContainer.innerHTML = calculateTimeRemaining(listing.endsAt);

    bidContainer.append(title, currentBid);
    imgContainer.appendChild(img);

    listingContainer.append(imgContainer, bidContainer, expiryContainer);
    targetContainer.appendChild(listingContainer);
  });
}
