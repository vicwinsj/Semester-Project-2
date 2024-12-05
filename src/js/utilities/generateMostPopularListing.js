import { getListingWithMostBids } from "./getMostPopularListing.js";
import { findCurrentBid } from "./currentBid.js";
import { listingUrl } from "./listingUrl.js";
import { calculateTimeRemaining } from "./remainingTime.js";
import { generateImageCarousel } from "./imageCarousel.js";

export async function generateMostPopular(targetContainer) {
  const listing = await getListingWithMostBids();

  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "relative",
    "w-screen",
    "h-full",
    "bg-skyBlue",
    "gap-10",
    "p-3",
    "md:p-20",
    "-mx-3",
    "md:-mx-20",
    "cursor-pointer"
  );

  container.onclick = function () {
    listingUrl(listing);
  };

  const background = document.createElement("div");
  background.classList.add("absolute", "inset-0", "bg-skyBlue", "-z-10");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("flex-[1]", "overflow-hidden");

  generateImageCarousel(listing, imgContainer);

  const contentContainer = document.createElement("div");
  contentContainer.classList.add(
    "flex-[1]",
    "flex",
    "flex-col",
    "justify-between"
  );

  const textContainer = document.createElement("div");
  textContainer.classList.add("flex", "flex-col", "gap-3");

  const title = document.createElement("h2");

  title.innerText = listing.title;
  title.onclick = function () {
    listingUrl(listing);
  };

  const countdown = document.createElement("p");
  countdown.classList.add("font-bold");
  countdown.innerHTML = calculateTimeRemaining(listing.endsAt);

  const description = document.createElement("p");
  description.innerHTML = listing.description;

  const bidContainer = document.createElement("div");
  bidContainer.classList.add("flex", "flex-col", "gap-3");

  const bids = document.createElement("p");
  bids.classList.add("flex", "items-center", "justify-between");

  const numberOfBids = document.createElement("p");
  numberOfBids.innerHTML = listing._count.bids + " bids";

  const currentBid = document.createElement("p");

  currentBid.innerHTML = "Current bid: " + findCurrentBid(listing).amount;

  bids.append(numberOfBids, currentBid);

  const form = document.createElement("form");
  form.name = "bid";
  form.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "items-center",
    "gap-3",
    "w-full"
  );

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("w-full");

  const label = document.createElement("label");
  label.classList.add("hidden");

  const input = document.createElement("input");
  input.classList.add("w-full");

  inputContainer.append(label, input);
  inputContainer.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  const button = document.createElement("button");
  button.innerHTML = "Make bid";
  button.classList.add("btn", "min-w-32");
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
  });

  form.append(inputContainer, button);

  bidContainer.append(bids, form);

  textContainer.append(title, countdown, description);
  contentContainer.append(textContainer, bidContainer);

  container.append(background, imgContainer, contentContainer);
  targetContainer.appendChild(container);
}
