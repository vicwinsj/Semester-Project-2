import { doFetch } from "./doFetch.js";
import { API_AUCTION_PROFILES } from "../api/constants.js";
import { accessToken } from "../api/auth/key.js";

export async function fetchUserProfile(username, { _listings, _wins } = {}) {
  const url = new URL(`${API_AUCTION_PROFILES}/${username}`);
  if (_listings) url.searchParams.append("_listings", "true");
  if (_wins) url.searchParams.append("_wins", "true");

  try {
    const profileData = await doFetch(url);
    return profileData.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
}
