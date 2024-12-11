import { getListings } from "../../utilities/fetchListings.js";
import { generateListingCarousels } from "../../utilities/generateCarousels.js";
import { generateMostPopular } from "../../utilities/generateMostPopularListing.js";
// import { getListings } from "../../utilities/fetchListings.js";
// import { displayListings } from "../../utilities/displayListings.js";
import {
  createLoader,
  showLoader,
  hideLoader,
} from "../../utilities/loader.js";
import { accessToken } from "../../api/auth/key.js";

export default async function renderHome() {
  const main = document.querySelector("main");
  const loader = createLoader();
  const content = document.getElementById("home-content");
  const hottestListing = document.getElementById("hottest-listing");
  const latestListingsCarousel = document.getElementById("latest-listings");
  const expiringListingsCarousel = document.getElementById("expiring-listings");

  main.appendChild(loader);

  showLoader(loader);

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

  hideLoader(loader);
}

// try {
//   const listings = await getListings();
//   if (listings && listings.length > 0) {
//     displayListings(listings);
//   } else {
//     socialPosts.innerHTML = "<p>No posts available.</p>";
//     console.error("No posts available or an error occurred.");
//   }
// } catch (error) {
//   console.error("Error rendering posts:", error);
//   socialPosts.innerHTML = `<p>Error loading posts: ${error.message}</p>`;
// }
