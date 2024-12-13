import { getListingWithMostBids } from "./getMostPopularListing.js";
import { findCurrentBid } from "./currentBid.js";
import { listingUrl } from "./generateUrls.js";
import { calculateTimeRemaining } from "./remainingTime.js";
import { generateImageCarousel } from "./imageCarousel.js";
import { placeBid } from "../ui/global/bid.js";
import { accessToken } from "../api/auth/key.js";

export async function generateMostPopular(targetContainer) {
  const listing = await getListingWithMostBids();

  const container = document.createElement("section");
  container.classList.add(
    "flex",
    "flex-col",
    "lg:flex-row",
    "h-full",
    "gap-10",
    "z-10",
    "regular-padding",
    "bg-transparent"
  );

  const imgContainer = document.createElement("div");
  imgContainer.classList.add(
    "flex-[1]",
    "w-full",
    "overflow-hidden",
    "cursor-pointer"
  );
  imgContainer.onclick = function () {
    listingUrl(listing);
  };

  generateImageCarousel(listing, imgContainer);

  const contentContainer = document.createElement("div");
  contentContainer.classList.add(
    "flex-[1]",
    "w-full",
    "flex",
    "flex-col",
    "justify-between"
  );

  const textContainer = document.createElement("div");
  textContainer.classList.add("flex", "flex-col", "gap-3", "cursor-pointer");
  textContainer.onclick = function () {
    listingUrl(listing);
  };

  const title = document.createElement("h2");
  title.classList.add("truncate");
  title.innerText = listing.title;

  const countdown = document.createElement("p");
  countdown.innerText = calculateTimeRemaining(listing.endsAt);

  const description = document.createElement("p");
  description.classList.add("truncate");
  description.innerText = listing.description;

  const bidContainer = document.createElement("div");
  bidContainer.classList.add("flex", "flex-col", "gap-3");

  const bids = document.createElement("div");
  bids.classList.add("flex", "items-center", "justify-between");

  const numberOfBids = document.createElement("p");
  numberOfBids.innerText = listing._count.bids + " bids";

  const currentBid = document.createElement("p");

  const currentBidValue = document.createElement("span");
  currentBidValue.classList.add("font-semibold");

  currentBid.innerText = "Current bid: ";
  currentBidValue.innerText = findCurrentBid(listing).amount;

  currentBid.appendChild(currentBidValue);

  bids.append(numberOfBids, currentBid);

  const form = document.createElement("form");
  form.name = "placeBid";
  form.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "items-center",
    "gap-3",
    "w-full"
  );

  if (!accessToken) {
    form.classList.add("hidden");
  }

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("w-full", "flex", "justify-end");

  const label = document.createElement("label");
  label.classList.add("hidden");
  label.htmlFor = "bid-amount";

  const input = document.createElement("input");
  input.classList.add("error-field");
  input.name = "bid-amount";
  input.type = "number";
  input.placeholder = "Enter amount";

  inputContainer.append(label, input);

  const button = document.createElement("button");
  button.innerText = "Make bid";
  button.classList.add("btn", "min-w-32");
  button.type = "submit";

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const id = listing.id;
    const amount = parseFloat(input.value);

    placeBid(event, id, { amount });
  });

  form.append(inputContainer, button);

  const errorMessage = document.createElement("p");
  errorMessage.id = "error-message";
  errorMessage.classList.add("self-end", "h-3");

  bidContainer.append(bids, form, errorMessage);

  textContainer.append(title, countdown, description);
  contentContainer.append(textContainer, bidContainer);

  container.append(imgContainer, contentContainer);
  targetContainer.appendChild(container);
}
