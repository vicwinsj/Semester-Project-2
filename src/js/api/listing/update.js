import { API_SOCIAL_POSTS } from "../constants.js";
import { doFetch } from "../../utilities/doFetch.js";

export async function updatePost(id, { title, body, tags, media }) {
  const data = {
    title: title,
    body: body,
    tags: tags,
    media: media,
  };

  try {
    const response = await doFetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "PUT",
      body: data,
    });
    if (response) {
      alert("Post updated successfully!");
      location.reload();
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
