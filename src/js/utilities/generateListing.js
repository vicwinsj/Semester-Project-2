import { accessToken } from "../api/auth/key.js";
import { editListingUrl, listingUrl, profileUrl } from "./listingUrl.js";
import { headers } from "../api/headers.js";
import { generateImageCarousel } from "./imageCarousel.js";
import { calculateTimeRemaining } from "./remainingTime.js";
import { findCurrentBid } from "./currentBid.js";
import { creationDate } from "./formatDate.js";

export async function generateListingContent(listing) {
  const title = document.getElementById("listing-title");
  title.innerText = listing.title;

  const imgContainer = document.getElementById("listing-img");

  generateImageCarousel(listing, imgContainer);

  const sellerLink = document.getElementById("listing-seller-link");
  sellerLink.href = `/profile/index.html?name=${listing.seller.name}`;

  if (accessToken) {
    sellerLink.href = `/profile/index.html?name=${listing.seller.name}`;
  } else {
    sellerLink.href = "#";
    sellerLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert("You must be logged in to view profiles.");
    });
  }

  const avatar = document.getElementById("listing-seller-avatar");
  avatar.src = listing.seller?.avatar?.url;
  avatar.alt = listing.seller?.avatar?.alt || listing.seller?.avatar?.url;

  const seller = document.getElementById("listing-seller");
  seller.innerText = listing.seller.name;

  const description = document.getElementById("listing-description");
  description.innerText = listing.description;

  const auctionExpiry = document.getElementById("auction-expiry");
  auctionExpiry.innerText = calculateTimeRemaining(listing.endsAt);

  const currentBid = findCurrentBid(listing);

  const currentBidAmount = document.getElementById("listing-current-bid");
  currentBidAmount.innerText = currentBid.amount;

  const currentBidder = document.getElementById("listing-current-bidder");
  currentBidder.innerText = currentBid.bidder.name;

  const currentBidderLink = document.getElementById(
    "listing-current-bidder-link"
  );

  if (accessToken) {
    currentBidderLink.href = `/profile/index.html?name=${currentBid.bidder.name}`;
  } else {
    currentBidderLink.href = "#";
    currentBidderLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert("You must be logged in to view profiles.");
    });
  }

  if (listing.bids.length < 1) {
    const noBids = document.getElementById("listing-no-bids");
    noBids.innerText = "No bids yet!";
  }

  if (listing.bids.length !== 0) {
    const currentBidderAvatar = document.getElementById(
      "listing-current-bidder-avatar"
    );
    currentBidderAvatar.src = currentBid.bidder.avatar.url;
    currentBidderAvatar.alt =
      currentBid.bidder.avatar.alt || currentBid.bidder.avatar.url;

    currentBidderLink.href = `/profile/index.html?name=${currentBid.bidder.name}`;

    const currentBidDate = document.getElementById("listing-current-bid-date");
    currentBidDate.innerText = creationDate(currentBid);
  } else {
    currentBidderLink.classList.add("hidden");
  }

  const bidsContainer = document.getElementById("listing-bids-container");

  if (listing.bids.length > 1) {
    const bidsDetails = document.getElementById("listing-bids-details");
    bidsDetails.classList.remove("hidden");

    listing.bids.forEach((bid) => {
      const bidContainer = document.createElement("div");
      bidContainer.classList.add("flex", "items-center", "justify-between");

      const bidAmount = document.createElement("p");
      bidAmount.innerText = bid.amount;

      const bidderContainer = document.createElement("a");
      bidderContainer.classList.add("flex", "items-center", "gap-3");

      if (accessToken) {
        bidderContainer.href = `/profile/index.html?name=${bid.bidder.name}`;
      } else {
        bidderContainer.href = "#";
        bidderContainer.addEventListener("click", (event) => {
          event.preventDefault();
          alert("You must be logged in to view profiles.");
        });
      }

      const imgContainer = document.createElement("div");
      imgContainer.classList.add(
        "w-8",
        "h-8",
        "rounded-full",
        "bg-gray-300",
        "overflow-hidden"
      );

      const avatar = document.createElement("img");
      avatar.classList.add("w-full", "h-full", "object-cover");
      avatar.src = bid.bidder.avatar.url;
      avatar.alt = bid.bidder.avatar.alt || bid.bidder.avatar.url;

      imgContainer.append(avatar);

      const bidder = document.createElement("p");
      bidder.classList.add("font-semibold");
      bidder.innerText = bid.bidder.name;

      bidderContainer.append(imgContainer, bidder);

      const bidDate = document.createElement("p");
      bidDate.innerText = creationDate(bid);

      bidContainer.append(bidAmount, bidderContainer, bidDate);

      bidsContainer.append(bidContainer);
    });
  }

  // getLoggedInUser();

  // if (accessToken) {
  //   const editButton = document.getElementById("edit-btn");
  //   editButton.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     window.location.href = editPostUrl(post);
  //   });
  // }
}
