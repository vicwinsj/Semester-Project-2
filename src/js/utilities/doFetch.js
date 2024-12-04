import { headers } from "../api/headers.js";

export async function doFetch(url, { method = "GET", body, ...options } = {}) {
  const requestOptions = {
    method,
    headers: headers(method),
    ...options,
  };

  if (method !== "GET" && body) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, requestOptions);

    if (
      response.status === 204 ||
      response.headers.get("Content-Length") === "0"
    ) {
      return null;
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}. ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetching error:", error.message);
    throw error;
  }
}
