import { getListing } from "../../utilities/fetchListing.js";
import { generateListingContent } from "../../utilities/generateListing.js";
import { getId } from "../../utilities/getId.js";
import {
  createLoader,
  showLoader,
  hideLoader,
} from "../../utilities/loader.js";
import { placeBid } from "../../ui/global/bid.js";
import { getUserFromToken } from "../../utilities/decodeToken.js";

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

  const form = document.forms.placeBid;
  const loggedInUser = getUserFromToken();

  if (listing.seller.name === loggedInUser.name) {
    form.classList.add("hidden");
  }

  form.addEventListener("submit", (event) => {
    const id = listing.id;
    const amount = parseFloat(
      document.querySelector("input[name='listing-bid']").value
    );
    placeBid(event, id, { amount });
  });

  hideLoader(loader);

  content.classList.remove("hidden");
  content.classList.add("flex");

  // toggleEditButton(editButton);
}

renderListing();
