export async function setKey(response) {
  const data = await response.json();
  if (data.data.accessToken) {
    localStorage.setItem("accessToken", data.data.accessToken);
  }
}

export const accessToken = localStorage.getItem("accessToken");
