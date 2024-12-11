import {
  createLoader,
  showLoader,
  hideLoader,
} from "../../utilities/loader.js";
import { getListings } from "../../utilities/fetchListings.js";
import { generateSearchResults } from "../../utilities/generateSearchResults.js";

export async function search() {
  const searchForm = document.querySelector("form[name='search']");
  const searchInput = document.querySelector("input[name='search']");
  const searchContainer = document.querySelector("main");

  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const searchKeyword = searchInput.value.trim();

    if (!searchKeyword) {
      return;
    }

    const baseUrl = window.location.origin;
    const newUrl = `${baseUrl}/?q=${encodeURIComponent(searchKeyword)}`;
    window.history.replaceState({}, document.title, newUrl);

    searchContainer.innerHTML = "";

    const searchResults = document.createElement("div");
    searchContainer.append(searchResults);

    const searchHeading = document.createElement("h1");
    searchHeading.innerHTML = "Search results for: ";
    searchHeading.classList.add("regular-padding");

    const searchHeadingKeyword = document.createElement("span");
    searchHeadingKeyword.classList.add(
      "font-tinos",
      "italic",
      "text-primaryBlue"
    );
    searchHeadingKeyword.innerHTML = `${searchKeyword}`;
    searchHeading.appendChild(searchHeadingKeyword);

    const resultsMessage = document.createElement("p");
    searchContainer.append(resultsMessage);

    const loader = createLoader();
    searchResults.append(loader);

    try {
      const results = await getListings({ search: searchKeyword, limit: 12 });

      loader.remove();
      searchContainer.prepend(searchHeading);
      if (results.length === 0) {
        resultsMessage.innerHTML = `Sorry, no results found for "${searchKeyword}". Try another search.`;
        return;
      } else if (results.length === 1) {
        resultsMessage.innerHTML =
          results.length + ` result for "${searchKeyword}".`;
        generateSearchResults(results, searchResults);
      } else if (results.length > 1) {
        resultsMessage.innerHTML =
          results.length + ` results for "${searchKeyword}".`;
        generateSearchResults(results, searchResults);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      searchResults.innerHTML =
        "<p>Error fetching results. Please try again later.</p>";
    }
  });
}
