import { API_SOCIAL_POSTS } from "../constants.js";
import { doFetch } from "../../utilities/doFetch.js";

export async function deletePost(id) {
  const confirmed = confirm("Are you sure you want to delete?");
  if (!confirmed) return;
  try {
    const response = await doFetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "DELETE",
    });
    if (response === null) {
      alert("Successfully deleted!");
      window.location.href = "/index.html";
    } else {
      console.warn("Unexpected response:", response);
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
