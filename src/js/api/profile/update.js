import { API_AUCTION_PROFILES } from "../constants.js";
import { doFetch } from "../../utilities/doFetch.js";

export async function updateProfile(username, { avatar, banner, bio }) {
  const body = {
    avatar: avatar,
    banner: banner,
    bio: bio,
  };

  console.log("Payload being sent to API:", body);

  try {
    const response = await doFetch(`${API_AUCTION_PROFILES}/${username}`, {
      method: "PUT",
      body: body,
    });
    if (response) {
      console.log(response);
      alert("Profile updated successfully!");
      location.reload();
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
