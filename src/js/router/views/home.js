import { getListings } from "../../utilities/fetchListings.js";
import { generateListingCarousels } from "../../utilities/generateCarousels.js";
import { generateMostPopular } from "../../utilities/generateMostPopularListing.js";
import { createLoader } from "../../utilities/loader.js";

export default async function renderHome() {
  const main = document.querySelector("main");
  const loader = createLoader();
  const content = document.getElementById("home-content");
  const hottestListing = document.getElementById("hottest-listing");
  const latestListingsCarousel = document.getElementById("latest-listings");
  const expiringListingsCarousel = document.getElementById("expiring-listings");

  main.appendChild(loader);

  await generateMostPopular(hottestListing);

  const latestListings = await getListings({ limit: 12 });
  await generateListingCarousels(latestListings, latestListingsCarousel);

  const expiringListings = await getListings({
    sort: "endsAt",
    sortOrder: "asc",
    limit: 12,
  });
  await generateListingCarousels(expiringListings, expiringListingsCarousel);

  content.classList.remove("hidden");
  content.classList.add("flex");

  loader.remove();
}
