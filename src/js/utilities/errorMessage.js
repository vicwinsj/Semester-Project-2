export function generateErrorMessage(data) {
  const errorMessage = document.getElementById("error-message");

  const messageContent =
    data.errors && Array.isArray(data.errors)
      ? data.errors.map((err) => err.message).join("<br>")
      : data.error && data.error.message
      ? data.error.message
      : "An unknown error occurred.";

  errorMessage.innerText = messageContent + "!";

  console.error("Error:", errorMessage);
}
