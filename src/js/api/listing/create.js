import { API_AUCTION_LISTINGS } from "../constants.js";
import { doFetch } from "../../utilities/doFetch.js";

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

  try {
    const response = await doFetch(API_AUCTION_LISTINGS, {
      method: "POST",
      body: data,
    });

    if (response) {
      window.location.href = "/";
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
