import { API_AUCTION_LISTINGS } from "../api/constants.js";
import { doFetch } from "./doFetch.js";
import { getId } from "./getId.js";

export async function getPost() {
  try {
    const id = getId();
    const response = await doFetch(`${API_AUCTION_LISTINGS}/${id}`, {
      method: "GET",
    });
    const post = response.data;
    return post;
  } catch (error) {
    console.error("Fetching error:", error.message);
  }
}

export const post = await getPost();
