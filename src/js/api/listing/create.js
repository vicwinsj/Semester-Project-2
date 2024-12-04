import { API_SOCIAL_POSTS } from "../constants.js";
import { doFetch } from "../../utilities/doFetch.js";

export async function createPost({ title, body, tags, media }) {
  console.log("inside createpost");
  const data = {
    title: title,
    body: body,
    tags: tags,
    media: media,
  };
  console.log(data);

  try {
    const response = await doFetch(API_SOCIAL_POSTS, {
      method: "POST",
      body: data,
    });

    if (response) {
      window.location.href = "/index.html";
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
