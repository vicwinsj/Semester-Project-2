import { BASE_URL, API_AUCTION_LISTINGS } from "../constants.js";
import { doFetch } from "../../utilities/doFetch.js";
import { generateErrorMessage } from "../../utilities/errorMessage.js";

export async function createListing({
  title,
  description,
  endsAt,
  tags,
  media,
}) {
  const data = {
    title: title,
    description: description,
    endsAt: endsAt,
    tags: tags,
    media: media,
  };

  const endDateInput = document.getElementById("create-end-date");

  try {
    const response = await doFetch(API_AUCTION_LISTINGS, {
      method: "POST",
      body: data,
    });

    if (response) {
      window.location.href = `${BASE_URL}`;
    }
  } catch (error) {
    endDateInput.classList.add("border", "border-salmonRed", "bg-red-50");
    const errorDetails = JSON.parse(error.message.split(". ")[1] || "{}");
    generateErrorMessage(errorDetails);

    console.error("There was a problem with the fetch operation:", error);
  }
}
