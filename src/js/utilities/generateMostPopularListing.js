import { getListingWithMostBids } from "./getMostPopularListing.js";
import { findCurrentBid } from "./currentBid.js";
import { listingUrl } from "./listingUrl.js";
import { calculateTimeRemaining } from "./remainingTime.js";

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

  if (Array.isArray(listing.media) && listing.media.length > 0) {
    const carousel = document.createElement("div");
    carousel.classList.add("relative", "overflow-hidden", "w-full", "h-full");

    const track = document.createElement("div");
    track.classList.add(
      "flex",
      "transition-transform",
      "duration-500",
      "ease-in-out",
      "w-full",
      "h-full"
    );
    carousel.appendChild(track);

    listing.media.forEach((listingImg) => {
      const imgWrapper = document.createElement("div");
      imgWrapper.classList.add(
        "flex-shrink-0",
        "w-full",
        "h-full",
        "overflow-hidden"
      );
      const img = document.createElement("img");
      img.src =
        listingImg.url ||
        "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      img.alt = listingImg.alt || "Carousel image";
      img.classList.add("w-full", "h-full", "object-cover");

      imgWrapper.appendChild(img);
      track.appendChild(imgWrapper);
    });

    const prevButton = document.createElement("button");
    prevButton.classList.add(
      "absolute",
      "top-1/2",
      "-translate-y-1/2",
      "left-3",
      "z-10",
      "bg-primaryBlue",
      "bg-opacity-50",
      "text-white",
      "rounded-full",
      "w-12",
      "h-12",
      "flex",
      "items-center",
      "justify-center",
      "hover:bg-opacity-100",
      "focus:outline-none"
    );
    prevButton.innerHTML = "&lt;";

    const nextButton = document.createElement("button");
    nextButton.classList.add(
      "absolute",
      "top-1/2",
      "-translate-y-1/2",
      "right-3",
      "z-10",
      "bg-primaryBlue",
      "bg-opacity-50",
      "text-white",
      "rounded-full",
      "w-12",
      "h-12",
      "flex",
      "items-center",
      "justify-center",
      "hover:bg-opacity-100",
      "focus:outline-none"
    );
    nextButton.innerHTML = "&gt;";

    let currentIndex = 0;
    const updateCarousel = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    prevButton.addEventListener("click", (event) => {
      event.stopPropagation();
      currentIndex =
        (currentIndex - 1 + listing.media.length) % listing.media.length;
      updateCarousel();
    });

    nextButton.addEventListener("click", (event) => {
      event.stopPropagation();
      currentIndex = (currentIndex + 1) % listing.media.length;
      updateCarousel();
    });

    carousel.append(prevButton, nextButton);
    imgContainer.appendChild(carousel);
  } else {
    const img = document.createElement("img");
    img.src =
      listing.media.url ||
      "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    img.alt = listing.media.alt || listing.media.url || "Example image";
    img.classList.add("w-full", "h-full", "object-cover");

    imgContainer.appendChild(img);
  }

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

  currentBid.innerHTML = "Current bid: " + findCurrentBid(listing);

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
