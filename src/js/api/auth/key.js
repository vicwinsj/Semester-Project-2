export async function getKey(data) {
  if (data.data.accessToken) {
    localStorage.setItem("accessToken", data.data.accessToken);
  }
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
}

export const accessToken = localStorage.getItem("accessToken");
