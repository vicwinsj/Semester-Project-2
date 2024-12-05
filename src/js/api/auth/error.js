export function authError(data) {
  const errorElements = document.querySelectorAll(".auth-error");

  const errorMessage =
    data.errors && Array.isArray(data.errors)
      ? data.errors.map((err) => err.message).join("<br>")
      : data.error && data.error.message
      ? data.error.message
      : "An unknown error occurred.";

  errorElements.forEach((element) => {
    element.innerHTML = errorMessage;
  });

  console.error("Auth error:", errorMessage); // Log for debugging
}
