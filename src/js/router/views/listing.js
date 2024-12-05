import { getListing } from "../../utilities/fetchListing.js";
import { generateListingContent } from "../../utilities/generateListing.js";
import { getId } from "../../utilities/getId.js";
import {
  createLoader,
  showLoader,
  hideLoader,
} from "../../utilities/loader.js";

async function renderListing() {
  const content = document.getElementById("listing-content");

  const container = document.querySelector("main");
  const loader = createLoader();
  container.append(loader);

  showLoader(loader);

  const id = getId();
  const listing = await getListing({ id: id });
  document.title = `${listing.title} | HammerPrice`;
  generateListingContent(listing);

  hideLoader(loader);

  content.classList.remove("hidden");
  content.classList.add("flex");

  // toggleEditButton(editButton);
}

renderListing();
